import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SHr, SPage, SText } from 'servisofts-component';
import PedidoEnCurso from '../Services/Tapeke/Tasks/PedidoEnCurso';
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SPage title={'Test'} center>
                <SText>{PedidoEnCurso.getByKeyUsuario(this.props)}</SText>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Test);