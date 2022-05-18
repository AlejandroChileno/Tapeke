import React from 'react';
import { connect } from 'react-redux';
import { SButtom, SGradient, SHr, SIcon, SImage, SLoad, SMath, SNavigation, SPage, SText, STheme, SView, SPopup } from 'servisofts-component';
import usuario from '../../../../Usuario/Components/usuario';
import pedido from '../index';
import Parent from '../index';
import SSocket from 'servisofts-socket';

class Detalle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        // this.pedidoId = SNavigation.getParam("key_pedido");
        this.pedidoId = "8a6f5d23-8c91-47bc-9a18-ec2314b29b0a"
    }

    error() {
        return <SView col={"xs-12"} center style={{ padding: 5 }} >
            <SHr height={100} />
            <SLoad />
            <SText font={"LondonTwo"} fontSize={84}>NO EXISTE</SText>
            <SText font={"LondonTwo"} fontSize={84}>PEDIDO</SText>
        </SView>
    }

    // TODO: RICKY TIENES QUE PASAR BIEN EL DETALLE DEL PEDIDO DESDE EL BACKEND
    render() {
        this.data = pedido.Actions.getDetalle(this.pedidoId, this.props);
        // if (!this.data) {
        //     return this.error();
        // }
        if (!this.data) return <SLoad />
        this.dataUsuario = usuario.Actions.getByKey(this.data.key_usuario, this.props);
        if (!this.dataUsuario) return <SLoad />


        console.log("oficial " + JSON.stringify(this.data));
        console.log("CLiente " + JSON.stringify(this.dataUsuario.Nombres + " " + this.dataUsuario.Apellidos));
        console.log("teelfono " + JSON.stringify(this.dataUsuario.Telefono));
        console.log("alvaro " + JSON.stringify(this.data.key_pack));
        console.log("direccion " + JSON.stringify(this.data.key_pedido_direccion));
        // console.log(JSON.stringify(this.data.fecha));

        // this.auxRestaurante = pedido.Actions.getByKey(this.orale, this.props);
        // if (!this.auxRestaurante) return <SLoad />
        // var reducer = this.props.state[pedido.component + "Reducer"];
        // var reducer = this.props.state[Parent.component + "Reducer"];
        // if (reducer.type == "registro") {
        //     if (reducer.estado == "exito") {
        //         reducer.estado = "";
        //         this.key = reducer.lastRegister?.key;
        //         SPopup.close("confirmar");
        //         SNavigation.navigate("pedido/mensajeSolicitud", { key: this.key })

        //     } else if (reducer.estado == "error") {
        //         reducer.estado = ""
        //         SPopup.close("confirmar");
        //         SPopup.alert(reducer.error)
        //     }
        // }
        // alert(this.auxRestaurante.key);

        var reducer = this.props.state[Parent.component + "Reducer"];
        if (reducer.type == "entregar" ) {
            if (reducer.estado == "exito") {
                reducer.estado = "";
                SNavigation.goBack();
            }
        }

        //this.data.state = "no_recogido"
        var mensaje2 = "";
        if (this.data.state == "en_camino") {
            mensaje2 = "El pedido esta en camino."
        }
        if (this.data.state == "entregado") {
            mensaje2 = "El pedido ya fue entregado."
        }
        if (this.data.state == "no_recogido") {
            mensaje2 = "El pedido no puede ser recogido por estar fuera del tiempo de entrega."
        }
        return (
            <SPage center>

                <SView col={"xs-12"} row backgroundColor={STheme.color.card} center>
                    <SHr height={18} />
                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center style={{ backgroundColor: STheme.color.white }}>
                        <SView col={"xs-11"} row center>
                            <SView col={"xs-12"}>
                                <SHr height={15} />
                                <SText fontSize={18} font={"Roboto"} style={{ fontWeight: "bold" }} color={STheme.color.darkGray}>Cliente</SText>
                                <SHr height={15} />
                            </SView>
                            <SView col={"xs-12"} row >
                                <SView center width={70} backgroundColor={"#9B060C"} height={70} style={{ borderRadius: 8, overflow: 'hidden', }}>
                                    <SImage src={`${SSocket.api.root}usuario/${this.data.key_usuario}`} style={{ width: "100%", position: "relative", resizeMode: "cover" }} />
                                </SView>
                                <SView flex center row >
                                    <SView col={"xs-1"}  >
                                    </SView>
                                    <SView col={"xs-11"} row >
                                        <SView col={"xs-12"} >
                                            <SText font={"Roboto"} color={STheme.color.text} fontSize={16} style={{ fontWeight: "bold" }}  >{this.dataUsuario.Nombres + " " + this.dataUsuario.Apellidos}</SText>
                                        </SView>
                                        <SHr height={10} />
                                        <SView col={"xs-12"} style={{ justifyContent: 'flex-start', }}>
                                            <SText color={STheme.color.darkGray} fontSize={16} font={"Roboto"} style={{ fontWeight: "bold" }}>Telf: {this.dataUsuario.Telefono}</SText>
                                        </SView>
                                    </SView>
                                    <SHr height={5} />
                                </SView>
                            </SView>
                        </SView>
                        <SHr height={18} />
                    </SView>

                    <SHr height={18} />

                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center row style={{ backgroundColor: STheme.color.white }}>
                        <SView col={"xs-11"} row center>
                            <SView col={"xs-12"}>
                                <SHr height={15} />
                                <SText fontSize={18} font={"Roboto"} style={{ fontWeight: "bold" }} color={STheme.color.darkGray}>Detalle del pedido</SText>
                                <SHr height={15} />
                            </SView>
                            {/* <SHr height={15} /> */}
                            <SView col={"xs-12"} row center>
                                <SView width={84} height={84} center backgroundColor={"red"} style={{ borderRadius: 8, overflow: 'hidden', }}>
                                    <SImage src={`${SSocket.api.root}restaurante/${this.data.restaurante.key}`} style={{ width: "100%", position: "relative", resizeMode: "cover" }} />
                                </SView>
                                <SView flex center row >
                                    <SView col={"xs-1"}  >
                                    </SView>
                                    <SView col={"xs-11"} row >
                                        <SView col={"xs-12"} >
                                            <SText color={STheme.color.text} fontSize={14} bold  >{this.data.restaurante?.nombre}</SText>
                                        </SView>
                                        <SHr height={15} />
                                        <SView col={"xs-6"} style={{ justifyContent: 'flex-start', }}>
                                            <SText fontSize={14} font={"Roboto"} color={STheme.color.primary} bold> Precio</SText>
                                            <SHr height={5} />
                                            <SText fontSize={20} font={"Roboto"} bold>Bs. {this.data.pack?.precio ?? 0} </SText>
                                        </SView>
                                        <SView col={"xs-6"} center row>
                                            <SView col={"xs-12"} center>
                                                <SText fontSize={14} font={"Roboto"} color={STheme.color.primary} >Cantidad</SText>
                                            </SView>
                                            <SHr height={5} />
                                            <SView col={"xs-12"} center   >
                                                <SView col={"xs-6"} center style={{ height: 40, backgroundColor: STheme.color.card, borderRadius: 6 }}>
                                                    <SText fontSize={14} font={"Roboto"}   > {this.data.cantidad ?? 0} </SText>
                                                </SView>
                                            </SView>
                                        </SView>
                                    </SView>
                                    <SHr height={5} />
                                </SView>
                            </SView>
                            <SHr height={18} />
                        </SView>
                    </SView>





                    <SHr height={18} />

                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} row center style={{ backgroundColor: STheme.color.white }}>
                        <SView col={"xs-11"} row center>
                            <SView col={"xs-12"}>
                                <SHr height={15} />
                                <SText fontSize={18} font={"Roboto"} style={{ fontWeight: "bold" }} color={STheme.color.darkGray}>Detalle de Compra</SText>
                                <SHr height={15} />
                            </SView>
                            <SHr height={15} />
                            <SView col={"xs-6"} >
                                <SText style={{ textAlign: "justify" }} fontSize={15} font={"Roboto"} >Total</SText>
                            </SView>
                            <SView col={"xs-6"} style={{ alignItems: "flex-end" }}>
                                <SText fontSize={15} font={"Roboto"} >Bs. {SMath.formatMoney((this.data.pack?.precio ?? 0) * this.data.cantidad)}</SText>
                            </SView>
                            <SHr height={10} />
                            <SView col={"xs-6"} >
                                <SText style={{ textAlign: "justify" }} fontSize={15} font={"Roboto"} >Envío</SText>
                            </SView>
                            <SView col={"xs-6"} style={{ alignItems: "flex-end" }}>
                                <SText fontSize={15} font={"Roboto"} >Bs.  {SMath.formatMoney(parseFloat(this.data.delivery ?? 0))}</SText>
                            </SView>
                            <SHr height={10} />
                            <SView col={"xs-12"} style={{ borderBottomWidth: 1, borderColor: STheme.color.lightGray }}></SView>
                            <SHr height={10} />
                            <SView col={"xs-6"} >
                                <SText style={{ textAlign: "justify", fontWeight: "bold" }} fontSize={15} font={"Roboto"} >Total:</SText>
                            </SView>
                            <SView col={"xs-6"} style={{ alignItems: "flex-end" }}>
                                <SText fontSize={15} font={"Roboto"} style={{ fontWeight: "bold" }} >Bs. {SMath.formatMoney(((this.data.pack?.precio ?? 0) * this.data.cantidad) + parseFloat(this.data.delivery ?? 0))}</SText>
                            </SView>
                            <SHr height={15} />
                        </SView>


                    </SView>
                    <SHr height={18} />

                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center style={{ backgroundColor: STheme.color.white }}>
                        <SView col={"xs-11"} row center>
                            <SView col={"xs-12"}>
                                <SHr height={15} />
                                <SText fontSize={18} font={"Roboto"} style={{ fontWeight: "bold" }} color={STheme.color.darkGray}>Conductor</SText>
                                <SHr height={15} />
                            </SView>
                            <SView col={"xs-12"} row >

                                <SView center width={70} height={70} backgroundColor={"transparent"} style={{ borderRadius: 8, overflow: 'hidden', }}>
                                    {/* <SImage src={`${SSocket.api.root}usuario/${this.data.key_usuario}`} style={{ width: "100%", position: "relative", resizeMode: "cover" }} /> */}
                                    <SIcon width={70} height={70} name={"PedDelivery"} fill={STheme.color.primary} />

                                </SView>
                                <SView flex center row >
                                    <SView col={"xs-1"}  >
                                    </SView>
                                    <SView col={"xs-11"} row >
                                        <SView col={"xs-12"} >
                                            <SText font={"Roboto"} color={STheme.color.text} fontSize={16} style={{ fontWeight: "bold" }}  >{this.dataUsuario.Nombres + " " + this.dataUsuario.Apellidos}</SText>
                                        </SView>
                                        <SHr height={10} />
                                        <SView col={"xs-12"} style={{ justifyContent: 'flex-start', }}>
                                            <SText color={STheme.color.darkGray} fontSize={16} font={"Roboto"} style={{ fontWeight: "bold" }}>Telf: {this.dataUsuario.Telefono} </SText>
                                        </SView>
                                    </SView>
                                    <SHr height={5} />
                                </SView>
                            </SView>
                        </SView>
                        <SHr height={18} />
                    </SView>


                    <SHr height={18} />
                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center style={{ backgroundColor: STheme.color.white }}>
                        <SHr height={40} />
                        {(this.data.state == "en_camino") || (this.data.state == "entregado") || (this.data.state == "no_recogido") ?
                            <SView col={"xs-11"} center backgroundColor={STheme.color.success} style={{ borderRadius: 4, overflow: 'hidden', }}>
                                <SHr height={20} />
                                <SView col={"xs-11"} >
                                    <SText font={"Roboto"} center fontSize={18} color={STheme.color.white}>MENSAJE: {mensaje2}</SText>
                                </SView>
                                <SHr height={20} />
                            </SView> :
                            <SButtom style={{ backgroundColor: STheme.color.primary, width: 300, fontSize: 40, borderRadius: 8, }}
                                onPress={() => {
                                    var mensaje = "";
                                    if (this.data.state != "listo") {
                                        switch (this.data.state) {
                                            case "pendiente_pago":
                                                mensaje = "Su pedido está pendiente de pago";
                                                break;
                                            case "pago_en_proceso":
                                                mensaje = "Su pedido está en procceso de pago";
                                                break;
                                            case "pagado":
                                                mensaje = "Su pedido está pagado";
                                                break;
                                            case "timeout_pago": //TODO: duda en el mesaje
                                                mensaje = "Su pedido está en espera de pago";
                                                break;
                                        }
                                        mensaje += " pero aún no está listo.";
                                        SPopup.alert(mensaje);
                                    } else {
                                        //componet pedido
                                        //type entregar
                                        //key_pedido estado cargando
                                        //alert()
                                        Parent.Actions.entregar(this.pedidoId, this.props);
                                        // SPopup.alert("Ya está listo y se puede entregar.");
                                    }
                                }} > ENTREGADO </SButtom>
                        }

                        <SHr height={40} />


                    </SView>
                </SView>
            </SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Detalle);