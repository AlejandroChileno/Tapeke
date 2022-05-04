import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SForm, SHr, SLoad, SNavigation, SPage, SText, SView, SDate, SInput, SPopup, SImage, STheme, SIcon } from 'servisofts-component';
import Parent from '..'
import SSocket from 'servisofts-socket';
import PButtom from '../../../../../Components/PButtom';

class Registro extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key = SNavigation.getParam("key");
        this.callback = SNavigation.getParam("callback");

    }

    getregistro() {
        let data = {};
        if (this.key) {
            data = Parent.Actions.getByKey(this.key, this.props);
            if (!data) return <SLoad />
        }
        return <SForm
            row
            ref={(form) => { this.form = form; }}
            inputs={{
                nombre: { label: "Nombre", placeholder: "Nombre completo", isRequired: true, defaultValue: data["nombre"] },
                numero_tarjeta: { label: "Número de tarjeta", placeholder: "0000-0000-0000-0000", isRequired: true, defaultValue: data["numero_tarjeta"] },
                mes: { label: "Caducidad Mes", placeholder: "MM", isRequired: true, defaultValue: data["mes"], col: "xs-12 sm-6 md-6 lg-6 xl-6", },
                ano: { label: "Caducidad Año", placeholder: "AA", isRequired: true, defaultValue: data["ano"], col: "xs-12 sm-6 md-6 lg-6 xl-6" },
                codigo_seguridad: { label: "Código de seguridad", placeholder: "0000", isRequired: true, defaultValue: data["codigo_seguridad"], col: "xs-12 sm-6 md-6 lg-6 xl-6" },
            }}
            // onSubmitName={"Registrar"}
            onSubmit={(values) => {
                if (this.key) {
                    Parent.Actions.editar({ ...data, ...values }, this.props);
                    
                } else {
                    console.log(values);

                    Parent.Actions.registro(values, this.props);
                   

                }
            }}
        />
    }

    popupQueEs() {
        return <>
            <SView width={362} height={246} center row style={{ borderRadius: 8 }} withoutFeedback backgroundColor={STheme.color.background}   >
                <SHr height={20} />
                <SView col={"xs-12"} height={35} center style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}>
                    <SText color={STheme.color.darkGray} style={{ fontSize: 20 }} bold center >Código de seguridad</SText>
                </SView>
                <SHr height={20} />
                <SView col={"xs-11"} center row>
                    <SView col={"xs-5"} center flex>
                        <SIcon width={100} name='TarjetaSeguridad'></SIcon>
                    </SView>
                    <SView col={"xs-6"} center>
                        <SText fontSize={14} color={STheme.color.text}  >Son los 3-4 dígitos numéricos ubicados en la parte trasera de su tarjeta.</SText>
                    </SView>
                </SView>
                <SView col={"xs-12"} center>
                    <SHr height={25} />
                    <SView width={140} height={44} center backgroundColor={STheme.color.primary} style={{ borderRadius: 8 }} onPress={() => { SPopup.close("queEs"); }}  >
                        <SText fontSize={14} color={STheme.color.white} bold>Entendido</SText>
                    </SView>
                    <SHr height={15} />
                </SView>
            </SView>
        </>
    }

    render() {
        var reducer = this.props.state[Parent.component + "Reducer"];
        if (reducer.type == "registro" || reducer.type == "editar") {
            if (reducer.estado == "exito") {
                // if (reducer.type == "registro") this.key = reducer.lastRegister?.key;
                // if (this.form) {
                //     this.form.uploadFiles(SSocket.api.root + "upload/" + Parent.component + "/" + this.key);
                // }
                reducer.estado = "";
                //SNavigation.navigate(Parent.component + "/facturacion");
                SNavigation.navigate(Parent.component + "/misTarjetas" , { callback: this.callback });
                // console.log("entro")
            }
        }

        return (
            <SPage title={''} center>
                <SView row backgroundColor={STheme.color.card} center>
                    <SView col={"xs-12 "} center>
                        <SView center col={"xs-12 sm-10 md-8 lg-6 xl-4  "} backgroundColor={STheme.color.white}  >
                            <SView col={"xs-11"} row >
                                <SHr /><SHr />
                                <SView col={"xs-12"} row>
                                    <SText fontSize={18} font={"Roboto"} bold>Tarjetas de crédito o débito</SText>
                                    <SHr />
                                    <SText fontSize={13} font={"Roboto"}>Tapeke acepta la mayoría de tarjetas de crédito y débito.</SText>
                                    <SHr />
                                    <SView col={"xs-12"} row height={30}>
                                        <SImage src={require('../../../../../Assets/img/tarjeta1.png')} style={{ width: 40 }} />
                                        <SImage src={require('../../../../../Assets/img/tarjeta2.png')} style={{ width: 40 }} />
                                        <SImage src={require('../../../../../Assets/img/tarjeta3.png')} style={{ width: 40 }} />
                                    </SView>
                                    <SHr /><SHr />
                                </SView>
                            </SView>
                        </SView>
                    </SView>

                    <SHr height={18} />
                    <SView col={"xs-12 "} center>
                        <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} style={{ backgroundColor: STheme.color.white, }} center>
                            <SHr height={10} />
                            <SView col={"xs-11"} row >
                                <SHr height={20} />
                                <SText fontSize={18} font={"Roboto"} bold>Detalle de la tarjeta</SText>
                                {this.getregistro()}
                                <SView onPress={() => { SPopup.open({ content: this.popupQueEs(), key: "queEs" }); }} row>
                                    <SText fontSize={12} font={"Roboto"} color={STheme.color.primary}>¿Qué es esto? </SText>
                                    <SIcon name={"Alert2"} width={15}></SIcon>
                                </SView>
                                <SHr height={30} />
                            </SView>
                        </SView>
                    </SView>

                    <SHr height={18} />
                    <SView col={"xs-12 "} center>
                        <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} style={{ backgroundColor: STheme.color.white, }} center>
                            <SHr height={20} />
                            <SView col={"xs-11"} row center>
                                <PButtom fontSize={20} onPress={() => {
                                    this.form.submit();
                                    // SNavigation.navigate("pago_tarjeta/facturacion");
                                    // SNavigation.navigate(Parent.component +"/facturacion");

                                }}>GUARDAR TARJETA</PButtom>
                                <SHr height={20} />
                            </SView>
                        </SView>
                    </SView>
                    <SHr />
                </SView>
            </SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Registro);