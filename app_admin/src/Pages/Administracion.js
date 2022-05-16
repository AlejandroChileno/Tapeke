import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SPage, SText, SLoad } from 'servisofts-component';
import UsuarioPageLista from '../Services/Roles_permisos/Components/usuarioPage/Pages/Lista';
import BarraSuperiorTapeke from '../Components/BarraSuperiorTapeke';
import usuario from '../Services/Usuario/Components/usuario';


class Administracion extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        if (!usuario.Actions.validateSession(this.props)) {
            return <SLoad />;
        }
        return (
            <SPage title={'Administracion'} preventBack hidden>
                <BarraSuperiorTapeke><SText color={"#fff"} bold font={"Roboto"} fontSize={18}>Administración</SText></BarraSuperiorTapeke>
                <UsuarioPageLista />
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Administracion);