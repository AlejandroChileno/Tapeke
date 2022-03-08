import React from 'react';
import { connect } from 'react-redux';
import { SMapView, SMarker, SHr, SPage, SText, SView, SIcon, STheme, SImage, SGradient } from 'servisofts-component';
import PButtom from '../../../../../Components/PButtom';
class Detalle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    tipoEntrega() {
        return <>
            <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"}>
                <SHr height={15} />
                <SText fontSize={18} font={"Roboto"} style={{ fontWeight: "bold" }}>Tipo de entrega</SText>
                <SHr height={20} />
                <SView col={"xs-12"} row style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 6 }}>
                    <SView col={"xs-2"} center >
                    </SView>
                    <SView col={"xs-10"}  >
                        <SHr height={15} />
                        <SText fontSize={18} font={"Roboto"} style={{ fontWeight: "bold" }}>Recoger del lugar</SText>
                        <SText fontSize={14} font={"Roboto"} >¡Se encuentra a 400m de tu ubicación!</SText>
                        <SHr height={15} />
                        <SView col={"xs-12"} style={{ alignItems: "flex-end" }} row
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
                <SView col={"xs-12"} row style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 6 }}>
                    <SView col={"xs-2"} center >
                    </SView>
                    <SView col={"xs-10"}  >
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

    recoger() {
        return <>
            <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center>
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row>
                    <SHr height={15} />
                    <SText fontSize={12} font={"Roboto"} style={{ fontWeight: "bold" }}>RECOGE TU PACK AQUÍ</SText>
                    <SHr height={15} />
                </SView>
                <SView col={"xs-12"} height={200}>
                    <SMapView initialRegion={
                        {
                            // latitude: data.lat,
                            // longitude: data.lng,
                            latitude: -17.808690397665742,
                            longitude: -63.16250034566757,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        preventCenter>
                        <SMarker lat={-17.808690397665742} lng={-63.16250034566757} />
                    </SMapView>
                </SView>
                <SView center col={"xs-12"} row style={{ borderBottomWidth: 1, borderTopWidth: 1, borderColor: STheme.color.lightGray }}>
                    <SView col={"xs-6"} row center style={{ borderRightWidth: 1, borderColor: STheme.color.lightGray }}
                        onPress={() => {
                            //SNavigation.navigate(Parent.component + "/registro")
                        }}>
                        <SHr height={20} />
                        <SIcon name={'Detalle'} height={17} width={22} />
                        <SText center color={STheme.color.primary} fontSize={15} font={"Roboto"} style={{ fontWeight: "bold" }}>Detalles {">"}</SText>
                        <SHr height={20} />
                    </SView>
                    <SView col={"xs-6"} center row
                        onPress={() => {
                            //SNavigation.navigate(Parent.component + "/registro")
                        }}>
                        <SIcon name={'ComoLlegar'} height={26} width={26} />
                        <SText color={STheme.color.primary} fontSize={15} font={"Roboto"} style={{ fontWeight: "bold" }}>Cómo llegar {">"}</SText>
                    </SView>
                </SView>
                <SView col={"xs-12"} center row >
                    <SHr height={30} />
                    <SView col={"xs-4"} center >
                        <SIcon name={'Bicicleta'} height={37} width={52} />
                    </SView>
                    <SView col={"xs-8"} center >
                        <SText color={STheme.color.gray} fontSize={15} font={"Roboto"} style={{ fontWeight: "bold" }}>Este establecimiento te proporcionará todo lo necesario para llevarte tu pack a casa.</SText>
                    </SView>
                    <SHr height={30} />
                </SView>
            </SView>
        </>
    }

    render() {
        return (
            <SPage center  >
                <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center row >
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
                        <SView col={"xs-1"} row >

                        </SView>
                        <SView col={"xs-11"} row >
                            <SView col={"xs-12"} >
                                <SText color={STheme.color.text} fontSize={14} style={{ fontWeight: "bold" }}  >Veggie Garden - Gran Via</SText>
                            </SView>
                            <SHr height={15} />
                            <SView col={"xs-6"} height={20} row center style={{ justifyContent: 'flex-start', }}>
                                <SText fontSize={14} font={"Roboto"} color={STheme.color.primary} fontWeight> Precio</SText>
                                <SHr height={5} />
                                <SText fontSize={20} font={"Roboto"} style={{ fontWeight: "bold" }}>15 Bs.</SText>
                            </SView>
                            <SView col={"xs-6"} height={20} row center style={{ justifyContent: 'flex-end', }}>
                                <SView width={114} height={26} center style={{ borderRadius: 8, overflow: 'hidden', backgroundColor: STheme.color.primary }}>
                                    <SText fontSize={12} font={"Roboto"} color={STheme.color.secondary} >4 disponible(s)</SText>
                                </SView>
                            </SView>
                        </SView>
                        <SHr height={10} />
                    </SView>
                    <SHr height={15} />
                    <SView col={"xs-12"} style={{ borderBottomWidth: 1, borderColor: STheme.color.lightGray }}></SView>

                </SView>
                <SHr height={18} />

                <SView height={18} col={"xs-12"} backgroundColor={STheme.color.card} />
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row>
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
                        <SText fontSize={15} font={"Roboto"} >0</SText>
                    </SView>
                    <SHr height={10} />
                    <SView col={"xs-12"} style={{ borderBottomWidth: 1, borderColor: STheme.color.lightGray }}></SView>
                    <SHr height={10} />
                    <SView col={"xs-6"} >
                        <SText style={{ textAlign: "justify", fontWeight: "bold" }} fontSize={15} font={"Roboto"} >Total</SText>
                    </SView>
                    <SView col={"xs-6"} style={{ alignItems: "flex-end" }}>
                        <SText fontSize={15} font={"Roboto"} style={{ fontWeight: "bold" }} >Bs. 15.00</SText>
                    </SView>
                    <SHr height={15} />
                </SView>
                <SView height={18} col={"xs-12"} backgroundColor={STheme.color.card} />
                {this.tipoEntrega()}
                <SView height={18} col={"xs-12"} backgroundColor={STheme.color.card} />
                {this.recoger()}
                <SView height={18} col={"xs-12"} backgroundColor={STheme.color.card} />
                <SHr height={40} />
                <PButtom fontSize={20} onPress={() => {
                }}>RESERVAR</PButtom>
                <SHr height={40} />
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Detalle);