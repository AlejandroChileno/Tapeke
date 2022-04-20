import React, { Component } from "react";
import { connect } from "react-redux";
import { SHr, SIcon, SImage, SLoad, SNavigation, SPage, SScrollView2, SText, STheme, SView, SPopup, SForm, SButtom } from "servisofts-component";
import BarraSuperiorTapeke from "../Components/BarraSuperiorTapeke";
import Direccion from "../Components/BarraSuperiorTapeke/Direccion";
import PBarraFooter from "../Components/PBarraFooter";
import SwitchRastreo from "../Components/SwitchRastreo";
import usuario from "../Services/Usuario/Components/usuario";

class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,

    };
    this.key = SNavigation.getParam("keyUsuario");
  }

  componentDidMount() {
    if (!usuario.Actions.validateSession(this.props)) { return <SLoad />; }
  }



  render() {
    if (!usuario.Actions.validateSession(this.props)) {
      return <SLoad />;
    }
    //var UsuaioPage = Pages["usuarioPage/lista"];


    return (
      <>
        <BarraSuperiorTapeke>
          <SwitchRastreo width={110} />
        </BarraSuperiorTapeke>

        <SPage title={"as"} hidden center>
          <SView col={"xs-12 md-12 lg-10 xl-8"} height={60} backgroundColor={this.state.active ? "red" : "green"} center row >

            <SView width={42} height={42} center >
              <SIcon name="Girl" fill="blue" width={42} height={42} border={'cyan'} ></SIcon>
            </SView>
            <SView flex style={{ justifyContent: 'flex-start', }} center  >
              <SView col={"xs-12 "}>
                <SText color={'white'} style={{ fontSize: 16 }} bold>¡Estas desconectado!</SText>
              </SView>

              <SView col={"xs-12 "}>
                <SText color={'white'} style={{ fontSize: 11 }} bold>Conéctese en línea para comenzar a aceptar viajes.
                </SText>
              </SView>
            </SView>

            {/* <SView flex style={{ justifyContent: 'flex-start', }} center  >
              <SView col={"xs-12 "}>
                <SText color={'white'} style={{ fontSize: 16 }} bold>¡Estas conectado!</SText>
              </SView>
            </SView> */}

          </SView>
        </SPage>
        {/* <PBarraFooter /> */}
      </>
    );
  }
}
const initStates = (state) => {
  return { state };
};
export default connect(initStates)(Inicio);
