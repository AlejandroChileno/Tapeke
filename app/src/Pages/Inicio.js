import React, { Component } from "react";
import { connect } from "react-redux";
import { SHr, SIcon, SImage, SLoad, SNavigation, SPage, SScrollView2, SText, STheme, SView, SPopup, SForm, SButtom, SList, SSection, SDate, SGradient } from "servisofts-component";
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
import pedido from "../Services/Tapeke/Components/pedido";

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
  recomendado() {
    var data = restaurante.Actions.getAllFilter({}, this.props);
    if (!data) return <SLoad />;
    return <SList
      data={data}
      space={16}
      center
      order={[{ key: "distancia", order: "desc", peso: 1 }]}
      horizontal={true}
      render={(obj, key) => {
        return <SView width={320}>
          <Item2 data={obj} ></Item2>
        </SView>
      }} />
  }
  cerca() {
    var data = restaurante.Actions.getAllFilter({}, this.props);
    if (!data) return <SLoad />;
    return <SList
      data={data}
      space={16}
      center
      order={[{ key: "distancia", order: "asc", peso: 1 }]}
      horizontal={true}
      render={(obj, key) => {
        return <SView width={320}>
          <Item2 data={obj} ></Item2>
        </SView>
      }} />
  }

  pedidoencurso() {

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

  pedidoencurso1() {
    // var data = pedido.Actions.getAll(this.props);
    var data = pedido.Actions.getDetalle(this.props);
    if (!data) return <SLoad />
    const key_usuario = this.props.state.usuarioReducer.usuarioLog.key;
    return <SList
      data={data}
      space={16}
      filter={(item) => item.estado == '1' && item.key_usuario == key_usuario}
      render={(obj, key) => {
        console.log("romeo ", obj);
        // restaurante.nombre

        return <SView col={"xs-12 "} height={90} row border={STheme.color.card} style={{ borderRadius: 8, }} onPress={() => {
          if (obj.state == "pagado") {
            SNavigation.navigate("pedido/confirmacion", { key_pedido: obj.key });
          }
        }} >
          <SView col={"xs-2"} center   >
            <SView height={40} width={40} style={{ backgroundColor: '#E9EAEE', borderRadius: 50, }} center   >
              <SImage src={`${SSocket.api.root}restaurante/${"key_restaurante"}`} style={{ borderRadius: 8, resizeMode: 'cover' }} />
            </SView>
          </SView>
          <SView col={"xs-10"} row center  >
            <SView col={"xs-10"} height={40} style={{ justifyContent: 'center', }}  >
              {/* <SText fontSize={15} font={"Roboto"} color={STheme.color.text} >{obj['descripcion']}</SText> */}
              {/* <SText fontSize={16} font={"Roboto"} color={STheme.color.text} > {obj['descripcion']} </SText> */}
              <SHr height={5} />
              {/* <SText fontSize={12} font={"Roboto"} color={STheme.color.gray} >{obj['direccion']}</SText> */}
              {/* <SText fontSize={12} font={"Roboto"} color={STheme.color.gray} >{new SDate(obj['fecha_on']).toString("dd-MM-yyyy hh:mm")} - {obj['state']} </SText> */}
              <SText fontSize={12} font={"Roboto"} color={STheme.color.gray} >{obj['state'] ? "Tu pedido esta en camino" : "no lo se"} </SText>
            </SView>
            <SView col={"xs-2"} height={40} style={{ alignContent: 'center', }}>
              <SView height={36} width={36} center   >
                {/* <SText fontSize={18} font={"Roboto"} color={STheme.color.gray} >x{obj['cantidad']}</SText> */}
                <SText fontSize={18} font={"Roboto"} color={STheme.color.gray} >x Cancelar</SText>
              </SView>
            </SView>
          </SView>
          <SView col={"xs-12"} row   >

            <SView col={"xs-6"} center onPress={() => { SNavigation.navigate('comoteparecio') }}   >
              <SText width={120} height={20} style={{ backgroundColor: '#EEEEEE', borderRadius: 4, fontSize: 14, alignItems: 'center', }} center >Ver los detalles > </SText>
            </SView>

          </SView>
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
          <SView col={"xs-12"} center height>
            {this.categoria("Pedido en curso")}
            {/* TODO ES PARA PROBAR, DE COMO SE VE */}
            <SView col={"xs-12"} height={195} border={"transparent"} >
              <SScrollView2>
                {this.pedidoencurso()}
              </SScrollView2>
            </SView>

            {this.categoria("Recomendado Para Ti")}
            <SView col={"xs-12"} height={195} border={"transparent"} >
              <SScrollView2>
                {this.recomendado()}
              </SScrollView2>
            </SView>
            {this.categoria("Cerca")}
            <SView col={"xs-12"} height={195} border={"transparent"} >
              <SScrollView2>
                {this.cerca()}
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