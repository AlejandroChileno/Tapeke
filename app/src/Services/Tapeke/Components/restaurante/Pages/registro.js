import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SForm, SHr, SLoad, SNavigation, SPage, SText, SView, SDate, SInput } from 'servisofts-component';
import Parent from '..'
import SSocket from 'servisofts-socket';
import PButtom from '../../../../../Components/PButtom';

class registro extends Component {
    _ref
    _ref2
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key = SNavigation.getParam("key");
        this._ref = {};
        this._ref2 = {};
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
                lat: { label: "Lat", type: "text", isRequired: false, defaultValue: data["lat"] },
                lng: { label: "Lng", type: "text", isRequired: false, defaultValue: data["lng"] },
            }}
            // onSubmitName={"Registrar"}
            onSubmit={(values) => {
                if (this.key) {
                    Parent.Actions.editar({ ...data, ...values }, this.props);
                } else {
                    Parent.Actions.registro(values, this.props);
                }
                //console.log(JSON.stringify(values));
            }}
        />
    }




    getDias() {
        var dias = new SDate.getDaysOfWeek();
        console.log(dias);
        //alert(JSON.stringify(dias[0].text));
        dias[-1] = { text: "Feriado", value: "Fer" };


        return Object.keys(dias).map((key, index) => {
            return <>
                <SView col={"xs-12"} row>
                    <SView col={"xs-4"}>
                        <SText fontSize={15}>{dias[key].text}</SText>
                    </SView>
                    <SView col={"xs-4"}>
                        <SInput type="text" placeholder="Hora Inicio" name={"ini_" + key} ref={ref => { this._ref[key] = ref }} />
                    </SView>
                    <SView col={"xs-4"}>
                        <SInput type="text" placeholder="Hora Fin" name={"fin_" + key} ref={ref => { this._ref2[key] = ref }} />
                    </SView>
                    <SHr height={10} />
                </SView>
            </>
        })
    }


    getHorario() {

        return <>
            <SView col={"xs-12"} row>
                <SText fontSize={20}>Horarios</SText>
                <SHr />
                <SView col={"xs-12"} row center>
                    {this.getDias()}
                </SView>

            </SView>
        </>
    }
    render() {
        var reducer = this.props.state[Parent.component + "Reducer"];
        if (reducer.type == "registro" || reducer.type == "editar") {
            if (reducer.estado == "exito") {
                if (reducer.type == "registro") this.key = reducer.lastRegister?.key;
                if (this.form) {
                    this.form.uploadFiles(SSocket.api.root + "upload/" + Parent.component + "/" + this.key);
                }
                if (reducer.lastRegister) {
                    var dataHorario = {};
                    Object.keys(this._ref).map((key, index) => {
                        if (!this._ref[key].getValue()) return <SView />
                        //validar hora
                        var date_regex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
                        if (!date_regex.test(this._ref[key].getValue()) || !date_regex.test(this._ref2[key].getValue())) {
                            if (!date_regex.test(this._ref[key].getValue())) this._ref[key].setValue("");
                            if (!date_regex.test(this._ref2[key].getValue())) this._ref2[key].setValue("");
                            return <SView />
                        } else {

                            dataHorario[key] = {
                                dia: key,
                                horario_inicio: this._ref[key].getValue(),
                                horario_fin: this._ref2[key].getValue(),
                                key_restaurante: reducer.lastRegister.key
                            }
                        }
                    });
                    console.log(JSON.stringify(dataHorario));
                }
                reducer.estado = "";
                // SNavigation.goBack();
            }
        }

        return (
            <SPage title={'registro'} center>
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} center>
                    <SHr />
                    {this.getHorario()}
                    <SHr />
                    {this.getregistro()}
                    <SHr />
                    <PButtom fontSize={20} onPress={() => {
                        this.form.submit();
                    }}>CONFIRMAR</PButtom>
                    <SHr />
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(registro);