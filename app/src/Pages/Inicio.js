import React, { Component } from "react";
import { connect } from "react-redux";
import { SHr, SIcon, SImage, SLoad, SNavigation, SPage, SScrollView2, SText, STheme, SView, SPopup, SForm, SButtom } from "servisofts-component";
import BarraSuperiorTapeke from "../Components/BarraSuperiorTapeke";
import Direccion from "../Components/BarraSuperiorTapeke/Direccion";
import PBarraFooter from "../Components/PBarraFooter";
import Item from "../Services/Tapeke/Components/restaurante/Components/Item";
import usuario from "../Services/Usuario/Components/usuario";

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
          <SView col={"xs-4"} row center style={{ justifyContent: "flex-end" }} onPress={() => { SNavigation.navigate("restaurante/categoria", { keyCategoria: title, }); }}>
            <SText fontSize={12} font={"LondonMM"} bold center style={{ right: 2 }}>Ver todos</SText>
            <SIcon name={"Back"} width={12} height={12} fill={STheme.color.primary} style={{ transform: [{ rotate: "180deg" }] }} />
          </SView>
        </SView>

        <SView col={"xs-12"} height={170} border={"transparent"} >
          <SScrollView2>
            <SView center row>
              <SView width={16} />
              <Item></Item>
            </SView>
            <SHr />
          </SScrollView2>
        </SView>
      </>
    );
  }


  publicidad() {
    return (
      <SView col={"xs-11 md-11 lg-11 xl-11"} style={{ overflow: "hidden" }}>
        <SHr height={15} />
        <SView height={160} backgroundColor={"transparent"} style={{ resizeMode: "cover", maxWidth: "100%", minWidth: "100%", overflow: "hidden", }}>
          <SImage src={require("./fotos/publicidad.png")} />
        </SView>
        {/* <SHr height={20} /> */}
      </SView>
    );
  }

  render() {
    // if (!usuario.Actions.validateSession(this.props)) {
    // 	return <SLoad />;
    // }
    // var UsuaioPage = Pages["usuarioPage/lista"];

   
    return (
      <>
        <BarraSuperiorTapeke>
          <Direccion />
        </BarraSuperiorTapeke>
        <SPage title={"as"} hidden disableHorizontal={true} center>
          <SView col={"xs-12 md-12 lg-10 xl-8"} center height>
            {this.categoria("Recomendado Para Ti")}
            {this.categoria("Cerca")}
            {this.publicidad()}
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
