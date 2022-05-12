import React, { Component } from "react";
import { connect } from "react-redux";
import { SButtom, SHr, SLoad, SNavigation, SPage, SText, STheme, SView } from "servisofts-component";
import BarraSuperiorTapeke from "../Components/BarraSuperiorTapeke";
import PBarraFooter from "../Components/PBarraFooter";
import pedido from "../Services/Tapeke/Components/pedido";

class PedidoEscaneado extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.key_pedido = SNavigation.getParam("key_pedido");
  }

  render() {
    var dataPedido = pedido.Actions.getByKey(this.key_pedido, this.props)
    if (!dataPedido) return <SLoad />
    console.log("romeo ", dataPedido);
    return (<>
      <BarraSuperiorTapeke >
      </BarraSuperiorTapeke>
      <SPage title={"Pedidos de Hoy"} hidden disableScroll center>
        <SView col={"xs-12 sm-11 md-10 lg-8 xl-6"} center backgroundColor={'transparent'}>
          <SHr height={20} />
          <SText style={{ textAlign: "justify" }} fontSize={14} font={"Roboto"} >Cantidad {dataPedido.cantidad}</SText>
          <SText style={{ textAlign: "justify" }} fontSize={14} font={"Roboto"} >delivery {dataPedido.delivery}</SText>
          <SText style={{ textAlign: "justify" }} fontSize={14} font={"Roboto"} >fecha {dataPedido.fecha}</SText>
          <SText style={{ textAlign: "justify" }} fontSize={14} font={"Roboto"} >Estado {dataPedido.state}</SText>
          <SHr height={10} />
        </SView>
        <SButtom style={{ backgroundColor: STheme.color.primary, width: 300, fontSize: 40, borderRadius: 8, }} onPress={() => {
          // SNavigation.navigate("pedido/blabla", { pedido: this.key_pedido });
        }} > confirmar </SButtom>
      </SPage>
      <SHr height={20} />
      <PBarraFooter />
    </>
    );
  }
}
const initStates = (state) => {
  return { state };
};
export default connect(initStates)(PedidoEscaneado);
