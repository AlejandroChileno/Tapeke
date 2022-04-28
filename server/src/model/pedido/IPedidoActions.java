package model.pedido;

import org.json.JSONObject;

import model.pedido.exception.StateException;

public interface IPedidoActions {
    
    public void registrar(JSONObject obj) throws StateException;
    public void select_pay_method(JSONObject obj) throws StateException;
    public void pagar(JSONObject obj) throws StateException;

    public JSONObject toJson();
}
