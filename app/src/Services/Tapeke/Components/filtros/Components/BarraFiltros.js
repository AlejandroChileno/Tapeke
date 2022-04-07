import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SImage, SNavigation, SText, STheme, SView, SLoad, SScroll } from 'servisofts-component';
import Parent from "..";
class BarraFiltros extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }



    getCategoria(obj) {
        var txt = obj.title;
        txt = txt.replace(/\s/g, '');
        var width = (txt.length * 8);
        width += 16;
        return <>
            {/* <SView width={30} /> */}
            <SView height={28} width={width} border={'transparent'}
                style={{ backgroundColor: STheme.color.card, borderRadius: 5, overflow: 'hidden' }}
                onPress={() => {
                    this.props.dispatch({
                        component: "filtros",
                        type: "editar",
                        data: {
                            ...obj,
                            active: obj.active ? false : true
                        }
                    })
                }} center>

                <SText border={'transparent'} fontSize={14} color={obj.active ? STheme.color.primary : '#999999'} font={"LondonMM"} bold >{obj.title}</SText>
                {/* </SView> */}
            </SView>
            <SView width={14} />
        </>
    }

    getCategoriasList() {
        var data = Parent.Actions.getAll(this.props);
        return Object.keys(data).map((key) => {
            var obj = data[key];
            return this.getCategoria(obj);
        })
        //     <>
        //     {/* { this.getCategoria('IconFilter', 'Filtros', 'explorar/filtros') } */ }
        // { this.getCategoria('', 'Ocultar sin packs', '000010') }
        // { this.getCategoria('', 'Solo Hoy', '0000102') }
        // { this.getCategoria('', 'NaNadjasajsha sma sam sa', '0000102') }
        // { this.getCategoria('', 'NaN', '0000102') }
        // { this.getCategoria('', 'NaN', '0000102') }
        // { this.getCategoria('', 'NaN', '0000102') }
        // </>
    }
    render() {
        return (
            <SView col={"xs-12"} height={50}>
                <SHr />
                <SScroll horizontal center>
                    <SView center row>
                        <SView width={8} />
                        {this.getCategoriasList()}
                        <SView width={8} />
                    </SView>
                </SScroll>
                <SHr />
            </SView>
        );
    }
}

const initStates = (state) => {
    return { state }
};
export default connect(initStates)(BarraFiltros);