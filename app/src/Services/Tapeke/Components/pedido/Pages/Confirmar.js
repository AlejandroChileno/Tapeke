import React from 'react';
import { connect } from 'react-redux';
import { SForm, SGradient, SHr, SImage, SLoad, SMath, SNavigation, SPage, SPopup, SStorage, SText, STheme, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import FloatButtomBack from '../../../../../Components/FloatButtomBack';
import PButtom from '../../../../../Components/PButtom';
import TipoPago from '../../../../Multipagos/Components/payment_type/Components/TipoPago';
import Parent from '../index';

class Confirmar extends React.Component {

    // state: any;
    // props: any;
    // keyPedido: string;
    // form;
    // auxPedido;
    constructor(props) {
        super(props);
        this.state = { tipoPagoSeleccionado: null, };
        this.keyPedido = SNavigation.getParam('keyPedido');
    }


    componentDidMount() {
        SStorage.getItem("pedido_en_curso", (val) => {
            if (!val) SNavigation.goBack();
            this.setState({ pedido_en_curso: JSON.parse(val) })
            console.log(this.state.pedido_en_curso)
        })
    }

    getViewDetalle() {
        this.auxPedido = Parent.Actions.getDetalle(this.keyPedido, this.props)
        if (!this.auxPedido) return <SLoad />

        if (this.auxPedido.state.code == "pago_en_proceso") {
            SNavigation.navigate("pedido/mensajeSolicitud", { key_pedido: this.auxPedido.key });
            return;
        }
        return <>
            <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center row style={{ backgroundColor: STheme.color.white }}>
                <SView col={"xs-11"} row center>
                    <SView col={"xs-12"}>
                        <SHr height={15} />
                        <SText fontSize={18} font={"Roboto"} bold>Detalle pedido</SText>
                        <SHr height={15} />
                    </SView>
                    <SView center col={"xs-2"} backgroundColor={"#9B060C"} height={85} style={{ borderRadius: 8, overflow: 'hidden', }}>
                        <SImage src={require('../../../../../Assets/img/restPerfil.jpg')} style={{
                            width: "100%",
                            position: "relative",
                            resizeMode: "cover"
                        }} />
                        <SGradient colors={["#00000045", "#00000045",]} />
                    </SView>
                    <SView col={"xs-10"} row >
                        <SView col={"xs-1"}  >
                        </SView>
                        <SView col={"xs-11"} row >
                            <SView col={"xs-12"} >
                                <SText color={STheme.color.text} fontSize={14} bold  >{this.auxPedido.restaurante.nombre}</SText>
                            </SView>
                            <SHr height={15} />
                            <SView col={"xs-6"} style={{ justifyContent: 'flex-start', }}>
                                <SText fontSize={14} font={"Roboto"} color={STheme.color.primary} bold> Precio</SText>
                                <SHr height={5} />
                                <SText fontSize={20} font={"Roboto"} bold>Bs. {this.auxPedido.pack?.precio ?? 0} </SText>
                            </SView>
                            <SView col={"xs-6"} center row>
                                <SView col={"xs-12"} center>
                                    <SText fontSize={14} font={"Roboto"} color={STheme.color.primary} >Cantidad</SText>
                                </SView>
                                <SHr height={5} />
                                <SView col={"xs-12"} center   >
                                    <SView col={"xs-6"} center style={{ height: 40, backgroundColor: STheme.color.card, borderRadius: 6 }}>
                                        <SText fontSize={14} font={"Roboto"}   > {this.auxPedido.cantidad ?? 0} </SText>
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
                        <SText fontSize={16} font={"Roboto"} bold>{this.auxPedido.delivery == 0 ? "Recoger del lugar" : "Envio a domicilio"}</SText>
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
                        <SText fontSize={15} font={"Roboto"} >Bs. {SMath.formatMoney((this.auxPedido.pack?.precio ?? 0) * this.auxPedido.cantidad)}</SText>
                    </SView>
                    <SHr height={10} />
                    <SView col={"xs-6"} >
                        <SText style={{ textAlign: "justify" }} fontSize={15} font={"Roboto"} >Envío</SText>
                    </SView>
                    <SView col={"xs-6"} style={{ alignItems: "flex-end" }}>
                        <SText fontSize={15} font={"Roboto"} >{"Bs. " + SMath.formatMoney(this.auxPedido.delivery)}</SText>
                    </SView>
                    <SHr height={10} />
                    <SView col={"xs-12"} style={{ borderBottomWidth: 1, borderColor: STheme.color.lightGray }}></SView>
                    <SHr height={10} />
                    <SView col={"xs-6"} >
                        <SText style={{ textAlign: "justify" }} fontSize={15} font={"Roboto"} bold>Total:</SText>
                    </SView>
                    <SView col={"xs-6"} style={{ alignItems: "flex-end" }}>
                        <SText fontSize={15} font={"Roboto"} bold >Bs. {SMath.formatMoney(((this.auxPedido.pack?.precio ?? 0) * this.auxPedido.cantidad) + parseFloat(this.auxPedido.delivery ?? 0))}</SText>
                    </SView>
                    <SHr height={15} />
                </SView>
            </SView>

        </>
    }

    getViewTipoPago() {
        return <>
            <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} center style={{ backgroundColor: STheme.color.white }}>
                <TipoPago callback={(resp) => { this.setState({ tipoPagoSeleccionado: resp.tipopago }); }} />
            </SView>
        </>
    }

    getViewFactura() {
        return <SForm
            ref={(form) => { this.form = form; }}
            col={"xs-11 sm-9 md-7 lg-5 xl-4"}
            center
            // inputProps={{ customStyle: "Calistenia" }}
            inputs={{
                nit: { label: "Nit" },
                business_name: { label: "Razon social" },
            }}
            onSubmit={(values) => {
                var usuario = this.props.state.usuarioReducer.usuarioLog;
                SSocket.sendPromise(
                    {
                        "component": "pedido",
                        "type": "select_pay_method",
                        "key_pedido": this.keyPedido,
                        "pay_method": this.state.tipoPagoSeleccionado,
                        "client": {
                            "name": usuario["Nombres"],
                            "last_name": usuario["Apellidos"],
                            "ci": usuario["ci"] ?? " ",
                            "phone": usuario["Telefono"],
                            "email": usuario["Correo"],
                            "bussiness_name": values["business_name"],
                            "nit": values["nit"]
                        }
                    }
                ).then((resp) => {
                    alert("exito");
                    SNavigation.navigate("pedido/mensajeSolicitud", { key_pedido: this.keyPedido });
                    SPopup.close("confirmar");
                }).catch((err) => {
                    alert("error");
                    SPopup.close("confirmar");
                });
            }} />
    }

    popupConfirmacion() {
        return <>
            <SView width={362} height={216} center row style={{ borderRadius: 8 }} withoutFeedback backgroundColor={STheme.color.background}>
                <SHr height={50} />
                <SView col={"xs-9"} center>
                    <SText color={STheme.color.darkGray} style={{ fontSize: 20 }} bold center >¿Estás seguro que deseas realizar este pedido?</SText>
                </SView>
                <SHr height={20} />
                <SView col={"xs-11"} row center>
                    <SView col={"xs-6"} center>
                        <SView width={140} height={44} center border={STheme.color.primary} style={{ borderRadius: 8 }} onPress={() => { SPopup.close("confirmar"); }}  >
                            <SText fontSize={14} color={STheme.color.primary} bold>No, cancelar</SText>
                        </SView>
                    </SView>
                    <SView col={"xs-6"} center>
                        <SView width={140} height={44} center backgroundColor={STheme.color.primary} style={{ borderRadius: 8 }}
                            onPress={() => { this.form.submit() }}>
                            <SText fontSize={14} color={STheme.color.white} bold >Sí, Confirmar</SText>
                        </SView>
                    </SView>
                </SView>
                <SHr height={50} />
            </SView>
        </>
    }

    render() {
        return (
            <>
                <SPage center hidden>
                    <SView col={"xs-12"} row backgroundColor={STheme.color.card} center>

                        {/* <SText>{this.state.pedido_en_curso?.key}</SText> */}
                        <SHr height={30} />
                        {this.getViewDetalle()}
                        <SHr height={18} />
                        {this.getViewTipoPago()}
                        <SHr height={18} />
                        {/* {this.getViewFactura()} */}
                        <SHr height={40} />
                        <PButtom fontSize={20} onPress={() => {
                            console.log("aqui " + this.state.tipoPagoSeleccionado);
                            if (this.state.tipoPagoSeleccionado == null) {
                                alert("Seleccione un tipo de pago");
                                return;
                            }
                            SPopup.open({ key: "confirmar", content: this.popupConfirmacion() });
                        }}>CONFIRMAR</PButtom>
                        <SHr height={40} />
                    </SView>
                    <FloatButtomBack onPress={() => {

                        SStorage.removeItem("pedido_en_curso");
                        SNavigation.goBack();
                    }} />

                </SPage >
            </>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Confirmar);