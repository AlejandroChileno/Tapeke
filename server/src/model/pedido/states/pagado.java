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

public class pagado extends State {

    public pagado(Pedido pedido) {
        super(pedido, "pagado", "pagado");
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

    @Override
    public void get_payment_order(JSONObject obj) throws StateException {
        noPermited();
    }
}
