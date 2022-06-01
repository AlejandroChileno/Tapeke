package util;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;

public class Sms {
    public static final String ACCOUNT_SID = "AC336a1f63d1eb3e0a157847d9e1621ef9";
    public static final String AUTH_TOKEN = "0b8d297573750b5ca3a8dbd20874e727";
    public static final String T_PHONE = "+13254408275";

    public static String sendCode(String phone) throws Exception {

        String code = getCode();
        Twilio.init(ACCOUNT_SID, AUTH_TOKEN);
        Message message = Message.creator(
                new com.twilio.type.PhoneNumber(phone),
                new com.twilio.type.PhoneNumber(T_PHONE),
                "Tapeke App verification code " + code)
                .create();
        return code;
    }

    public static String getRandomNumber() {
        return ((int) (Math.random() * 9)) + "";
    }

    public static String getCode() {
        String code = getRandomNumber() + getRandomNumber() + getRandomNumber() + getRandomNumber() + getRandomNumber();
        return code;
    }

    public static void main(String[] args) throws Exception {
        System.out.println(getCode());
        // sendCode("+59175395848");
    }

}
