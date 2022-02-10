import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SGradient, SHr, SIcon, SImage, SLoad, SPage, SScrollView2, SText, STheme, SView, SNavigation } from 'servisofts-component';
import Kolping from '../Components/Kolping';
import usuario from '../Services/Usuario/Components/usuario';

class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        if (!usuario.Actions.validateSession(this.props)) {
            return <SLoad />
        }
    }
    render() {
        if (!usuario.Actions.validateSession(this.props)) {
            return <SLoad />
        }
        // var UsuaioPage = Pages["usuarioPage/lista"];
        return (
            <SPage title={'Inicio'} hidden disableScroll>
                <Kolping.KBarraUsuario />
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Inicio);