import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SImage, SList, SLoad, SNavigation, SPage, SPopup, SText, STheme, SThread, SView, SIcon } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import Parent from '..';
import usuario from '../../../../Usuario/Components/usuario';
import restaurante from '../../restaurante';
import PButtom from '../../../../../Components/PButtom';

class registro extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getUsuarios() {
        var data = Parent.Actions.getByKeyUsuario(this.props.state.usuarioReducer.usuarioLog.key, this.props);
        if (!data) return <SLoad />
        var dataRestaurante = restaurante.Actions.getAll(this.props);
        if (!dataRestaurante) return <SLoad />
        //alert(Object.keys(dataRestaurante).find(key => dataRestaurante[key].key_usuario === this.props.state.usuarioReducer.usuarioLog.key));

        new SThread(200, "esperaalgo", false).start(() => {
            var arr = Object.values(data).filter(x => x.key_usuario == this.props.state.usuarioReducer.usuarioLog.key && x.estado == 1);
            if (data.length <= 1) {
                // SNavigation.replace("inicio", { key_restaurante: arr[0].key_restaurante });
            }
        });
        return <>
            <SHr height={20} />
            <SView col={"xs-12"} center style={{ borderBottomWidth: 2, borderColor: STheme.color.primary }} height={50}>
                <SText fontSize={20} font={"Roboto"} color={STheme.color.darkGray} style={{ fontWeight: "bold", }}>MIS RESTAURANTES</SText>
            </SView>
            <SHr height={20} />
            {(Object.keys(dataRestaurante).find(key => dataRestaurante[key].key_usuario === this.props.state.usuarioReducer.usuarioLog.key)) ? //validando si el usuario tiene un restaurante asignado
                <SList data={dataRestaurante} center space={16}
                    filter={obj => {
                        if (obj.estado != 1) return false;
                        return data.find(o => o.key_restaurante == obj.key)
                    }}
                    render={obj => {
                        return <SView col={"xs-12"} backgroundColor={STheme.color.card} row
                            style={{
                                borderWidth: 2, borderColor: STheme.color.lightGray,
                                borderRadius: 8, overflow: 'hidden'
                            }} center onPress={() => {
                                        SNavigation.replace("inicio", { key_restaurante: `${obj.key}` });

                                // SPopup.confirm({
                                //     title: "??Est?? seguro que desea ir a este restaurante?", message: `${obj.nombre}`,
                                //     onPress: () => {
                                //         SNavigation.navigate("inicio", { key_restaurante: `${obj.key}` });
                                //     }
                                // })
                            }}>
                            <SView col={"xs-3"} center row>
                                <SHr height={10} />
                                <SView width={70} height={70} style={{ borderRadius: 40, overflow: 'hidden', backgroundColor: '#eee', }}>
                                    <SImage src={SSocket.api.root + "restaurante/" + obj.key} style={{ resizeMode: "cover", }} />
                                </SView>
                                <SHr height={10} />
                            </SView>
                            <SView flex col={"xs-9"}>
                                <SHr height={10} />
                                <SText font={"Roboto"} fontSize={16} bold color={STheme.color.primary}>{`${obj.nombre}  `}</SText>
                                <SText font={"Roboto"} fontSize={13}>{`${obj.descripcion}`}</SText>
                                <SText font={"Roboto"} fontSize={12} style={{ fontStyle: "italic" }}>{`${obj.direccion}`}</SText>
                                <SHr height={10} />
                            </SView>
                        </SView>
                    }} /> :
                <SView col={"xs-12"} center>
                    <SHr height={20} />
                    <SText fontSize={15} font={"Roboto"} style={{ fontWeight: "bold" }}>No tiene restaurante asignado</SText>
                    <SHr height={20} />
                    <PButtom fontSize={20} onPress={() => {
                        this.props.dispatch({ type: "USUARIO_LOGOUT" }); SNavigation.replace("login"); this.fadeOut();
                    }}> <SIcon fill="#FFFFFF" name={"Exit"} width={28} height={27} />SALIR</PButtom>
                </SView>
            }

        </>
    }

    render() {
        if (!usuario.Actions.validateSession(this.props)) {
            return <SLoad />;
        }
        return (
            <SPage title={'Tapeke Restaurante'} onRefresh={()=>{
                Parent.Actions.refresh(this.props);
            }}>
                <SView col={"xs-12"} center>
                    <SView col={"xs-11 sm-11 md-10 lg-8 xl-6"} center >
                        {this.getUsuarios()}
                    </SView>
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(registro);