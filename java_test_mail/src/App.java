import org.json.JSONArray;
import org.json.JSONObject;

import Config.Config;

public class App {
    public static void main(String[] args) throws Exception {
        console.info("*************************************************");
        console.info("*                                               *");
        console.info("*                  Test mails                   *");
        console.info("*                                               *");
        console.info("*************************************************");
        console.info("");
        JSONObject config = Config.getJSON();
        JSONObject mail_server = config.getJSONObject("mail_server");
        console.log("Mail server: ");
        console.warning("\t//" + mail_server.getString("host") + ":" + mail_server.getInt("port"));
        console.warning("\t" + mail_server.getString("email"));
        console.log("");
        console.log("Mails to:");
        JSONArray mails = config.getJSONArray("mails");
        for (int i = 0; i < mails.length(); i++) {
            new Email(config.getJSONArray("mails_to"), mails.getJSONObject(i));
        }

    }
}
