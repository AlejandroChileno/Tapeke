package model.pedido.states;

import org.json.JSONObject;

import model.pedido.Pedido;
import model.pedido.State;
import model.pedido.exception.StateException;

public class timeout_pago extends State {

    public timeout_pago(Pedido pedido) {
        super(pedido, "timeout_pago", "Pedido timeout_pago");
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
