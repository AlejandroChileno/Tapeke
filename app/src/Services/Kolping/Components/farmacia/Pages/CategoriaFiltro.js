import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView, SNavigation, SImage, SLoad, SBuscador } from 'servisofts-component';
import Kolping from '../../../../../Components/Kolping';
import Parent from '../../categoria_farmacia/index';
import SSocket from 'servisofts-socket'

class CategoriaFiltro extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key_e = SNavigation.getParam("key"); //key por navegador
        this.onSelect = SNavigation.getParam("onSelect");
    }

    getCategorias({ icon, description, url }) {
        return <>
            <SView height={30} />
            <SView height={28} style={{ maxWidth: '80%', paddingTop: 4, paddingLeft: 12, paddingRight: 12, paddingBottom: 4, backgroundColor: STheme.color.card, borderRadius: 5, overflow: 'hidden' }} center >
                <SView col={"xs-12 md-12 lg-12"} row center  >
                    {!icon ? null : <SView center height  >
                        <SIcon name={icon} height={20} width={22} />
                    </SView>}
                    <SView flex center height style={{
                        paddingTop: 2
                    }}>
                        <SText fontSize={14} color={'#999999'} font={"LondonMM"} bold > {description}</SText>
                    </SView>
                </SView>

            </SView>
            <SView width={14} />


        </>
    }

    getCategoriasList() {
        // var categorias = categoria_farmacia.Actions.getAll(this.props);
        // if (!categorias) return <SLoad />
        return <SView col={"xs-11 md-8 lg-8 xl-6"} height={60} row  >
            <SScrollView2>
                <SHr />
                <SView center row>
                    {this.getCategorias({ icon: 'IconFilter', description: 'Filtros', url: 'jajaj' })}
                    {this.getCategorias({ icon: '', description: 'Filtros', url: 'jajaj' })}
                    {this.getCategorias({ icon: '', description: 'Filtros', url: 'jajaj' })}

                    {/* {Object.keys(categorias).map((key, index) => {
                        var obj = categorias[key];
                        return this.getCategorias({ icon: '', url: 'jajaj', description: 'jajaj' })
                    })} */}
                </SView>
                <SHr />
            </SScrollView2>
        </SView>
    }

    render() {
        return (
            <SPage title={'Categorías Farmacia'} center>
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row>
                    <Kolping.KBuscador onChangeText={(text) => {
                        this.setState({
                            find: text
                        })
                    }} />
                    {this.getCategorias()}
                    <SHr height={40} />
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(CategoriaFiltro);