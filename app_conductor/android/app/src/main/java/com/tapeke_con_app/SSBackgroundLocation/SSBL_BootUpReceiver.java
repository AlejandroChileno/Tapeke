package com.tapeke_con_app.SSBackgroundLocation;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;

public class SSBL_BootUpReceiver extends BroadcastReceiver {
    @Override
    public void onReceive(Context context, Intent intent) {
        context.startService(new Intent(context, SSBL_Service.class));
    }
}
