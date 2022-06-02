import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SPage, SText } from 'servisofts-component';
import MenuIcons from '../../../../../Components/MenuIcons';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SPage title={'Conductor'}>

                <MenuIcons data={[
                    { label: "Mapa", icon: "Ajustes", url: "conductor/mapa" },
                    { label: "Horarios", icon: "Ajustes", url: "conductor_horario" },
                ]} />


            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Home);