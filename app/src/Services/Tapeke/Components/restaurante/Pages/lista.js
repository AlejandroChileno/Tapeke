import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SImage, SLoad, SNavigation, SPage, STable2, SText, SView } from 'servisofts-component';
import Parent from '..'
import SSocket from 'servisofts-socket'
import FloatButtom from '../../../../../Components/FloatButtom';
class lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getLista() {
        var data = Parent.Actions.getAll(this.props);
        if (!data) return <SLoad />
        return <STable2
            header={[
                { key: "index", label: "#", width: 50 },
                {
                    key: "key-foto", label: "foto", width: 100,
                    render: (item) => {
                        // SSocket.api.root+'medico/key'
                        return SSocket.api.root + Parent.component + "/" + item
                    },
                    component: (url) => {
                        return <SImage enablePreview src={url + "?time=" + new Date().getTime()} width={"100%"} height={"100%"} />
                    }
                },
                { key: "nombre", label: "Nombre", width: 130 },
                { key: "descripcion", label: "Descripcion", width: 130 },
                { key: "direccion", label: "Direccion", width: 130 },
                { key: "lat", label: "Lat", width: 130 },
                { key: "lng", label: "Lng", width: 130 },
                {
                    key: "key-editar", label: "Editar", width: 50, center: true,
                    component: (item) => {
                        return <SView onPress={() => { SNavigation.navigate("admin/" + Parent.component + "/registro", { key: item }) }}>
                            <SIcon name={"Edit"} width={35} />
                        </SView>
                    }
                },
            ]}
            data={data}
        />
    }
    render() {
        return (
            <SPage title={'lista'} disableScroll>

                <SView col={"xs-12"} center height>
                    {this.getLista()}
                </SView>
                <FloatButtom onPress={() => {
                    SNavigation.navigate("admin/restaurante/registro");
                }} />
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(lista);