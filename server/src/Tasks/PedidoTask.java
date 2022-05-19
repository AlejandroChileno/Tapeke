package Tasks;

import java.sql.SQLException;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import Component.enviroment;
import Servisofts.SPGConect;
import model.pedido.exception.StateException;

public class PedidoTask extends Thread {

    private boolean isRun;

    public PedidoTask() {
        this.isRun = true;
        this.start();

    }

    @Override
    public void run() {
        while (isRun) {
            try {
                Thread.sleep(1000 * 30);
                sync_pedidos_listos();
                sync_pedidos_recordatorio();
                sync_pedidos_no_recogidos();
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }

    private void sync_pedidos_listos() {
        try {
            JSONArray pedidos_listos = SPGConect.ejecutarConsultaArray("select sync_pedidos_listos() as json");
            pedidos_listos.iterator().forEachRemaining(obj -> {
                JSONObject pedido_obj = (JSONObject) obj;
                try {
                    model.pedido.Pedido pedido = new model.pedido.Pedido(pedido_obj.getString("key"));
                    pedido.sync_listos(null);
                } catch (JSONException | StateException e) {
                    e.printStackTrace();
                }
            });
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    private void sync_pedidos_recordatorio() {
        try {
            JSONObject enviroments = enviroment.getAll(new JSONObject(), null);
            int expiration_time = Integer
                    .parseInt(enviroments.getJSONObject("tiempo_de_recordatorio_antes_hora_inicio").getString("value"));
            JSONArray pedidos_listos = SPGConect
                    .ejecutarConsultaArray("select sync_pedidos_recordatorio(" + expiration_time + ") as json");
            pedidos_listos.iterator().forEachRemaining(obj -> {
                JSONObject pedido_obj = (JSONObject) obj;
                try {
                    model.pedido.Pedido pedido = new model.pedido.Pedido(pedido_obj.getString("key"));
                    pedido.sync_recordatorio(null);
                } catch (JSONException | StateException e) {
                    e.printStackTrace();
                }
            });
            // pedido.get_payment_order(obj);
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    private void sync_pedidos_no_recogidos() {
        try {
            JSONObject enviroments = enviroment.getAll(new JSONObject(), null);
            int expiration_time = Integer
                    .parseInt(enviroments.getJSONObject("tiempo_para_cancelar_no_rocogido").getString("value"));
            JSONArray pedidos_listos = SPGConect
                    .ejecutarConsultaArray("select sync_pedidos_no_recogidos(" + expiration_time + ") as json");
            pedidos_listos.iterator().forEachRemaining(obj -> {
                JSONObject pedido_obj = (JSONObject) obj;
                try {
                    model.pedido.Pedido pedido = new model.pedido.Pedido(pedido_obj.getString("key"));
                    pedido.sync_no_recogido(null);
                } catch (JSONException | StateException e) {
                    e.printStackTrace();
                }
            });
        } catch (SQLException e) {
            e.printStackTrace();
        }

    }
}
