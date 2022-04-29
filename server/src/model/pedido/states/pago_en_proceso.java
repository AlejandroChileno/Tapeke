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

public class pago_en_proceso extends State {

    public pago_en_proceso(Pedido pedido) {
        super(pedido, "pago_en_proceso", "pago en proceso");
    }

    @Override
    public void registrar(JSONObject obj) throws StateException {
        noPermited();
    }

    @Override
    public void select_pay_method(JSONObject obj) throws StateException {
        noPermited();

    }

    @Override
    public void pagar(JSONObject obj) throws StateException {
        noPermited();
    }

}
