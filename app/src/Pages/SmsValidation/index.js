import React, { Component } from "react";
import { TextInput } from 'react-native';
import { connect } from "react-redux";
import { SButtom, SHr, SIcon, SInput, SPage, STheme, SView } from "servisofts-component";


class SmsValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.campo = {};
  }


  pintar() {
    var arr = Array.from(Array(5).keys())
    return arr.map((i) => {
      return <SInput placeholder={"0"}
        // type={'number'}
        flex
        // maxLength={1}
        style={{ borderColor: STheme.color.gray, borderRadius: 4, borderWidth: 1, fontSize: 20, width: 55, height: 55 }}
        ref={(ref) => { this.campo[i] = ref }}
        
        onPress={() => {
          if(!this.campo[i].getValue()){
            for (const a of Object.values(this.campo)) {
              if(!a.getValue()){
                a.focus();
                return
              }
            }
          }
        }}

        onChangeText={(text) => {

          

          if(this.campo[i].getValue()){
            if(this.campo[i].getValue().length > 1){
              this.campo[i].setValue(text.substr(-1));
            }
            if(text !=this.campo[i].getValue()){
              this.campo[i].setValue(text);
            }
          }

          if (i < 4 && text) {
            this.campo[i + 1].focus();
          }
          if (i > 0 && !text ) {
            this.campo[i - 1].focus();
          }
          
        }}
      />
    })
  }


  render() {
    return (<>
      <SPage title={""} center>
        <SView col={"xs-12 sm-11 md-10 lg-8 xl-6"} row center backgroundColor={'transparent'}>

          <SHr height={50} />

          <SView col={"xs-11"} height={180}>
            <SIcon name={"Logo"} />
          </SView>

          <SView col={"xs-12"} height={30} />

          <SView col={"xs-11"} height={200} center backgroundColor={'transparent'} >
            <SView col={"xs-12"} row center backgroundColor={'transparent'} >
              {this.pintar()}
            </SView>
          </SView>

          <SView col={"xs-12"} height={30} />
          <SButtom style={{ backgroundColor: STheme.color.primary, width: 300, fontSize: 40, borderRadius: 8, }}
            onPress={() => {
              for (var i = 0; i < 5; i++) {
                if (this.campo[i].state.value == null) {
                  // alert(this.campo[i].state.value);
                  return this.campo[i].focus();
                }
              }
            }}
          > ENVIAR </SButtom>
          <SHr height={10} />
        </SView>
      </SPage>
    </>
    );
  }
}
const initStates = (state) => {
  return { state };
};
export default connect(initStates)(SmsValidation);
