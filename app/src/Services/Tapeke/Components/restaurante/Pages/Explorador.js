import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { SHr, SIcon, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import BarraSuperiorTapeke from '../../../../../Components/BarraSuperiorTapeke';
import PBarraFooter from '../../../../../Components/PBarraFooter';
import Item2 from '../Components/Item2';

class Explorador extends Component {
 constructor(props) {
  super(props);
  this.state = {};
  this.key = SNavigation.getParam("keyUsuario");
 }


 getFiltros() {
  return <>
   <SView height={15} />

   <SView col={"xs-12"} row center height={30} border={'blue'}    >

   </SView>
  </>
 }

 getBotonos() {
  return <>
   <SView height={15} />

   <SView col={"xs-10"} row center height={40} border={'red'}>
    <SView col={"xs-6"} center height={40} backgroundColor={STheme.color.primary}>
     <SText fontSize={20} font={"Roboto"} bold color={STheme.color.secondary}>Lista</SText>

    </SView>
    <SView col={"xs-6"} center height={40} border={STheme.color.primary}>
     <SText fontSize={20} font={"Roboto"} bold color={STheme.color.primary}>Mapa</SText>

    </SView>

   </SView>
  </>
 }


 render() {
  return (
   <SPage title={''} hidden disableScroll center>
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

    {this.getFiltros()}
    {this.getBotonos()}

    <ScrollView>
     <SView col={"xs-12"} row center height border={'transparent'} >
      <SView col={"xs-11 md-5 lg-4 xl-2.5"}    >
       <Item2></Item2>
      </SView>
     </SView >
     <SHr height={80} />
    </ScrollView>

    <PBarraFooter />
   </ SPage >
  );
 }
}
const initStates = (state) => {
 return { state }
};
export default connect(initStates)(Explorador);