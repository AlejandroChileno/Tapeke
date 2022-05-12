import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SImage, SInput, SLoad, SNavigation, SPage, SPopup, STable2, SText, SView, SList, STheme } from 'servisofts-component';
import Parent from '..'
import SSocket from 'servisofts-socket'
import FloatButtom from '../../../../../Components/FloatButtom';
import usuario from '../../../../Usuario/Components/usuario';
import restaurante from '../../restaurante';
class lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getLista() {
        var data = Parent.Actions.getByKeyUsuario(this.props.state.usuarioReducer.usuarioLog.key, this.props);
        var restaurantes = restaurante.Actions.getAll(this.props);
        if (!data) return <SLoad />
        if (!restaurantes) return <SLoad />
        var arr = Object.values(restaurantes).filter(o=>data.find(o2=>o2.key_restaurante==o.key));
        return <SList
            data={arr}
            space={16}
            // filter={obj => {
            //     if (obj.estado != 1) return false;
            //     return data.find(o => o.key_restaurante == obj.key)
            // }}
             render={(obj, key) => {
                return <SView col={"xs-12 "} height={90} row border={STheme.color.card} style={{ borderRadius: 8, }}  >

                    <SView col={"xs-12"} row   >
                        {/* <SText col={"xs-12"} height={20} style={{ backgroundColor: '#EEEEEE', borderRadius: 4, fontSize: 14, alignItems: 'center', }}>key {obj['key']}</SText> */}
                        {/* <SText col={"xs-12"} height={20} style={{ backgroundColor: '#EEEEEE', borderRadius: 4, fontSize: 14, alignItems: 'center', }}>restaurante{obj['key_restaurante']}</SText> */}
                        <SText col={"xs-12"} height={20} style={{ backgroundColor: '#EEEEEE', borderRadius: 4, fontSize: 14, alignItems: 'center', }} center >restaurante{obj['nombre']}</SText>



                    </SView>
                </SView>
            }} />
    }
    render() {
        return (
            <SPage title={'lista'} disableScroll>
                <SView col={"xs-12"} center height>
                    {this.getLista()}
                </SView>
                <FloatButtom onPress={() => {
                    SNavigation.navigate("admin/usuario_restaurante/lista002");
                }} />
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(lista);