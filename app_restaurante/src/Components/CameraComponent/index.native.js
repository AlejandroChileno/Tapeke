import React from "react";
import { Animated, PermissionsAndroid, StyleSheet, Text, View } from "react-native";
import { RNCamera } from "react-native-camera";
import ImageResizer from 'react-native-image-resizer';
import { SIcon, SImage, SNavigation, SPage, SText, STheme, SView } from "servisofts-component";



class CameraComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      flash: false,
      camaraTipo: RNCamera.Constants.Type.back,
      fotoData: null,
      // moveAnim: new Animated.Value(-2),
      existeText: null,

    }
  }

  componentDidMount() {
    this.state.qr = null;
  }

  showCamara() {
    return <RNCamera
      ref={(ref) => { this.camera = ref; }}
      autoFocus={RNCamera.Constants.AutoFocus.on}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      type={this.state.camaraTipo ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back}
      flashMode={this.state.flash ? RNCamera.Constants.FlashMode.on : RNCamera.Constants.FlashMode.off}
      captureAudio={false}
      onBarCodeRead={this.onBarCodeRead}>

      {/* <View style={{  height: '50%', backgroundColor: 'rgba(0,0,0,0.5)' }} /> */}
      <SView style={{ flex: 1, width: '100%', height: 250, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} row center>
      </SView>


      <View style={[{ flexDirection: 'row' }]}>
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', flex: 1, }} />
        <Animated.View
          style={{ width: 250, height: 250, borderWidth: 3, borderColor: '#fcb602', backgroundColor: 'transparent', borderRadius: 1, }}
        />
        <View style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', flex: 1, }} />

      </View>

      <SView style={{ flex: 1, width: '100%', height: 250, backgroundColor: 'rgba(0, 0, 0, 0.5)' }} row center>
        <SText center style={{ marginTop: 14, width: 300, color: '#fff' }} > Coloque el código QR en el cuadro y se escaneará automáticamente </SText>
      </SView>




    </RNCamera>

  }

  // send(file, url) {
  //   if (!file) return;
  //   console.log(url)
  //   file.name = "perfil.png";
  //   file.type = "image/png";
  //   var body = new FormData();
  //   body.append('file', {
  //     uri: file.uri,
  //     type: file.type,
  //     name: file.name
  //   });
  //   console.log(file)

  //   var request = new XMLHttpRequest();
  //   request.open('POST', url, true);
  //   request.send(body);
  //   this.setState({ ...this.state })
  // }

  // showFoto() {
  //   // this.send(this.state.fotoData, SSocket.api.root + "upload/camara/" + '1234567');
  //   return (
  //     <SView flex center backgroundColor='black' >
  //       <SView col={"xs-8"} height={'70%'} style={{ top: '5%' }} border='white'>
  //         {/* <SImage src={`${SSocket.api.root}` +"camara/" + '2?time='+ new Date().getTime()} style={{ resizeMode: "cover" }} /> */}
  //         <SImage src={this.state.fotoData.uri} style={{ resizeMode: "cover" }} />
  //       </SView>
  //     </SView>
  //   );
  // }

  // showBoton() {
  //   return <>

  //     {/* <SIcon name={"BtnLinterna"} height={40} width={40} style={{ position: 'absolute', left: 27, top: 27 }} onPress={() => { this.setState({ flash: !this.state.flash }) }} /> */}
  //     {/* <SIcon name={"BtnGaleria"} height={40} width={40} style={{ position: 'absolute', right: 27, top: 27 }} /> */}

  //     <SView col={"xs-12"} height={100} row backgroundColor={STheme.color.primary}  >
  //       <SView col={"xs-3.5"} height center>
  //         <SIcon name={"BtnAccept"} height={40} width={40} onPress={() => {

  //           var onChange = SNavigation.getParam('onChange');
  //           if (onChange) {
  //             onChange(this.state.fotoData);
  //             SNavigation.goBack();
  //           }
  //           // this.send(this.state.fotoData, SSocket.api.root + "upload/camara/" + '2') 
  //           // SNavigation.navigate("cotizacion_farmacia/registro");
  //         }} />
  //       </SView>
  //       <SView col={"xs-5"} height center onPress={() => { this.takePicture() }}>
  //         <SIcon name={"BtnShooter"} fill={'transparent'} height={50} width={50} />
  //       </SView>
  //       <SView col={"xs-3.5"} height center>
  //         <SIcon name={"BtnCancel"} height={40} width={40} onPress={() => { this.setState({ fotoData: null }) }} />
  //       </SView>
  //     </SView>
  //   </>
  // }

  onBarCodeRead = (result) => {
    const { navigate } = this.props.navigation;
    const auxData = result; // Solo obtén dato
    // this.setState({ existeText: auxData.data });

    if (this.state.qr) return;
    const validador = "tapekeapp.com/pedido/";
    if (auxData.data.indexOf(validador) > -1) {
      var spliter = auxData.data.split(validador);
      if (spliter.length > 1) {
        this.state.qr = spliter[1];
        // alert(spliter[1]);    
        // alert(JSON.stringify(dataa.data));
        SNavigation.replace("pedido/", { keyPedido: spliter[1] });
      }
    }
  };


  render() {
    return (

      <SPage title={''} row style={{ overflow: 'hidden' }} >

        <SView flex>
          {this.showCamara()}
          {/* {this.showBoton()} */}
        </SView>
      </SPage>

    );
  }




  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      //aqui lo rezi
      ImageResizer.createResizedImage(data.uri, 1024, 1024, 'PNG', 100, 0).then((response) => {

        console.log("Alvaro alto" + response.height + ' ancho ' + response.width);
        this.setState({ fotoData: response })

      }).catch((err) => {

      });
      // console.log("Alvaro alto" + data.height + ' ancho ' + data.width);

    }
  };

}
export default CameraComponent