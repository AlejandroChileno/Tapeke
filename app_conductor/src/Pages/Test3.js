import React, { Component } from "react";
import { connect } from "react-redux";
import { SButtom, SHr, SIcon, SImage, SInput, SLoad, SMapView, SMarker, SNavigation, SPage, SPolyline, SScrollView2, SText, STheme, SView } from "servisofts-component";
import BarraCargando from "../Components/BarraCargando";
import BarraSuperiorTapeke from "../Components/BarraSuperiorTapeke";
import BarraSuperiorTapeke2 from "../Components/BarraSuperiorTapeke2";
import SwitchRastreo from "../Components/SwitchRastreo";
import SBLocation from "../SBLocation";
import usuario from "../Services/Usuario/Components/usuario";

import SSocket from 'servisofts-socket';



class Test3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // active: SBLocation.isStarted(),
      regionAlvaro: {
        latitude: -17.808690397665742,
        longitude: -63.16250034566757,
      }
    };
    this.key = SNavigation.getParam("keyUsuario");
    this.keyUserEmisor = "98871a44-44ee-48ca-b251-8e084ec5064f";

  }

  componentDidMount() {
    if (!usuario.Actions.validateSession(this.props)) { return <SLoad />; }
  }

  getMarkers() {
    return Data.history.map((obj) => {
      return <SMarker lat={obj.latitude} lng={obj.longitude} title={new SDate(new Date(obj.time)).toString("yyyy-MM-dd hh:mm:ss") + ""}>
        {/* <SIcon name={"Marker"} width={20} height={20} /> */}
      </SMarker>
    })
  }

  getPolyline() {
    return <SPolyline
      coordinates={Data.history.map((obj) => { return { latitude: obj.latitude, longitude: obj.longitude } })}
      strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
      strokeColors={[
        '#fF0000',
        '#000000', // no color, creates a "long" gradient between the previous and next coordinate
      ]}
      strokeWidth={2} />
  }

  showMapa() {

    return <>
      <SView col={"xs-12"} flex>
        <SMapView
          initialRegion={{
            latitude: this.state.regionAlvaro?.latitude,
            longitude: this.state.regionAlvaro?.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          preventCenter={true}
        // showUserLocation={true}
        >
          <SMarker lat={this.state.regionAlvaro?.latitude} lng={this.state.regionAlvaro?.longitude}  >
            <SIcon name="MarcadorMapa" width={40} height={40} />
          </SMarker>
        </SMapView>
      </SView>


    </>
  }
  msjLeft(texto) {
    var timeMSJ = "10: 21 pm";


    return <>
      <SView col={"xs-12"} row style={{ justifyContent: 'flex-start', }}>
        <SView style={{ maxWidth: '90%', minWidth: '10%', paddingLeft: 8, paddingRight: 8, borderRadius: 5, backgroundColor: STheme.color.card }}>
          <SView height={8} />
          <SText>{texto}</SText>
          <SText fontSize={8} style={{ alignItems: 'flex-end' }} >{timeMSJ}</SText>
          <SView height={8} />
        </SView>
      </SView>

      <SView height={20} backgroundColor={"transparent"} />
    </>

  }

  listaChat() {
    return (
      <SView col={"xs-12 md-9 lg-8"} height backgroundColor={"transparent"} border={"transparent"}  >
        <SScrollView2 disableHorizontal reverse={false}  >
          <SHr height={20} />
          <SView col={"xs-12"} row center>
            <SView col={"xs-11"} height border={"transparent"}   >
              {this.msjLeft("Hola Ing. Alvaro Siles ok")}
              {this.msjLeft("Hola Estudiante, que se le ofrece?")}
              {this.msjLeft("Can you believe this amazing chat bubbles?It's all CSS. Can you believe this amazing chat bubbles? It's al CSS.Can you believe this amazing chat bubbles?It's all CSS. 😍")}
              {this.msjLeft("Can you believe this amazing chat bubbles?It's all CSS. Can you believe this amazing chat bubbles? It's al CSS.Can you believe this amazing chat bubbles?It's all CSS. 😍 Can you believe this amazing chat bubbles?It's all CSS. Can you believe this amazing chat bubbles? It's al CSS.Can you believe this amazing chat bubbles?It's all CSS. 😍 Can you believe this amazing chat bubbles?It's all CSS. Can you believe this amazing chat bubbles? It's al CSS.Can you believe this amazing chat bubbles?It's all CSS. 😍")}
              {this.msjLeft("Can you believe this amazing chat bubbles?It's all CSS. Can you believe this amazing chat bubbles? It's al CSS.Can you believe this amazing chat bubbles?It's all CSS. 😍 Can you believe this amazing chat bubbles?It's all CSS. Can you believe this amazing chat bubbles? It's al CSS.Can you believe this amazing chat bubbles?It's all CSS. 😍 Can you believe this amazing chat bubbles?It's all CSS. Can you believe this amazing chat bubbles? It's al CSS.Can you believe this amazing chat bubbles?It's all CSS. 😍")}
              {this.msjLeft("Can you believe this amazing chat bubbles?It's all CSS. Can you believe this amazing chat bubbles? It's al CSS.Can you believe this amazing chat bubbles?It's all CSS. 😍 Can you believe this amazing chat bubbles?It's all CSS. Can you believe this amazing chat bubbles? It's al CSS.Can you believe this amazing chat bubbles?It's all CSS. 😍 Can you believe this amazing chat bubbles?It's all CSS. Can you believe this amazing chat bubbles? It's al CSS.Can you believe this amazing chat bubbles?It's all CSS. 😍")}
              {this.msjLeft("Can you believe this amazing chat bubbles?It's all CSS. Can you believe this amazing chat bubbles? It's al CSS.Can you believe this amazing chat bubbles?It's all CSS. 😍 Can you believe this amazing chat bubbles?It's all CSS. Can you believe this amazing chat bubbles? It's al CSS.Can you believe this amazing chat bubbles?It's all CSS. 😍 Can you believe this amazing chat bubbles?It's all CSS. Can you believe this amazing chat bubbles? It's al CSS.Can you believe this amazing chat bubbles?It's all CSS. 😍")}
              {this.msjLeft("Chau 😍")}
              {this.msjLeft("Chau 😍")}
            </SView>
          </SView>
          <SHr height={60} />
        </SScrollView2 >
      </SView >
    );
  }

  render() {
    if (!usuario.Actions.validateSession(this.props)) {
      return <SLoad />;
    }
    //var UsuaioPage = Pages["usuarioPage/lista"];

    var emisor = usuario.Actions.getByKey(this.keyUserEmisor, this.props);
    if (!emisor) return <SLoad />;
    console.log(emisor);

    llave = emisor.key;
    nombre = emisor.Nombres;
    return (
      <>
        <BarraSuperiorTapeke2>
          <SView col={"xs-12"} row center style={{ justifyContent: 'flex-start', }} border={"transparent"} height>
            <SView flex center row height border={"transparent"} >
              <SView width={60} center style={{ textAlign: "right" }} height border={"transparent"}>
                <SView style={{ width: 50, height: 50, borderRadius: 30, overflow: "hidden", borderWidth: 1, borderColor: "#fff" }}>
                  <SImage src={SSocket.api.root + "usuario/" + llave + "?date=" + new Date().getTime()} style={{ width: "100%", height: "100%", resizeMode: "cover" }} />
                </SView>
              </SView>
              <SView flex height style={{ justifyContent: 'flex-start' }} border={"transparent"}>
                <SText font={"Roboto-Bold"} style={{ color: "#fff", fontSize: 18 }}>{nombre}</SText>
              </SView>
            </SView>
          </SView>
        </BarraSuperiorTapeke2>

        {/* {this.listaChat()} */}


        {this.showMapa()}

        {/* <SView col={"xs-12"} center height={70} row border={'red'}
          style={{ position: "absolute", bottom: 0, overflow: 'hidden', backgroundColor: STheme.color.primary, }} >
          <SView flex height style={{ justifyContent: "center", }}>
            <SInput center height={48} placeholder={"Message"} ref={r => this.input_message = r} style={{ borderRadius: 100, backgroundColor: STheme.color.card, fontSize: 16, }} />
          </SView>
        </SView> */}

      </>
    );
  }
}
const initStates = (state) => {
  return { state };
};
export default connect(initStates)(Test3);
