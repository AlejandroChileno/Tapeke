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

    console.log("primero ", dataFirst);
 

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
            <SButtom style={{ backgroundColor: STheme.color.primary, width: 150, height: 44, fontSize: 180, borderRadius: 25, }} onPress={() => { alert("confirmado") }} fontSize={50} >Ir al restaurante</SButtom>
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
  showinfo2() {

    var data = conductor_horario.Actions.getByKeyUsuario(this.props.state.usuarioReducer.usuarioLog.key, this.props);
    var data_horario = horario.Actions.getAll(this.props);
    var data_restaurante = restaurante.Actions.getAll(this.props);
    var data_pack = pack.Actions.getAll(this.props);

    if (!data) return <SLoad />;
    if (!data_horario) return <SLoad />;
    if (!data_restaurante) return <SLoad />;
    if (!data_pack) return <SLoad />;
    var dataFinal = {}

    Object.values(data).map(obj_ch => {
      var horario = data_horario[obj_ch.key_horario]
      var restaurante = data_restaurante[horario.key_restaurante]
      var sd = new SDate();
      if (!horario) return null;
      if (horario?.dia == sd.getDayOfWeek()) {
        //igual no hace nada
      } else if (horario?.dia > sd.getDayOfWeek()) {
        sd.addDay((- sd.getDayOfWeek()) + horario?.dia);
      } else if (horario?.dia < sd.getDayOfWeek()) {
        sd.addDay((7 - sd.getDayOfWeek()) + horario?.dia);
      }
      var fecha = sd.toString("yyyy-MM-dd");
      var dia = new SDate(fecha + " " + horario?.hora_fin, "yyyy-MM-dd hh:mm");
      if (dia.getTime() < new SDate().getTime()) {
        fecha = sd.addDay(7).toString("yyyy-MM-dd");
      }

      dataFinal[obj_ch.key] = {
        ...obj_ch,
        horario,
        restaurante,
        fecha: fecha
      };
    })

    var arr = Object.values(dataFinal).slice(0, 6);
    // console.log("tamaño " + arr[0].horario['hora_inicio']);
    console.log("tamaño " + JSON.stringify(arr[0]));

    var dataFirst = arr[0];





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
              if(!SBLocation.isStarted) return;
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
