package model.pedido;

import java.sql.SQLException;

import javax.naming.spi.StateFactory;

import org.json.JSONObject;

import Servisofts.SPGConect;
import Servisofts.SUtil;
import model.pedido.states.pendiente_pago;
import model.pedido.StateFactory.states;
import model.pedido.exception.StateException;

public class Pedido implements IPedidoActions {

    private String key;
    private State state;
    private JSONObject data;
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
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private JSONObject getFromDB() throws StateException {
        try {
            return SPGConect.ejecutarConsultaObject("select pedido_state_get_detalle('" + this.key + "') as json");
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
        obj.put("state", this.state.toJson());
        return obj;
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
}