import React, { Component } from "react";
import { connect } from "react-redux";
import { SHr, SIcon, SImage, SLoad, SNavigation, SPage, SScrollView2, SText, STheme, SView, SPopup, SForm, SButtom } from "servisofts-component";
import BarraSuperiorTapeke from "../Components/BarraSuperiorTapeke";
// import BarraSuperiorTapeke from "../Components/BarraSuperiorTapeke";
// import Direccion from "../Components/BarraSuperiorTapeke/Direccion";
import PBarraFooter from "../Components/PBarraFooter";
 import FloatButtomQR from '../Components/FloatButtomQR';
import usuario from "../Services/Usuario/Components/usuario";


class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,

    };
    this.key = SNavigation.getParam("keyUsuario");
    // this.key = SNavigation.getParam("page");
    // this.page = SNavigation.getParam("page");
  }

  componentDidMount() {
    if (!usuario.Actions.validateSession(this.props)) { return <SLoad />; }
  }

  getContent() {
    return <>
      <SView col={"xs-12"} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 8 }} row center backgroundColor={STheme.color.card}
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
                <SView width={35} height={35} style={{ borderRadius: 100, }} backgroundColor={STheme.color.lightGray} center>
                  <SIcon name="Aspa" width={20} height={20}></SIcon>
                </SView>
              </SView>
            </SView>
          </SView>
          <SHr height={10} />
        </SView>
      </SView>

      <SHr height={10} />

      <SView col={"xs-12"} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 8 }} row center backgroundColor={STheme.color.card}
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
      </SView>
    </>
  }


  render() {
    
    if (!usuario.Actions.validateSession(this.props,true)) {
      return <SLoad />;
    }
    // var UsuaioPage = Pages["usuarioPage/lista"];
  
     return (
      <>
        <BarraSuperiorTapeke >
        </BarraSuperiorTapeke>

        <SPage title={"Pedidos de Hoy"} hidden disableScroll>
          <SView col={"xs-12 sm-11 md-10 lg-8 xl-6"} row center backgroundColor={'transparent'}>
            <SHr height={20} />
            <SText font={"Roboto"} fontSize={32}  >20:00 Hrs.</SText>
            <SHr height={10} />
            <SView col={"xs-11"} row center height={30} backgroundColor={'transparent'}>
              <SIcon name="Carga" width={270}></SIcon>
            </SView>
            <SHr height={10} />
            <SText font={"Roboto"} fontSize={16}>Jueves, 14 de abril, 2022</SText>
            <SText font={"Roboto"} style={{ fontWeight: "bold" }} fontSize={16}>( 3 / 15 )</SText>
            <SHr height={20} />
            <SView col={"xs-11"} style={{ borderBottomWidth: 2, borderColor: STheme.color.primary }}></SView>
            <SHr height={20} />
            <SView col={"xs-11"} row    >
              {this.getContent()}
            </SView>
          </SView>
        </SPage>
        <FloatButtomQR onPress={() => {
          SNavigation.navigate("camara");  }} />
        <SHr height={20} />
        <PBarraFooter />
      </>
    );
  }
}
const initStates = (state) => {
  return { state };
};
export default connect(initStates)(Inicio);
