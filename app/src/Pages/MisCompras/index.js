import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SLoad, SPage, SText } from 'servisofts-component';
import pedido from '../../Services/Tapeke/Components/pedido';

class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getLista() {
        var data = pedido.Actions.getAll(this.props);
        if (!data) return <SLoad />
        var arr = Object.values(data).filter(itm => itm.key_usuario == this.props.state.usuarioReducer.usuarioLog.key);
        return <SText>{JSON.stringify(arr, "\n", "\t")}</SText>
    }
    render() {
        return (
            <SPage title={'MisCompras'}>
                {this.getLista()}
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(index);