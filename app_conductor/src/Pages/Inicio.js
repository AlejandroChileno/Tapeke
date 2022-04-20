import React, { Component } from "react";
import { connect } from "react-redux";

import { SHr, SIcon, SImage, SLoad, SNavigation, SPage, SScrollView2, SText, STheme, SView, SPopup, SForm, SButtom, SMapView, SMarker, SPolyline } from "servisofts-component";


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

        <SPage title={"as"} hidden disableScroll center>
          {/* <SView col={"xs-12 md-12 lg-10 xl-8"} height={60} backgroundColor={this.state.active ? "red" : "green"} center row >

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
            </SView> */}

          {/* <SView flex style={{ justifyContent: 'flex-start', }} center  >
              <SView col={"xs-12 "}>
                <SText color={'white'} style={{ fontSize: 16 }} bold>¡Estas conectado!</SText>
              </SView>
            </SView> */}

          {/* </SView> */}


          <SView col={"xs-11 md-6 lg-4"} height={290} border={STheme.color.card} style={{ position: 'absolute', bottom: 0 }}  >

            <SView col={"xs-12"} height={80} center row >
              <SView width={48} height={48} center style={{ borderRadius: 50, }} backgroundColor={STheme.color.card}>
                <SIcon name="UserLogo" width={24} border={'transparent'} ></SIcon>
              </SView>
              <SView width={14} />
              <SView flex center row border={'transparent'} >

                <SView col={"xs-12"} row center >
                  <SView flex style={{ justifyContent: 'flex-start', }} >
                    <SText style={{ fontSize: 16 }} bold>Marcela tinelli Marcela</SText>
                  </SView>
                  <SView style={{ justifyContent: 'flex-end', }} border={'transparent'}>
                    <SText style={{ fontSize: 18 }} bold>Bs 20.00</SText>
                  </SView>
                </SView>

                <SView col={"xs-12"} row center >
                  <SView flex style={{ justifyContent: 'flex-start', }} >
                    <SText style={{ fontSize: 16 }} bold>En efectivo</SText>
                  </SView>
                  <SView style={{ justifyContent: 'flex-end', }} border={'transparent'}>
                    <SText style={{ fontSize: 18 }} bold>2.1 km (12 min)</SText>
                  </SView>
                </SView>

              </SView>
            </SView>

            <SView col={"xs-12"} center>
              <SHr color={STheme.color.primary} height={5} ></SHr>
            </SView>

            <SView col={"xs-11 md-11 lg-10 xl-8"} height={60} center row >
              <SView width={41} height={41} center style={{ borderRadius: 50, }} backgroundColor={STheme.color.card}>
                <SIcon name="RestauranteLogo" fill={STheme.color.primary} width={18} border={'transparent'} ></SIcon>
              </SView>
              <SView width={10} />
              <SView flex center row border={'transparent'} >
                <SView col={"xs-12"} row  >
                  <SText style={{ fontSize: 11 }} bold>Recoger  <SText color={STheme.color.lightGray} style={{ fontSize: 11 }} >(1.7km away from your location)</SText>
                  </SText>
                </SView>
                <SView col={"xs-12"} row  >
                  <SText style={{ fontSize: 14 }} bold>Ventura Mall Cuarto Anillo.</SText>
                </SView>
              </SView>
            </SView>

            <SView col={"xs-12"} center>
              <SHr color={STheme.color.lightGray} height={0.5} ></SHr>
            </SView>

            <SView col={"xs-11 md-11 lg-10 xl-8"} height={60} center row >
              <SView width={41} height={41} center style={{ borderRadius: 50, }} backgroundColor={STheme.color.card}>
                <SIcon name="Location" fill={STheme.color.primary} width={16} border={'transparent'} ></SIcon>
              </SView>
              <SView width={10} />
              <SView flex center row border={'transparent'} >
                <SView col={"xs-12"} row  >
                  <SText style={{ fontSize: 11 }} >Punto de entrega</SText>
                </SView>
                <SView col={"xs-12"} row  >
                  <SText style={{ fontSize: 14 }} bold>Calle 8. AV Beni 4to anillo, Santa cruz</SText>
                </SView>
              </SView>
            </SView>

            <SView col={"xs-12"} center>
              <SHr color={STheme.color.lightGray} height={0.5}></SHr>
            </SView>

            <SView col={"xs-12"} height={80} row center   >
              <SView flex center   >
                <SButtom style={{ backgroundColor: "#FF5E5C", width: 140, height: 44, fontSize: 18, borderRadius: 25, }} onPress={() => { alert("cancelado") }} >Rechazar</SButtom>
              </SView>
              <SView flex center   >
                <SButtom style={{ backgroundColor: "#2BC25F", width: 140, height: 44, fontSize: 18, borderRadius: 25, }} onPress={() => { alert("confirmado") }} >Aceptar</SButtom>
              </SView>
            </SView>

          </SView>
        </SPage>
      </>
    );
  }
}
const initStates = (state) => {
  return { state };
};
export default connect(initStates)(Inicio);
