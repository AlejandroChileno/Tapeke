import React from 'react';
import { connect } from 'react-redux';
import { SMapView, SMarker, SHr, SPage, SText, SView, SIcon, STheme, SImage, SGradient, SNavigation } from 'servisofts-component';
import restaurante from '..';
import PButtom from '../../../../../Components/PButtom';
import SSocket from 'servisofts-socket'

class Paso1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };

        this.key_restaurante = SNavigation.getParam('key');
        // this.key_servicio = SNavigation.getParam('key_servicio');


    }

    calificacion() {
        return <>
            <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"}>
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
        </>
    }

    recoger() {
        var auxRestaurante = restaurante.Actions.getByKey(this.key_restaurante, this.props)
        if (!auxRestaurante) return <SLoad />
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
                            latitude:auxRestaurante.lat,
                            longitude:auxRestaurante.lng,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        preventCenter>
                        <SMarker lat={auxRestaurante.lat} lng={auxRestaurante.lng} />
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

        var auxRestaurante = restaurante.Actions.getByKey(this.key_restaurante, this.props)
        if (!auxRestaurante) return <SLoad />
        return <SPage center  >
            <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center >
                <SView center col={"xs-12"} backgroundColor={"#9B060C"} height={216}>

                    <SImage src={`${SSocket.api.root}restaurante/${auxRestaurante.key}`} style={{ width: "100%", position: "relative", resizeMode: "cover" }} />

                    {/* <SImage src={require('../../../../../Assets/img/restPerfil.jpg')} style={{ width: "100%", position: "relative", resizeMode: "cover" }} /> */}
                    <SView style={{ position: "absolute", zIndex: 9999, top: 20, left: 20 }} >
                        <SView width={114} height={26} center style={{ borderRadius: 8, overflow: 'hidden', backgroundColor: STheme.color.primary }}>
                            <SText fontSize={12} font={"Roboto"} color={STheme.color.secondary} >4 disponible(s)</SText>
                        </SView>
                    </SView>



                    <SView center   style={{ overflow: 'hidden', position: "absolute", zIndex: 9999, borderRadius: 30, left: 20, bottom: 20 }}
                        width={50} height={50} backgroundColor={STheme.color.white}>

                        <SImage src={`${SSocket.api.root}restaurante/${auxRestaurante.key}`} style={{ resizeMode: 'cover', }} />
                        {/* <SImage src={require('../../../../../Pages/fotos/perfil001.png')} /> */}

                    </SView>
                    <SGradient colors={["#00000045", "#00000045",]} />
                </SView>
                <SView flex col={"xs-12"} style={{ justifyContent: "flex-end" }} >
                    <SView center style={{ position: 'absolute', zIndex: 9999999, borderRadius: 30, right: 20, top: -20 }} width={50} height={50} backgroundColor={STheme.color.white}>
                        <SView height={35} width={35} style={{
                            borderRadius: 50, overflow: 'hidden', backgroundColor: 'white', position: 'absolute',
                        }} center>
                            <SIcon name={'Favorite'} height={30} width={30} fill={'#FA4A0C'} />
                        </SView>
                    </SView>
                </SView>
            </SView><SHr height={18} />
            <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"}>
                <SView col={"xs-12"} row >
                    <SView col={"xs-12"} >

                        <SText color={STheme.color.text} fontSize={14} style={{ fontWeight: "bold" }}  >{auxRestaurante.nombre} </SText>
                        {/* <SText color={STheme.color.text} fontSize={14} style={{ fontWeight: "bold" }}  >Veggie Garden - Gran Via</SText> */}
                    </SView>
                    <SHr height={15} />
                    <SView col={"xs-6"} height={20} row center style={{ justifyContent: 'flex-start', }}>
                        <SIcon name={'Reloj'} height={13} width={13} />
                        <SText fontSize={12} font={"Roboto"} > Hoy 22:00 - 22:30</SText>
                    </SView>
                    <SView col={"xs-6"} height={20} row center style={{ justifyContent: 'flex-end', }}>
                        <SText fontSize={15} font={"Roboto"} style={{ fontWeight: "bold" }}>15 Bs.</SText>
                    </SView>
                    <SHr height={10} />
                </SView>
            </SView>
            <SView height={18} col={"xs-12"} backgroundColor={STheme.color.card} />
            <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"}>
                <SHr height={15} />
                <SText fontSize={24} font={"Roboto"} style={{ fontWeight: "bold" }}>Sobre Nosotros</SText>
                <SHr height={10} />
                <SText style={{ textAlign: "justify" }} fontSize={14} font={"Roboto"} >{auxRestaurante.descripcion}.</SText>
                <SHr height={15} />
            </SView>
            <SView height={18} col={"xs-12"} backgroundColor={STheme.color.card} />
            {this.calificacion()}
            <SView height={18} col={"xs-12"} backgroundColor={STheme.color.card} />
            {this.recoger()}
            <SView height={18} col={"xs-12"} backgroundColor={STheme.color.card} />
            <SHr height={40} />
            <PButtom fontSize={20} onPress={() => {
            }}>RESERVAR</PButtom>
            <SHr height={40} />
        </SPage>
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Paso1);