import React from 'react';
import { connect } from 'react-redux';
import { SIcon, SLoad, SNavigation, SPage, SPopup, SScrollView2, SText, STheme, SView } from 'servisofts-component';
import BarraSuperiorTapeke from '../../../../../Components/BarraSuperiorTapeke';
import Direccion from '../../../../../Components/BarraSuperiorTapeke/Direccion';
import PBarraFooter from '../../../../../Components/PBarraFooter';
import Item2 from '../Components/Item2';
import Parent from '../index'
import favorito from '../../favorito';
class Explorador extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.key = SNavigation.getParam("keyUsuario");
    }


    getCategoria(icon, description, url) {
        return <>
            {/* <SView width={30} /> */}
            <SView height={28} border={'transparent'}
                style={{ paddingLeft: 10, paddingRight: 10, backgroundColor: STheme.color.card, borderRadius: 5, overflow: 'hidden' }}
                onPress={() => {
                    SNavigation.navigate(url);
                    // alert(description);
                }} center>
                <SView row center>
                    {!icon ? null : <SView center height  >
                        <SIcon name={icon} height={20} width={22} fill={!icon ? '#999999' : STheme.color.primary} />
                    </SView>}
                    {/* <SView center height={28}  > */}
                    <SText border={'transparent'} fontSize={14} color={!icon ? '#999999' : STheme.color.primary} font={"LondonMM"} bold >{description}</SText>
                    {/* </SView> */}
                </SView>
            </SView>
            <SView width={14} />
        </>
    }

    getCategoriasList() {
        // var categorias = categoria_farmacia.Actions.getAll(this.props);
        // if (!categorias) return <SLoad />
        return <SView col={"xs-12 md-6 lg-5 xl-4"} height={40} row>
            <SScrollView2 >
                <SView center row>
                    <SView width={30} />
                    {this.getCategoria('IconFilter', 'Filtros', 'explorar/filtros')}
                    {this.getCategoria('', 'Ocultar sin packs', '000010')}
                    {this.getCategoria('', 'Solo Hoy', '0000102')}
                    {this.getCategoria('', 'NaNadjasajsha sma sam sa', '0000102')}
                    {this.getCategoria('', 'NaN', '0000102')}
                    {this.getCategoria('', 'NaN', '0000102')}
                    {this.getCategoria('', 'NaN', '0000102')}
                </SView>
            </SScrollView2>
        </SView>
    }



    getBotonos() {
        return <>
            <SView col={"xs-10 md-5 lg-4 xl-3"} row center height={40}  >
                <SView col={"xs-6"} center height={40} backgroundColor={STheme.color.primary}>
                    <SText fontSize={20} font={"Roboto"} bold color={STheme.color.white}>Lista</SText>
                </SView>
                <SView col={"xs-6"} center height={40} border={STheme.color.primary} backgroundColor={STheme.color.white}
                    onPress={() => { SNavigation.navigate("mapa"); }}>
                    <SText fontSize={20} font={"Roboto"} bold color={STheme.color.primary}>Mapa</SText>
                </SView>
            </SView>
        </>
    }

    getRestaurante() {
        var data = Parent.Actions.getAllFilter({ soloHoy: false, soloDisponible: false }, this.props);
        var data_favoritos = favorito.Actions.getByKeyUsuario(this.props.state.usuarioReducer.usuarioLog.key, this.props);
        if (!data) return <SLoad />;
        if (!data_favoritos) return <SLoad />;
        // var listaKeys = Object.keys(data);
        return data.map((obj) => {
            return <SView col={"xs-10 md-5 lg-4 xl-3"} border={'transparent'} >
                <Item2 data={obj} ></Item2>
            </SView>
        })
    }

    showLista() {
        return <>
            <SView height={8} border={'transparent'} />
            {this.getCategoriasList()}
            <SView height={8} border={'transparent'} />
            {this.getBotonos()}
            <SView height={20} border={'transparent'} />
            <SScrollView2 disableHorizontal={true} border={'transparent'}>
                <SView col={"xs-12 "} center border={'transparent'} >
                    {this.getRestaurante()}
                </SView >
            </SScrollView2>
        </>
    }




    render() {
        return (
            < SPage title={''} hidden disableScroll center >
                <BarraSuperiorTapeke>
                    <Direccion />
                </BarraSuperiorTapeke>
                <SView flex center col={"xs-12"}>
                    {this.showLista()}
                </SView>
                <PBarraFooter />
            </ SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Explorador);