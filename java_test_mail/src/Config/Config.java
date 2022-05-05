package Config;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

import org.json.JSONObject;

public class Config {

    private static JSONObject config = null;
    

    public static JSONObject getJSON() {
        try {
            if (config == null) {
                FileReader file = new FileReader("config.json");
                int valor = file.read();
                String configJson = "";
                while (valor != -1) {
                    configJson = configJson + String.valueOf(((char) valor));
                    valor = file.read();
                }
                config = new JSONObject(configJson);
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return config;
    }

    public static JSONObject getJSON(String key) {

        return getJSON().getJSONObject(key);
    }
}