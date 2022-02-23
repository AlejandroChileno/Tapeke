import React, { Component } from "react";
import { connect } from "react-redux";
import { SHr, SIcon, SImage, SLoad, SNavigation, SPage, SScrollView2, SText, STheme, SView } from "servisofts-component";
import BarraSuperiorTapeke from "../Components/BarraSuperiorTapeke";
import PBarraFooter from "../Components/PBarraFooter";
import Item from "../Services/Tapeke/Components/restaurante/Components/Item";
import usuario from "../Services/Usuario/Components/usuario";

class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (!usuario.Actions.validateSession(this.props)) { return <SLoad />; }
  }

  categoria(title) {
    return (
      <>
        <SHr height={15} />

        <SView col={"xs-11"} height={35} row center border={'transparent'}  >
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
              <SView width={16} style={{ maxWidth: "100%", minWidth: "100%" }} />
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
          <SView row border={'transparent'} >
            <SView height={50} width={15}>
              <SView style={{ top: 6 }} center>
                <SIcon name={"Location"} height={18} fill={STheme.color.secondary} />
              </SView>
            </SView>
            <SView height={50} style={{ justifyContent: 'center', paddingLeft: 8, paddingRight: 8, }}>
              <SText font={"Roboto"} fontSize={10} center bold color={STheme.color.secondary}>{" "}Las palmas, Santa cruz de la sierra</SText>
              <SText font={"Roboto"} fontSize={12} center bold color={STheme.color.secondary}>{" "}A menos de 30 km</SText>
            </SView>
            <SView height={50} width={25}>
              <SView style={{ top: 6 }} center>
                <SIcon name={"Back"} height={18} fill={STheme.color.secondary} style={{ transform: [{ rotate: "-90deg" }] }} />
              </SView>
            </SView>
          </SView>
        </BarraSuperiorTapeke>

        <SPage title={""} hidden disableHorizontal={true}>
          {/* <SView col={"xs-12"} height row center> */}
          {/* <SView col={"xs-0 md-0 lg-0 xl-0"} height style={{ overflow: "hidden" }} /> */}
          <SView col={"xs-12 md-12 lg-10 xl-8"} center height>
            {/* <SView col={"xs-12"} center> */}
            {this.categoria("Recomendado Para Ti")}
            {this.categoria("Cerca")}
            {this.publicidad()}
            {this.categoria("Alimentación")}
            {this.categoria("Favoritos")}
            {/* </SView> */}
            <SHr height={80} />
            {/* </SView> */}
            {/* <SView col={"xs-0 md-0 lg-0 xl-0"} height style={{ overflow: "hidden" }} /> */}
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
