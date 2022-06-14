import React from 'react';
import { Linking, Platform } from 'react-native';
import { connect } from 'react-redux';
import { SDate, SHr, SIcon, SImage, SLoad, SMapView, SMarker, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import restaurante from '..';
import horario from '../../horario';


class ComoLLegar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.key_restaurante = SNavigation.getParam('key');
    }




    showMapa() {
        var auxRestaurante = restaurante.Actions.getByKey(this.key_restaurante, this.props)
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
                    options={{
                        fullscreenControl: false,
                        zoomControl: false,
                    }}
                    showUserLocation={true}
                >
                    <SMarker lat={auxRestaurante.latitude} lng={auxRestaurante.longitude}  >
                        <SIcon name="MarcadorMapa" width={50} height={50} />
                        <SView height={10} />
                    </SMarker>
                </SMapView>
            </SView>


        </>
    }




    viajar(auxRestaurante) {
        const latitude = auxRestaurante.latitude;
        const longitude = auxRestaurante.longitude;
        const label = auxRestaurante.direccion;
        var latLng = latitude + "," + longitude
        const url = Platform.select({
            ios: "maps:" + latLng + "?q=" + label + "@" + latLng,
            android: "geo:" + latLng + "?q=" + latLng + "(" + label + ")",
            web: "https://www.google.com/maps/search/?api=1&query=" + latLng + "&query_place_id=" + latLng + "&query_place_id=" + label
        });
        Linking.openURL(url);
    }

    getInfo() {

        var auxRestaurante = restaurante.Actions.getByKey(this.key_restaurante, this.props)
        if (!auxRestaurante) return <SLoad />

        var dataHorario = horario.Actions.getByKeyRestauranteProximo(this.key_restaurante, this.props)
        if (!dataHorario) return <SLoad />


        return <SView col={"xs-11 sm-8 lg-5"} style={{ position: 'absolute', borderRadius: 20, bottom: 20 }} backgroundColor={'#EEEEEE'} row center>
            <SView width={15} />

            <SView col={"xs-3"} style={{ maxWidth: 100, }} colSquare  >
                <SImage src={`${SSocket.api.root}restaurante/${auxRestaurante.key}`} style={{ width: "100%", position: "relative", resizeMode: "cover", borderRadius: 10 }} />
            </SView>

            <SView width={10} />
            <SView flex height >
                <SHr height={10} />
                <SText color={STheme.color.text} fontSize={16} style={{ fontWeight: "bold" }}  >{auxRestaurante.nombre} </SText>
                <SHr height={2} />
                <SView col={"xs-12"} height={20} row center style={{ justifyContent: 'flex-start', }}>
                    <SIcon name={'Reloj'} width={13} colSquare center />
                    <SView width={8} />
                    <SText fontSize={12} font={"Roboto"} >{dataHorario.text} </SText>
                </SView>
                <SHr height={2} />

                <SView col={"xs-12"} height={40} row style={{ justifyContent: 'flex-start', }} backgroundColor={"transparent"}>
                    <SView width={20} height={20} backgroundColor={'transparent'}  >
                        <SView col={"xs-12"} height border={'transparent'}>
                            <SIcon name={'Marker'} width={13} colSquare />
                        </SView>
                    </SView>
                    <SView flex height backgroundColor={'transparent'} row >
                        <SText col={"xs-12"} fontSize={12} font={"Roboto"} >{auxRestaurante.direccion}</SText>
                    </SView>
                </SView>



                <SHr height={4} />
                <SView col={"xs-12"} center>

                    <SView center backgroundColor={STheme.color.primary} width={100} height={30} style={{
                        borderRadius: 4,
                    }} onPress={() => {
                        this.viajar(auxRestaurante)
                    }}>
                        <SView center row>
                            <SView flex />
                            <SIcon name={"Marker"} width={10} fill={"#fff"} />
                            <SView width={8} />
                            <SText color={"#fff"} center>Viajar</SText>
                            <SView flex />
                        </SView>
                    </SView>

                </SView>
                <SHr />


            </SView>
            <SView width={15} />
        </SView>
    }


    render() {

        return (
            <SPage title={'Cómo llegar?'} disableScroll center  >
                {this.showMapa()}
                {this.getInfo()}
            </ SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(ComoLLegar);