import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SImage, SLoad, SNavigation, SPage, STable2, SText, SView } from 'servisofts-component';
import Parent from '../index'
import SSocket from 'servisofts-socket';
class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getContent() {
        var data = Parent.Actions.getAll(this.props);
        if (!data) return <SLoad />;
        return <STable2
            header={[
                { key: "index", label: "#", width: 50 },
                // { key: "key", label: "key", width: 200 },
                {
                    key: "key-foto", label: "Foto", width: 70, center: true, component: (key) => {
                        return <SView width={40} height={40} onPress={() => {
                        }}>
                            <SImage src={SSocket.api.root + Parent.component + "/" + key} />
                        </SView>
                    }
                },
                { key: "-", label: "Nombres", width: 200, render:o=>o.Nombres+" "+o.Apellidos },
                { key: "Correo", label: "Correo", width: 150 },
                { key: "Telefono", label: "Telefono", width: 130, center:true, },
                { key: "-Tipo", label: "Tipo", width: 100, center:true, render: o => {
                    if(o["gmail_key"]){
                        return "Gmail";
                    }
                    if(o["facebook_key"]){
                        return "Facebook";
                    }
                    return "App"
                } },
                {
                    key: "key-editar", label: "Editar", width: 50, center: true, component: (item) => {
                        return <SView onPress={() => { SNavigation.navigate(Parent.component + "/registro", { key: item }) }}>
                            <SIcon name={"Edit"} width={35} />
                        </SView>
                    }
                },
                {
                    key: "key-roles", label: "Roles", width: 50, center: true,
                    component: (item) => {
                        return <SView onPress={() => { SNavigation.navigate(Parent.component + "/rol", { key: item }) }}>
                            <SIcon name={"Ajustes"} width={35} />
                        </SView>
                    }
                },
                {
                    key: "key-addCredits", label: "Billetera", width: 50, center: true,
                    component: (item) => {
                        return <SView onPress={() => { SNavigation.navigate("admin/billetera/registro", { key_cliente: item }) }}>
                            <SIcon name={"Billetera"} width={35} />
                        </SView>
                    }
                },
            ]}
            data={data}
        />
    }
    render() {
        // Parent.Actions.validateSession(this.props);
        return (
            <SPage title={'Lista de ' + Parent.component} disableScroll center>
                {this.getContent()}
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Lista);