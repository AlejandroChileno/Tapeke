import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SPage, SText } from 'servisofts-component';
import Pages from '.';
import BarraSuperiorTapeke from '../Components/BarraSuperiorTapeke';


class Administracion extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const UsuaioPage = Pages["usuarioPage/lista"];
        return (
            <SPage title={'Administracion'} preventBack hidden>
                <BarraSuperiorTapeke><SText color={"#fff"} bold font={"Roboto"} fontSize={18}>Administración</SText></BarraSuperiorTapeke>
                <UsuaioPage />
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Administracion);