import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SForm, SHr, SLoad, SNavigation, SPage, SText, SView, SDate, SInput, SPopup, SImage, STheme, SIcon } from 'servisofts-component';
import Parent from '..'
import SSocket from 'servisofts-socket';

class MisTarjetas extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key = SNavigation.getParam("key");
    }

    MisTarjetas() {
        var data = Parent.Actions.getAll(this.props);
        if (!data) return <SLoad />

        const key_usuario = this.props.state.usuarioReducer.usuarioLog.key;
		var arr = Object.values(data).filter(x => x.key_usuario == key_usuario && x.estado == 1);
		if (arr.length <= 0) {
			SNavigation.navigate(Parent.component +"/registro")
			return <SText>No hay direcciones</SText>
		}

        return Object.values(data).map((obj) => {
            // console.log(this.props.state.usuarioReducer.usuarioLog.key + " //// "+obj.key_usuario )
            // if((obj.estado != 1) || (this.props.state.usuarioReducer.usuarioLog.key != obj.key_usuario)) return null;
           
            // if((obj.estado != 1)) return null;
           
            var digitos = data[obj.key].numero_tarjeta.slice(-4);
            return (<>
                <SView col={"xs-12"} row center style={{ borderRadius: 8, borderWidth: 1, borderColor: STheme.color.gray }} backgroundColor={STheme.color.card}
                    onPress={() => { alert("1") }}>
                    <SHr height={10} />
                    <SView col={"xs-11"} row >
                        <SView col={"xs-2"} height={30}>
                            <SImage src={require('../../../../../Assets/img/tarjeta1.png')} style={{ width: 40 }} />
                        </SView>
                        <SView col={"xs-7 sm-7 md-8 lg-8 xl-8"} >
                            <SHr height={10} />
                            <SText fontSize={16} font={"Roboto"} style={{ fontWeight: "bold" }}>*** **** **** {digitos}</SText>
                        </SView>
                        <SView col={"xs-3 sm-3 md-2 lg-2 xl-2"} row >
                            <SView style={{ borderRadius: 100, backgroundColor: STheme.color.success }} width={33} height={33} center flex
                                onPress={() => { SNavigation.navigate(Parent.component + "/registro", { key: data[obj.key].key }) }}>
                                <SIcon name="EditT" width="15"></SIcon>
                            </SView>
                            <SView width={10}></SView>
                            <SView style={{ borderRadius: 100, backgroundColor: STheme.color.error, }} width={33} height={33} center flex
                                onPress={() => {
                                    SPopup.confirm({ title: "Eliminar", message: "¿Esta seguro de eliminar?"+obj.key, onPress: () => { Parent.Actions.eliminar(obj, this.props)} }) 
                                 }}>
                                <SIcon name="DeleteT" width="15"></SIcon>
                            </SView>
                        </SView>
                    </SView>
                    <SHr height={10} />
                </SView>
                <SHr height={7} />
            </>)
        });
    }

    render() {

        // var reducer = this.props.state[Parent.component + "Reducer"];
        // if (reducer.type == "registro" || reducer.type == "editar") {
        //     if (reducer.estado == "exito") {
        //         if (reducer.type == "registro") this.key = reducer.lastRegister?.key;
        //         if (this.form) {
        //             this.form.uploadFiles(SSocket.api.root + "upload/" + Parent.component + "/" + this.key);
        //         }
        //         reducer.estado = "";
        //         SNavigation.goBack();
        //     }
        // }

        // var data = Parent.Actions.getAll(this.props);
        // if (!data) return <SLoad />
        // console.log(data.key_usuario+" OOOOO")

        // if (this.props.state.usuarioReducer.usuarioLog.key != data.key_usuario) {
        //     SNavigation.replace("direcciones")
        //     return null;
        // }

        return (
            <SPage title={'Mis tarjetas'} center>
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
                                <SText fontSize={18} font={"Roboto"} bold>Mis tarjetas de crédito y débido</SText>
                                <SHr height={10} />
                                <SText fontSize={14} font={"Roboto"} >Elige tu tarjeta de pago:</SText>
                                <SHr height={30} />
                                {this.MisTarjetas()}
                                <SHr height={30} />
                                <SView col={"xs-12"} style={{ alignItems: "flex-end" }}
                                    onPress={() => { SNavigation.navigate("pago_tarjeta/registro"); }}>
                                    <SView row>
                                        <SIcon name={"TarjetaAdd"} width={25}></SIcon>
                                        <SText color={STheme.color.primary}> Agregar una tarjeta </SText>
                                    </SView>
                                </SView>
                            </SView>
                        </SView>
                    </SView>

                    <SView col={"xs-12 "} center>
                        <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} style={{ backgroundColor: STheme.color.white, }} center>
                            <SHr height={50} />
                            <SView col={"xs-11"} row center>
                                <SHr height={20} />
                            </SView>
                        </SView>
                    </SView>
                </SView>
            </SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(MisTarjetas);