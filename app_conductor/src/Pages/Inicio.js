import React, { Component } from "react";
import { connect } from "react-redux";
import { SButtom, SDate, SHr, SIcon, SImage, SLoad, SMapView, SMarker, SNavigation, SPage, SPolyline, SText, STheme, SView } from "servisofts-component";
import BarraCargando from "../Components/BarraCargando";
import BarraSuperiorTapeke from "../Components/BarraSuperiorTapeke";
import SwitchRastreo from "../Components/SwitchRastreo";
import SBLocation from "../SBLocation";
import conductor_horario from "../Services/Tapeke/Components/conductor_horario";
import horario from "../Services/Tapeke/Components/horario";
import pack from "../Services/Tapeke/Components/pack";
import restaurante from "../Services/Tapeke/Components/restaurante";
import usuario from "../Services/Usuario/Components/usuario";
import SSocket from 'servisofts-socket';




class Inicio extends Component {
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
  }

  componentDidMount() {
    if (!usuario.Actions.validateSession(this.props)) { return <SLoad />; }
    SBLocation.addListener((data) => {
      this.setState({ isActive: SBLocation.isStarted() })
      console.log(data);
    })
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
    var data = conductor_horario.Actions.getPedidoProximoByKey(this.props.state.usuarioReducer.usuarioLog.key, this.props);
    if (!data) return <SLoad />;
    // console.log(data.restaurante["latitude"]);
    return <>
      <SView col={"xs-12"} flex>
        <SMapView
          initialRegion={{
            latitude: data?.restaurante["latitude"],
            longitude: data.restaurante["longitude"],
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          preventCenter={true}
        // showUserLocation={true}
        >
          <SMarker lat={data?.restaurante["latitude"]} lng={data?.restaurante["longitude"]}  >
            <SIcon name="MarcadorMapa" width={40} height={40} />
          </SMarker>
        </SMapView>
      </SView>
    </>
  }

  showMensajeBucandoPedido() {

    console.log(this.state.isActive);
    if (!SBLocation.isStarted()) {
      return <SView col={"xs-12 md-12 lg-10 xl-8"} height={60} row center style={{ position: 'absolute', top: 0, backgroundColor: "red", }}  >
        <SView col={"xs-11 "} height row center >
          <SView width={50} border={"transparent"}>
            <SIcon name="SwitchOff2" fill="none" width={40} height={40} center />
          </SView>
          <SView flex row style={{ justifyContent: 'flex-start' }} >
            <SView col={"xs-12 "} height={6} />
            <SText col={"xs-12 "} color={'white'} style={{ fontSize: 16 }} bold>¡Estas desconectado!</SText>
            <SText col={"xs-12 "} color={'white'} style={{ fontSize: 10 }} >Conéctese en línea para comenzar a aceptar viajes.</SText>
          </SView>
        </SView>
      </SView>
    } else {
      return <SView col={"xs-12 md-12 lg-10 xl-8"} center height={60} style={{ position: 'absolute', top: 0, backgroundColor: "#2BC25F", }}  >
        <SView col={"xs-11  "} height>
          <SView flex center  >
            <SText color={'white'} style={{ fontSize: 16 }} bold>Buscando Restaurantes...</SText>
          </SView>
        </SView>
      </SView>
    }
  }


  showinfo() {
    var dataFirst = conductor_horario.Actions.getPedidoProximoByKey(this.props.state.usuarioReducer.usuarioLog.key, this.props);
    if (!dataFirst) return <SLoad />;

    if (dataFirst.length <= 0) {
      return <>
        <SView col={"xs-12 md-6 lg-4"} height={320} backgroundColor={STheme.color.secondary} style={{ position: 'absolute', bottom: 0 }} center  >
          <SView col={"xs-12"} height={20} />
          <SView col={"xs-12"} height center border={"transparent"}>
            <SText font={"Roboto"} fontSize={20} color={STheme.color.primary}>No hay horarios asignados</SText>
          </SView>
        </SView>
      </>
    }
    if (!SBLocation.isStarted()) {
      return <SView col={"xs-12 md-6 lg-4"} height={250} backgroundColor={STheme.color.secondary} style={{ position: 'absolute', bottom: 0 }} center  >
              <SText style={{ fontSize: 14 }} bold >{dataFirst?.restaurante["nombre"]} </SText>
        
      </SView>
    }
    return <>
      <SView col={"xs-12 md-6 lg-4"} height={350} backgroundColor={STheme.color.secondary} style={{ position: 'absolute', bottom: 0 }} center  >
        <SView col={"xs-12"} height={20} />
        <SView col={"xs-12"} height={60} center row backgroundColor={"transparent"} >
          <SView col={"xs-11 md-11 lg-10 xl-8"} height={25} center row backgroundColor={"transparent"} >
            <SView width={41} height center border={'transparent'}>
              <SIcon name="Reloj" fill={STheme.color.primary} width={20} ></SIcon>
            </SView>
            <SView flex height center border={'transparent'}    >
              <SView col={"xs-12"} height={4} />
              <SView col={"xs-12"} border={'transparent'}   >
                <SText style={{ fontSize: 14 }} bold >Hoy {dataFirst['fecha']} </SText>
              </SView>
            </SView>
          </SView>
          <SView col={"xs-11 md-11 lg-10 xl-8"} height={30} center row backgroundColor={"transparent"} >
            <SView width={41} height center border={'transparent'}>
              <SIcon name="Reloj" fill={STheme.color.primary} width={20} ></SIcon>
            </SView>
            <SView flex height center border={'transparent'}    >
              <SView col={"xs-12"} height={4} />
              <SView col={"xs-12"} border={'transparent'}   >
                <SText style={{ fontSize: 14 }} bold > {dataFirst.horario['hora_inicio']} am - Delivery </SText>
              </SView>
            </SView>
          </SView>
        </SView>
        <SView col={"xs-12"} center>
          <SHr color={STheme.color.lightGray} height={0.5}></SHr>
        </SView>
        <SView col={"xs-11 md-11 lg-10 xl-8"} height={50} center row backgroundColor={"transparent"} >
          <SView width={41} height={41} center border={'transparent'}>
            <SIcon name="RestauranteLogo" fill={STheme.color.primary} width={20} ></SIcon>
          </SView>
          <SView flex height center border={'transparent'}    >
            <SView col={"xs-12"} height={4} />
            <SView col={"xs-12"} border={'transparent'}   >
              <SText style={{ fontSize: 14 }} bold >{dataFirst?.restaurante["nombre"]} </SText>
            </SView>
          </SView>
        </SView>
        <SView col={"xs-12"} center>
          <SHr color={STheme.color.lightGray} height={0.5}></SHr>
        </SView>
        <SView col={"xs-11 md-11 lg-10 xl-8"} height={60} center row backgroundColor={"transparent"} >
          <SView width={41} height={41} center border={'transparent'}>
            <SIcon name="Location" fill={STheme.color.primary} width={18} ></SIcon>
          </SView>
          <SView flex height center border={'transparent'}    >
            <SView col={"xs-12"} height={4} />
            <SView col={"xs-12"} border={'transparent'}   >
              <SText style={{ fontSize: 14 }} bold >{dataFirst.restaurante["direccion"]}</SText>
            </SView>
          </SView>
        </SView>
        <SView col={"xs-12"} center>
          <SHr color={STheme.color.lightGray} height={0.5}></SHr>
        </SView>
        <BarraCargando />
        <SView col={"xs-11 md-11 lg-10 xl-8"} height={70} center row backgroundColor={"transparent"} >
          <SView width={41} height={41} center border={'transparent'}>
            <SIcon name="AppAlert" fill={STheme.color.primary} width={20} ></SIcon>
          </SView>
          <SView flex height center border={'transparent'}    >
            <SView col={"xs-12"} height={4} />
            <SView col={"xs-12"} border={'transparent'}   >
              <SText style={{ fontSize: 14 }}   >Dirigite a este restaurante para que s asigne pedidos</SText>
            </SView>
          </SView>
        </SView>
        <SView col={"xs-12"} center>
          <SHr color={STheme.color.lightGray} height={0.5}></SHr>
        </SView>
        <SView col={"xs-12"} height={80} row center   >
          <SView flex center   >
            <SButtom style={{ backgroundColor: STheme.color.primary, width: 150, height: 44, fontSize: 180, borderRadius: 25, }} onPress={() => { SNavigation.navigate("restaurante/comollegar", { key: dataFirst.restaurante["key"] }) }} fontSize={50} >Ir al restaurante</SButtom>
          </SView>
        </SView>


        {/* <SView col={"xs-12"} height={80} row center   >
          <SView flex center   >
            <SButtom style={{ backgroundColor: "#FF5E5C", width: 150, height: 44, fontSize: 24, borderRadius: 25, }} onPress={() => { alert("cancelado") }} >Rechazar</SButtom>
          </SView>
          <SView flex center   >
            <SButtom style={{ backgroundColor: "#2BC25F", width: 150, height: 44, fontSize: 180, borderRadius: 25, }} onPress={() => { alert("confirmado") }} fontSize={50} >Aceptar</SButtom>
          </SView>
        </SView> */}
      </SView>
    </>
  }


  render() {
    if (!usuario.Actions.validateSession(this.props)) {
      return <SLoad />;
    }
    //var UsuaioPage = Pages["usuarioPage/lista"];


    return (
      <>
        <BarraSuperiorTapeke>
          <SwitchRastreo width={130} height={40}
            callback={(resp) => {
              // this.setState({ active: resp.ConductorOnline });
              if (!SBLocation.isStarted) return;
              if (!SBLocation.isStarted()) {
                SBLocation.start({
                  minTime: 3000,
                  minDistance: 1
                });
              }
              if (SBLocation.isStarted()) {
                SBLocation.stop();
              }
            }} />
        </BarraSuperiorTapeke>

        <SPage title={""} hidden disableScroll center>
          {this.showMapa()}
          {this.showMensajeBucandoPedido()}
          {this.showinfo()}
        </SPage>
      </>
    );
  }
}
const initStates = (state) => {
  return { state };
};
export default connect(initStates)(Inicio);
