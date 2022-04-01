package Component;

import java.sql.SQLException;
import java.util.UUID;

import org.json.JSONObject;

import Server.SSSAbstract.SSSessionAbstract;
import Servisofts.SConsole;
import Servisofts.SPGConect;
import util.GPX;
import Servisofts.SUtil;

public class BackgroundLocation {
    public static final String COMPONENT = "backgroundLocation";

    public static void onMessage(JSONObject obj, SSSessionAbstract session) {
        switch (obj.getString("type")) {
            case "onChange":
                onChange(obj, session);
                break;
        }
    }

    public static void onChange(JSONObject obj, SSSessionAbstract session) {
        // SConsole.log(obj.toString());
        JSONObject data = obj.getJSONObject("data");

        try {
            JSONObject location = SPGConect.ejecutarConsultaObject("select get_by('background_location','key_usuario','"
                    + obj.getString("key_usuario") + "') as json");
            if (!location.has("key")) {
                SConsole.log("No hay location");
                location.put("key", SUtil.uuid());
                location.put("fecha_on", SUtil.now());
                location.put("fecha_last", SUtil.now());
                location.put("estado", 1);
                location.put("key_usuario", obj.getString("key_usuario"));
                location.put("latitude", data.getDouble("latitude"));
                location.put("longitude", data.getDouble("longitude"));
                SPGConect.insertObject("background_location", location);
            } else {
                location.put("latitude", data.getDouble("latitude"));
                location.put("longitude", data.getDouble("longitude"));
                location.put("fecha_last", SUtil.now());
                SPGConect.editObject("background_location", location);
            }
            GPX.saveGPX(obj.getString("key_usuario"), data.getDouble("latitude"), data.getDouble("longitude"),data.getDouble("rotation"));
             obj.put("estado", "exito");

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
