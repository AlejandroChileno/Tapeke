import React, { Component } from "react";
import { connect } from "react-redux";
import { SHr, SIcon, SImage, SLoad, SNavigation, SPage, SScrollView2, SText, STheme, SView, SPopup, SForm, SButtom, SList, SSection, SDate } from "servisofts-component";
import BarraSuperiorTapeke from "../Components/BarraSuperiorTapeke";
import Direccion from "../Components/BarraSuperiorTapeke/Direccion";
import PBarraFooter from "../Components/PBarraFooter";
import novedades from "../Services/Tapeke/Components/novedades";
import Item from "../Services/Tapeke/Components/restaurante/Components/Item";
import usuario from "../Services/Usuario/Components/usuario";
import Validations from "../Validations";
import SSocket from 'servisofts-socket'
import restaurante from "../Services/Tapeke/Components/restaurante";
import favorito from "../Services/Tapeke/Components/favorito";
import Item2 from "../Services/Tapeke/Components/restaurante/Components/Item2";

class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.key = SNavigation.getParam("keyUsuario");
  }

  componentDidMount() {
    if (!usuario.Actions.validateSession(this.props)) { return <SLoad />; }

  }



  publicidad() {

    var data = novedades.Actions.getAll(this.props);
    if (!data) return <SLoad />

    const fechas = new SDate().toString("yyyy-mm-dd")
    return <SList
      data={data}
      space={16}
      center
      horizontal={true}
      // filter={(item) => item.fecha > fecha}
      render={(obj, key) => {
        // if (obj.fecha > fechas) return null;
        return <SView width={290} height={160} row backgroundColor={"transparent"}  >
          <SView col={"xs-12"} height={160} style={{ resizeMode: "cover", maxWidth: "100%", minWidth: "100%", overflow: "hidden", borderRadius: 8, }} backgroundColor={"transparentred"} center  >
            <SImage src={SSocket.api.root + "novedades/" + obj.key} style={{
              borderTopLeftRadius: 8, borderTopRightRadius: 8,
              maxWidth: "100%", minWidth: "100%", overflow: "hidden",
              resizeMode: "cover", height: 165,
            }} />
          </SView>
        </SView>
      }} />
  }

  favoritos() {

    var data = restaurante.Actions.getAllFilter({}, this.props);
    var favUsuario = favorito.Actions.getByKeyUsuario(this.props.state.usuarioReducer.usuarioLog.key, this.props)
    if (!data) return <SLoad />;
    if (!favUsuario) return <SLoad />;
    var arr = Object.values(data).filter((itm) => favUsuario.find((elm) => elm.key_restaurante == itm.key))
    return <SList
      data={arr}
      space={16}
      center
      horizontal={true}
      render={(obj, key) => {
        return <SView width={320}     >
          <Item2 data={obj} ></Item2>
        </SView>
      }} />
  }


  categoria(title) {
    return (
      <>
        <SHr height={15} />
        <SView col={"xs-11 md-11.3 lg-11.5 xl-11.7"} height={35} row center border={'transparent'}  >
          <SView col={"xs-8"} row style={{ justifyContent: "flex-start" }}>
            <SText fontSize={18} font={"LondonMM"} bold>{title}</SText>
          </SView>
          <SView col={"xs-4"} row center style={{ justifyContent: "flex-end" }} onPress={() => {

          }}>
            <SText fontSize={12} font={"LondonMM"} bold center style={{ right: 2 }}>Ver todos</SText>
            <SIcon name={"Back"} width={12} height={12} fill={STheme.color.primary} style={{ transform: [{ rotate: "180deg" }] }} />
          </SView>
        </SView>





        {/* <SView col={"xs-12"} height={170} border={"transparent"} >
          <SScrollView2>
            <SView center row>
              <SView width={16} />
              <Item></Item>
            </SView>
            <SHr />
          </SScrollView2>
        </SView> */}


      </>
    );
  }


  render() {
    if (!usuario.Actions.validateSession(this.props)) {
      return <SLoad />;
    }
    // var UsuaioPage = Pages["usuarioPage/lista"];
    Validations.pedido_en_curso();
    return (
      <>
        <BarraSuperiorTapeke>
          <Direccion />
        </BarraSuperiorTapeke>
        <SPage title={"as"} hidden center  >
          <SView col={"xs-12 md-12 lg-10 xl-8"} center height>
            {this.categoria("Recomendado Para Ti")}
            {/* TODO ES PARA PROBAR, DE COMO SE VE */}
            <SView col={"xs-12"} height={195} border={"transparent"} >
              <SScrollView2>
                {this.favoritos()}
              </SScrollView2>
            </SView>
            {this.categoria("Cerca")}
            {/* TODO ES PARA PROBAR, DE COMO SE VE */}
            <SView col={"xs-12"} height={195} border={"transparent"} >
              <SScrollView2>
                {this.favoritos()}
              </SScrollView2>
            </SView>

            <SHr height={20} />
            <SView col={"xs-12"} height={170} border={"transparent"} >
              <SScrollView2>
                {this.publicidad()}
              </SScrollView2>
            </SView>
            <SHr height={20} />


            {this.categoria("Favoritos")}
            <SView col={"xs-12"} height={195} border={"transparent"} >
              <SScrollView2>
                {this.favoritos()}
              </SScrollView2>
            </SView>
            <SHr height={20} />
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