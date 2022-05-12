import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SGradient, SHr, SIcon, SImage, SLoad, SMapView, SMarker, SMath, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import restaurante from '../../restaurante';
class lista extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.key_restaurante = SNavigation.getParam('key_restaurante');
    }

    calificacion() {
        return <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} style={{ backgroundColor: STheme.color.white }} center>
            <SView col={"xs-11"}>
                <SHr height={15} />
                <SText fontSize={15} font={"Roboto"} style={{ fontWeight: "bold" }}>Qué piensan otros usuarios</SText>
                <SHr height={20} />
                <SView col={"xs-12"} row style={{ borderBottomWidth: 1, borderColor: STheme.color.lightGray }}>
                    <SView col={"xs-2"} center >
                        <SIcon name={'CalGusto'} height={40} width={40} />
                    </SView>
                    <SView col={"xs-10"}  >
                        <SText fontSize={15} font={"Roboto"} style={{ fontWeight: "bold" }}>A muchos les gusta este pack</SText>
                        <SText fontSize={13} font={"Roboto"} >El 91% han putuado 3 estrellas sobre 5.</SText>
                    </SView>
                    <SHr height={10} />
                </SView>
                <SHr height={15} />
                <SView col={"xs-12"} row style={{ borderBottomWidth: 1, borderColor: STheme.color.lightGray }}>
                    <SView col={"xs-2"} center >
                        <SIcon name={'CalServicio'} height={40} width={40} />
                    </SView>
                    <SView col={"xs-10"}  >
                        <SText fontSize={15} font={"Roboto"} style={{ fontWeight: "bold" }}>Buen servicio</SText>
                        <SText fontSize={13} font={"Roboto"} >El Servicio es genial.</SText>
                    </SView>
                    <SHr height={10} />
                </SView>
                <SHr height={15} />
                <SView col={"xs-12"} row >
                    <SView col={"xs-2"} center >
                        <SIcon name={'CalCalidad'} height={40} width={40} fill={"#ffffff"} />
                    </SView>
                    <SView col={"xs-10"}  >
                        <SText fontSize={15} font={"Roboto"} style={{ fontWeight: "bold" }}>Buen calidad</SText>
                        <SText fontSize={13} font={"Roboto"} >La calidad de la comida es muy buena</SText>
                    </SView>
                    <SHr height={10} />
                </SView>
                <SHr height={15} />
            </SView>
        </SView>
    }

    recoger() {
        var dataRestaurante = restaurante.Actions.getByKeyDetalle(this.key_restaurante, this.props)
        if (!dataRestaurante) return <SLoad />
        return <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} row center style={{ backgroundColor: STheme.color.white }}>
            <SView col={"xs-11"} style={{ backgroundColor: STheme.color.white }}>
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row>
                    <SHr height={15} />
                    <SText fontSize={12} font={"Roboto"} style={{ fontWeight: "bold" }}>RECOGE TU PACK AQUÍ</SText>
                    <SHr height={15} />
                </SView>
                <SView col={"xs-12"} height={200}>
                    <SMapView initialRegion={
                        {
                            latitude: dataRestaurante.latitude,
                            longitude: dataRestaurante.longitude,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        preventCenter>
                        <SMarker lat={dataRestaurante.latitude} lng={dataRestaurante.longitude}  >
                            <SIcon name="MarcadorMapa" width={20} height={30} />
                        </SMarker>
                    </SMapView>
                </SView>
                <SView center col={"xs-12"} row style={{ borderBottomWidth: 1, borderTopWidth: 1, borderColor: STheme.color.lightGray }}>
                    <SView col={"xs-6"} row center style={{ borderRightWidth: 1, borderColor: STheme.color.lightGray }} >
                        <SHr height={20} />
                        <SIcon name={'Detalle'} height={17} width={22} />
                        <SText center color={STheme.color.primary} fontSize={15} font={"Roboto"} style={{ fontWeight: "bold" }}>Detalles {">"}</SText>
                        <SHr height={20} />
                    </SView>
                    <SView col={"xs-6"} center row
                        onPress={() => { SNavigation.navigate("restaurante/comollegar", { key: this.key_restaurante }); }}>
                        <SIcon name={'ComoLlegar'} height={26} width={26} />
                        <SText color={STheme.color.primary} fontSize={15} font={"Roboto"} style={{ fontWeight: "bold" }}>Cómo llegar {">"}</SText>
                    </SView>
                </SView>
                {this.hayDelivery(dataRestaurante.delivery)}
            </SView>
        </SView>
    }

    hayDelivery(delivery) {
        if (delivery == true) {
            return <>
                <SView col={"xs-12"} center row  >
                    <SHr height={30} />
                    <SView col={"xs-4"} center >
                        <SIcon name={'Bicicleta'} height={37} width={52} />
                    </SView>
                    <SView col={"xs-8"} center >
                        <SText color={STheme.color.gray} fontSize={15} font={"Roboto"} style={{ fontWeight: "bold" }}>Este establecimiento te proporcionará todo lo necesario para llevarte tu pack a casa.</SText>
                    </SView>
                    <SHr height={30} />
                </SView>
            </>
        }
    }

    render() {
        var dataRestaurante = restaurante.Actions.getByKeyDetalle(this.key_restaurante, this.props)
        if (!dataRestaurante) return <SLoad />
        console.log("romeo ", dataRestaurante.pack.cantidad);
        return (
            <SPage title={'perfil '}  >
                <SView col={"xs-12"} center height>
                    <SView col={"xs-12  "} center >
                        <SView center col={"xs-12 sm-10 md-8 lg-6 xl-4  "} backgroundColor={"#9B060C"} height={216} >
                            <SImage src={`${SSocket.api.root}restaurante/${dataRestaurante.key}`} style={{ width: "100%", position: "relative", resizeMode: "cover" }} />
                            <SView center style={{ overflow: 'hidden', position: "absolute", zIndex: 9999, borderRadius: 30, left: 20, bottom: 20 }}
                                width={50} height={50} backgroundColor={STheme.color.white}>
                                <SImage src={`${SSocket.api.root}restaurante/${dataRestaurante.key}`} style={{ resizeMode: 'cover', }} />
                            </SView>
                            <SGradient colors={["#00000045", "#00000045",]} />
                        </SView>
                    </SView>
                    <SView col={"xs-12 "} center>
                        <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} style={{ backgroundColor: STheme.color.white, }} center>
                            <SHr height={10} />
                            <SView col={"xs-11"} row >
                                <SView col={"xs-12"} >
                                    <SText color={STheme.color.text} fontSize={14} style={{ fontWeight: "bold" }}  >{dataRestaurante.nombre} </SText>
                                </SView>
                                <SHr height={15} border={'blue'} />
                                <SView col={"xs-6"} height={20} row center style={{ justifyContent: 'flex-start', }}>
                                    <SIcon name={'Reloj'} width={13} />
                                    <SText fontSize={12} font={"Roboto"} > {dataRestaurante.horario.text}</SText>
                                </SView>
                                <SView col={"xs-6"} height={20} row center style={{ justifyContent: 'flex-end', }}>
                                    <SText fontSize={15} font={"Roboto"} style={{ fontWeight: "bold" }}>Bs. {SMath.formatMoney(dataRestaurante.pack?.precio ?? 0)}</SText>
                                </SView>
                                <SHr height={10} border={'blue'} />
                            </SView>
                        </SView>
                    </SView>
                    <SHr height={18} />
                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} style={{ backgroundColor: STheme.color.white }} center>
                        <SView col={"xs-11"}>
                            <SHr height={15} />
                            <SText fontSize={24} font={"Roboto"} style={{ fontWeight: "bold" }}>Sobre Nosotros</SText>
                            <SHr height={10} />
                            <SText style={{ textAlign: "justify" }} fontSize={14} font={"Roboto"} >{dataRestaurante.descripcion}</SText>
                            <SHr height={15} />
                        </SView>
                    </SView>
                    <SHr height={18} />
                    {this.calificacion()}
                    <SHr height={18} />
                    {this.recoger()}
                    <SHr height={40} />
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(lista);