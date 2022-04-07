import React from 'react';
import { connect } from 'react-redux';
import { SMapView, SMarker, SHr, SPage, SText, SView, SIcon, STheme, SImage, SGradient, SForm, SNavigation, SPopup,SLoad } from 'servisofts-component';
import PButtom from '../../../../../Components/PButtom';
import restaurante from '../../restaurante';
class Confirmar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.key_restaurante = SNavigation.getParam('key');
        this.precio = SNavigation.getParam('precio');
        this.cantidad = SNavigation.getParam('cantidad');
        this.envioN = SNavigation.getParam('envio');

    }

    tipoEntrega() {
        return <>
            <SView col={"xs-11"}>
                <SHr height={15} />
                <SText fontSize={18} font={"Roboto"} style={{ fontWeight: "bold" }}>Tipo de pago</SText>
                <SHr height={20} />
                <SView col={"xs-12"} row center style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 6 }}>

                    <SView col={"xs-11"} row >
                        <SView col={"xs-12"} row center>
                            <SHr height={15} />
                            <SView col={"xs-2"} >
                                <SView center style={{
                                    width: 40,
                                    height: 40, borderRadius: 8,
                                    borderWidth: 1, borderColor: STheme.color.lightGray
                                }}>
                                    <SImage src={require('../../../../../Assets/img/efectivo.png')} style={{
                                        borderRadius: 8,
                                        width: 30
                                    }} />
                                </SView>
                            </SView>
                            <SView col={"xs-8"} >
                                <SText fontSize={16} font={"Roboto"} style={{ fontWeight: "bold" }}>Efectivo</SText>
                            </SView>
                            <SView col={"xs-2"} center>
                                <SView width={18} height={18} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 25, backgroundColor: STheme.color.primary }}></SView>
                            </SView>
                            <SHr height={15} />
                            <SView col={"xs-2"} >
                                <SView center style={{
                                    width: 40,
                                    height: 40, borderRadius: 8,
                                    borderWidth: 1, borderColor: STheme.color.lightGray
                                }}>
                                    <SImage src={require('../../../../../Assets/img/tapeke.png')} style={{
                                        borderRadius: 8,
                                        width: 30
                                    }} />
                                </SView>
                            </SView>
                            <SView col={"xs-8"} >
                                <SText fontSize={16} font={"Roboto"} style={{ fontWeight: "bold" }}>Billetera Tapeke</SText>
                            </SView>
                            <SView col={"xs-2"} center>
                                <SView width={18} height={18} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 25 }}></SView>
                            </SView>
                            <SHr height={15} />
                            <SView col={"xs-2"} >
                                <SView center style={{
                                    width: 40,
                                    height: 40, borderRadius: 8,
                                    borderWidth: 1, borderColor: STheme.color.lightGray
                                }}>
                                    <SImage src={require('../../../../../Assets/img/Ptarjeta.png')} style={{
                                        borderRadius: 8,
                                        width: 30
                                    }} />
                                </SView>
                            </SView>
                            <SView col={"xs-8"} >
                                <SText fontSize={16} font={"Roboto"} style={{ fontWeight: "bold" }}>Tarjeta de Debito / Crédito</SText>
                            </SView>
                            <SView col={"xs-2"} center>
                                <SView width={18} height={18} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 25 }}></SView>
                            </SView>
                            <SHr height={15} />
                            <SView col={"xs-2"} >
                                <SView center style={{
                                    width: 40,
                                    height: 40, borderRadius: 8,
                                    borderWidth: 1, borderColor: STheme.color.lightGray
                                }}>
                                    <SImage src={require('../../../../../Assets/img/Pfassil.png')} style={{
                                        borderRadius: 8,
                                        width: 30
                                    }} />
                                </SView>
                            </SView>
                            <SView col={"xs-8"} >
                                <SText fontSize={16} font={"Roboto"} style={{ fontWeight: "bold" }}>Banco FASSIL</SText>
                            </SView>
                            <SView col={"xs-2"} center>
                                <SView width={18} height={18} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 25 }}></SView>
                            </SView>
                            <SHr height={15} />
                            <SView col={"xs-2"} >
                                <SView center style={{
                                    width: 40,
                                    height: 40, borderRadius: 8,
                                    borderWidth: 1, borderColor: STheme.color.lightGray
                                }}>
                                    <SImage src={require('../../../../../Assets/img/Ptransferencia.png')} style={{
                                        borderRadius: 8,
                                        width: 30
                                    }} />
                                </SView>
                            </SView>
                            <SView col={"xs-8"} >
                                <SText fontSize={16} font={"Roboto"} style={{ fontWeight: "bold" }}>Transferencia QR</SText>
                            </SView>
                            <SView col={"xs-2"} center>
                                <SView width={18} height={18} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 25 }}></SView>
                            </SView>
                            <SHr height={15} />
                            <SView col={"xs-2"} >
                                <SView center style={{
                                    width: 40,
                                    height: 40, borderRadius: 8,
                                    borderWidth: 1, borderColor: STheme.color.lightGray
                                }}>
                                    <SImage src={require('../../../../../Assets/img/Ptigo.png')} style={{
                                        borderRadius: 8,
                                        width: 30
                                    }} />
                                </SView>
                            </SView>
                            <SView col={"xs-8"} >
                                <SText fontSize={16} font={"Roboto"} style={{ fontWeight: "bold" }}>Tigo Money</SText>
                            </SView>
                            <SView col={"xs-2"} center>
                                <SView width={18} height={18} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 25 }}></SView>
                            </SView>
                        </SView>
                    </SView>
                    <SHr height={20} />
                </SView>
                <SHr height={15} />
            </SView>
        </>
    }

    getForm() {
        return <SForm
            ref={(ref) => { this.form = ref; }}
            row
            style={{
                justifyContent: "center",
                //paddingRight: 20,
                textAlign: "center",
                height: 50,
                paddingLeft: 0
            }}
            inputProps={{
                col: "xs-12",
            }}
            inputs={{
                Correo: { defaultValue: "1", type: "text", isRequired: true, },
                // Correo: { placeholder: "Las Palmas, Santa Cruz de la Sierra", type: "text", isRequired: true, icon: <SIcon name={"Ubicacion"} width={12} height={17} />, },
            }}
            onSubmit={(values) => {
                // if (this.key) {
                //     Usuario.Actions.recuperarPass({
                //         ...this.usr,
                //         ...values
                //     }, this.props);
                // } else {
                // }
            }}
        />
    }

    popupConfirmacion() {
        return <>
            <SView width={362} height={216} center row style={{ borderRadius: 8 }} withoutFeedback backgroundColor={STheme.color.background}   >
                <SHr col={"xs-12"} height={50} />
                <SView col={"xs-9"} center>
                    <SText color={STheme.color.darkGray} style={{ fontSize: 20 }} bold center >¿Estás seguro que deseas realizar este pedido?</SText>
                </SView>
                {/* <SView style={{
                    position: "absolute", top: 10, right: 10, width: 24, height: 24, borderRadius: 50, backgroundColor: STheme.color.primary,
                }} center onPress={() => { SPopup.close("confirmar"); }} >
                    <SText color={STheme.color.white} style={{ fontSize: 15, alignItems: 'center', }}>X</SText>
                </SView> */}
                <SHr col={"xs-12"} height={20} />
                <SView col={"xs-11"} row center>
                    {/* <SView col={"xs-6"} center>
                        <SView width={140} height={44} center border={STheme.color.primary} style={{ borderRadius: 8 }} onPress={() => { SPopup.close("confirmar"); }}  >
                            <SText fontSize={14} color={STheme.color.primary} style={{ fontWeight: 600 }} >No, cancelar</SText>
                        </SView>
                    </SView> */}
                    {/* <SView col={"xs-6"} center>
                        <SView width={140} height={44} center backgroundColor={STheme.color.primary} style={{ borderRadius: 8 }} onPress={() => { SPopup.close("confirmar"); SNavigation.navigate("pedido/mensajeSolicitud") }}>
                            <SText fontSize={14} color={STheme.color.white} style={{ fontWeight: 600 }} >Sí, Confirmar</SText>
                        </SView>
                    </SView> */}
                </SView>
                <SHr col={"xs-12"} height={50} />
            </SView>
        </>
    }


    render() {
        var auxRestaurante = restaurante.Actions.getByKey(this.key_restaurante, this.props)
        if (!auxRestaurante) return <SLoad />

        return (
            <SPage center>
                <SView col={"xs-12"} row backgroundColor={STheme.color.card} center>
                    <SHr height={18} />
                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center row style={{ backgroundColor: STheme.color.white }}>
                        <SView col={"xs-11"} row center>
                            <SView col={"xs-12"}>
                                <SHr height={15} />
                                <SText fontSize={18} font={"Roboto"} style={{ fontWeight: "bold" }}>Detalle pedido</SText>
                                <SHr height={15} />
                            </SView>
                            <SView center col={"xs-2"} backgroundColor={"#9B060C"} height={85} style={{ borderRadius: 8, overflow: 'hidden', }}>
                                <SImage src={require('../../../../../Assets/img/restPerfil.jpg')} style={{
                                    width: "100%",
                                    // height: 216,
                                    position: "relative",
                                    resizeMode: "cover"
                                }} />
                                <SGradient colors={["#00000045", "#00000045"]} />
                            </SView>
                            <SView col={"xs-10"} row >
                                <SView col={"xs-1"}  >
                                </SView>
                                <SView col={"xs-11"} row >
                                    <SView col={"xs-12"} >
                                        <SText color={STheme.color.text} fontSize={14} style={{ fontWeight: "bold" }}  >{auxRestaurante?.nombre}</SText>
                                    </SView>
                                    <SHr height={15} />
                                    <SView col={"xs-6"} style={{ justifyContent: 'flex-start', }}>
                                        <SText fontSize={14} font={"Roboto"} color={STheme.color.primary} fontWeight> Precio</SText>
                                        <SHr height={5} />
                                        <SView height={35} >
                                            <SHr height={3} />
                                            <SText fontSize={20} height={35} font={"Roboto"} style={{ fontWeight: "bold" }}> {this.precio} Bs.</SText>
                                        </SView>
                                    </SView>
                                    <SView col={"xs-6"} center row>
                                        <SView col={"xs-12"} center>
                                            <SText fontSize={14} font={"Roboto"} color={STheme.color.primary} >Cantidad</SText>
                                        </SView>
                                        <SHr height={5} />
                                        <SView col={"xs-6"} center >
                                            <SView col={"xs-12"} style={{ height: 35, backgroundColor: STheme.color.card, borderRadius: 6 }} center>
                                                <SText fontSize={16} style={{ fontWeight: "bold" }}>
                                                    {this.cantidad}
                                                </SText>
                                            </SView>
                                        </SView>
                                    </SView>
                                </SView>
                                <SHr height={5} />
                            </SView>
                            <SHr height={15} />
                            <SView col={"xs-12"} style={{ borderBottomWidth: 1, borderColor: STheme.color.lightGray }}></SView>
                            <SHr height={12} />
                            <SView col={"xs-12"} center>
                                <SText fontSize={16} font={"Roboto"} style={{ fontWeight: "bold" }}>Recoger del lugar</SText>
                            </SView>
                            <SHr height={18} />
                        </SView>
                    </SView>
                    <SHr height={18} />

                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} row center style={{ backgroundColor: STheme.color.white }}>
                        <SView col={"xs-11"} row center>
                            <SHr height={15} />
                            <SView col={"xs-6"} >
                                <SText style={{ textAlign: "justify" }} fontSize={15} font={"Roboto"} >Total</SText>
                            </SView>
                            <SView col={"xs-6"} style={{ alignItems: "flex-end" }}>
                                <SText fontSize={15} font={"Roboto"} >Bs.  {this.precio * this.cantidad}</SText>
                            </SView>
                            <SHr height={10} />
                            <SView col={"xs-6"} >
                                <SText style={{ textAlign: "justify" }} fontSize={15} font={"Roboto"} >Envío</SText>
                            </SView>
                            <SView col={"xs-6"} style={{ alignItems: "flex-end" }}>
                                <SText fontSize={15} font={"Roboto"} > {this.envioN ?? 0} </SText>
                            </SView>
                            <SHr height={10} />
                            <SView col={"xs-12"} style={{ borderBottomWidth: 1, borderColor: STheme.color.lightGray }}></SView>
                            <SHr height={10} />
                            <SView col={"xs-6"} >
                                <SText style={{ textAlign: "justify", fontWeight: "bold" }} fontSize={15} font={"Roboto"} >Total</SText>
                            </SView>
                            <SView col={"xs-6"} style={{ alignItems: "flex-end" }}>
                                <SText fontSize={15} font={"Roboto"} style={{ fontWeight: "bold" }} >Bs. {(this.precio * this.cantidad) + (this.envioN ?? 0)}</SText>
                            </SView>
                            <SHr height={15} />
                        </SView>
                    </SView>
                    <SHr height={18} />
                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center style={{ backgroundColor: STheme.color.white }}>
                        {this.tipoEntrega()}
                    </SView>
                    <SHr height={18} />
                    <SHr height={40} />
                    <PButtom fontSize={20} onPress={() => {

                        // SNavigation.navigate("pedido/mapa")
                        SPopup.open({ content: this.popupConfirmacion(), key: "confirmar" });


                    }}>CONFIRMAR</PButtom>
                    <SHr height={40} />
                </SView>
            </SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Confirmar);