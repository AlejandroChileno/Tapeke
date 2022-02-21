import React, { Component } from "react";
import { connect } from "react-redux";
import { ScrollView } from "react-native";
import {
  SHr,
  SIcon,
  SImage,
  SLoad,
  SPage,
  SScrollView2,
  SText,
  STheme,
  SView,
  SNavigation,
} from "servisofts-component";
import Kolping from "../Components/Kolping";
import usuario from "../Services/Usuario/Components/usuario";
import PBarraFooter from "../Components/PBarraFooter";
import Item from "../Services/Tapeke/Components/restaurante/Components/Item";

import BarraSuperiorTapeke from "../Components/BarraSuperiorTapeke";

class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (!usuario.Actions.validateSession(this.props)) {
      return <SLoad />;
    }
  }

  categoria(title) {
    return (
      <>
        <SHr height={20} />

        <SView col={"xs-11 lg-11 xl-11.5"} height={30} row center>
          <SView col={"xs-6"} row style={{ justifyContent: "flex-start" }}>
            <SText fontSize={18} font={"LondonMM"} bold>
              {title}
            </SText>
          </SView>
          <SView
            col={"xs-6"}
            row
            center
            style={{ justifyContent: "flex-end" }}
            onPress={() => {
              SNavigation.navigate("restaurante/categoria", {
                keyCategoria: title,
              });
            }}
          >
            <SText
              fontSize={12}
              font={"LondonMM"}
              center
              style={{ fontWeight: "bold" }}
            >
              Ver todos
            </SText>
            <SView width={6} />
            <SIcon
              name={"Back"}
              width={12}
              height={12}
              fill={STheme.color.primary}
              style={{ transform: [{ rotate: "180deg" }] }}
            />
          </SView>
        </SView>
        <SView col={"xs-12  "} center>
          <SView col={"xs-12"} height={180} row center>
            {/* recordar a ricardo que debe solucionar el ScrollView2 */}
            {/* observacion que no funciona el maxWidth and minWidth */}
            {/* observacion el de crear 2 barra superior  */}
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <SView style={{ width: 18, maxWidth: "80%", minWidth: "90%" }} />
              <Item></Item>
            </ScrollView>
            <SHr height={200} />
          </SView>
        </SView>
      </>
    );
  }

  publicidad() {
    return (<SView col={"xs-11 md-11 lg-11 xl-11"} style={{ overflow: "hidden", }} >
      <SHr height={20} />
      <SView  height={160} backgroundColor={"red"} style={{  resizeMode: "cover", maxWidth: "100%", minWidth: "100%",overflow: "hidden", }}>
        <SImage src={require("./fotos/publicidad.png")} />
      </SView>
    </SView>);
  }

  render() {
    if (!usuario.Actions.validateSession(this.props)) {
      return <SLoad />;
    }
    // var UsuaioPage = Pages["usuarioPage/lista"];

    return (
      <SPage title={"Inicio"} hidden disableScroll>
        {/* <Kolping.KBarraUsuario /> */}
        <BarraSuperiorTapeke>
          <SView row>
            <SView height={50} width={15} backgroundColor={"transparent"}>
              <SView style={{ top: 6 }} center>
                <SIcon name={"Location"} width={12} height={17} fill="#fff" />
              </SView>
            </SView>

            <SView
              height={50}
              flex
              center
              style={{
                justifyContent: "center",
                paddingLeft: 8,
                paddingRight: 8,
              }}
            >
              <SText font={"Roboto-Bold"} fontSize={10} center color={"#fff"}>
                Las palmas, Santa cruz de la sierra
              </SText>
              <SText font={"Roboto-Bold"} fontSize={12} center color={"#fff"}>
                A menos de 30 km
              </SText>
            </SView>

            <SView height={50} width={20} backgroundColor={"transparent"}>
              <SView style={{ top: 12 }} center>
                <SIcon
                  name={"Back"}
                  height={12}
                  fill="#fff"
                  style={{ transform: [{ rotate: "-90deg" }] }}
                />
              </SView>
            </SView>
          </SView>
        </BarraSuperiorTapeke>
        {/* <SView col={"xs-12"} center height> */}

        <SView col={"xs-12"} height row center>
          {/* <SView col={"xs-0 md-0 lg-2 xl-3"} height style={{ overflow: 'hidden', }} >
                        <SText> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, sequi quibusdam. Reprehenderit culpa iure error quos fugit, doloremque, accusamus vero recusandae beatae dolores, dolorum alias! Doloribus velit blanditiis quibusdam aspernatur!</SText>
                    </SView> */}
          <SView col={"xs-12 md-12 lg-8 xl-6"} center height>
            <SScrollView2 disableHorizontal={true}>
              <SView col={"xs-12  "} center>
                {this.categoria("Recomendado Para Ti")}
                {this.categoria("Cerca")}
                {this.publicidad()}
                {this.categoria("Alimentación")}
                {this.categoria("Favoritos")}
              </SView>
            </SScrollView2>
          </SView>
          {/* <SView col={"xs-0 md-0 lg-2 xl-3"} height style={{ overflow: 'hidden', }} >
                        <SText>  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, sequi quibusdam. Reprehenderit culpa iure error quos fugit, doloremque, accusamus vero recusandae beatae dolores, dolorum alias! Doloribus velit blanditiis quibusdam aspernatur!</SText>
                    </SView> */}
        </SView>

        <PBarraFooter />
      </SPage>
    );
  }
}
const initStates = (state) => {
  return { state };
};
export default connect(initStates)(Inicio);
