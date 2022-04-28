import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SHr, SPage, SText } from 'servisofts-component';
import SSocket from 'servisofts-socket';
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'PRESIONA EL BOTON',
        };
    }

    registar = () => {
        SSocket.sendPromise({
            "component": "pedido",
            "type": "registro",
            "key_pedido": "2db10bd2-fb22-44af-a54e-32516ffbe",
            "data": {
                "key_pack": "06876a09-0da7-4ed1-b8f5-8e9bd71b8207",
                "fecha": "2022-04-15",
                "cantidad": 1,
                "delivery": false,
                "direccion": {
                    "direccion": "Calle no encontrada.",
                    "latitude": 24.3432,
                    "longitude": -17.2322
                }
            },
            "key_usuario": "322323-232323"
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log("ERROR", err.error);
        })
    }
    getDetale = () => {
        SSocket.sendPromise({
            "component": "pedido",
            "type": "getDetalle",
            "key_pedido": "2db10bd2-fb22-44af-a54e-32516ffbe",
        }).then(res => {
            console.log(res);
        }).catch(err => {
            console.log("ERROR", err.error);
        })
    }

    render() {
        return (
            <SPage title={'Test'} center>
                <SHr />
                <SButtom type={"danger"} onPress={() => {
                    this.registar()

                }}>PROMESA</SButtom>
                <SHr />
                <SText fontSize={24}>{this.state.text}</SText>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Test);