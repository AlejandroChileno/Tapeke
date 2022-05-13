import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SImage, SList, SLoad, SNavigation, SPage, SPopup, SText, SView, SHr, STheme } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import Parent from '..';
import usuario from '../../../../Usuario/Components/usuario';
import restaurante from '../../restaurante';
class registro extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        if (!usuario.Actions.validateSession(this.props)) { return <SLoad />; }
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
                return <SView col={"xs-12"} backgroundColor={STheme.color.card}
                    style={{
                        borderWidth: 2, borderColor: STheme.color.lightGray,
                        borderRadius: 8, overflow: 'hidden'
                    }} row center onPress={() => {
                        SPopup.confirm({
                            title: "¿Está seguro que desea ir a este restaurante?", message: `${obj.nombre}`,
                            onPress: () => {
                                SNavigation.navigate("inicio", { key_restaurante: `${obj.key}` });
                                // SNavigation.navigate("admin/usuario_restaurante/restaurante", { key_restaurante: `${obj.key}` });
                            }
                        })
                    }}>
                    <SHr height={15} />
                    <SView width={8} />
                    <SView width={70} height={70} center style={{ borderRadius: 40, overflow: 'hidden', backgroundColor: '#eee', }}>
                        <SImage src={SSocket.api.root + "restaurante/" + obj.key} style={{ resizeMode: "cover", }} />
                    </SView>
                    <SView width={8} />
                    <SView flex>
                        <SText font={"Roboto"} fontSize={16} bold color={STheme.color.primary}>{`${obj.nombre}  `}</SText>
                        <SText font={"Roboto"} fontSize={13}>{`${obj.descripcion}`}</SText>
                        <SText font={"Roboto"} fontSize={12} style={{ fontStyle: "italic" }}>{`${obj.direccion}`}</SText>
                    </SView>
                    <SHr height={15} />

                </SView>
            }} />
    }

    render() {
        if (!usuario.Actions.validateSession(this.props, true)) {
            return <SLoad />;
          }

        var data = Parent.Actions.getByKeyUsuario(this.props.state.usuarioReducer.usuarioLog.key, this.props);
        // var dataRestaurante = restaurante.Actions.getAll(this.props);
        if (!data) return <SLoad />
         const key_usuario = this.props.state.usuarioReducer.usuarioLog.key;
        var arr = Object.values(data).filter(x => x.key_usuario == key_usuario && x.estado == 1);
        if (data.length <= 1) {
            SNavigation.navigate("inicio", {
                key_restaurante: arr[0].key_restaurante
            });
        }
        return (
            <SPage title={'Tapeke Restaurante'} >
                <SView col={"xs-12"} center>
                    <SView col={"xs-11 sm-11 md-10 lg-8 xl-6"} center >
                        <SHr height={20} />
                        <SView col={"xs-12"} center style={{ borderBottomWidth: 2, borderColor: STheme.color.primary }} height={50}>
                            <SText fontSize={20} font={"Roboto"} color={STheme.color.darkGray} style={{ fontWeight: "bold", }}>MIS RESTAURANTES</SText>
                        </SView>
                        <SHr height={20} />
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