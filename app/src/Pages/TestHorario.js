import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SPage, SText, STheme, SView } from 'servisofts-component';
import Kolping from '../Components/Kolping';
import HorarioPrueba from '../Services/Tapeke/Components/restaurante/Components/Horario';

const Code = (code) => {
    return (
        <SView card style={{
            padding: 8,
        }} center col={"xs-12"}>
            <SText color={STheme.color.lightBlack} fontSize={12} center>{code.children}</SText>
        </SView>
    );
}
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SPage title={'Test'}>
                <SView col={"xs-12"} center >
                    <SHr />
                    <HorarioPrueba />

                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Test);