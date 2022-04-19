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


  getBotones() {


    return (
      <>

        <SView col={"xs-12"} height={90} row>
          <SView col={"xs-3.5"} style={{ borderBottomWidth: 3, }} border={'transparent'} center  >
            <SIcon name="PedConfirmacion" width={48} fill={"none"}> </SIcon>
            <SView col={"xs-12"} height={10} backgroundColor={STheme.color.primary} style={{ borderRadius: 16, }}></SView>
            <SText color={STheme.color.primary} style={{ fontSize: 12 }} bold>Confirmación</SText>
          </SView>

          <SView width={5} />
          <SView flex border={'transparent'} center>
            <SIcon name="PedPreparacion" width={48}> </SIcon>
            <SView col={"xs-12"} height={10} backgroundColor={STheme.color.primary} />
            <SText color={STheme.color.primary} style={{ fontSize: 12 }} bold>Preparacion</SText>
          </SView>
          <SView width={5} />

          <SView col={"xs-3.5"} style={{ borderBottomWidth: 3, }} border={'transparent'} center>
            <SIcon name="PedDelivery" width={48}> </SIcon>
            <SView col={"xs-12"} height={10} backgroundColor={STheme.color.primary} style={{ borderRadius: 16, }} />
            <SText color={STheme.color.primary} style={{ fontSize: 12 }} bold>Delivery</SText>
          </SView>
        </SView>

      </>
    );
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
          {/* <SView col={"xs-12 md-12 lg-10 xl-8"} center height>
          </SView> */}


          <SView col={"xs-10"} height={230} border={'cyan'} row center >
            <SView col={"xs-3"} height={7} backgroundColor={STheme.color.card} style={{ borderRadius: 16, }} ></SView>
            <SView col={"xs-12"} height={20} border={'transparent'} center >
              <SText color={STheme.color.darkGray} style={{ fontSize: 12 }} bold>Llegada estimada</SText>
            </SView>
            <SView col={"xs-12"} height={48} border={'transparent'} center >
              <SText color={STheme.color.darkGray} style={{ fontSize: 38 }} bold>16:48 - 17:03</SText>
            </SView>
            <SView col={"xs-12"} height={22} border={'transparent'} center >
              <SText color={STheme.color.darkGray} style={{ fontSize: 15 }} bold>Estamos procesando tu pedido</SText>
            </SView>

            {this.getBotones()}
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
