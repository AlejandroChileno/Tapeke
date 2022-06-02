package model.pedido;

import java.sql.SQLException;

import org.json.JSONArray;
import org.json.JSONObject;

import Server.SSSAbstract.SSServerAbstract;
import Servisofts.SPGConect;
import Servisofts.SUtil;
import firebase.Firebase;
import model.pedido.StateFactory.states;
import model.pedido.exception.StateException;

public class Pedido implements IPedidoActions {

    String key;
    State state;
    JSONObject data;
    // private boolean delivery;

    public Pedido(String key) throws StateException {
        this.key = key;
        this.updateFromDb();
    }

    public void updateFromDb() throws StateException {
        this.data = getFromDB();
        if (!this.data.has("state")) {
            this.state = model.pedido.StateFactory.getState(this, "no_registrado");
        } else {
            this.state = model.pedido.StateFactory.getState(this, this.data.getString("state"));
        }
    }

    public void changeState(states state, String action) throws StateException {
        String old_state = this.state.code + "";
        this.state = model.pedido.StateFactory.getState(this, state.name());
        this.data.put("state", this.state.code);
        JSONObject movimiento_pedido = new JSONObject();
        movimiento_pedido.put("key", SUtil.uuid());
        movimiento_pedido.put("key_pedido", this.key);
        movimiento_pedido.put("key_usuario", "TODO");
        movimiento_pedido.put("fecha_on", SUtil.now());
        movimiento_pedido.put("estado", 1);
        movimiento_pedido.put("old_state", old_state);
        movimiento_pedido.put("state", this.state.code);
        movimiento_pedido.put("action", action);
        try {
            SPGConect.insertObject("pedido_movimiento", movimiento_pedido);
            JSONObject pedido = new JSONObject();
            pedido.put("key", this.key);
            pedido.put("state", this.state.code);
            SPGConect.editObject("pedido", pedido);
            new PedidoNotification(this).notifyByTransition();
            this.notifyOnChange();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private JSONObject getFromDB() throws StateException {
        try {
            JSONObject pedido = SPGConect
                    .ejecutarConsultaObject("select pedido_state_get_detalle('" + this.key + "') as json");
            return pedido;
        } catch (SQLException e) {
            throw new StateException("Error al optener el pedido");
        }
    }

    @Override
    public JSONObject toJson() {
        JSONObject obj = new JSONObject();
        if (this.data != null) {
            obj = this.data;
        }
        obj.put("key", this.key);
        obj.put("state", this.state.code);
        return obj;
    }

    public void notifyOnChangeUser() {
        if (!this.data.has("key")) {
            return;
        }
        JSONObject obj = new JSONObject();
        obj.put("component", "pedido");
        obj.put("type", "editar");
        obj.put("data", this.data);
        obj.put("estado", "exito");
        SSServerAbstract.sendUsers(obj.toString(), new JSONArray().put(this.data.getString("key_usuario")));
    }

    public void notifyOnChange() {
        if (!this.data.has("key")) {
            return;
        }
        JSONObject obj = new JSONObject();
        obj.put("component", "pedido");
        obj.put("type", "editar");
        obj.put("data", this.data);
        obj.put("estado", "exito");
        SSServerAbstract.sendAllServer(obj.toString());
    }

    public String getKey() {
        return key;
    }

    public JSONObject getData() {
        return data;
    }

    @Override
    public void pagar(JSONObject obj) throws StateException {
        this.state.pagar(obj);
    }

    @Override
    public void registrar(JSONObject obj) throws StateException {
        this.state.registrar(obj);
    }

    @Override
    public void select_pay_method(JSONObject obj) throws StateException {
        this.state.select_pay_method(obj);
    }

    @Override
    public void get_payment_order(JSONObject obj) throws StateException {
        this.state.get_payment_order(obj);

    }

    @Override
    public void entregar(JSONObject obj) throws StateException {
        this.state.entregar(obj);

    }

    @Override
    public void entregar_a_conductor(JSONObject obj) throws StateException {
        this.state.entregar_a_conductor(obj);
    }

    @Override
    public void sync_listos(JSONObject obj) throws StateException {
        this.state.sync_listos(obj);
    }

    @Override
    public void sync_no_recogido(JSONObject obj) throws StateException {
        this.state.sync_no_recogido(obj);
    }

    @Override
    public void sync_recordatorio(JSONObject obj) throws StateException {
        this.state.sync_recordatorio(obj);
    }

}
