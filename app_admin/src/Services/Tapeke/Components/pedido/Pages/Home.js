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
            <SPage title={'Home'}>

                <MenuIcons data={[
                    { label: "Todos", icon: "Ajustes", url: "pedido/all" },
                    { label: "Activos", icon: "Ajustes", url: "pedido/activos" },
                    { label: "Entregados", icon: "Ajustes", url: "pedido/entregados" },
                    { label: "dashboard", icon: "Ajustes", url: "pedido/dashboard" },
                    
                ]} />

            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Home);