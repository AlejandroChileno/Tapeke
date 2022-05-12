import React from 'react';
import { connect } from 'react-redux';
import { SButtom, SGradient, SHr, SImage, SLoad, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import pedido from '../index';
import Parent from '../index';

class Detalle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.pedidoId = SNavigation.getParam("key_pedido");
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
        this.data = pedido.Actions.getByKey(this.pedidoId, this.props);
        if (!this.data) {
            return this.error();
        }

        // alert(JSON.stringify(this.data.fecha));

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
                            <SView center col={"xs-2"} backgroundColor={"#9B060C"} height={85} style={{ borderRadius: 8, overflow: 'hidden', }}>
                                <SImage src={require('../../../../../Assets/img/perfil.jpg')} style={{
                                    width: "100%",
                                    position: "relative",
                                    resizeMode: "cover"
                                }} />
                            </SView>
                            <SView col={"xs-10"} row >
                                <SView col={"xs-1"}  >
                                </SView>
                                <SView col={"xs-11"} row >
                                    <SView col={"xs-12"} >
                                        <SText font={"Roboto"} color={STheme.color.text} fontSize={16} style={{ fontWeight: "bold" }}  >María Tellez Mendoza</SText>
                                    </SView>
                                    <SHr height={10} />
                                    <SView col={"xs-6"} style={{ justifyContent: 'flex-start', }}>
                                        <SText color={STheme.color.darkGray} fontSize={16} font={"Roboto"} style={{ fontWeight: "bold" }}>73138256 </SText>
                                    </SView>
                                </SView>
                                <SHr height={5} />
                            </SView>
                        </SView>
                        <SHr height={18} />
                    </SView>
                    <SHr height={18} />
                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center row style={{ backgroundColor: STheme.color.white }}>
                        <SView col={"xs-11"} row center>
                            <SView col={"xs-12"}>
                                <SHr height={15} />
                                <SText fontSize={18} font={"Roboto"} style={{ fontWeight: "bold" }} color={STheme.color.darkGray}>Detalle de pedido</SText>

                                {/* <SText fontSize={18} font={"Roboto"} style={{ fontWeight: "bold" }} color={STheme.color.darkGray}>Detalle del pedido {"dato " + this.data.fecha}</SText> */}
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
                                        <SText color={STheme.color.text} fontSize={14} style={{ fontWeight: "bold" }}  >{this.auxRestaurante?.nombre}Veggie Garden - Gran Via</SText>
                                    </SView>
                                    <SHr height={15} />
                                    <SView col={"xs-12"} >

                                        <SView col={"xs-6"} style={{ justifyContent: 'flex-start', }}>
                                            <SText fontSize={14} font={"Roboto"} color={STheme.color.primary} fontWeight> Precio</SText>
                                            <SHr height={5} />
                                            <SText fontSize={20} font={"Roboto"} style={{ fontWeight: "bold" }}>Bs. 15.00 </SText>
                                        </SView>
                                        <SView col={"xs-6"} center row>
                                            <SView col={"xs-12"} center>
                                                <SText fontSize={14} font={"Roboto"} color={STheme.color.primary} >Cantidad</SText>
                                            </SView>
                                            <SHr height={5} />
                                        </SView>
                                    </SView>

                                </SView>
                                <SHr height={5} />
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
                                <SText fontSize={15} font={"Roboto"} >Bs. 15.00</SText>
                            </SView>
                            <SHr height={10} />
                            <SView col={"xs-6"} >
                                <SText style={{ textAlign: "justify" }} fontSize={15} font={"Roboto"} >Envío</SText>
                            </SView>
                            <SView col={"xs-6"} style={{ alignItems: "flex-end" }}>
                                <SText fontSize={15} font={"Roboto"} >Bs. 10.00</SText>
                            </SView>
                            <SHr height={10} />
                            <SView col={"xs-12"} style={{ borderBottomWidth: 1, borderColor: STheme.color.lightGray }}></SView>
                            <SHr height={10} />
                            <SView col={"xs-6"} >
                                <SText style={{ textAlign: "justify", fontWeight: "bold" }} fontSize={15} font={"Roboto"} >Total:</SText>
                            </SView>
                            <SView col={"xs-6"} style={{ alignItems: "flex-end" }}>
                                <SText fontSize={15} font={"Roboto"} style={{ fontWeight: "bold" }} >Bs. 25.00</SText>
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
                            <SView center col={"xs-2"} backgroundColor={"#9B060C"} height={85} style={{ borderRadius: 8, overflow: 'hidden', }}>
                                <SImage src={require('../../../../../Assets/img/perfil2.jpg')} style={{
                                    width: "100%",
                                    position: "relative",
                                    resizeMode: "cover"
                                }} />
                            </SView>
                            <SView col={"xs-10"} row >
                                <SView col={"xs-1"}  >
                                </SView>
                                <SView col={"xs-11"} row >
                                    <SView col={"xs-12"} >
                                        <SText font={"Roboto"} color={STheme.color.text} fontSize={16} style={{ fontWeight: "bold" }}  >Juan Ramos</SText>
                                    </SView>
                                    <SHr height={10} />
                                    <SView col={"xs-6"} style={{ justifyContent: 'flex-start', }}>
                                        <SText color={STheme.color.darkGray} fontSize={16} font={"Roboto"} style={{ fontWeight: "bold" }}>63524116 </SText>
                                    </SView>
                                </SView>
                                <SHr height={5} />
                            </SView>
                        </SView>
                        <SHr height={18} />
                    </SView>
                    <SHr height={18} />
                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center style={{ backgroundColor: STheme.color.white }}>
                        <SHr height={40} />

                        <SButtom style={{ backgroundColor: STheme.color.primary, width: 300, fontSize: 40, borderRadius: 8, }} onPress={() => { }} > ENTREGADO </SButtom>


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