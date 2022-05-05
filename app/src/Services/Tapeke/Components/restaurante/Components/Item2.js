import React, { Component } from 'react';
import { SDate, SIcon, SImage, SLoad, SMath, SNavigation, SText, STheme, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket';
// import restaurante from '..';
import horario from '../../horario';
import { connect } from 'react-redux';
import FavoritoButtom from '../../favorito/Components/FavoritoButtom';
import restaurante from '..';
import { SHr } from 'servisofts-component';


class Item2 extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    HeaderItemFoto() {
        return <>
            <SView col={"xs-12"} center height={110} border={'transparent'} style={{ position: 'absolute', top: 0 }}  >
                <SImage src={`${SSocket.api.root}restaurante/${this.props.data.key}`} style={{ borderRadius: 8, resizeMode: 'cover' }} />
            </SView>
        </>

    }
    getNoDisponible(cantidad) {
        if (cantidad) return null;
        return <SView col={"xs-10"} style={{
            position: 'absolute',
            backgroundColor: "#ff0000",
            height: 2,
        }}>
        </SView>
    }
    HeaderItemDisponible() {
        var cantidad = 0;
        if (this.props.data.pack) {
            cantidad = this.props.data.pack.disponibles;
        }

        return <>
            {/* <SView col={"xs-12"} row height={30} style={{ position: 'absolute', top: 0 }} border={'transparent'}> */}
            {/* <SView col={"xs-10"} row center style={{ justifyContent: 'flex-start', }}> */}
            <SView width={112} height={24} center style={{ borderRadius: 4, overflow: 'hidden', backgroundColor: '#FFBB3E', position: 'absolute', top: 8, left: 8 }}>
                <SText fontSize={10} font={"Roboto"} color={STheme.color.secondary} >{cantidad} disponible(s)</SText>
                {this.getNoDisponible(cantidad)}
            </SView>
            {/* <SView flex /> */}
            <SView width={40} center style={{
                position: 'absolute', top: 4, right: 4,
            }} >
                <FavoritoButtom data={this.props.data} size={20} />
            </SView>

            {/* </SView> */}

        </>

    }
    HeaderItemTitle() {
        return <>
            <SView col={"xs-11"} height={50} row center style={{ position: 'absolute', top: 75, justifyContent: 'flex-start', }} >
                <SView width={250} height={21} row center style={{ borderRadius: 8, overflow: 'hidden', backgroundColor: STheme.color.primary, left: 1, position: 'absolute' }}>
                    <SText col={"xs-12"} fontSize={12} font={"Roboto"} color={STheme.color.secondary} center style={{ position: 'absolute' }} >{this.props.data.nombre}</SText>
                </SView>
                <SView height={50} width={50} style={{ borderRadius: 50, overflow: 'hidden', backgroundColor: 'white', position: 'absolute' }}>
                    <SImage src={`${SSocket.api.root}restaurante/${this.props.data.key}`} style={{
                        resizeMode: 'cover',
                    }} />
                    {/* <SImage src={require('../../../../../Pages/fotos/perfil001.png')} /> */}
                </SView>
            </SView>
        </>
    }
    getItems() {
        var cantidad = 0;
        var precio = 0;
        if (this.props.data.pack) {
            cantidad = this.props.data.pack.cantidad;
            precio = this.props.data.pack.precio;
        }
        return <>
            <SView col={"xs-12"} height={180} center onPress={() => { SNavigation.navigate("restaurante/perfil", { key: this.props.data.key }); }} >
                <SView col={"xs-11.9"} height center border={STheme.color.card} style={{ borderRadius: 8, borderWidth: 2 }}>
                    <SView col={"xs-12"} height={125} border={'transparent'} />
                    <SView col={"xs-11"} height={40} row center border={'transparent'}  >

                        <SView flex height row center border={'transparent'} style={{ justifyContent: 'flex-start', alignContent: 'center', }} >
                            <SView col={"xs-12"} row >
                                <SIcon name={'Reloj'} width={14} />
                                <SView width={6} />
                                <SText fontSize={12} font={"Roboto"} >{this.props.data.horario?.extraData?.text}</SText>
                            </SView>
                            <SHr height={1} />
                            <SText col={"xs-12"} fontSize={11.5} font={"Roboto"} >{this.props.data.horario?.extraData?.hora_inicio} - {this.props.data.horario?.extraData?.hora_fin}</SText>
                        </SView>

                        <SView width={80} height row center style={{ alignContent: 'center', }} border={'transparent'}>
                            <SIcon name={'Location'} height={14} width={10} />
                            <SView width={6} />
                            <SText fontSize={14} font={"Roboto"}>{this.props.data.distancia} Km</SText>
                        </SView>

                        <SView width={95} height row center border={'transparent'} style={{ justifyContent: 'flex-end', alignContent: 'center', }} >
                            <SText fontSize={14} font={"Roboto"} center >Bs {SMath.formatMoney(precio)}</SText>
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