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



    getCategoria(obj, key) {
        var txt = obj.title;
        txt = txt.replace(/\s/g, '');
        var width = (txt.length * 8);
        width += 16;
        return <SView key={`itemCat-${key}`} row >
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
        </SView>
    }

    getCategoriasList() {
        var data = Parent.Actions.getAll(this.props);
        return Object.keys(data).map((key) => {
            var obj = data[key];
            return this.getCategoria(obj, key);
        })
    }
    getBtn() {
        return (< SView height={28} flex border={'transparent'} style={{ paddingLeft: 10, paddingRight: 10, backgroundColor: STheme.color.card, borderRadius: 5, overflow: 'hidden' }
        } center onPress={() => {
            SNavigation.navigate('explorar/filtros');
        }}>
            <SView row>
                <SView center height={26}  >
                    <SIcon name={"IconFilter"} height={20} width={20} fill={STheme.color.primary} />
                </SView>
                <SView center height={28}  >
                    <SText border={'transparent'} fontSize={14} color={STheme.color.primary} font={"LondonMM"} bold >{"Filtros"}</SText>
                </SView>
            </SView>
        </SView >)
    }
    render() {
        return (
            <SView col={"xs-12"} height={50}>
                <SHr />
                <SScroll horizontal center>
                    <SView center row>
                        <SView width={8} />
                        {this.getBtn()}
                        <SView width={14} />
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