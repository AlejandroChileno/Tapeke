package model.pedido.states;

import java.sql.SQLException;

import org.json.JSONArray;
import org.json.JSONObject;

import Servisofts.SConsole;
import Servisofts.SPGConect;
import SocketCliente.SocketCliente;
import model.pedido.Pedido;
import model.pedido.State;
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
        petition.put("data", new JSONObject().put("client", client).put("items", items));
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
        obj.put("data", response.getJSONObject("data"));
        obj.put("estado", "exito");

    }

    @Override
    public void pagar(JSONObject obj) throws StateException {
        noPermited();
    }

}
