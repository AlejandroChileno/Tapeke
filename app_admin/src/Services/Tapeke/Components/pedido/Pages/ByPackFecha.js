import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SLoad, SNavigation, SPage, STable2, SText, SView } from 'servisofts-component';
import pedido from '..';
import pack from '../../pack';
import horario from '../../horario';
import restaurante from '../../restaurante';
import usuario from '../../../../Usuario/Components/usuario';
class ByPackFecha extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key_pack = SNavigation.getParam("key_pack");
        this.fecha = SNavigation.getParam("fecha");
    }

    data() {
        var data = pedido.Actions.getAll(this.props);
        var data_pack = pack.Actions.getAll(this.props);
        var data_horario = horario.Actions.getAll(this.props);
        var data_restaurante = restaurante.Actions.getAll(this.props);
        var data_usuario = usuario.Actions.getAll(this.props);
        if (!data) return <SLoad />
        if (!data_pack) return <SLoad />
        if (!data_horario) return <SLoad />
        if (!data_restaurante) return <SLoad />
        if (!data_usuario) return <SLoad />
        return <STable2
            header={[
                { key: "index", label: "#", width: 50 },
                { key: "key", label: "#key", width: 150 },
                {
                    key: "key_pack-restaurante", label: "Restaurante", width: 150, render: (item) => {
                        var p = data_pack[item];
                        var h = data_horario[p?.key_horario];
                        var r = data_restaurante[h?.key_restaurante];
                        return r?.nombre
                    }
                },
                { key: "fecha", label: "fecha", width: 100, order: "desc" },

                {
                    key: "key_pack-horario", label: "Horario", width: 150, render: (item) => {
                        var p = data_pack[item];
                        var h = data_horario[p?.key_horario];
                        return h?.hora_inicio + " - " + h?.hora_fin
                    }
                },
                { key: "cantidad", label: "cantidad", width: 50, center: true },
                { key: "precio", label: "precio", width: 50, center: true },
                { key: "delivery", label: "delivery", width: 50, center: true },
                { key: "state", label: "state", width: 100 },
                {
                    key: "key_usuario", label: "Cliente", width: 150, render: (item) => {
                        return data_usuario[item]?.Nombres + " " + data_usuario[item]?.Apellidos
                    }
                },
                // {
                //     key: "key_conductor", label: "Conductor", width: 150, render: (item) => {
                //         if (!item) return "";
                //         return data_usuario[item]?.Nombres + " " + data_usuario[item]?.Apellidos
                //     },
                // },
             

            ]}

            limit={50}
            data={data}
            filter={(itm) => {
                // return true
                return itm.key_pack == this.key_pack && itm.fecha == this.fecha && itm.state != "pendiente_pago"
            }}
        />

    }
    render() {
        return (
            <SPage title={"Pedidos ByPackFecha"} disableScroll>
                {this.data()}
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(ByPackFecha);