import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SForm, SHr, SLoad, SNavigation, SPage, SText, SView, SDate, SInput, SPopup, STheme, SImage, SMath, SIcon } from 'servisofts-component';
import Parent from '../../../restaurante'
// import Horario from '../../horario';
import Pack from '../../';
import Pedido from '../../../pedido';
import SSocket from 'servisofts-socket';
import PButtom from '../../../../../../Components/PButtom';

const QR_B64 = "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"


class Pagado extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
        this.key = SNavigation.getParam("key_pedido");
    }

    componentDidMount() {
        this.getQr()
    }
    getQr() {
        var content = `tapeke://pedido/${this.key}`;
        SSocket.sendPromise({
            "service": "sqr",
            "component": "qr",
            "type": "registro",
            "estado": "cargando",
            "data": {
                "image": QR_B64,
                "colorBackground": "#ffffff",
                "framework": "Rounded",
                "colorImageBackground": "#ffffff",
                "header": "Leaf",
                "colorHeader": "#FA790E",
                "body": "Default",
                "content": content,
                "colorBody": "#FA790E"
            }
        }).then((resp) => {
            if (resp.estado != "exito") return;
            this.setState({ data: resp.data })
        });
    }

    getImage() {
        if (!this.state.data) return <SLoad />
        return <SImage src={`data: image/png;base64,${this.state.data.b64}`} style={{
            width: "100%",
            height: "100%"
        }
        } />
    }


    render() {
        var reducer = this.props.state[Pack.component + "Reducer"];
        if (reducer.type == "registro" || reducer.type == "editar") {
            if (reducer.estado == "exito") {
                reducer.estado = "";
                SNavigation.goBack();
            }
        }

        let datas = {};
        datas = Pedido.Actions.getDetalle(this.key, this.props);

        // datas = Pedido.Actions.getAll(this.props);
        if (!datas) return <SLoad />

        return (
            <SPage title="Recoger del Lugar ok" >
                <SView col={"xs-12"} height backgroundColor={STheme.color.card} center>
                    <SHr height={18} />
                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center row style={{ backgroundColor: STheme.color.white }}>
                        <SView col={"xs-11"} row center>
                            <SView col={"xs-12"}>
                                <SHr height={15} />
                                <SText fontSize={18} font={"Roboto"} style={{ fontWeight: "bold" }}>Detalle pedido</SText>
                                <SHr height={15} />
                            </SView>
                            <SView col={"xs-12"} row backgroundColor={"transparent"} >
                                <SView center width={85} height={85} backgroundColor={"#eee"} style={{ borderRadius: 8, overflow: 'hidden', }}>
                                    <SImage src={`${SSocket.api.root}restaurante/${datas.restaurante?.key}`} style={{
                                        width: "100%",
                                        resizeMode: "cover"
                                    }} />
                                </SView>
                                <SView row flex height border={'transparent'} >
                                    <SView width={4} />
                                    <SView flex row >
                                        <SView col={"xs-12"} border={'transparent'}>
                                            <SText color={STheme.color.text} fontSize={14} style={{ fontWeight: "bold" }}  >{datas.restaurante?.nombre}</SText>
                                        </SView>
                                        <SHr height={6} />
                                        <SView col={"xs-6"} style={{ justifyContent: 'flex-start', }}>
                                            <SText fontSize={14} font={"Roboto"} color={STheme.color.primary} bold> Precio</SText>
                                            <SHr height={5} />
                                            <SText fontSize={20} font={"Roboto"} bold>Bs. {SMath.formatMoney(datas.pack?.precio ?? 0)}</SText>
                                        </SView>
                                        <SView col={"xs-6"} center row>
                                            <SView col={"xs-12"} center>
                                                <SText fontSize={14} font={"Roboto"} color={STheme.color.primary} >Cantidad</SText>
                                            </SView>
                                            <SHr height={5} />
                                            <SView col={"xs-12"} center   >
                                                <SView col={"xs-6"} center style={{ height: 40, backgroundColor: STheme.color.card, borderRadius: 6 }}>
                                                    <SText fontSize={14} font={"Roboto"}   >  {datas.cantidad ?? 0}</SText>
                                                </SView>
                                            </SView>
                                        </SView>
                                    </SView>
                                </SView>
                            </SView>

                            <SHr height={15} />
                            <SView col={"xs-12"} style={{ borderBottomWidth: 1, borderColor: STheme.color.lightGray }}></SView>
                            <SHr height={18} />
                        </SView>
                    </SView>
                    <SHr height={18} />

                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} row center style={{ backgroundColor: STheme.color.white }}>
                        <SView col={"xs-11"} row center>
                            <SHr height={15} />

                            <SView col={"xs-6"} >
                                <SText style={{ textAlign: "justify", fontWeight: "bold" }} fontSize={15} font={"Roboto"} >Total</SText>
                            </SView>
                            <SView col={"xs-6"} style={{ alignItems: "flex-end" }}>
                                <SText fontSize={15} font={"Roboto"} style={{ fontWeight: "bold" }} >Bs. {(datas.cantidad * (datas.pack?.precio ?? 0))}</SText>
                            </SView>
                            <SHr height={15} />
                        </SView>
                    </SView>
                    <SHr height={18} />
                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} row center style={{ backgroundColor: STheme.color.white }}>
                        <SView col={"xs-11"} center row flex border={"transparent"} >
                            <SHr height={40} />
                            <SView col={"xs-12"} border={'transparent'}>
                                <SHr height={20} />
                                <SText fontSize={16} center>El restaurante verificará tu pedido escaneando el código QR.</SText>
                            </SView>
                            <SHr height={40} />
                            <SView col={"xs-12"} height={350} border={'transparent'} >
                                {this.getImage(datas)}

                            </SView>
                            <SText fontSize={18} font={"Roboto"} color={STheme.color.primary} bold center >Hora de entrega: {datas?.horario?.hora_inicio} - {datas?.horario?.hora_fin}</SText>
                            <SHr height={10} />
                            <PButtom fontSize={20} onPress={() => {
                                SNavigation.navigate("pedido/usuario/entrega", { key_pedido: this.key});
                            }}>ESTADO PEDIDO</PButtom>
                            <SHr height={50} />
                        </SView>
                    </SView>
                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} row center style={{ backgroundColor: STheme.color.white }}>
                        <SView center col={"xs-12"} row style={{ borderBottomWidth: 1, borderTopWidth: 1, borderColor: STheme.color.lightGray }}>
                            <SView col={"xs-6"} row center style={{ borderRightWidth: 1, borderColor: STheme.color.lightGray }}
                                onPress={() => {
                                    SNavigation.navigate("restaurante/detalle", { key: datas.restaurante?.key });
                                }}>
                                <SHr height={20} />
                                <SIcon name={'Detalle'} height={17} width={22} />
                                <SText center color={STheme.color.primary} fontSize={15} font={"Roboto"} style={{ fontWeight: "bold" }}>Detalles {">"}</SText>
                                <SHr height={20} />
                            </SView>
                            <SView col={"xs-6"} center row
                                onPress={() => { SNavigation.navigate("restaurante/comollegar", { key: datas.restaurante?.key }); }}>
                                <SIcon name={'ComoLlegar'} height={26} width={26} />
                                <SText color={STheme.color.primary} fontSize={15} font={"Roboto"} style={{ fontWeight: "bold" }}>Cómo llegar {">"}</SText>
                            </SView>
                        </SView>
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
export default connect(initStates)(Pagado);