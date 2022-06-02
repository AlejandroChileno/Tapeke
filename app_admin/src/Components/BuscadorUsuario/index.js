import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SPage, SText, SView } from 'servisofts-component';

class BuscadorUsuario extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SView col={"xs-12"}>
                <SText>{'BuscadorUsuario'}</SText>
            </SView>

        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(BuscadorUsuario);