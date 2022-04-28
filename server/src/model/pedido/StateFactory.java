package model.pedido;

import model.pedido.states.no_registrado;
import model.pedido.states.pendiente_pago;

public class StateFactory {

    public static enum states {
        no_registrado,
        pendiente_pago,
    }

    public static State getState(Pedido pedido, String state) {
        if (state.isEmpty()) {
            return new no_registrado(pedido);
        }
        switch (states.valueOf(state)) {
            case pendiente_pago:
                return new pendiente_pago(pedido);
            case no_registrado:
                return new no_registrado(pedido);
        }
        return new no_registrado(pedido);
    }
}
