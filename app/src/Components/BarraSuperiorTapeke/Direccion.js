import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SHr, SIcon, SNavigation, SPage, SPopup, SText, STheme, SView } from 'servisofts-component';

class Direccion extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    popupOpcionDistancia() {
        var miDireccion = this.props.state.direccion_usuarioReducer.miDireccion;
        return <>
            <SView col={"xs-11 md-8 xl-6"} center row style={{ borderRadius: 8 }} withoutFeedback backgroundColor={STheme.color.background}>
                <SView col={"xs-9 md-6 xl-6"} style={{
                }} center>
                    <SHr height={30} />
                    <SText color={STheme.color.darkGray} style={{ fontSize: 20 }}>Usar otra ubicación</SText>
                    <SView height={8} />
                    {/* {this.getForm()} */}
                    <SButtom type="secondary" style={{ fontSize: 15, color: STheme.color.text, backgroundColor: STheme.color.card, width: 300, borderRadius: 15 }}
                        onPress={() => {
                            SPopup.close("ubicacion");
                            SNavigation.navigate("direcciones")
                        }}><SText style={{ padding: 8 }}> {miDireccion ? miDireccion?.direccion : "Elegir mi ubicación..."}</SText> </SButtom>
                    <SView height={8} />
                    <SText color={STheme.color.darkGray} style={{ fontSize: 20 }}>Seleccione un modo:</SText>
                    <SHr height={20} />
                    <SView col={"xs-12"} row center>
                        <SView col={"xs-6"} center onPress={() => {
                            this.props.dispatch({ component: "direccion_usuario", type: "editarMiDistancia", data: 1 });
                            SPopup.close("ubicacion");
                        }}>
                            <SIcon name={"ModoPie"} width={90} height={90} fill={STheme.color.primary} />
                            <SHr height={10} />
                            <SText font={"Roboto"} color={STheme.color.text} style={{ fontSize: 18, fontWeight: "bold" }}>A pie</SText>
                            <SText font={"Roboto"} color={STheme.color.text} style={{ fontSize: 14, fontWeight: "bold" }}>menos 1 km</SText>
                        </SView>
                        <SView col={"xs-6"} center onPress={() => {
                            this.props.dispatch({ component: "direccion_usuario", type: "editarMiDistancia", data: 30 });
                            SPopup.close("ubicacion");
                        }}>
                            <SIcon name={"ModoCoche"} width={90} height={90} fill={STheme.color.primary} />
                            <SHr height={10} />
                            <SText font={"Roboto"} color={STheme.color.text} style={{ fontSize: 18, fontWeight: "bold" }}>En coche</SText>
                            <SText font={"Roboto"} color={STheme.color.text} style={{ fontSize: 14, fontWeight: "bold" }}>menos 30 km</SText>
                        </SView>
                    </SView>
                    <SView height={30}></SView>
                </SView>
            </SView>
        </>
    }

    render() {
        var miDireccion = this.props.state.direccion_usuarioReducer.miDireccion;
        var miDistancia = this.props.state.direccion_usuarioReducer.miDistancia;

        if (!this.props.state.direccion_usuarioReducer.miDireccion) {
            SNavigation.navigate("direccion_usuario")

            return null;
        }
        return (
            <SView row col={"xs-12"} center border={'transparent'} onPress={() => {
                SPopup.open({ key: "ubicacion", content: this.popupOpcionDistancia() });
            }}>
                <SView width={16} />
                <SView height={50} width={15}>
                    <SView style={{ top: 6 }} center>
                        <SIcon name={"Location"} height={18} fill={STheme.color.secondary} />
                    </SView>
                </SView>
                <SView height={50} style={{flex:1, justifyContent: 'center', paddingLeft: 4, paddingRight: 4, maxWidth: 280, }}>
                    <SText font={"Roboto-Bold"} fontSize={12} center color={STheme.color.secondary}>{miDireccion ? miDireccion?.direccion : "Elegir mi ubicación..."}</SText>
                    <SHr height={4} />
                    <SText font={"Roboto-Bold"} fontSize={13} center color={STheme.color.secondary}> A menos de {miDistancia == 1 ? "1" : "30"} km</SText>
                </SView>
                <SView height={50} width={25}>
                    <SView style={{ top: 6 }} center>
                        <SIcon name={"Back"} height={18} fill={STheme.color.secondary} style={{ transform: [{ rotate: "-90deg" }] }} />
                    </SView>
                </SView>
                <SView width={16} />
            </SView>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Direccion);