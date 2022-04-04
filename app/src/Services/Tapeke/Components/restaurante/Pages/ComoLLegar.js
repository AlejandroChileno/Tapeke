import React from 'react';
import { connect } from 'react-redux';
import { SIcon, SPage, SScrollView2, SText, STheme, SView, SMapView, SMarker, SInput, SNavigation, SHr, SLoad, SPopup, SDate, SImage, } from 'servisofts-component';
// import BarraSuperiorTapeke from '../../../../../Components/BarraSuperiorTapeke';
import PButtom from '../../../../../Components/PButtom';
// ismport Parent from '../index'
import locationGoogleReducer from '../../direccion_usuario/locationGoogleReducer';
import PopUpDirecciones from '../../direccion_usuario/Pages/PopUpDirecciones';
import direccion_usuario from '../../direccion_usuario';
import horario from '../../horario';
import SSocket from 'servisofts-socket'
import restaurante from '..';


class ComoLLegar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            region: {
                latitude: -17.808690397665742,
                longitude: -63.16250034566757,
            },
            dirType: "moveMap",
            nombre: " "


        };
        this.key_restaurante = SNavigation.getParam('key');

    }

    showMapa() {
        var auxRestaurante = restaurante.Actions.getByKey(this.key_restaurante, this.props)
        if (!auxRestaurante) return <SLoad />

        return <>
            <SView col={"xs-12"} flex>
                <SMapView
                    initialRegion={{

                        latitude: -17.808690397665742,
                        longitude: -63.16250034566757,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    ref={(map) => this.map = map}
                    onRegionChangeComplete={(region) => {
                        this.setState({ region: region, dirType: "moveMap" });
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
        if (this.state.dirType != "moveMap") return null;
        var geocode = direccion_usuario.Actions.geocode(this.state.region, this.props);
        if (!geocode) return 'cargando...';
        var aux = geocode.direccion;
        if (this.state.nombre != aux) {
            this.state.nombre = aux;
            this.setState({ ...this.state });
        }
        return aux;
    }


    getBotonShare() {
        return <SView style={{ position: 'absolute', top: 10, right: 60 }} row center>
            <SIcon name={'IconShare1'} width={50} colSquare center />
            <SView width={15} />
            <SIcon name={'IconShare2'} width={50} colSquare center />
            <SView width={15} />
            <SIcon name={'IconShare3'} width={50} colSquare center />
        </SView>

    }

    getHorarioText() {
        var NroDia = new SDate().getDayOfWeek();
        var data_horario = horario.Actions.getAll(this.props);
        if (!data_horario) return <SLoad />;
        // filtro tabla {horario} y tabla {restaurante} por key_restaurante

        var misDatas = Object.values(data_horario).filter(itm => itm.key_restaurante == this.key_restaurante && itm.dia == NroDia)
        if (misDatas.length <= 0) return " Sin atención";
        return misDatas.map((obj) => {
            // filtro tabla {horario.dia} y el numero del dia
            if (obj.dia == NroDia) {
                return " Hoy " + obj.hora_inicio + " - " + obj.hora_fin;
            }
        })
    }

    getInfo() {
        var auxRestaurante = restaurante.Actions.getByKey(this.key_restaurante, this.props)
        if (!auxRestaurante) return <SLoad />
        return <SView col={"xs-11 sm-8 lg-5"} height={143} style={{ position: 'absolute', borderRadius: 20, bottom: 20 }} backgroundColor={'#EEEEEE'} row center>
            <SView width={15} />
            <SView width={120} height={115}  >
                <SImage src={`${SSocket.api.root}restaurante/${auxRestaurante.key}`} style={{ width: "100%", position: "relative", resizeMode: "cover", borderRadius: 10 }} />
            </SView>
            <SView width={10} />
            <SView flex >
                <SText color={STheme.color.text} fontSize={14} style={{ fontWeight: "bold" }}  >{auxRestaurante.nombre} </SText>
                <SView col={"xs-6"} height={20} row center style={{ justifyContent: 'flex-start', }}>
                    <SIcon name={'Reloj'} width={13} colSquare center />
                    <SText fontSize={12} font={"Roboto"} >{this.getHorarioText()} </SText>
                </SView>
            </SView>
            <SView width={15} />
        </SView>

    }


    render() {

        let reducer = this.props.state.direccion_usuarioReducer
        if (reducer.type == "registro" && reducer.estado == "exito") {
            reducer.estado = "";
            this.props.dispatch({
                component: "direccion_usuario",
                type: "editarMiDireccion",
                data: reducer.lastRegister
            })
            _direcion = this.state?.nombre,
                _latitude = this.state?.latitude,
                _longitude = this.state?.longitude,
                SNavigation.goBack()
        }
        this.getGeocode()
        return (

            <SPage title={'Elegir mi dirección'} disableScroll center  >

                <SView col={"xs-12"} flex center  >
                    {this.showMapa()}
                </SView >

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