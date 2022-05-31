import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SDate, SLoad, SNavigation, SPage, STable2, SText, SView } from 'servisofts-component';
import pedido from '..';
import pack from '../../pack';
import horario from '../../horario';
import restaurante from '../../restaurante';
import usuario from '../../../../Usuario/Components/usuario';
import conductor_horario from '../../conductor_horario';
class DashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    data() {
        var data_pedido = pedido.Actions.getAll(this.props);
        var data_pack = pack.Actions.getAll(this.props);
        var data_horario = horario.Actions.getAll(this.props);
        var data_restaurante = restaurante.Actions.getAll(this.props);
        var data_usuario = usuario.Actions.getAll(this.props);
        var data_conductor_horario = conductor_horario.Actions.getAll(this.props);
        if (!data_pedido) return <SLoad />
        if (!data_pack) return <SLoad />
        if (!data_horario) return <SLoad />
        if (!data_restaurante) return <SLoad />
        if (!data_usuario) return <SLoad />
        if (!data_conductor_horario) return <SLoad />
        var data = {}
        Object.values(data_pack).map(obj => {
            var horario = data_horario[obj?.key_horario]
            var restaurante = data_restaurante[horario?.key_restaurante]

            var sd = new SDate();
            if (!horario) return null;
            if (horario?.dia == sd.getDayOfWeek()) {

            } else if (horario?.dia > sd.getDayOfWeek()) {
                sd.addDay((- sd.getDayOfWeek()) + horario?.dia);
            } else if (horario?.dia < sd.getDayOfWeek()) {
                sd.addDay((7 - sd.getDayOfWeek()) + horario?.dia);
            }
            var fecha = sd.toString("yyyy-MM-dd");
            // dow.fecha = date.addDay(7 - date.getDayOfWeek() + dow.dia).toString("yyyy-MM-dd");
            var pedidos = Object.values(data_pedido).filter(p => p.key_pack == obj?.key && p.fecha == fecha)
            var delivery = pedidos.filter(p => p.delivery > 0)
            var conductores = Object.values(data_conductor_horario).filter(p => p.key_horario == horario?.key)
            var fecha_date = new SDate(fecha + " " + horario?.hora_inicio, "yyyy-MM-dd hh:mm");
            data[obj.key] = {
                ...obj,
                fecha,
                fecha_date,
                horario,
                restaurante,
                pedidos,
                delivery,
                conductores
            }
        })
        return <STable2
            header={[
                { key: "index", label: "#", width: 50 },
                // { key: "cantidad", label: "cantidad", width: 50 },
                { key: "restaurante/nombre", label: "nombre", width: 170 },
                { key: "precio", label: "precio", width: 50 },
                // { key: "fecha", label: "fecha", width: 100, order: "asc" },
                {
                    key: "-", label: "fecha", width: 100, order: "asc", center: true,
                    render: d => {
                        return d.fecha_date.toString("yyyy-MM-dd hh:mm") + "-" + d.horario.hora_fin
                    }
                },
                { key: "fecha-dia", label: "dia", width: 70, render: (d) => { return new SDate(d, "yyyy-MM-dd").getDayOfWeekJson().text } },
                // { key: "horario/hora_inicio", label: "Inicio",  width: 50 },
                // { key: "horario/hora_fin", label: "Fin", width: 50 },
                {
                    key: "-pedidos", label: "pedidos", width: 70, center: true, render: (obj) => {
                        return "( " + obj.pedidos.length + " / " + obj.cantidad + " )"
                    }
                },
                {
                    key: "-delivery", label: "delivery", width: 70, center: true, render: (obj) => {
                        return obj.delivery.length
                    }
                },
                {
                    key: "-conductores", label: "Conductores", width: 70, center: true,
                    component: (obj) => {
                        return <SView col={"xs-12"} height center onPress={() => {
                            SNavigation.navigate("conductor_horario", { key_horario: obj.horario.key });
                        }
                } >
                <SText>{obj.conductores.length}</SText>
                        </SView >
                    }
                },

            ]
}

limit = { 50}
data = { data }
filter = {(itm) => {
    return true
    // return itm.state != "pendiente_pago"
}}
/>

    }
render() {
    return (
        <SPage title={"DashBoard"} disableScroll>
            {this.data()}
        </SPage>
    );
}
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(DashBoard);