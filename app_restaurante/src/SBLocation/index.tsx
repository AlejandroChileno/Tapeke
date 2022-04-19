import React, { Component } from "react";
import { NativeModules, NativeEventEmitter, AppRegistry, Platform } from 'react-native';
import { SStorage } from "servisofts-component";
import SSocket from "servisofts-socket"

import Data from "./Data";
const SSBackgroundLocation = NativeModules.SSBackgroundLocation;

export type _Props = {
    nombre?: string,
    label?: string,
    minTime?: number,
    minDistance?: number,
}

const PROPS = {
    nombre: "Mi Nombre",
    label: "algo111",
    minTime: 1000,
    minDistance: 0,
}
class SBLocation {
    static connected = false;
    static Listeners = [];
    static addListener(callback) {
        this.Listeners.push(callback);
    }
    static removeListener(callback) {
        this.Listeners = this.Listeners.filter(listener => listener !== callback);

    }
    static isStarted() {
        return this.connected;
    }
    static start(props: _Props) {
        SSBackgroundLocation.start(JSON.stringify({
            ...PROPS,
            ...props
        })).then(resp => {
            this.connected = true;
            SStorage.setItem("SBLocation", JSON.stringify(props));
            if (Data.lastLocation) {
                this.Listener({ data: Data.lastLocation });
            }
            console.log("start", resp);
        });
    }
    static stop() {
        SSBackgroundLocation.stop().then(resp => {
            this.connected = false;
            SStorage.removeItem("SBLocation");
            console.log("stop", resp);
        });
    }

    static initEmitter() {
        if (Platform.OS == "android") {
            AppRegistry.registerHeadlessTask('SSBackgroundLocation', () => this.Listener);
        } else if (Platform.OS == "ios") {
            var em = new NativeEventEmitter(SSBackgroundLocation);

            em.addListener('onLocationChange', this.Listener);
        }
        console.log("initEmitter");

        SStorage.getItem("SBLocation", (resp => {
            if (resp) {
                this.start(JSON.parse(resp));
            }
        }))
    }

    static Listener = async (props) => {
        if (typeof props.data == "string") {
            props.data = JSON.parse(props.data);
        }
        Data.onLocationChange(props.data);
        try {
            SSocket.sendHttp(SSocket.api.root + "api", {
                component: "backgroundLocation",
                type: "onChange",
                estado: "cargando",
                key_usuario: "eduardo",
                data: Data.lastLocation,
            });
        } catch (e) {

        }


    }
}
export { Data };
export default SBLocation;