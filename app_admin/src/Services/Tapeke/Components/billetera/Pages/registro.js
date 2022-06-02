import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SForm, SHr, SLoad, SNavigation, SPage, SText, SView, SDate, SInput, SPopup } from 'servisofts-component';
import Parent from '..'
import SSocket from 'servisofts-socket';
import PButtom from '../../../../../Components/PButtom';

const inputHandler = (text, nro) => {
    console.log(text.nativeEvent.text);
    var value = text.nativeEvent.text;
    if (value.length >= nro) {
        SPopup.alert("Usted no puede ingresar más de " + nro + " caracteres");
    }
}


class registro extends Component {
    _ref
    _ref2
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key = SNavigation.getParam("key");
        this.key_cliente = SNavigation.getParam("key_cliente");
        this._ref = {};
        this._ref2 = {};
    }



    getregistro() {
        let data = {};
        if (this.key) {
            data = Parent.Actions.getByKey(this.key, this.props);
            if (!data) return <SLoad />
        }
        var inputs = {};
        inputs["monto"] = { label: "monto", type: "money", isRequired: true, defaultValue: data["monto"] }
        // inputs["tipo_pago"] = { label: "tipo_pago", type: "text", isRequired: true, defaultValue: data["tipo_pago"] }
        if (!this.key_cliente) {
            inputs["key_cliente"] = { label: "key_cliente", type: "text", isRequired: true, defaultValue: data["key_cliente"] }
        }

        return <SForm
            center
            ref={(form) => { this.form = form; }}
            inputs={inputs}
            onSubmit={(values) => {
                SPopup.confirm({
                    title: `¿Esta seguro que desea regalar ${values.monto} creditos?`,
                    message: `Esta accion quedara registrada.`,
                    onPress: () => {
                        if (this.key_cliente) {
                            values["key_cliente"] = this.key_cliente;
                        }
                        if (this.key) {
                            Parent.Actions.editar({ ...data, ...values }, this.props);
                        } else {
                            values["tipo_pago"] = "Administrador";
                            Parent.Actions.registro(values, this.props);
                        }
                    }
                })

            }}
        />
    }

    render() {
        var reducer = this.props.state[Parent.component + "Reducer"];
        if (reducer.type == "registro" || reducer.type == "editar") {
            if (reducer.estado == "exito") {
                if (reducer.type == "registro") this.key = reducer.lastRegister?.key;
                // if (this.form) {
                //     this.form.uploadFiles(SSocket.api.root + "upload/" + Parent.component + "/" + this.key);
                // }
                reducer.estado = "";
                SNavigation.goBack();
            }
        }

        return (
            <SPage title={'registro'}>
                <SView col={"xs-12"} center>
                    <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} center>
                        <SHr />
                        {this.getregistro()}
                        <SHr />
                        <PButtom fontSize={20} onPress={() => {

                            this.form.submit();
                        }}>CONFIRMAR</PButtom>
                        <SHr />
                    </SView>
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(registro);