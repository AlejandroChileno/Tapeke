import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { SHr, SIcon, SMapView, SMarker, SNavigation, SPage, SScrollView2, SText, STheme, SView } from 'servisofts-component';
import BarraSuperiorTapeke from '../../../../../Components/BarraSuperiorTapeke';
import PBarraFooter from '../../../../../Components/PBarraFooter';
import Item2 from '../Components/Item2';

class Explorador extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.key = SNavigation.getParam("keyUsuario");
    }


    getCategoria(icon, description, url, activo) {
        return <>

            <SView height={30} border={'transparent'} flex style={{ maxWidth: '80%', paddingLeft: 10, paddingRight: 10, backgroundColor: STheme.color.card, borderRadius: 5, overflow: 'hidden' }} center >
                <SView col={"xs-12 md-12 lg-12"} row center  >
                    {!icon ? null : <SView center height  >
                        <SIcon name={icon} height={20} width={22} stroke={activo == '' ? '#999999' : STheme.color.primary} />
                    </SView>}
                    <SView flex center height={28}  >
                        <SText col={"xs-12"} border={'transparent'} fontSize={16} color={STheme.color.primary} font={"LondonMM"} >{description}</SText>
                        {/* <SText fontSize={14} color={activo == 'red' ? '#999999' : STheme.color.primary} font={"LondonMM"} bold > {description}</SText> */}
                    </SView>
                </SView>
            </SView>
            <SView width={14} />
        </>
    }

    getCategoriasList() {
        // var categorias = categoria_farmacia.Actions.getAll(this.props);
        // if (!categorias) return <SLoad />
        return <SView col={"xs-12 md-6 lg-5 xl-4"} height={45} row border={'transparent'}>
            <SScrollView2 center>
                <SView center height={40}>
                    <SView row center>
                        <SView width={30} border={'transparent'} />
                        {this.getCategoria('IconFilter', 'Filtros', 'url', 'Activo')}
                        {this.getCategoria('', 'Filtro: Ocultar sin packs', '000010', '')}
                        {this.getCategoria('', 'Filtro: Preparacion', '0000102', '')}
                        {this.getCategoria('', 'Filtro: Preparacion', '0000102', '')}
                        {this.getCategoria('', 'Filtro: Preparacion', '0000102', '')}
                        {this.getCategoria('', 'Filtro: Preparacion', '0000102', '')}
                        {this.getCategoria('', 'Filtro: Preparacion', '0000102', '')}
                    </SView>
                </SView>
            </SScrollView2>
        </SView>
    }



    getBotonos() {
        return <>
            <SView col={"xs-10 md-5 lg-4 xl-3"} row center height={40}  >
                <SView col={"xs-6"} center height={40} backgroundColor={STheme.color.primary}>
                    <SText fontSize={20} font={"Roboto"} bold color={STheme.color.secondary}>Lista</SText>
                </SView>
                <SView col={"xs-6"} center height={40} border={STheme.color.primary} backgroundColor={STheme.color.white}>
                    <SText fontSize={20} font={"Roboto"} bold color={STheme.color.primary}>Mapa</SText>
                </SView>
            </SView>
        </>
    }


    showLista() {
        return <>
            <SView height={8} border={'transparent'} />
            {this.getCategoriasList()}
            <SView height={8} border={'transparent'} />
            {this.getBotonos()}
            <SView height={20} border={'transparent'} />
            <SScrollView2 disableHorizontal={true} border={'transparent'}>
                <SView col={"xs-12"} row center height border={'transparent'} >
                    <SView col={"xs-10 md-5 lg-4 xl-3"} border={'transparent'} >
                        <Item2></Item2>
                    </SView>
                </SView >
            </SScrollView2>
        </>
    }

    showMapa() {
        return <>
            <SView col={"xs-12"} flex>
                <SMapView initialRegion={
                    {
                        // latitude: data.lat,
                        // longitude: data.lng,
                        latitude: -17.808690397665742,
                        longitude: -63.16250034566757,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    preventCenter>
                    <SMarker lat={-17.808690397665742} lng={-63.16250034566757} />
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
                        <SView row border={'transparent'} >
                            <SView height={50} width={15}>
                                <SView style={{ top: 6 }} center>
                                    <SIcon name={"Location"} height={18} fill={STheme.color.secondary} />
                                </SView>
                            </SView>
                            <SView height={50} style={{ justifyContent: 'center', paddingLeft: 8, paddingRight: 8, }}>
                                <SText font={"Roboto"} fontSize={10} center bold color={STheme.color.secondary}>{" "}Las palmas, Santa cruz de la sierra</SText>
                                <SText font={"Roboto"} fontSize={12} center bold color={STheme.color.secondary}>{" "}A menos de 30 km</SText>
                            </SView>
                            <SView height={50} width={25}>
                                <SView style={{ top: 6 }} center>
                                    <SIcon name={"Back"} height={18} fill={STheme.color.secondary} style={{ transform: [{ rotate: "-90deg" }] }} />
                                </SView>
                            </SView>
                        </SView>
                    </BarraSuperiorTapeke>
                    {/* {this.showLista()} */}
                    {this.showMapa()}
                    <PBarraFooter />
                </ SPage >
            </>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Explorador);