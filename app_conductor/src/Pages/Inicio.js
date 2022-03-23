import React, { Component } from "react";
import { connect } from "react-redux";
import { SHr, SIcon, SImage, SLoad, SNavigation, SPage, SScrollView2, SText, STheme, SView, SPopup, SForm, SButtom, SMapView, SMarker, SPolyline, SDate } from "servisofts-component";
import SBLocation, { Data } from "../SBLocation";


class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getButtons() {
    return <SView row>
      <SButtom onPress={() => {
        SBLocation.start({
          minTime: 5000,
          minDistance: 1
        });
        SBLocation.addListener((data) => {
          this.setState({ ...this.state })
        })
      }} type="danger">BL Iniciar
      </SButtom>
      <SButtom onPress={() => {
        SBLocation.stop();
      }} type="danger">BL Stop</SButtom>
      <SButtom onPress={() => {
        this.mapa.center();
        this.setState({ ...this.state })
      }} type="danger">Center</SButtom>
    </SView>

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
  getLocationInfo() {
    return <SView style={{
      position: "absolute",
      top:55,
      width: 300,
      height: 600,
      backgroundColor: "#00000066",
      right: 0,
    }}>
      <SScrollView2 disableHorizontal>
        {Data.history.map((obj, i) => {
          return <SView row>
            <SText color={"#fff"}>( {i} )</SText>
            <SText color={"#fff"}>( {obj.distanceMoved} )</SText>
            {/* <SText color={"#fff"}>{obj.la titude}</SText>
            <SText color={"#fff"}> | </SText>
            <SText color={"#fff"}>{obj.longitude}</SText> */}
            <SHr />
          </SView>
        })}
      </SScrollView2>
    </SView>
  }
  render() {
    return (
      <SPage title={'Inicio'} disableScroll>

        <SView col={"xs-12"} flex>
          <SMapView
            showsUserLocation
            ref={(ref) => { this.mapa = ref }}
          >
            {/* {this.getMarkers()} */}
            {this.getPolyline()}
          </SMapView>
        </SView>
        <SView style={{
          position: "absolute",
          height: 100,
        }}>
          {this.getButtons()}
        </SView>
        {this.getLocationInfo()}

      </SPage>
    );
  }
}
const initStates = (state) => {
  return { state };
};
export default connect(initStates)(Inicio);
