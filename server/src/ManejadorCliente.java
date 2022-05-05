import java.sql.SQLException;

import org.json.JSONArray;
import org.json.JSONObject;
import Servisofts.SConsole;
import Servisofts.SPGConect;
import SocketCliente.SocketCliente;
import model.pedido.StateFactory.states;
import model.pedido.exception.StateException;

public class ManejadorCliente {
    public static void onMessage(JSONObject data, JSONObject config) {
        if (data.isNull("component")) {
            data.put("error", "No existe el componente");
            return;
        }
        if (data.has("estado")) {
            if (data.getString("estado").equals("error")) {
                if (data.has("error")) {
                    SConsole.log("ERROR: " + data.get("error").toString());
                } else {
                    SConsole.log("Error not found");
                }
            }
        }

        componentes(data, config);
    }

    public static void componentes(JSONObject data, JSONObject config) {
        switch (data.getString("component")) {
            case "usuario":
                usuario(data, config);
                break;
            case "payment_order":
                payment_order(data, config);
                break;
        }
    }

    public static void payment_order(JSONObject data, JSONObject config) {
        switch (data.getString("type")) {
            case "on_change_state": {
                if (data.getString("estado").equals("cargando")) {
                    data.put("estado", "error");
                    try {
                        JSONObject payment_order = data.getJSONObject("data");
                        String key_payment_order = payment_order.getString("key");
                        JSONObject pedido = SPGConect.ejecutarConsultaObject(
                                "select get_by('pedido','key_payment_order','" + key_payment_order + "') as json");
                        if (pedido.has("key")) {
                            if (payment_order.getString("state").equals("expiration_date_timeout")) {
                                model.pedido.Pedido pedidoState = new model.pedido.Pedido(pedido.getString("key"));
                                pedidoState.changeState(states.timeout_pago,
                                        "ManejadorCliente.payment_order::on_change_state");
                            }
                            data.put("estado", "exito");
                        }
                    } catch (SQLException | StateException e) {
                        e.printStackTrace();
                    }
                    data.put("noSend", true);
                    SocketCliente.send("multipagos", data.toString());

                }
                break;
            }

        }
    }

    public static void usuario(JSONObject data, JSONObject config) {
        switch (data.getString("type")) {
            case "recuperarPass": {
                if (data.getString("estado").equals("exito")) {
                    JSONObject mailConfig = new JSONObject();
                    if (data.has("data")) {
                        JSONObject dataMail = data.getJSONObject("data");
                        mailConfig.put("subject", "Recuperar contraseña");
                        mailConfig.put("path", "mail/recuperar_pass.html");
                        JSONObject params = new JSONObject();
                        params.put("codigo", dataMail.getString("codigo"));
                        new Email(new JSONArray().put(dataMail.getString("correo")), mailConfig, params);
                        SConsole.log("Recuperar pass", data.getJSONObject("data").toString());
                    }

                }
                break;
            }
            case "registro": {
                if (data.getString("estado").equals("exito")) {
                    JSONObject mailConfig = new JSONObject();
                    mailConfig.put("subject", "Registro exitoso!");
                    mailConfig.put("path", "mail/registro_exitoso.html");
                    new Email(new JSONArray().put(data.getJSONObject("data").getString("Correo")), mailConfig, null);
                    SConsole.log("Registro", data.getJSONObject("data").toString());
                } else if (data.getString("estado").equals("error")) {
                    data.remove("error");
                }
                break;
            }
        }
    }
}
