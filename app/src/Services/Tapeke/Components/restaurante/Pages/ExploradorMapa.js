import React from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SMapView, SMarker, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import BarraSuperiorTapeke from '../../../../../Components/BarraSuperiorTapeke';
import Direccion from '../../../../../Components/BarraSuperiorTapeke/Direccion';
import PBarraFooter from '../../../../../Components/PBarraFooter';

class exploradorMapa extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.key = SNavigation.getParam("keyUsuario");
    }

    getBotonos() {
        return <>
            <SView col={"xs-10 md-5 lg-4 xl-3"} row center height={40}  >
                <SView col={"xs-6"} center height={40} backgroundColor={STheme.color.white} border={STheme.color.primary} onPress={() => { SNavigation.navigate("explorar"); }}>
                    <SText fontSize={20} font={"Roboto"} bold color={STheme.color.primary}>Lista</SText>
                </SView>
                <SView col={"xs-6"} center height={40} backgroundColor={STheme.color.primary}>
                    <SText fontSize={20} font={"Roboto"} bold color={STheme.color.white}>Mapa</SText>
                </SView>
            </SView>
        </>
    }



    showMapa() {
        var miDireccion = this.props.state.direccion_usuarioReducer.miDireccion;
        var miDistancia = this.props.state.direccion_usuarioReducer.miDistancia;
        return <>
            <SView col={"xs-12"} flex>
                <SMapView initialRegion={
                    {
                        latitude: miDireccion.latitude,
                        longitude: miDireccion.longitude,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    preventCenter>
                    <SMarker lat={miDireccion.latitude} lng={miDireccion.longitude} />
                </SMapView>
            </SView>
            <SView col={"xs-12"} height={50} border={'transparent'} style={{ position: 'absolute', top: 90, }} center   >
                {this.getBotonos()}
            </SView>
        </>
    }



    render() {
        return (
            <>
                < SPage title={''} hidden disableScroll center >
                    <BarraSuperiorTapeke>
                        <Direccion />
                    </BarraSuperiorTapeke>
                    {this.showMapa()}

                    <SView col={"xs-2.5"} height={80} style={{ position: 'absolute', right: 30 }} border={'blue'}>
                        <SHr height={10} />
                        <SText font={"Roboto"} fontSize={16} >Mi información</SText>
                        {/* <SText font={"Roboto"} fontSize={12} >Direccion: {this.getGeocode()}</SText> */}
                        <SText font={"Roboto"} fontSize={12} >Dirección: {this.state.nombre}</SText>
                        <SText font={"Roboto"} fontSize={12} >latitude: {this.state.region?.latitude}</SText>
                        <SText font={"Roboto"} fontSize={12} >Longitude: {this.state.region?.longitude}</SText>
                    </SView >

                    <PBarraFooter />
                </ SPage >
            </>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(exploradorMapa);