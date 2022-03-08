import React from 'react';
import { connect } from 'react-redux';
import { SIcon, SMapView, SMarker, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import BarraSuperiorTapeke from '../../../../../Components/BarraSuperiorTapeke';
import PBarraFooter from '../../../../../Components/PBarraFooter';

class exploradorMapa extends React.Component {
 constructor(props) {
  super(props);
  this.state = {};
  this.key = SNavigation.getParam("keyUsuario");
 }

 getBotonos() {
  return <>
   <SView col={"xs-10 md-5 lg-4 xl-3"} row center height={40}  >
    <SView col={"xs-6"} center height={40} backgroundColor={STheme.color.white} border={STheme.color.primary} onPress={() => { SNavigation.navigate("restaurante/explorador"); }}>
     <SText fontSize={20} font={"Roboto"} bold color={STheme.color.primary}>Lista</SText>
    </SView>
    <SView col={"xs-6"} center height={40} backgroundColor={STheme.color.primary}>
     <SText fontSize={20} font={"Roboto"} bold color={STheme.color.white}>Mapa</SText>
    </SView>
   </SView>
  </>
 }



 showMapa() {
  return <>
   <SView col={"xs-12"} flex>
    <SMapView initialRegion={
     {
      latitude: -17.808690397665742,
      longitude: -63.16250034566757,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
     }}
     preventCenter>
     <SMarker lat={-17.808690397665742} lng={-63.16250034566757} />
    </SMapView>
   </SView>
   <SView col={"xs-12"} height={50} border={'transparent'} style={{ position: 'absolute', top: 90, }} center   >
    {this.getBotonos()}
   </SView>
  </>
 }



 render() {
  return (
   <>
    < SPage title={''} hidden disableScroll center >
     <BarraSuperiorTapeke>
      <SView row border={'transparent'} >
       <SView height={50} width={15}>
        <SView style={{ top: 6 }} center>
         <SIcon name={"Location"} height={18} fill={STheme.color.secondary} />
        </SView>
       </SView>
       <SView height={50} style={{ justifyContent: 'center', paddingLeft: 8, paddingRight: 8, }}>
        <SText font={"Roboto"} fontSize={10} center bold color={STheme.color.secondary}>{" "}Las palmas, Santa cruz de la sierra</SText>
        <SText font={"Roboto"} fontSize={12} center bold color={STheme.color.secondary}>{" "}A menos de 30 km</SText>
       </SView>
       <SView height={50} width={25}>
        <SView style={{ top: 6 }} center>
         <SIcon name={"Back"} height={18} fill={STheme.color.secondary} style={{ transform: [{ rotate: "-90deg" }] }} />
        </SView>
       </SView>
      </SView>
     </BarraSuperiorTapeke>
     {this.showMapa()}
     <PBarraFooter />
    </ SPage >
   </>
  );
 }
}
const initStates = (state) => {
 return { state }
};
export default connect(initStates)(exploradorMapa);