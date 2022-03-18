import React, { Component } from "react";
import { NativeModules, NativeEventEmitter, AppRegistry, Platform } from 'react-native';
const SSBackgroundLocation = NativeModules.SSBackgroundLocation;

type _Props = {
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

    static start(props: _Props) {
        SSBackgroundLocation.start(JSON.stringify({
            ...PROPS,
            ...props
        })).then(resp => {
            console.log("start",resp);
        });
    }
    static stop() {
        SSBackgroundLocation.stop().then(resp => {
            console.log("stop",resp);
        });
    }

    static initEmitter() {
        if (Platform.OS == "android") {
            AppRegistry.registerHeadlessTask('SSBackgroundLocation', () => this.Listener);
        } else if (Platform.OS == "ios") {
            var em = new NativeEventEmitter(SSBackgroundLocation);
            em.addListener('onLocationChange', this.Listener);
        }
    }

    static Listener = async (data) => {
        console.log(data);
    }
}
export default SBLocation;