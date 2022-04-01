import React, { Component } from 'react';
import { SDate, SIcon, SImage, SLoad, SNavigation, SText, STheme, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket';
// import restaurante from '..';
import horario from '../../horario';
import { connect } from 'react-redux';
import FavoritoButtom from '../../favorito/Components/FavoritoButtom';
import restaurante from '..';


class Item2 extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    getDiaText() {
        var NroDia = new SDate().getDayOfWeek();
        switch (NroDia) {
            case 1:
                return "lunes";
            case 2:
                return "martes";
            case 3:
                return "miercoles";
            case 4:
                return "jueves";
            case 5:
                return "viernes";
            case 6:
                return "sabado";
            case 7:
                return "domingo";
            case -1:
                return "feriado";
            default:
                return "sin dia";
        }
    }

    getHorarioText() {
        var data = horario.Actions.getByKeyRestauranteProximo(this.props.data.key, this.props);
        if (!data) return <SLoad />;
        if (data == "void") return "Sin horarios";
        var dia = SDate.getDayOfWeek(data.dia).text;
        if (data.dia == new SDate().getDayOfWeek()) {
            dia = "hoy"
        }
        return dia + " " + data.hora_inicio + " - " + data.hora_fin;

    }

    HeaderItemFoto() {
        return <>
            <SView col={"xs-12"} row center height={110} border={'transparent'} style={{ position: 'absolute', top: -10 }}  >
                {/* `${SSocket.api.root}medico/${this.key}?time=${new Date().getTime()}` */}
                <SImage src={`${SSocket.api.root}restaurante/${this.props.data.key}`} style={{ borderRadius: 8, resizeMode: 'cover' }} />
                {/* <SImage src={require('../../../../../Pages/fotos/bg003.png')} style={{ borderRadius: 8, resizeMode: 'cover' }} /> */}
            </SView>
        </>

    }
    HeaderItemDisponible() {
        var auxRestaurante = restaurante.Actions.getByKey(this.props.data.key, this.props)
        if (!auxRestaurante) return <SLoad />
        return <>
            <SView col={"xs-11"} height={30} row style={{ position: 'absolute', top: 15 }} border={'transparent'}>
                <SView col={"xs-10"} row center style={{ justifyContent: 'flex-start', }}>
                    <SView width={112} height={24} center style={{ borderRadius: 4, overflow: 'hidden', backgroundColor: '#FFBB3E' }}>
                        <SText fontSize={10} font={"Roboto"} color={STheme.color.secondary} >{this.props.data.stock} disponible(s)</SText>
                    </SView>
                </SView>
                <SView col={"xs-2"} row center style={{ justifyContent: 'flex-end', }}>
                    <FavoritoButtom data={auxRestaurante} size={20} />
                </SView>
            </SView>

        </>

    }
    HeaderItemTitle() {
        return <>
            <SView col={"xs-11"} height={50} row center style={{ position: 'absolute', top: 75, justifyContent: 'flex-start', }} >
                <SView width={250} height={21} row center style={{ borderRadius: 8, overflow: 'hidden', backgroundColor: STheme.color.primary, left: 1, position: 'absolute' }}>
                    <SText col={"xs-12"} fontSize={12} font={"Roboto"} color={STheme.color.secondary} center style={{ position: 'absolute' }} >{this.props.data.nombre}</SText>
                </SView>
                <SView height={50} width={50} style={{ borderRadius: 50, overflow: 'hidden', backgroundColor: 'white', position: 'absolute' }}>
                    <SImage src={`${SSocket.api.root}restaurante/${this.props.data.key}`} />
                    {/* <SImage src={require('../../../../../Pages/fotos/perfil001.png')} /> */}
                </SView>
            </SView>
        </>
    }
    static getDistance(lat1, lon1, lat2, lon2) {
        var rad = function (x) { return x * Math.PI / 180; }
        var R = 6378.137; //Radio de la tierra en km 
        var dLat = rad(lat2 - lat1);
        var dLong = rad(lon2 - lon1);
        var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(rad(lat1)) *
            Math.cos(rad(lat2)) * Math.sin(dLong / 2) * Math.sin(dLong / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        //aquí obtienes la distancia en metros por la conversion 1Km =1000m
        var d = R * c * 1000;
        return d;
    }
    getDistancia() {
        var miDireccion = this.props.state.direccion_usuarioReducer.miDireccion;
        var distancia = Item2.getDistance(miDireccion.latitude, miDireccion.longitude, this.props.data.latitude, this.props.data.longitude);
        return parseFloat(distancia / 1000).toFixed(1);
    }
    getItems() {
        var distancia = this.getDistancia();
        var miDistancia = this.props.state.direccion_usuarioReducer.miDistancia;
        if (miDistancia < distancia) return null;
        return <>
            <SView col={"xs-12"} height={170} center onPress={() => { SNavigation.navigate("restaurante/perfil", { key: this.props.data.key }); }} >
                <SView col={"xs-11.9"} height row center border={STheme.color.card} style={{ borderRadius: 8, borderWidth: 2 }}>
                    <SView col={"xs-12"} height={125} border={'transparent'} />

                    <SView col={"xs-11"} row center border={'transparent'}   >
                        <SView col={"xs-5.5"} row center border={'transparent'} style={{ justifyContent: 'flex-start', }} >
                            <SIcon name={'Reloj'} width={13} colSquare center />
                            {/* <SText fontSize={10} font={"Roboto"}> Hoy {this.props.data.horario}</SText> */}
                            <SText fontSize={10} font={"Roboto"}   >{this.getHorarioText()}</SText>
                        </SView>
                        <SView col={"xs-2.5"} row center style={{ justifyContent: 'flex-start', }} border={'transparent'}>
                            <SIcon name={'Location'} height={13} width={9} center />
                            <SText fontSize={10} font={"Roboto"}> {this.getDistancia()} Km</SText>
                        </SView>
                        <SView col={"xs-4"} row center border={'transparent'} style={{ justifyContent: 'flex-end', }}>
                            <SText fontSize={18} font={"Roboto"}>Bs.{this.props.data.precio}</SText>
                        </SView>
                    </SView>
                </SView>
                {this.HeaderItemFoto()}
                {this.HeaderItemDisponible()}
                {this.HeaderItemTitle()}
            </SView>
            <SView height={30} />
        </>
    }

    render() {
        return (this.getItems());
    }
}

const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Item2);