import React, { Component } from "react";
import { connect } from "react-redux";
import { SHr, SIcon, SImage, SLoad, SNavigation, SPage, SScrollView2, SText, STheme, SView, SPopup, SForm, SButtom } from "servisofts-component";
import SBLocation from "../SBLocation";


class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <SPage title={'Inicio'}>
        <SText>Hola</SText>
        <SButtom onPress={() => {
          SBLocation.start({
            minTime: 1000,
            minDistance: 0
          });
        }} type="danger">Iniciar 1s</SButtom>
        <SButtom onPress={() => {
          SBLocation.start({
            minTime: 5000,
            minDistance: 0
          });
        }} type="danger">Iniciar 5s</SButtom>
        <SButtom onPress={() => {
          SBLocation.start({
            minTime: 5000,
            minDistance: 1
          });
        }} type="danger">Iniciar 1m 5s</SButtom>
        <SButtom onPress={() => {
          SBLocation.stop();
        }} type="danger">Stop</SButtom>
      </SPage>
    );
  }
}
const initStates = (state) => {
  return { state };
};
export default connect(initStates)(Inicio);
