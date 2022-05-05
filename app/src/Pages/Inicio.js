import React, { Component } from "react";
import { connect } from "react-redux";
import { SHr, SIcon, SImage, SLoad, SNavigation, SPage, SScrollView2, SText, STheme, SView, SPopup, SForm, SButtom, SList, SSection, SDate } from "servisofts-component";
import BarraSuperiorTapeke from "../Components/BarraSuperiorTapeke";
import Direccion from "../Components/BarraSuperiorTapeke/Direccion";
import PBarraFooter from "../Components/PBarraFooter";
import novedades from "../Services/Tapeke/Components/novedades";
import Item from "../Services/Tapeke/Components/restaurante/Components/Item";
import usuario from "../Services/Usuario/Components/usuario";
import Validations from "../Validations";
import SSocket from 'servisofts-socket'

class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.key = SNavigation.getParam("keyUsuario");
  }

  componentDidMount() {
    if (!usuario.Actions.validateSession(this.props)) { return <SLoad />; }

  }

  categoria(title) {
    return (
      <>
        <SHr height={15} />
        <SView col={"xs-11 md-11.3 lg-11.5 xl-11.7"} height={35} row center border={'transparent'}  >
          <SView col={"xs-8"} row style={{ justifyContent: "flex-start" }}>
            <SText fontSize={18} font={"LondonMM"} bold>{title}</SText>
          </SView>
          <SView col={"xs-4"} row center style={{ justifyContent: "flex-end" }} onPress={() => {

          }}>
            <SText fontSize={12} font={"LondonMM"} bold center style={{ right: 2 }}>Ver todos</SText>
            <SIcon name={"Back"} width={12} height={12} fill={STheme.color.primary} style={{ transform: [{ rotate: "180deg" }] }} />
          </SView>
        </SView>

        <SView col={"xs-12"} height={170} border={"transparent"} >
          <SScrollView2>
            <SView center row>
              <SView width={16} />
              {/* <Item></Item> */}
            </SView>
            <SHr />
          </SScrollView2>
        </SView>
      </>
    );
  }


  publicidad1() {
    //const auxLista=[{},{}];
    const auxLista = { a: {}, b: {}, c: {}, d: {} };
    return <SList
      data={auxLista}
      space={16}
      center
      render={(obj, key) => {
        return <SView col={"xs-11 md-5 "} backgroundColor={"transparent"}  >
          <SView col={"xs-12"} height={160} style={{ resizeMode: "cover", maxWidth: "100%", minWidth: "100%", overflow: "hidden", }} backgroundColor={"transparentred"} center  >
            <SImage src={require("./fotos/publicidad.png")} />
          </SView>
        </SView>
      }} />
  }

  publicidad() {
    var data = novedades.Actions.getAll(this.props);
    if (!data) return <SLoad />

    const fecha = new SDate().toString("yyyy-mm-dd")
    return Object.values(data).map((obj, i) => {
      if (obj.estado != "1") return null;
      if (obj.fecha > fecha) return null;

      // console.log(obj.fecha);
      // console.log(new SDate().toString("yyyy-mm-dd"));

      return <SSection key={"mi_iten_key_" + i}>
        <SView col={"xs-12"} row center backgroundColor={STheme.color.card} style={{ borderRadius: 8 }}>
          {/* <SImage src={SSocket.api.root + Parent.component + "/" + obj.key} style={{ */}
          <SImage src={SSocket.api.root + "novedades/" + obj.key} style={{
            borderTopLeftRadius: 8, borderTopRightRadius: 8,
            maxWidth: "100%", minWidth: "100%", overflow: "hidden",
            resizeMode: "cover", height: 165
          }} />
          <SHr height={20} />
          <SView col={"xs-11"}>
            <SText color={STheme.color.primary} font={"Roboto"} fontSize={18} style={{}}>{obj.titulo}</SText>
            <SHr height={5} />
            <SView col={"xs-12"} row center style={{ borderBottomWidth: 1, borderColor: STheme.color.lightGray }} ></SView>
            <SHr height={5} />
            <SView col={"xs-12"} center flex style={{ alignItems: "flex-end" }}>
              <SText color={STheme.color.darkGray}>{obj.fecha}</SText>
            </SView>
            <SHr height={10} />
            <SText color={STheme.color.text} font={"Roboto"} fontSize={15} style={{}}>{obj.descripcion}</SText>
          </SView>
          <SHr height={25} />
        </SView>
        <SHr height={20} />
      </SSection>
    })
  }


  render() {
    // if (!usuario.Actions.validateSession(this.props)) {
    // 	return <SLoad />;
    // }
    // var UsuaioPage = Pages["usuarioPage/lista"];
    Validations.pedido_en_curso();
    return (
      <>
        <BarraSuperiorTapeke>
          <Direccion />
        </BarraSuperiorTapeke>
        <SPage title={"as"} hidden center>
          <SView col={"xs-12 md-12 lg-10 xl-8"} center height>
            {this.categoria("Recomendado Para Ti")}
            {this.categoria("Cerca")}
            {this.publicidad()}
            <SHr height={80} />

            {this.categoria("Alimentación")}
            {this.categoria("Favoritos")}
            <SHr height={80} />
          </SView>
        </SPage>
        <PBarraFooter />
      </>
    );
  }
}
const initStates = (state) => {
  return { state };
};
export default connect(initStates)(Inicio);
