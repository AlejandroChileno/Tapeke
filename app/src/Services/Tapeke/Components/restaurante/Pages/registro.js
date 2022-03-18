import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SForm, SHr, SLoad, SNavigation, SPage, SText, SView, SDate, SInput } from 'servisofts-component';
import Parent from '..'
import SSocket from 'servisofts-socket';
import PButtom from '../../../../../Components/PButtom';

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
                lat: { label: "Lat", type: "text", isRequired: false, defaultValue: data["lat"] },
                lng: { label: "Lng", type: "text", isRequired: false, defaultValue: data["lng"] },
            }}
            // onSubmitName={"Registrar"}
            onSubmit={(values) => {
                // if (this.key) {
                //     Parent.Actions.editar({ ...data, ...values }, this.props);
                // } else {
                //     Parent.Actions.registro(values, this.props);
                // }
                //console.log(JSON.stringify(values));
            }}
        />
    }
    getInputInicio() {
        // let data = {};
        // if (this.key) {
        //     data = Parent.Actions.getByKey(this.key, this.props);
        //     if (!data) return <SLoad />
        // }
        return <SForm
            center
            ref={(form2) => { this.form2 = form2; }}
            inputs={{

                hora_inicio: { label: "Hora Inicio", type: "text", },

            }}
            // onSubmitName={"Registrar"}
            onSubmit={(values) => {
                // if (this.key) {
                //     Parent.Actions.editar({ ...data, ...values }, this.props);
                // } else {
                //     Parent.Actions.registro(values, this.props);
                // }
                //alert(JSON.stringify(values));
                //console.log(JSON.stringify(values));
            }}
        />
    }

    getInputFin() {
        // let data = {};
        // if (this.key) {
        //     data = Parent.Actions.getByKey(this.key, this.props);
        //     if (!data) return <SLoad />
        // }
        return <SForm
            center
            ref={(form3) => { this.form3 = form3; }}
            inputs={{

                hora_fin: { label: "Hora Fin", type: "text", },

            }}
            // onSubmitName={"Registrar"}
            onSubmit={(values) => {
                // if (this.key) {
                //     Parent.Actions.editar({ ...data, ...values }, this.props);
                // } else {
                //     Parent.Actions.registro(values, this.props);
                // }
                // alert("holaa")
            }}
        />
    }

    getDias() {
        var dias = new SDate.getDaysOfWeek();
        //alert(JSON.stringify(dias));
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
                        {/* {this.getInputInicio()} */}
                        <SInput type="text" placeholder="Hora Inicio" name={"hora_ini_"+key}  />
                    </SView>
                    <SView col={"xs-4"}>
                        {/* {this.getInputFin()} */}
                        <SInput type="text" placeholder="Hora Fin" name={"hora_fin_"+key}  />
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

                    {/* <SView col={"xs-1"}>
                        <SText fontSize={20}>+</SText>
                    </SView> */}

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
                reducer.estado = "";
                SNavigation.goBack();
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
                        var hora_inicio = document.getElementsByName('inicio');
                        console.log(hora_inicio.length);
                        alert(JSON.stringify(hora_inicio));

                        this.form.submit();
                        this.form2.submit();
                        this.form3.submit();

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