import React from 'react';
import { connect } from 'react-redux';
import { SIcon, SPage, SScrollView2, SText, STheme, SView, SMapView, SMarker, SInput, SNavigation, SHr, SLoad, SPopup, } from 'servisofts-component';
import BarraSuperiorTapeke from '../../../../../Components/BarraSuperiorTapeke';
import PButtom from '../../../../../Components/PButtom';
import Parent from '../index'
import locationGoogleReducer from '../locationGoogleReducer';
import PopUpDirecciones from '../Pages/PopUpDirecciones';

class Direccion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: -17.808690397665742,
                longitude: -63.16250034566757,
            },
        };
    }

    showMapa() {
        return <>
            <SView col={"xs-12"} flex>
                <SMapView
                    initialRegion={{
                        latitude: -17.808690397665742,
                        longitude: -63.16250034566757,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}

                    // nos permite guardar temporal, explicar
                    ref={(map) => this.map = map}

                    onPress={(e) => {
                        // cuando cambio de posicion (mouse)
                        alert('paso 1');
                        this.setState({ regionClick: e });
                    }}

                    onRegionChangeComplete={(region) => {
                        // cuando cambio de posicion (mouse)
                        alert('paso 2');
                        this.setState({ region: region });
                    }}

                    preventCenter>
                    <SMarker lat={this.state.region?.latitude} lng={this.state.region?.longitude}  >
                        <SIcon name="Marker" width={20} height={30} />
                    </SMarker>
                </SMapView>
            </SView>

            <SView style={{ position: 'absolute', }} center   >
                <SIcon name="MarcadorMapa" width={20} height={20} />
            </SView>
        </>
    }

    getGeocode() {
        var geocode = Parent.Actions.geocode(this.state.region, this.props);
        if (!geocode) return 'cargando...';
        return geocode.direccion;
    }

    render() {
        return (
            <SPage title={''} hidden disableScroll center>
                <BarraSuperiorTapeke  >
                    <SText font={"Roboto"} fontSize={25} color={STheme.color.secondary}>Mis Favoritos</SText>
                </BarraSuperiorTapeke>

                <SView col={"xs-12 md-10 lg-8 xl-6"} center flex    >
                    {this.showMapa()}
                </SView >

                <SView col={"xs-12 md-10 lg-8 xl-6"} height={280} row center>
                    <SHr height={20} />

                    <SView col={"xs-12"} center row border={'transparent'}>
                        <SView col={"xs-10"}>
                            <SInput fontSize={16} placeholder={"Nombre de la Ubicación"} height={55} />
                        </SView>
                        <SHr height={10} />
                        <SView col={"xs-10"}>
                            <SInput fontSize={16} placeholder={"Busca una direccion!"} height={55} value={this.getGeocode()} iconR={<SIcon name={"SearchTapeke"} width={40} height={14} fill={STheme.color.primary} />}
                                onPress={() => {
                                    SPopup.open({
                                        key: "autocomplete", content:
                                            <PopUpDirecciones region={this.state.region} callback={(resp) => {
                                                SPopup.close("autocomplete");
                                                alert(JSON.stringify(resp));
                                                this.setState({ region: resp });
                                            }} />
                                    });
                                }}
                            />
                        </SView>
                    </SView>

                    <SView col={"xs-12"} row center border={'transparent'}>
                        <SView width={40} center>
                            <SIcon name={'LocationTapeke'} height={14} width={14} />
                        </SView>
                        <SView width={200} onPress={() => { this.map.center(); }}>
                            <SText fontSize={15} font={"Roboto"} bold>Utilizar mi ubicación actual</SText>
                        </SView>
                    </SView>

                    <SView col={"xs-8.8"} row center border={'transparent'}  >
                        <PButtom fontSize={16} onPress={() => { }}>ELEGIR ESTA UBICACIÓN</PButtom>
                    </SView>
                    <SHr height={10} />
                </SView>

                <SView col={"xs-2.5"} height={80} style={{ position: 'absolute', right: 30 }} border={'blue'}>
                    <SHr height={10} />
                    <SText font={"Roboto"} fontSize={16} >Mis Favoritos</SText>
                    <SText font={"Roboto"} fontSize={12} >Direccion: {this.getGeocode()}</SText>
                    <SText font={"Roboto"} fontSize={12} >latitude: {this.state.region?.latitude}</SText>
                    <SText font={"Roboto"} fontSize={12} >Longitude: {this.state.region?.longitude}</SText>
                </SView >
            </ SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Direccion);