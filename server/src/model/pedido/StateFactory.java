package model.pedido;

import model.pedido.states.no_registrado;
import model.pedido.states.pago_en_proceso;
import model.pedido.states.pendiente_pago;

public class StateFactory {

    public static enum states {
        no_registrado,
        pendiente_pago,
        pago_en_proceso
    }

    public static State getState(Pedido pedido, String state) {
        if (state.isEmpty()) {
            return new no_registrado(pedido);
        }
        switch (states.valueOf(state)) {
            case no_registrado:
                return new no_registrado(pedido);
            case pendiente_pago:
                return new pendiente_pago(pedido);
            case pago_en_proceso:
                return new pago_en_proceso(pedido);

        }
        return new no_registrado(pedido);
    }
}
