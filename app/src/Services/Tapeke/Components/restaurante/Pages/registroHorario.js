import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SForm, SHr, SLoad, SNavigation, SPage, SText, SView, SDate, SInput } from 'servisofts-component';
import Parent from '..'
import Horario from '../../horario';
import SSocket from 'servisofts-socket';
import PButtom from '../../../../../Components/PButtom';

class registroHorario extends Component {
    _ref
    _ref2
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key = SNavigation.getParam("key");
        this.key_restaurante = SNavigation.getParam("key_restaurante");
        this._ref = {};
        this._ref2 = {};
    }
    getDias() {
        var dias = new SDate.getDaysOfWeek();
        var arrayDias = [];
        dias[-1] = { text: "Feriado", value: "Fer" };
        //return dias[item].text;
        arrayDias.push({ key: "", content: "vacio" });
        Object.keys(dias).map((key, index) => {
            arrayDias.push({ key: key, content: dias[key].text });
        })
        console.log(arrayDias);
        //return arrayDias;
    }

    getregistro() {
        let data = {};
        if (this.key) {
            data = Horario.Actions.getByKey(this.key, this.props);
            if (!data) return <SLoad />
        }
        return <SForm
            center
            ref={(form) => { this.form = form; }}
            inputs={{
               dia: { label: "Dia", type: "select", isRequired: true, defaultValue: data["horario_inicio"], options: [{ key: "", content: "Vacío" }, { key: 0, content: "Lunes" } ,{ key: 1, content: "Martes" } ,{ key: 2, content: "Miércoles" } ,{ key: 3, content: "Jueves" } ,{ key: 4, content: "Viernes" } ,{ key: 5, content: "Sábado" } ,{ key: 6, content: "Domingo" } ,{ key: -1, content: "Feriado" }] },
                //dia: { label: "Dia", type: "select", isRequired: true, defaultValue: data["horario_inicio"], options: [this.getDias] },
                horario_inicio: { label: "Hora Inicio", type: "text", isRequired: true, defaultValue: data["horario_inicio"] },
                horario_fin: { label: "Hora Fin", type: "text", isRequired: true, defaultValue: data["horario_inicio"] },
            }}
            // onSubmitName={"Registrar"}
            onSubmit={(values) => {
                if (this.key) {
                    Horario.Actions.editar({ ...data, ...values }, this.props);
                } else {
                    Horario.Actions.registro({ ...values, key_restaurante: this.key_restaurante }, this.props);
                    //Horario.Actions.registro(values, this.props);
                }
                console.log(JSON.stringify(values));
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
            <SPage title={'Registro Horario'} center>
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} center>
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
export default connect(initStates)(registroHorario);