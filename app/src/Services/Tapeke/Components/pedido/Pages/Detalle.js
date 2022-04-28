import React from 'react';
import { connect } from 'react-redux';
import { SMapView, SMarker, SHr, SPage, SText, SView, SIcon, STheme, SImage, SGradient, SForm, SNavigation, SLoad, SMath, SUuid } from 'servisofts-component';
import PButtom from '../../../../../Components/PButtom';
import restaurante from '../../restaurante';
import Parent from '../index';
import costo_envio from '../../costo_envio';
import SSocket, { setProps } from 'servisofts-socket'


class Detalle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key_pedido: SUuid(),
            key_pack: null,

            precio: 15,
            cantidad: 1,
            disponible: 5,
            envio: false,
            delivery: "false",
        };
        this.key_restaurante = SNavigation.getParam('key');
        this.auxRestaurante = null;
    }

    componentDidMount() {
     
    }
    getCostoEnvio() {
        var data_costos = costo_envio.Actions.getAll(this.props);
        if (!data_costos) return <SLoad />;
        var distancia = this.auxRestaurante.distancia * 1000;
        var costo = { metro: 0, };
        Object.values(data_costos).map(obj => {
            if (distancia <= obj.metro && (costo.metro > obj.metro || costo.metro == 0)) {
                costo = obj;
                return;
            }
        })
        // return costo.monto ? SMath.formatMoney(costo.monto) : "No ";
        if (costo.monto) {
            this.costo_envio = costo;
            return <SText fontSize={14} font={"Roboto"} >Costo del envío: Bs. {SMath.formatMoney(costo.monto)} </SText>
        } else {
            return <SText fontSize={14} font={"Roboto"} >No hay costos de envio</SText>
        }
    }
    tipoEntrega(delivery) {
        return <>
            <SView col={"xs-11"} style={{ opacity: delivery == true ? 1 : 0.3 }}>
                <SHr height={15} />
                <SText fontSize={18} font={"Roboto"} style={{ fontWeight: "bold" }}>Tipo de entrega</SText>
                <SHr height={20} />
                <SView col={"xs-12"} row style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 6, }}  {...(delivery ? {
                    onPress: () => {
                        this.setState({ envio: false, delivery: "false" });
                    }
                } : {})} >
                    <SView col={"xs-2"} center flex>
                        <SView width={18} height={18} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 25 }}
                            backgroundColor={this.state.envio != false ? "transparent" : STheme.color.primary} ></SView>
                    </SView>
                    <SView col={"xs-10"} row >
                        <SHr height={15} />
                        <SText fontSize={18} font={"Roboto"} style={{ fontWeight: "bold" }}>Recoger del lugar </SText>
                        <SHr height={10} />
                        <SText fontSize={14} font={"Roboto"} >¡Se encuentra a {this.auxRestaurante.distancia} Km de tu ubicación!</SText>
                        <SHr height={15} />
                        <SView col={"xs-6"} >
                        </SView>
                        <SView col={"xs-6"} style={{ alignItems: "flex-end", }} row
                            onPress={() => {
                                //SNavigation.navigate(Parent.component + "/registro")
                            }}>
                            <SIcon name={'ComoLlegar'} height={26} width={26} />
                            <SText color={STheme.color.primary} fontSize={15} font={"Roboto"} style={{ fontWeight: "bold" }}>Cómo llegar {">"}</SText>
                        </SView>
                    </SView>
                    <SHr height={10} />
                </SView>
                <SHr height={15} />
                <SView col={"xs-12"} row style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 6 }}  {...(delivery ? {
                    onPress: () => {
                        if (this.costo_envio) {
                            if (this.costo_envio.monto) {
                                this.setState({ envio: this.costo_envio.monto, delivery: "true" })

                            }
                        }
                    }
                } : {})}>
                    <SView col={"xs-2"} center flex>
                        <SView width={18} height={18} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 25 }}
                            backgroundColor={this.state.envio != false ? STheme.color.primary : "transparent"} ></SView>
                    </SView>
                    <SView col={"xs-10"} >
                        <SHr height={15} />
                        <SText fontSize={18} font={"Roboto"} style={{ fontWeight: "bold" }}>Envío a domicilio</SText>
                        <SHr height={30} />
                        {this.getCostoEnvio()}
                        <SHr height={15} />
                    </SView>
                    <SHr height={10} />
                </SView>
                <SHr height={15} />
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

    ejecutar() {

        this.aux = restaurante.Actions.getByKeyDetalle(this.key_restaurante, this.props)
        if (!this.aux) return alert("No se encontró el pack");



        SSocket.sendPromise(
            {
                "component": "pedido",
                "version": "1.0",
                "key_pedido": this.state.key_pedido,
                "type": "registro",
                "estado": "cargando",
                "key_usuario": this.props.state.usuarioReducer.usuarioLog.key,
                "data": {
                    "key_pack": this.aux.pack.key,
                    "cantidad": this.state.cantidad,
                    "delivery": this.state.delivery,
                    "fecha": this.auxRestaurante.horario.fecha,
                    "direccion": {
                        "key_direccion_usuario": this.props.state.direccion_usuarioReducer.miDireccion.key,
                    }
                }
            }

        ).then((resp) => {
            this.state.key_pedido = SUuid();
            SNavigation.navigate(Parent.component + "/confirmar", { keyPedido: resp.data.key})
            // console.log("SPromise ", resp);
        }).catch((err) => {
            //  SNavigation.navigate(Parent.component + "/confirmar", { keyPedido: this.state.key_pedido })
            // console.log("SPromiseerror ", err);
        });

    }



    render() {
        this.auxRestaurante = restaurante.Actions.getByKeyDetalle(this.key_restaurante, this.props)
        if (!this.auxRestaurante) return <SLoad />

        // this.setState({ key_pack: "aqui viene pack" })

        return (
            <SPage center>
                <SView col={"xs-12"} row backgroundColor={STheme.color.card} center>
                    <SHr height={18} />
                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center row style={{ backgroundColor: STheme.color.white }}>
                        <SView col={"xs-11"} row center>
                            <SView col={"xs-12"}>
                                <SHr height={15} />
                                <SText fontSize={18} font={"Roboto"} style={{ fontWeight: "bold" }}>Detalle pedido  {this.state.delivery} {this.auxRestaurante.pack.key}      </SText>
                                <SHr height={15} />
                            </SView>
                            <SView col={"xs-12"} height={90} row center>

                                <SView center width={85} backgroundColor={"#9B060C"} height={85} style={{ borderRadius: 8, overflow: 'hidden', }}>


                                    <SImage src={`${SSocket.api.root}restaurante/${this.key_restaurante}`} style={{
                                        width: "100%",
                                        // height: 216,
                                        position: "relative",
                                        resizeMode: "cover"
                                    }} />
                                    <SGradient colors={["#00000045", "#00000045",]} />
                                </SView>

                                <SView row flex height={85} border={'transparent'} >

                                    <SView col={"xs-12"} row >
                                        <SView col={"xs-12"} >
                                            <SText color={STheme.color.text} fontSize={14} style={{ fontWeight: "bold" }}  >{this.auxRestaurante?.nombre}</SText>
                                        </SView>
                                        <SHr height={15} />
                                        <SView col={"xs-5.5"} style={{ justifyContent: 'flex-start', }}>
                                            <SText fontSize={14} font={"Roboto"} color={STheme.color.primary} fontWeight> Precio</SText>
                                            <SHr height={5} />
                                            <SText fontSize={20} font={"Roboto"} style={{ fontWeight: "bold" }}>Bs. {SMath.formatMoney(this.auxRestaurante.pack?.precio ?? 0)}</SText>
                                        </SView>






                                        <SView col={"xs-6.5"} center row   >
                                            <SView col={"xs-12"} center>
                                                <SView width={114} height={26} center style={{ borderRadius: 8, backgroundColor: STheme.color.primary }}>
                                                    <SText fontSize={12} font={"Roboto"} color={STheme.color.secondary} >  {this.auxRestaurante.pack?.cantidad ?? 0} disponible(s)</SText>
                                                </SView>
                                            </SView>
                                            <SHr height={10} />
                                            <SView width={34} border={'transparent'} onPress={() => {
                                            }}>
                                                <SView width={34} height={34} center style={{ backgroundColor: "#FFE0CF", borderRadius: 17 }}
                                                    onPress={() => {
                                                        if (this.state.cantidad <= 1) return;
                                                        this.setState({ cantidad: this.state.cantidad - 1 });
                                                    }}
                                                >
                                                    <SText height={50} fontSize={32} color={STheme.color.primary}>-</SText>
                                                </SView>
                                            </SView>
                                            <SView flex row center >
                                                {/* {this.getForm()} */}
                                                <SText fontSize={35} color={STheme.color.text} center > {this.state.cantidad}</SText>
                                            </SView>
                                            <SView width={34} center border={'transparent'} onPress={() => {
                                            }}>
                                                <SView width={34} height={34} center style={{ backgroundColor: STheme.color.primary, borderRadius: 17 }}
                                                    onPress={() => {
                                                        if (this.state.cantidad >= this.auxRestaurante.pack?.cantidad) return;
                                                        this.setState({ cantidad: this.state.cantidad + 1 });
                                                    }}
                                                >
                                                    <SText height={50} fontSize={32} color={STheme.color.white}   >+</SText>
                                                </SView>
                                            </SView>
                                        </SView>
                                    </SView>
                                    <SHr height={10} />
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
                                <SText style={{ textAlign: "justify" }} fontSize={15} font={"Roboto"} >Total</SText>
                            </SView>
                            <SView col={"xs-6"} style={{ alignItems: "flex-end" }}>
                                <SText fontSize={15} font={"Roboto"} >Bs. {SMath.formatMoney((this.state.cantidad * (this.auxRestaurante.pack?.precio ?? 0)))}</SText>
                            </SView>
                            <SHr height={10} />
                            <SView col={"xs-6"} >
                                <SText style={{ textAlign: "justify" }} fontSize={15} font={"Roboto"} >Envío</SText>
                            </SView>
                            <SView col={"xs-6"} style={{ alignItems: "flex-end" }}>
                                <SText fontSize={15} font={"Roboto"} >{this.state.envio ? "Bs. " + SMath.formatMoney(this.state.envio) : null}</SText>
                            </SView>
                            <SHr height={10} />
                            <SView col={"xs-12"} style={{ borderBottomWidth: 1, borderColor: STheme.color.lightGray }}></SView>
                            <SHr height={10} />
                            <SView col={"xs-6"} >
                                <SText style={{ textAlign: "justify", fontWeight: "bold" }} fontSize={15} font={"Roboto"} >Total</SText>
                            </SView>
                            <SView col={"xs-6"} style={{ alignItems: "flex-end" }}>
                                <SText fontSize={15} font={"Roboto"} style={{ fontWeight: "bold" }} >Bs. {(this.state.cantidad * (this.auxRestaurante.pack?.precio ?? 0)) + this.state.envio}</SText>
                            </SView>
                            <SHr height={15} />
                        </SView>
                    </SView>
                    <SHr height={18} />
                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center style={{ backgroundColor: STheme.color.white }}>
                        {this.tipoEntrega(this.auxRestaurante?.delivery)}
                    </SView>
                    <SHr height={18} />
                    <SHr height={40} />
                    <PButtom fontSize={20} onPress={() => {
                        this.ejecutar();

                        // SNavigation.navigate(Parent.component + "/confirmar", { key: this.key_restaurante, cantidad: this.state.cantidad, envio: this.state.envio, })
                    }}>REALIZAR PEDIDO</PButtom>
                    <SHr height={40} />
                </SView>
            </SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Detalle);