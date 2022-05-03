import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SHr, SPage, SText } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import LogoCargando from '../Components/LogoCargando';
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'PRESIONA EL BOTON',
        };
    }

    render() {
        return (
            <SPage title={'Test'} center>
                <LogoCargando/>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Test);