import React, { Component } from "react";
import { connect } from "react-redux";
import { SHr, SIcon, SImage, SLoad, SNavigation, SPage, SScrollView2, SText, STheme, SView, SPopup, SForm, SButtom } from "servisofts-component";
import BarraSuperiorTapeke from "../Components/BarraSuperiorTapeke";
import Direccion from "../Components/BarraSuperiorTapeke/Direccion";
import PBarraFooter from "../Components/PBarraFooter";
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



  render() {
    if (!usuario.Actions.validateSession(this.props)) {
      return <SLoad />;
    }
    //var UsuaioPage = Pages["usuarioPage/lista"];


    return (
      <>
        <BarraSuperiorTapeke>
        </BarraSuperiorTapeke>
        <SPage title={"as"} hidden center>
          <SView col={"xs-12 md-12 lg-10 xl-8"} center height>
            <SIcon name="PedConfirmacion" fill="none"  width={48} > </SIcon>
            <SHr height={80} />
            <SIcon name="PedPreparacion"  width={48} > </SIcon>
            <SHr height={80} />
              <SIcon name="PedDelivery"  width={48} > </SIcon>
            <SHr height={80} />

            <SIcon name="SwitchOn"  width={48} > </SIcon>
            <SHr height={80} />


            <SIcon name="SwitchOff"  width={48} > </SIcon>
            <SHr height={80} />

            <SIcon name="SwitchOff2"  width={48} > </SIcon>
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
