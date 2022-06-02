package model.pedido;

import firebase.Firebase;

public class PedidoNotification {
    Pedido pedido;

    public PedidoNotification(Pedido pedido) {
        this.pedido = pedido;
    }

    public void notifyByTransition() {
        try {
            String key_usuario = "";

            if (pedido.data.has("key_usuario")) {
                key_usuario = pedido.data.getString("key_usuario");
            }
            switch (pedido.state.code) {
                case "pagado":
                    Firebase.sendUserAsync(new firebase.Notification("Pago confirmado", "asdsa"), key_usuario);
                    System.out.println("NOTIFICAR pago confirmado");
                    break;
                case "timeout_pago":
                    // Qr vencido
                    System.out.println("NOTIFICAR pago confirmado");
                    break;
                case "listo":
                    System.out.println("NOTIFICAR listo");
                    break;
                case "entregado":
                    System.out.println("NOTIFICAR listo");
                    break;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
