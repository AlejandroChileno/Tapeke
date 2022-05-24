import React from 'react';
import { connect } from 'react-redux';
import { SDate, SIcon, SImage, SLoad, SMapView, SMarker, SNavigation, SPage, SText, STheme, SView, SHr } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import restaurante from '..';
import PButtom from '../../../../../Components/PButtom';
import horario from '../../horario';
import { Text, View, StyleSheet, Linking, TouchableOpacity, Alert, Platform } from 'react-native';


class ComoLLegar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.key_restaurante = SNavigation.getParam('key');
    }


    getHorarioText() {
        var NroDia = new SDate().getDayOfWeek();
        var data_horario = horario.Actions.getAll(this.props);
        if (!data_horario) return <SLoad />;
        var misDatas = Object.values(data_horario).filter(itm => itm.key_restaurante == this.key_restaurante && itm.dia == NroDia)
        if (misDatas.length <= 0) return " Sin atención";
        return misDatas.map((obj) => {
            if (obj.dia == NroDia) {
                return " Hoy " + obj.hora_inicio + " - " + obj.hora_fin;
            }
        })
    }

    showMapa() {
        var auxRestaurante = restaurante.Actions.getByKeyDetalle(this.key_restaurante, this.props)
        if (!auxRestaurante) return <SLoad />

        return <>
            <SView col={"xs-12"} flex>
                <SMapView
                    initialRegion={{
                        latitude: auxRestaurante.latitude,
                        longitude: auxRestaurante.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    showUserLocation={true}
                >
                    <SMarker lat={auxRestaurante.latitude} lng={auxRestaurante.longitude}  >
                        <SIcon name="MarcadorMapa" width={40} height={40} />
                    </SMarker>
                </SMapView>
            </SView>


        </>
    }


    getBotonShare() {
        return <SView style={{ position: 'absolute', top: 10, right: 10 }} width={200} row center height={50}>
            <SIcon name={'IconShare1'} width={50} colSquare center />
            <SView width={15} />
            <SIcon name={'IconShare2'} width={50} colSquare center />
            <SView width={15} />
            <SIcon name={'IconShare3'} width={50} colSquare center />
        </SView>

    }



    getInfo() {

        var auxRestaurante = restaurante.Actions.getByKeyDetalle(this.key_restaurante, this.props)
        if (!auxRestaurante) return <SLoad />

        return <SView col={"xs-11 sm-8 lg-5"} height={140} style={{ position: 'absolute', borderRadius: 20, bottom: 20 }} backgroundColor={'#EEEEEE'} row center>
            <SView width={15} />
            <SView width={120} height={115}  >
                <SImage src={`${SSocket.api.root}restaurante/${auxRestaurante.key}`} style={{ width: "100%", position: "relative", resizeMode: "cover", borderRadius: 10 }} />
            </SView>
            <SView width={10} />
            <SView flex height >
                <SHr height={10} />
                <SText color={STheme.color.text} fontSize={16} style={{ fontWeight: "bold" }}  >{auxRestaurante.nombre} </SText>
                <SHr height={6} />
                <SView col={"xs-6"} height={20} row center style={{ justifyContent: 'flex-start', }}>
                    <SIcon name={'Reloj'} width={13} colSquare center />
                    <SView width={8} />
                    <SText fontSize={12} font={"Roboto"} >{auxRestaurante.horario.text} </SText>
                </SView>
                <SHr height={6} />
                <SText color={STheme.color.text} fontSize={12} >Direccion: {auxRestaurante.direccion} </SText>


                <PButtom fontSize={16} onPress={() => {
                    const latitude = auxRestaurante.latitude;
                    const longitude = auxRestaurante.longitude;
                    const label = auxRestaurante.direccion;
                    var latLng = latitude + "," + longitude
                    const url = Platform.select({
                        ios: "maps:"+latLng+"?q="+label+"@" +latLng,
                        android: "geo:"+latLng+"?q=" + latLng+ "(" + label+")"
                    });
                    Linking.openURL(url);
                }}>Llévame</PButtom>

            </SView>
            <SView width={15} />
        </SView>
    }


    render() {

        return (
            <SPage title={'Elegir mi dirección'} disableScroll center  >
                {this.showMapa()}
                {this.getBotonShare()}
                {this.getInfo()}
            </ SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(ComoLLegar);