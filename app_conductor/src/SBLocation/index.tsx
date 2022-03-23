import React, { Component } from "react";
import { NativeModules, NativeEventEmitter, AppRegistry, Platform } from 'react-native';
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

    static Listeners = [];
    static addListener(callback) {
        this.Listeners.push(callback);
    }
    static removeListener(callback) {
        this.Listeners = this.Listeners.filter(listener => listener !== callback);

    }
    static start(props: _Props) {
        SSBackgroundLocation.start(JSON.stringify({
            ...PROPS,
            ...props
        })).then(resp => {
            if (Data.lastLocation) {
                this.Listener({ data: Data.lastLocation });
            }
            console.log("start", resp);
        });
    }
    static stop() {
        SSBackgroundLocation.stop().then(resp => {
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
    }

    static Listener = async (props) => {
        Data.onLocationChange(props.data);
        //this.Listeners.map(callback => callback(Data.lastLocation));
        console.log(SSocket.api.root + "api");
        SSocket.sendHttp(SSocket.api.root + "api", {
            component: "backgroundLocation",
            type: "onChange",
            estado: "cargando",
            key_usuario: "carlos",
            data: Data.lastLocation,
        });

    }
}
export { Data };
export default SBLocation;