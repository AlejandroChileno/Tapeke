import React, { Component } from "react";
import { connect } from "react-redux";
import { SHr, SIcon, SImage, SLoad, SNavigation, SPage, SScrollView2, SText, STheme, SView, SPopup, SForm, SButtom, SDate } from "servisofts-component";
import BarraSuperiorTapeke from "../Components/BarraSuperiorTapeke";
// import BarraSuperiorTapeke from "../Components/BarraSuperiorTapeke";
// import Direccion from "../Components/BarraSuperiorTapeke/Direccion";
import PBarraFooter from "../Components/PBarraFooter";
import FloatButtomQR from '../Components/FloatButtomQR';
import usuario from "../Services/Usuario/Components/usuario";
import restaurante from "../Services/Tapeke/Components/restaurante";
import horario from "../Services/Tapeke/Components/horario";
import pedido from "../Services/Tapeke/Components/pedido";
import pack from "../Services/Tapeke/Components/pack";
import usuarioRest from "../Services/Tapeke/Components/usuario_restaurante";

import SSocket from 'servisofts-socket';


class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.key_restaurante = SNavigation.getParam("key_restaurante");
  }

  componentDidMount() {
    if (!usuario.Actions.validateSession(this.props)) { return <SLoad />; }
  }

  getContent(dataHorarioCercano, dataPack, dataPackVendidos) {

    return Object.keys(dataPackVendidos).map((key, index) => {
      var montoTotal = dataPackVendidos[key].cantidad * dataPackVendidos[key].precio;
      //datos UserInfo
      var dataUsuario = usuario.Actions.getByKey(dataPackVendidos[key].key_usuario, this.props);
      if (!dataUsuario) return null;

      return <>
        <SView col={"xs-12"} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 8 }} row center backgroundColor={STheme.color.card}
          onPress={() => { SNavigation.navigate("pedido", {key_pedido: dataPackVendidos[key].key}); }}>
          <SHr height={10} />
          <SView col={"xs-11"} row center>
            <SView col={"xs-3"} center>
              <SView width={60} height={60} style={{ borderRadius: 8, overflow: "hidden" }}>
                <SImage src={SSocket.api.root + "usuario/" + dataUsuario.key } style={{
                  resizeMode: "cover", width: "100%",
                  height: "100%",
                  borderRadius: 8, overflow: "hidden"
                }} />
              </SView>
            </SView>
            <SView col={"xs-3"} center style={{ borderRightWidth: 1, borderColor: STheme.color.lightGray }}>
              <SText font={"Roboto"} fontSize={13} color={STheme.color.primary}>PACKS</SText>
              <SText font={"Roboto"} fontSize={24} color={STheme.color.text}>x {dataPackVendidos[key].cantidad}</SText>
            </SView>
            <SView col={"xs-6"} row >
              <SView col={"xs-1"} ></SView>
              <SView row col={"xs-11"} >
                <SView row col={"xs-12"} >
                  <SText font={"Roboto"} fontSize={12} color={STheme.color.primary}>Nombre: </SText>
                  <SText font={"Roboto"} fontSize={12} color={STheme.color.text}>{dataUsuario.Nombres} {dataUsuario.Apellidos}</SText>
                </SView>
                <SView row col={"xs-12"}>
                  <SText font={"Roboto"} fontSize={12} color={STheme.color.primary}>Total: </SText>
                  <SText font={"Roboto"} fontSize={12} color={STheme.color.text}>Bs. {montoTotal}</SText>
                </SView>
                <SView col={"xs-12"} flex style={{ alignItems: "flex-end", bottom: -5 }}>
                  <SView width={35} height={35} style={{ borderRadius: 100, }} backgroundColor={dataPackVendidos[key].state=="entregado" ? STheme.color.success : STheme.color.lightGray} center>
                    <SIcon name="Aspa"  width={20} height={20}></SIcon>
                  </SView>
                </SView>
              </SView>
            </SView>
            <SHr height={10} />
          </SView>
        </SView>

        <SHr height={10} />

        {/* <SView col={"xs-12"} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 8 }} row center backgroundColor={STheme.color.card}
          onPress={() => { SNavigation.navigate("pedido/detalle"); }}>
          <SHr height={10} />
          <SView col={"xs-11"} row center>
            <SView col={"xs-3"} center>
              <SView width={60} height={60} style={{ borderRadius: 8, overflow: "hidden" }}>
                <SImage src={require("../Assets/img/perfil.jpg")} style={{
                  resizeMode: "cover", width: "100%",
                  height: "100%",
                }} />
              </SView>
            </SView>
            <SView col={"xs-3"} center style={{ borderRightWidth: 1, borderColor: STheme.color.lightGray }}>
              <SText font={"Roboto"} fontSize={13} color={STheme.color.primary}>CANTIDAD</SText>
              <SText font={"Roboto"} fontSize={24} color={STheme.color.text}>x 2</SText>
            </SView>
            <SView col={"xs-6"} row >
              <SView col={"xs-1"} ></SView>
              <SView row col={"xs-11"} >
                <SView row col={"xs-12"} >
                  <SText font={"Roboto"} fontSize={12} color={STheme.color.primary}>Nombre: </SText>
                  <SText font={"Roboto"} fontSize={12} color={STheme.color.text}>Dani Ramos</SText>
                </SView>
                <SView row col={"xs-12"}>
                  <SText font={"Roboto"} fontSize={12} color={STheme.color.primary}>Total: </SText>
                  <SText font={"Roboto"} fontSize={12} color={STheme.color.text}>Bs. 75</SText>
                </SView>
                <SView col={"xs-12"} flex style={{ alignItems: "flex-end", bottom: -5 }}>
                  <SView width={35} height={35} style={{ borderRadius: 100, }} backgroundColor={"#32B768"} center>
                    <SIcon name="Aspa" width={20} height={20}></SIcon>
                  </SView>
                </SView>
              </SView>
            </SView>
            <SHr height={10} />
          </SView>
        </SView> */}
      </>

    })
  }

  contenidoHead() {
    var dataRestaurante = restaurante.Actions.getByKeyDetalle(this.key_restaurante, this.props)
    if (!dataRestaurante) return <SLoad />

    return <>
      <SView col={"xs-12"} row center >
        <SView width={25} />
        <SView width={60} height={60} center style={{ borderRadius: 40, overflow: 'hidden', backgroundColor: '#eee', }}>
          <SImage src={SSocket.api.root + "restaurante/" + dataRestaurante.key} style={{ resizeMode: "cover", }} />
        </SView>
        <SView width={25} />
        <SView center>
          <SText font={"Roboto"} fontSize={25}  >{dataRestaurante.nombre}</SText>
        </SView>
      </SView>
    </>
  }

  contenidoBody() {
    var dataHorarioCercano = horario.Actions.getByKeyRestauranteProximo(this.key_restaurante, this.props);
    if (!dataHorarioCercano) return null;

    //Pack
    var dataPack = pack.Actions.getByKeyHorario(dataHorarioCercano.key, this.props);
    if (!dataPack) return null;
    var dataPackVendidos = pedido.Actions.getVendidosData({ key_pack: dataPack.key, fecha: dataHorarioCercano.fecha }, this.props);
    if (!dataPackVendidos) return null;

    return <>
      <SHr height={20} />
      <SText font={"Roboto"} fontSize={27}  >{dataHorarioCercano.text.replace(/^\w/, (c) => c.toUpperCase())} Hrs.</SText>
      <SHr height={10} />
      <SView col={"xs-11"} row center height={25} backgroundColor={'transparent'}>
        <SIcon name="Carga" width={270}></SIcon>
      </SView>
      <SHr height={10} />
      <SText font={"Roboto"} fontSize={16}>{dataHorarioCercano.extraData.text},  {new SDate(dataHorarioCercano.fecha, "yyyy-MM-dd").toString("dd de MONTH, yyyy")} </SText>
      <SText font={"Roboto"} style={{ fontWeight: "bold" }} fontSize={16}>( {dataPackVendidos.length} / {dataPack.cantidad} )</SText>
      <SHr height={20} />
      <SView col={"xs-11"} style={{ borderBottomWidth: 2, borderColor: STheme.color.primary }}></SView>
      <SHr height={20} />
      <SView col={"xs-11"} row    >
        {this.getContent(dataHorarioCercano, dataPack, dataPackVendidos)}
      </SView>
    </>
  }


  render() {

    if (!usuario.Actions.validateSession(this.props, true)) {
      return <SLoad />;
    }
    // var UsuaioPage = Pages["usuarioPage/lista"];

    return (
      <>
        <BarraSuperiorTapeke >
        </BarraSuperiorTapeke>
        <SPage title={"Pedidos de Hoy"} hidden center>
          <SView col={"xs-12 sm-11 md-10 lg-8 xl-6"} row center backgroundColor={'transparent'}>
            <SHr height={20} />
            <SView col={"xs-11"} row center border={STheme.color.primary} style={{ borderRadius: 8 }}>
              <SHr height={10} />
              {this.contenidoHead()}
              <SHr height={15} />
            </SView>
            {this.contenidoBody()}
          </SView>
        </SPage>
        <FloatButtomQR onPress={() => {
          SNavigation.navigate("camara");
        }} />
        <SHr height={20} />
        <PBarraFooter url={"/"} />
      </>
    );
  }
}
const initStates = (state) => {
  return { state };
};
export default connect(initStates)(Inicio);
