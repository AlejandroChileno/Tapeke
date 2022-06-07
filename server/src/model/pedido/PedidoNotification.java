package model.pedido;

import org.json.JSONObject;

import Component.base_notification;
import firebase.Firebase;

public class PedidoNotification {
    Pedido pedido;

    public PedidoNotification(Pedido pedido) {
        this.pedido = pedido;
    }

    public void notifyRecordatorioAntesHoraInicio() {
        JSONObject bn = new JSONObject();
        if (this.pedido.data.getDouble("delivery") > 0) {
            return;
        } else {
            bn = base_notification.get("recordatorio_recoger_30");
        }
        Firebase.sendUserAsync(new firebase.Notification(bn.getString("title"), bn.getString("body")),
                pedido.data.getString("key_usuario"));
    }

    public void notifyByTransition() {
        try {
            String key_usuario = "";

            if (pedido.data.has("key_usuario")) {
                key_usuario = pedido.data.getString("key_usuario");
            }
            JSONObject bn = new JSONObject();
            switch (pedido.state.code) {
                case "pagado":
                    if (this.pedido.data.getDouble("delivery") > 0) {
                        bn = base_notification.get("pago_confirmado_delivery");
                    } else {
                        bn = base_notification.get("pago_confirmado_recoger");
                    }
                    Firebase.sendUserAsync(new firebase.Notification(bn.getString("title"), bn.getString("body")),
                            key_usuario);
                    break;
                case "timeout_pago":
                    bn = base_notification.get("timeout_pago");
                    Firebase.sendUserAsync(new firebase.Notification(bn.getString("title"), bn.getString("body")),
                            key_usuario);
                    break;
                case "listo":
                    if (this.pedido.data.getDouble("delivery") > 0) {
                        bn = base_notification.get("listo_delivery");
                    } else {
                        bn = base_notification.get("listo_recoger");
                    }
                    Firebase.sendUserAsync(new firebase.Notification(bn.getString("title"), bn.getString("body")),
                            key_usuario);
                    break;
                case "entregado":
                    bn = base_notification.get("entregado");
                    Firebase.sendUserAsync(new firebase.Notification(bn.getString("title"), bn.getString("body")),
                            key_usuario);
                    break;
            }
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
