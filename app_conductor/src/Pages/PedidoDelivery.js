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

          <SView col={"xs-11 md-11 lg-10 xl-8"} height={300} center row >

            <SView width={48} height={48} center style={{ borderRadius: 50, }} backgroundColor={STheme.color.card}>
              <SIcon name="Girl" fill="blue" width={42} height={42} border={'cyan'} ></SIcon>
            </SView>

            <SView flex center row border={'cyan'} >

              <SView col={"xs-12"} row  >
                <SView flex style={{ justifyContent: 'flex-start', }} >
                  <SText color={'red'} style={{ fontSize: 16 }} bold>Marcela tinelli Marcela</SText>
                </SView>
                <SView style={{ justifyContent: 'flex-end', }} border={'cyan'}>
                  <SText color={'red'} style={{ fontSize: 18 }} bold>Bs 20.00</SText>
                </SView>
              </SView>

              <SView col={"xs-12"} row >
                <SView flex style={{ justifyContent: 'flex-start', }} >
                  <SText color={'red'} style={{ fontSize: 16 }} bold>En efectivo</SText>
                </SView>
                <SView style={{ justifyContent: 'flex-end', }} border={'cyan'}>
                  <SText color={'red'} style={{ fontSize: 18 }} bold>2.1 km (12 min)</SText>
                </SView>
              </SView>

            </SView>
          </SView>

          <SView col={"xs-12"} center row>
            <SView col={"xs-10"} height={5} color={STheme.color.primary} />
            <SView col={"xs-2"} height={5} color={'cyan'} />
          </SView>


          <SView col={"xs-11 md-11 lg-10 xl-8"} height={300} center row >
            <SView width={48} height={48} center style={{ borderRadius: 50, }} backgroundColor={STheme.color.card}>
              <SIcon name="Girl" fill="blue" width={42} height={42} border={'cyan'} ></SIcon>
            </SView>
            <SView flex center row border={'cyan'} >
              <SView col={"xs-12"} row  >
                <SText color={'red'} style={{ fontSize: 11 }} >Recoger (1.7km away from your location)</SText>
              </SView>
              <SView col={"xs-12"} row  >
                <SText color={'red'} style={{ fontSize: 14 }} bold>Ventura Mall Cuarto Anillo.</SText>
              </SView>
            </SView>
          </SView>

          <SView col={"xs-12"} height center>
            <SHr color={STheme.color.lightGray} height={1.5} ></SHr>
          </SView>

          <SView col={"xs-11"} height={100} row center  >
            <SView col={"xs-2"} height center>
            </SView>
            <SView flex center height={60} >

              <SButtom style={{ backgroundColor: "red", width: '100%', fontSize: 14, borderRadius: 8, }} onPress={() => {
                this.form.submit();
              }} >Rechazar</SButtom>


            </SView>
            <SView flex center height={60} >

            <SButtom style={{ backgroundColor: "green", width: '100%', fontSize: 14, borderRadius: 8, }} onPress={() => {
                this.form.submit();
              }} >Aceptar</SButtom>

             </SView>
            <SView col={"xs-2"} height center>
            </SView>
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
