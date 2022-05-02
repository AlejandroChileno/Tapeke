package model.pedido;

import model.pedido.states.*;

public class StateFactory {

    public static enum states {
        no_registrado,
        pendiente_pago,
        pago_en_proceso,
        confirmado
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
            case confirmado:
                return new confirmado(pedido);

        }
        return new no_registrado(pedido);
    }
}
