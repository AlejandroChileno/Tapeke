import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SForm, SHr, SLoad, SNavigation, SPage, SText, SView } from 'servisofts-component';
import Parent from '..'
import SSocket from 'servisofts-socket';
class registro extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key = SNavigation.getParam("key");
    }

    getregistro() {
        let data = {};
        if (this.key) {
            data = Parent.Actions.getByKey(this.key, this.props);
            if (!data) return <SLoad />
        }
        return <SForm
            center
            ref={(form) => { this.form = form; }}
            inputs={{
                foto_p: { type: "image", isRequired: false, defaultValue: `${SSocket.api.root}${Parent.component}/${this.key}?time=${new Date().getTime()}`, col: "xs-4 sm-3.5 md-3 lg-2.5 xl-2.5", style: { borderRadius: 8, overflow: 'hidden', width: 130, height: 130, borderWidth: 0 } },
                nombre: { label: "Nombres", type: "text", isRequired: true, defaultValue: data["nombre"] },
                descripcion: { label: "Descripcion", type: "textArea", isRequired: true, defaultValue: data["descripcion"] },
                direccion: { label: "Direccion", type: "text", isRequired: false, defaultValue: data["direccion"] },
            }}
            onSubmitName={"Registrar"}
            onSubmit={(values) => {
                if (this.key) {
                    Parent.Actions.editar({ ...data, ...values }, this.props);
                } else {
                    Parent.Actions.registro(values, this.props);
                }
            }}
        />
    }
    render() {
        var reducer = this.props.state[Parent.component + "Reducer"];
        if (reducer.type == "registro" || reducer.type == "editar") {
            if (reducer.estado == "exito") {
                if (reducer.type == "registro") this.key = reducer.lastRegister?.key;
                if (this.form) {
                    this.form.uploadFiles(SSocket.api.root + "upload/" + Parent.component + "/" + this.key);
                }
                reducer.estado = "";
                SNavigation.goBack();
            }
        }

        return (
            <SPage title={'registro'} center>
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"}>
                    <SHr />
                    {this.getregistro()}
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(registro);