import React, { Component } from "react";
import { connect } from "react-redux";
import { SHr, SIcon, SImage, SLoad, SNavigation, SPage, SScrollView2, SText, STheme, SView, SPopup, SForm, SButtom } from "servisofts-component";
import BarraSuperiorTapeke from "../Components/BarraSuperiorTapeke";
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
  getForm() {
    return <SForm
      ref={(ref) => { this.form = ref; }}
      row
      style={{
        justifyContent: "center",
        //paddingRight: 20,
      }}
      inputProps={{
        col: "xs-12",
      }}
      inputs={{
        Correo: { placeholder: "Las Palmas, Santa Cruz de la Sierra", type: "text", isRequired: true, },
        // Correo: { placeholder: "Las Palmas, Santa Cruz de la Sierra", type: "text", isRequired: true, icon: <SIcon name={"Ubicacion"} width={12} height={17} />, },
      }}
      onSubmit={(values) => {
        // if (this.key) {
        //     Usuario.Actions.recuperarPass({
        //         ...this.usr,
        //         ...values
        //     }, this.props);
        // } else {
        // }
      }}
    />
  }

  popupOpcionDistancia() {
    var miDireccion = this.props.state.direccion_usuarioReducer.miDireccion;
    return <>
      <SView col={"xs-11 md-8 xl-6"} center row style={{ borderRadius: 8 }} withoutFeedback backgroundColor={STheme.color.background}>
        <SView col={"xs-9 md-6 xl-6"} style={{
        }} center>
          <SHr height={30} />
          <SText color={STheme.color.darkGray} style={{ fontSize: 20 }}>Usar otra ubicación</SText>
          <SView height={8} />
          {/* {this.getForm()} */}
          <SButtom type="secondary" style={{ fontSize: 15, color: STheme.color.text, backgroundColor: STheme.color.card, width: 300, borderRadius: 15 }}
            onPress={() => {
              SPopup.close("ubicacion");
              SNavigation.navigate("direcciones")
            }}><SText style={{padding: 8}}> {miDireccion ? miDireccion?.direccion : "Elegir mi ubicación..."}</SText> </SButtom>
          <SView height={8} />
          <SText color={STheme.color.darkGray} style={{ fontSize: 20 }}>Seleccione un modo:</SText>
          <SHr height={20} />
          <SView col={"xs-12"} row center>
            <SView col={"xs-6"} center onPress={() => {
              this.props.dispatch({ component: "direccion_usuario", type: "editarMiDistancia", data: 1 });
              SPopup.close("ubicacion");
            }}>
              <SIcon name={"ModoPie"} width={90} height={90} fill={STheme.color.primary} />
              <SHr height={10} />
              <SText font={"Roboto"} color={STheme.color.text} style={{ fontSize: 18, fontWeight: "bold" }}>A pie</SText>
              <SText font={"Roboto"} color={STheme.color.text} style={{ fontSize: 14, fontWeight: "bold" }}>menos 1 km</SText>
            </SView>
            <SView col={"xs-6"} center onPress={() => {
              this.props.dispatch({ component: "direccion_usuario", type: "editarMiDistancia", data: 30 });
              SPopup.close("ubicacion");
            }}>
              <SIcon name={"ModoCoche"} width={90} height={90} fill={STheme.color.primary} />
              <SHr height={10} />
              <SText font={"Roboto"} color={STheme.color.text} style={{ fontSize: 18, fontWeight: "bold" }}>En coche</SText>
              <SText font={"Roboto"} color={STheme.color.text} style={{ fontSize: 14, fontWeight: "bold" }}>menos 30 km</SText>
            </SView>
          </SView>
          <SView height={30}></SView>
        </SView>
      </SView>
    </>
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

    var miDireccion = this.props.state.direccion_usuarioReducer.miDireccion;
    var miDistancia = this.props.state.direccion_usuarioReducer.miDistancia;

    if (!this.props.state.direccion_usuarioReducer.miDireccion) {
      SNavigation.navigate("direccion_usuario")

      return null;
    }
    return (
      <>
        <BarraSuperiorTapeke>
          <SView row border={'transparent'} onPress={() => {
            SPopup.open({ key: "ubicacion", content: this.popupOpcionDistancia() });
          }}>
            <SView height={50} width={15}>
              <SView style={{ top: 6 }} center>
                <SIcon name={"Location"} height={18} fill={STheme.color.secondary} />
              </SView>
            </SView>
            <SView height={50} style={{ justifyContent: 'center', paddingLeft: 8, paddingRight: 8, }}>
              <SText font={"Roboto"} fontSize={13} center bold color={STheme.color.secondary}>{miDireccion ? miDireccion?.direccion : "Elegir mi ubicación..."}</SText>
              <SText font={"Roboto"} fontSize={12} center bold color={STheme.color.secondary}> A menos de {miDistancia == 1 ? "1" : "30"} km</SText>
            </SView>
            <SView height={50} width={25}>
              <SView style={{ top: 6 }} center>
                <SIcon name={"Back"} height={18} fill={STheme.color.secondary} style={{ transform: [{ rotate: "-90deg" }] }} />
              </SView>
            </SView>
          </SView>
        </BarraSuperiorTapeke>

        <SPage title={""} hidden disableHorizontal={true} center>
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
