import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SForm, SHr, SLoad, SNavigation, SPage, SText, SView, SDate, SInput, SPopup, SList, SImage } from 'servisofts-component';
import Parent from '..'
import SSocket from 'servisofts-socket';
import usuario from '../../../../Usuario/Components/usuario';
import restaurante from '../../restaurante';
class registro extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getUsuarios() {
        var data = Parent.Actions.getByKeyUsuario(this.props.state.usuarioReducer.usuarioLog.key, this.props);
        var dataRestaurante = restaurante.Actions.getAll(this.props);
        if (!dataRestaurante) return <SLoad />

        console.log(dataRestaurante);

        return <SList data={dataRestaurante} center space={16}
            filter={obj => {
                if (obj.estado != 1) return false;
                return data.find(o => o.key_restaurante == obj.key)
            }}
            render={obj => {
                return <SView col={"xs-11"} height={90}
                    style={{
                        borderBottomWidth: 2,
                        borderBottomColor: "#eee",
                    }} row center onPress={() => {
                        SPopup.confirm({
                            title: "¿Está seguro de que desea Ir a este restaurante ?",
                            message: `${obj.nombre}`,
                            onPress: () => {

                                // SNavigation.navigate("restaurante/perfil", { key_restaurante: `${obj.key}` });
                                SNavigation.navigate("admin/usuario_restaurante/restaurante", { key_restaurante: `${obj.key}` });


                            }
                        })
                    }}>
                    <SView width={8} />
                    <SView width={70} height={70} center style={{
                        borderRadius: 40,
                        overflow: 'hidden',
                        backgroundColor: '#eee',
                    }}>

                        <SImage src={SSocket.api.root + "restaurante/" + obj.key} style={{
                            resizeMode: "cover",
                        }} />
                    </SView>
                    <SView width={8} />
                    <SView flex>
                        <SText fontSize={14} bold>{`${obj.nombre}  `}</SText>
                        <SText fontSize={12}>{`${obj.descripcion}`}</SText>
                        <SText fontSize={12}>{`${obj.direccion}`}</SText>
                    </SView>
                </SView>
            }} />

    }

    render() {
        return (
            <SPage title={'registro'}>
                <SView col={"xs-12"} center>
                    {this.getUsuarios()}
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(registro);