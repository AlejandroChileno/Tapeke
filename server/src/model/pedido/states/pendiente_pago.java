package model.pedido.states;

import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.json.JSONArray;
import org.json.JSONObject;

import Component.Billetera;
import Component.enviroment;
import Servisofts.SConsole;
import Servisofts.SPGConect;
import Servisofts.SUtil;
import SocketCliente.SocketCliente;
import model.pedido.Pedido;
import model.pedido.State;
import model.pedido.StateFactory.states;
import model.pedido.exception.StateException;

public class pendiente_pago extends State {

    public pendiente_pago(Pedido pedido) {
        super(pedido, "pendiente_pago", "pendiente de pago");
    }

    @Override
    public void registrar(JSONObject obj) throws StateException {
        noPermited();
    }

    public void create_pay_order(JSONObject obj) throws StateException {
        if (!obj.has("client")) {
            throw new StateException("client::Object not found");
        }
        JSONObject client = obj.getJSONObject("client");
        if (client.isNull("ci")) {
            throw new StateException("client/ci::String not found");
        }
        if (client.isNull("name")) {
            throw new StateException("client/name::String not found");
        }
        if (client.isNull("last_name")) {
            throw new StateException("client/last_name::String not found");
        }
        if (client.isNull("phone")) {
            throw new StateException("client/phone::String not found");
        }
        if (client.isNull("email")) {
            throw new StateException("client/email::String not found");
        }

        JSONArray items = new JSONArray();
        JSONObject itm1 = new JSONObject();
        itm1.put("id", 1);
        itm1.put("description", "Tapeke - " + this.pedido.getData().getJSONObject("restaurante").getString("nombre"));
        itm1.put("unitary_price", this.pedido.getData().getDouble("precio"));
        itm1.put("quantity", this.pedido.getData().getInt("cantidad"));
        items.put(itm1);
        double delivery = this.pedido.getData().getDouble("delivery");
        if (delivery > 0) {
            JSONObject itm2 = new JSONObject();
            itm2.put("id", 1);
            itm2.put("description", "Delivery");
            itm2.put("unitary_price", delivery);
            itm2.put("quantity", 1);
            items.put(itm2);
        }
        JSONObject petition = new JSONObject();
        petition.put("component", "payment_order");
        petition.put("type", "registro");

        JSONObject enviroments = enviroment.getAll(new JSONObject(), null);
        int value = Integer.parseInt(enviroments.getJSONObject("tiempo_expiracion_pago_pedido").getString("value"));
        Calendar cal = Calendar.getInstance(); // creates calendar
        cal.setTime(new Date()); // sets calendar time/date
        cal.add(Calendar.SECOND, value); // adds one hour
        cal.getTime(); // returns new date object plus one hour
        String expiration_time = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSSSS").format(cal.getTime());
        petition.put("data", new JSONObject().put("client", client).put("items", items)
                .put("glosa", "Pago de prueba tapeke").put("expiration_date", expiration_time));
        JSONObject pay_order = SocketCliente.sendSinc("multipagos", petition);
        if (pay_order.getString("estado").equals("error")) {
            throw new StateException(pay_order.getString("error"));
        }
        JSONObject itemToEdit = new JSONObject();
        itemToEdit.put("key", this.pedido.getKey());
        itemToEdit.put("key_payment_order", pay_order.getJSONObject("data").getString("key"));
        try {
            SPGConect.editObject("pedido", itemToEdit);
        } catch (SQLException e) {
            throw new StateException("Error al editar el pedido");
        }
        this.pedido.getData().put("key_payment_order", itemToEdit.getString("key_payment_order"));
    }

    @Override
    public void select_pay_method(JSONObject obj) throws StateException {

        if (!obj.has("pay_method")) {
            throw new StateException("pay_method::String not found");
        }
        String pay_method = obj.getString("pay_method");
        if (pay_method.isEmpty()) {
            throw new StateException("pay_method::String is empty");
        }
        if (pay_method.equals("Billetera")) {
            String key_usuario = this.pedido.getData().getString("key_usuario");
            try {
                double monto_actual = Double.parseDouble(SPGConect.ejecutarConsultaString(
                        "select sum(billetera.monto) from billetera where billetera.key_cliente = '" + key_usuario
                                + "' and billetera.estado = 1"));
                double total = this.pedido.getData().getDouble("precio") + this.pedido.getData().getDouble("delivery");
                if (total > monto_actual) {
                    throw new StateException("No tiene fondos suficientes en su billetera");
                }
                JSONObject billeteraMovimiento = new JSONObject();
                billeteraMovimiento.put("key", SUtil.uuid());
                billeteraMovimiento.put("estado", 1);
                billeteraMovimiento.put("fecha_on", SUtil.now());
                billeteraMovimiento.put("key_usuario", key_usuario);
                billeteraMovimiento.put("key_cliente", key_usuario);
                billeteraMovimiento.put("monto", total * -1);
                billeteraMovimiento.put("tipo_pago", "Billetera");
                billeteraMovimiento.put("key_pedido", this.pedido.getKey());
                SPGConect.insertObject("billetera", billeteraMovimiento);
                // obj.put("data", billeteraMovimiento);
                // obj.put("estado", "exito");
                this.pedido.changeState(states.pagado, "select_pay_method");
                return;
            } catch (SQLException e) {
                throw new StateException(e.getMessage());
            }
        }
        if (this.pedido.getData().isNull("key_payment_order")) {
            this.create_pay_order(obj);
        }

        JSONObject petition = new JSONObject();
        petition.put("component", "payment_order");
        petition.put("type", "pay_method");
        petition.put("pay_method", pay_method);
        petition.put("key_payment_order", this.pedido.getData().getString("key_payment_order"));
        JSONObject response = SocketCliente.sendSinc("multipagos", petition);
        if (response.has("error")) {
            throw new StateException(response.getString("error"));
        }
        JSONObject itemToEdit = new JSONObject();
        itemToEdit.put("key", this.pedido.getKey());
        itemToEdit.put("payment_type", pay_method);
        try {
            SPGConect.editObject("pedido", itemToEdit);
        } catch (SQLException e) {
            throw new StateException("Error al editar el pedido");
        }
        this.pedido.getData().put("payment_type", itemToEdit.getString("payment_type"));
        this.pedido.changeState(states.pago_en_proceso, "select_pay_method");
        // obj.put("data", response.getJSONObject("data"));
        // obj.put("estado", "exito");

    }

    @Override
    public void pagar(JSONObject obj) throws StateException {
        noPermited();
    }

    @Override
    public void get_payment_order(JSONObject obj) throws StateException {
        noPermited();

    }

}
