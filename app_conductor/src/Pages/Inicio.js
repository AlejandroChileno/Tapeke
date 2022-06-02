import React, { Component } from "react";
import { connect } from "react-redux";
import { SButtom, SHr, SIcon, SLoad, SMapView, SMarker, SNavigation, SPage, SPolyline, SText, STheme, SView } from "servisofts-component";
import BarraCargando from "../Components/BarraCargando";
import BarraSuperiorTapeke from "../Components/BarraSuperiorTapeke";
import SwitchRastreo from "../Components/SwitchRastreo";
import SBLocation from "../SBLocation";
import usuario from "../Services/Usuario/Components/usuario";




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

  showMensajeBucandoPedido() {

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
    } else if (SBLocation.isStarted()) {
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
    return <>
      <SView col={"xs-12 md-6 lg-4"} height={300} backgroundColor={STheme.color.secondary} style={{ position: 'absolute', bottom: 0 }} center  >
        <SView col={"xs-12"} height={20} />

        <SView col={"xs-11"} height={80} center row border={"transparent"} >

          <SView width={48} height={48} center style={{ borderRadius: 50, }} backgroundColor={STheme.color.card} >
            <SIcon name="UserLogo" width={24} border={'transparent'} ></SIcon>
          </SView>
          <SView width={8} />
          <SView flex center row border={'transparent'} >

            <SView col={"xs-12"} row center >
              <SView flex row style={{ justifyContent: 'flex-start', }} >
                <SText col={"xs-12"} style={{ fontSize: 16 }} bold>Marcela tinelli  </SText>
              </SView>
              <SView width={88} style={{ justifyContent: 'flex-end', }} border={'transparent'}>
                <SText style={{ fontSize: 17 }} bold>Bs 20.00</SText>
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

        <BarraCargando />

        <SView col={"xs-12"} height={15} />



        <SView col={"xs-11 md-11 lg-10 xl-8"} height={60} center row border={"transparent"} >
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
            <SButtom style={{ backgroundColor: "#FF5E5C", width: 150, height: 44, fontSize: 24, borderRadius: 25, }} onPress={() => { alert("cancelado") }} >Rechazar</SButtom>
          </SView>
          <SView flex center   >
            <SButtom style={{ backgroundColor: "#2BC25F", width: 150, height: 44, fontSize: 180, borderRadius: 25, }} onPress={() => { alert("confirmado") }} fontSize={50} >Aceptar</SButtom>
          </SView>
        </SView>

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
 
              if (!SBLocation.isStarted()) {
                SBLocation.start({
                  minTime: 3000,
                  minDistance: 1
                });
              } if (SBLocation.isStarted()) {
                SBLocation.stop();
              } else {
                SBLocation.addListener((data) => {
                  // this.setState({ ...this.state })
                })
              }}}


          />
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
