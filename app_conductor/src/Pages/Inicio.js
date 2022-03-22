import React, { Component } from "react";
import { connect } from "react-redux";
import { SHr, SIcon, SImage, SLoad, SNavigation, SPage, SScrollView2, SText, STheme, SView, SPopup, SForm, SButtom, SMapView, SMarker, SDate } from "servisofts-component";
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
      }} type="danger">BL Iniciar
      </SButtom>
      <SButtom onPress={() => {
        SBLocation.stop();
      }} type="danger">BL Stop</SButtom>
      <SButtom onPress={() => {
        this.mapa.center();
        this.setState({...this.state})
      }} type="danger">Center</SButtom>
    </SView>

  }
  getMarkers() {
    return Data.history.map((obj) => {
      return <SMarker lat={obj.latitude} lng={obj.longitude} title={new SDate(new Date(obj.time)).toString("yyyy-MM-dd hh:mm:ss")+""}>
        {/* <SIcon name={"Marker"} width={20} height={20} /> */}
      </SMarker>
    })
  }
  render() {
    return (
      <SPage title={'Inicio'} disableScroll>
        {this.getButtons()}
        <SView col={"xs-12"} flex>
          <SMapView
            ref={(ref) => { this.mapa = ref }}
          >
            {this.getMarkers()}
          </SMapView>
        </SView>

      </SPage>
    );
  }
}
const initStates = (state) => {
  return { state };
};
export default connect(initStates)(Inicio);
