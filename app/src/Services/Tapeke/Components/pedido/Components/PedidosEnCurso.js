import React, { Component } from "react";
import { connect } from "react-redux";
import { SDate, SHr, SIcon, SList, SLoad, SNavigation, SText, STheme, SView } from "servisofts-component";
import BarraCargando from "../../../../../Components/BarraCargando";
import pedido from "../../../../../Services/Tapeke/Components/pedido";
import restaurante from "../../../../../Services/Tapeke/Components/restaurante";

class PedidosEnCurso extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }



    getDetalleEstado(pedido) {
        switch (pedido.state) {
            case "pagado":
                return "Esperando la hora de comer.";
        }
        return pedido.state;
    }

    pedidoencurso() {
        var excluded_states = ["pendiente_pago", "timeout_pago"];
        var dataPedido = pedido.Actions.getPedidoByKeyUsuario(this.props.state.usuarioReducer.usuarioLog.key, this.props)
        var restaurantes = restaurante.Actions.getAll(this.props);
        if (!dataPedido) return <SLoad />
        if (!restaurantes) return <SLoad />
        return <SList
            data={dataPedido}
            space={16}
            horizontal={true}
            filter={data => !excluded_states.includes(data.state)}
            render={(data) => {
                var restaurante_obj = restaurantes[data.horario.key_restaurante];
                return <SView width={320} backgroundColor={STheme.color.primary} style={{ borderRadius: 8, }} center onPress={() => {
                    SNavigation.navigate("pedido", { key_pedido: data.key });
                }}>
                    <SView flex col={"xs-12"} center>
                        <SHr />
                        <SView col={"xs-12"} row center  >
                            <SView width={14} height />
                            <SView flex style={{ justifyContent: 'center', }}    >
                                <SText fontSize={14} font={"Roboto"} color={"white"} >{restaurante_obj.nombre}</SText>
                                <SHr height={8} />
                                <SText fontSize={12} font={"Roboto"} color={"white"} bold >{this.getDetalleEstado(data)}</SText>
                                <SHr height={4} />
                                <SView row >
                                    <SText fontSize={12} font={"Roboto"} color={"white"} >{new SDate(data.fecha).toString("dd de MONTH")}</SText>
                                    <SView width={8} />
                                    <SText fontSize={12} font={"Roboto"} color={"white"} >{data.horario.hora_inicio} - {data.horario.hora_fin}</SText>
                                </SView>

                            </SView>
                            <SView col={"xs-2"} style={{ alignContent: 'center', }}>
                                <SView height={36} width={36} center   >
                                    <SIcon name="Menu" fill="#eeeeee"></SIcon>
                                </SView>
                            </SView>
                        </SView>
                    </SView>
                    <SHr />
                    <SView col={"xs-11"}>
                        <BarraCargando />
                    </SView>
                    <SHr />
                    <SView col={"xs-12"} center row>
                        <SText width={120} font={"Roboto"} style={{ fontSize: 11, color: "#eeeeee", textDecoration: "underline" }} center >Ver los detalles</SText>
                        <SIcon name={"Back"} width={12} height={12} fill={"#eeeeee"} style={{ transform: [{ rotate: "180deg" }] }} center />
                    </SView>
                    <SHr />
                </SView>
            }} />
    }



    render() {
        return this.pedidoencurso();
    }
}
const initStates = (state) => {
    return { state };
};
export default connect(initStates)(PedidosEnCurso);