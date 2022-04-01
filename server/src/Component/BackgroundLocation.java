package Component;

import org.json.JSONObject;

import Server.SSSAbstract.SSSessionAbstract;
import Servisofts.SConsole;
import util.GPX;

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
        GPX.saveGPX(obj.getString("key_usuario"), data.getDouble("latitude"), data.getDouble("longitude"), data.getDouble("rotation"));
        obj.put("estado", "exito");
    }
}
