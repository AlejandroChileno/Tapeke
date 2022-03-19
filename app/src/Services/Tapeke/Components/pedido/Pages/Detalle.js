import React from 'react';
import { connect } from 'react-redux';
import { SMapView, SMarker, SHr, SPage, SText, SView, SIcon, STheme, SImage, SGradient, SForm, SNavigation, SLoad } from 'servisofts-component';
import PButtom from '../../../../../Components/PButtom';
import restaurante from '../../restaurante';
import Parent from '../index';
class Detalle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            precio: 15,
            cantidad: 1,
            disponible: 5,
            envio: 0,
        };
        this.key_restaurante = SNavigation.getParam('key');

    }



    tipoEntrega() {
        return <>
            <SView col={"xs-11"}>
                <SHr height={15} />
                <SText fontSize={18} font={"Roboto"} style={{ fontWeight: "bold" }}>Tipo de entrega</SText>
                <SHr height={20} />
                <SView col={"xs-12"} row style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 6 }}
                // onPress={() => { SNavigation.navigate(this.setState({ envio: 0 })) }}
                >
                    <SView col={"xs-2"} center >
                        <SView width={18} height={18} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 25 }}
                            backgroundColor={this.state.envio != 0 ? "transparent" : "red"}

                        ></SView>
                    </SView>
                    <SView col={"xs-10"} row
                        onPress={() => {
                            // if (this.state.envio <= 0) return;
                            this.setState({ envio: 0});
                        }}


                    >
                        <SHr height={15} />
                        <SText fontSize={18} font={"Roboto"} style={{ fontWeight: "bold" }}>Recoger del lugar</SText>
                        <SText fontSize={14} font={"Roboto"} >¡Se encuentra a 400m de tu ubicación!</SText>
                        <SHr height={15} />
                        <SView col={"xs-6"} >
                        </SView>
                        <SView col={"xs-6"} style={{ alignItems: "flex-end" }} row
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
                <SView col={"xs-12"} row style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 6 }}

                // onPress={() => { SNavigation.navigate(this.setState({ envio: this.state.envio - 5 })) }}

                // onPress={() => { SNavigation.navigate(this.setState({ envio: this.state.envio + 5 })) }}
                >
                    <SView col={"xs-2"} center >
                        <SView width={18} height={18} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 25 }}
                            backgroundColor={this.state.envio != 0 ? "red" : "transparent"}
                        ></SView>
                    </SView>
                    <SView col={"xs-10"}

                        onPress={() => {
                            // if (this.state.envio >= 5) return;
                            this.setState({ envio: 1});
                        }}


                    >
                        <SHr height={15} />
                        <SText fontSize={18} font={"Roboto"} style={{ fontWeight: "bold" }}>Envío a domicilio</SText>
                        <SText fontSize={14} font={"Roboto"} >Costo del envío:</SText>
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
                                <SGradient colors={["#00000045", "#00000045",]} />
                            </SView>
                            <SView col={"xs-10"} row >
                                <SView col={"xs-1"}  >
                                </SView>
                                <SView col={"xs-11"} row >
                                    <SView col={"xs-12"} >
                                        <SText color={STheme.color.text} fontSize={14} style={{ fontWeight: "bold" }}  >{auxRestaurante.nombre}</SText>
                                    </SView>
                                    <SHr height={15} />
                                    <SView col={"xs-6"} style={{ justifyContent: 'flex-start', }}>
                                        <SText fontSize={14} font={"Roboto"} color={STheme.color.primary} fontWeight> Precio</SText>
                                        <SHr height={5} />
                                        <SText fontSize={20} font={"Roboto"} style={{ fontWeight: "bold" }}>{this.state.precio}Bs.</SText>
                                    </SView>
                                    <SView col={"xs-6"} center row>
                                        <SView col={"xs-12"} center>
                                            <SView width={114} height={26} center style={{ borderRadius: 8, backgroundColor: STheme.color.primary }}>
                                                <SText fontSize={12} font={"Roboto"} color={STheme.color.secondary} >  {this.state.disponible} disponible(s)</SText>
                                            </SView>
                                        </SView>
                                        <SHr height={10} />
                                        <SView col={"xs-3"} onPress={() => {
                                        }}>
                                            <SView width={50} height={50} center style={{ borderRadius: 8, backgroundColor: "#FFE0CF", borderRadius: 45 }}
                                                onPress={() => {
                                                    if (this.state.cantidad <= 1) return;
                                                    this.setState({ cantidad: this.state.cantidad - 1 });
                                                }}
                                            >
                                                <SText fontSize={35} color={STheme.color.primary}>-</SText>
                                            </SView>
                                        </SView>
                                        <SView col={"xs-6"} center >
                                            {/* {this.getForm()} */}
                                            <SText fontSize={35} color='red' > {this.state.cantidad} </SText>
                                        </SView>
                                        <SView col={"xs-3"} center onPress={() => {
                                        }}>
                                            <SView width={50} height={50} center style={{ borderRadius: 8, backgroundColor: STheme.color.primary, borderRadius: 45 }}
                                                onPress={() => {
                                                    if (this.state.cantidad >= this.state.disponible) return;
                                                    this.setState({ cantidad: this.state.cantidad + 1 });
                                                }}
                                            >
                                                <SText fontSize={35} color={STheme.color.white} center>+</SText>
                                            </SView>
                                        </SView>
                                    </SView>
                                </SView>
                                <SHr height={10} />
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
                                <SText fontSize={15} font={"Roboto"} >Bs. {(this.state.cantidad * 15)}</SText>
                            </SView>
                            <SHr height={10} />
                            <SView col={"xs-6"} >
                                <SText style={{ textAlign: "justify" }} fontSize={15} font={"Roboto"} >Envío</SText>
                            </SView>
                            <SView col={"xs-6"} style={{ alignItems: "flex-end" }}>
                                <SText fontSize={15} font={"Roboto"} >{this.state.envio}</SText>
                            </SView>
                            <SHr height={10} />
                            <SView col={"xs-12"} style={{ borderBottomWidth: 1, borderColor: STheme.color.lightGray }}></SView>
                            <SHr height={10} />
                            <SView col={"xs-6"} >
                                <SText style={{ textAlign: "justify", fontWeight: "bold" }} fontSize={15} font={"Roboto"} >Total</SText>
                            </SView>
                            <SView col={"xs-6"} style={{ alignItems: "flex-end" }}>
                                <SText fontSize={15} font={"Roboto"} style={{ fontWeight: "bold" }} >Bs. {(this.state.cantidad * 15) + this.state.envio}</SText>
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
                        SNavigation.navigate(Parent.component + "/confirmar", { key: this.key_restaurante, precio: this.state.precio, cantidad: this.state.cantidad, envio: this.state.envio, })
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