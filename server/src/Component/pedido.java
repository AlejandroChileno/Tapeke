package Component;

import java.util.Date;
import java.util.UUID;
import org.json.JSONArray;
import org.json.JSONObject;
import Servisofts.SPGConect;
import Servisofts.SUtil;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import Server.SSSAbstract.SSServerAbstract;
import Server.SSSAbstract.SSSessionAbstract;

public class pedido {
    public static final String COMPONENT = "pedido";

    public static void onMessage(JSONObject obj, SSSessionAbstract session) {
        switch (obj.getString("type")) {
            case "getAll":
                getAll(obj, session);
                break;
            case "getAllProximos":
                getAllProximos(obj, session);
                break;
            case "registro":
                registro(obj, session);
                break;
            case "editar":
                editar(obj, session);
                break;
        }
    }

    public static void getAll(JSONObject obj, SSSessionAbstract session) {
        try {
            String consulta = "select get_all('" + COMPONENT + "') as json";
            JSONObject data = SPGConect.ejecutarConsultaObject(consulta);
            obj.put("data", data);
            obj.put("estado", "exito");
        } catch (Exception e) {
            obj.put("estado", "error");
            e.printStackTrace();
        }
    }

    public static void getAllProximos(JSONObject obj, SSSessionAbstract session) {
        try {
            String consulta = "select get_all('" + COMPONENT + "') as json";
            JSONObject data = SPGConect.ejecutarConsultaObject(consulta);
            obj.put("data", data);
            obj.put("estado", "exito");
        } catch (Exception e) {
            obj.put("estado", "error");
            e.printStackTrace();
        }
    }

    public static void registro(JSONObject obj, SSSessionAbstract session) {
        try {
            JSONObject data = obj.getJSONObject("data");
            data.put("key", SUtil.uuid());
            data.put("estado", 1);
            data.put("fecha_on", SUtil.now());
            data.put("key_usuario", obj.getString("key_usuario"));

            JSONObject pack = SPGConect
                    .ejecutarConsultaObject("select get_by('pack','key','" + data.getString("key_pack") + "') as json");
            if (!pack.has("key")) {
                obj.put("estado", "error");
                obj.put("error", "No se pudo obtener la cantidad vendidos");
                return;
            }
            JSONObject cantidad_vendidos = SPGConect.ejecutarConsultaObject("select pedido_getcantidadvendidos('"
                    + data.getString("key_pack") + "','" + data.getString("fecha") + "') as json ");
            if (!cantidad_vendidos.has("cantidad")) {
                obj.put("estado", "error");
                obj.put("error", "No se pudo obtener la cantidad vendidos");
                return;
            }
            int cantidad_vendidos_int = cantidad_vendidos.getInt("cantidad");

            if (cantidad_vendidos_int >= pack.getInt("cantidad")) {
                obj.put("estado", "error");
                obj.put("error", "El producto se ha agotado");
                return;
            }
            if ((cantidad_vendidos_int + data.getInt("cantidad")) > pack.getInt("cantidad")) {
                obj.put("estado", "error");
                obj.put("error", "El producto se ha agotado");
                return;
            }

            SPGConect.insertArray(COMPONENT, new JSONArray().put(data));
            obj.put("data", data);
            obj.put("estado", "exito");
            SSServerAbstract.sendAllServer(obj.toString());
        } catch (Exception e) {
            obj.put("estado", "error");
            e.printStackTrace();
        }
    }

    public static void editar(JSONObject obj, SSSessionAbstract session) {
        try {
            JSONObject data = obj.getJSONObject("data");
            SPGConect.editObject(COMPONENT, data);
            obj.put("data", data);
            obj.put("estado", "exito");
        } catch (Exception e) {
            obj.put("estado", "error");
            e.printStackTrace();
        }
    }

}
