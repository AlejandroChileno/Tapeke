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
                    { label: "Todos", image:require("../img/todos.png"), url: "pedido/all" },
                    { label: "Activos", image:require("../img/activos.png"), url: "pedido/activos" },
                    { label: "Entregados", image:require("../img/entregados.png"), url: "pedido/entregados" },
                    { label: "dashboard", image:require("../img/dashboard.png"), url: "pedido/dashboard" },
                    
                ]} />

            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Home);