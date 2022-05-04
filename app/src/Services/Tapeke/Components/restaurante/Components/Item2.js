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
                    <SView col={"xs-11"} row center border={'transparent'}  >
                        <SView col={"xs-5.5"} row center border={'transparent'} style={{ justifyContent: 'flex-start', }} >
                            <SIcon name={'Reloj'} width={13}/>
                            <SView width={4} />
                            {/* <SText fontSize={10} font={"Roboto"}> Hoy {this.props.data.horario}</SText> */}
                            <SText fontSize={10} font={"Roboto"} >{this.props.data.horario?.text}</SText>
                        </SView>
                        <SView col={"xs-2.5"} row center style={{ justifyContent: 'flex-start', }} border={'transparent'}>
                            <SIcon name={'Location'} height={13} width={9} />
                            <SView width={4} />
                            <SText fontSize={10} font={"Roboto"}>{this.props.data.distancia} Km</SText>
                        </SView>
                        <SView col={"xs-4"} row center border={'transparent'} style={{ justifyContent: 'flex-end', }}>
                            <SText fontSize={16} font={"Roboto"}>Bs. {SMath.formatMoney(precio)}</SText>
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