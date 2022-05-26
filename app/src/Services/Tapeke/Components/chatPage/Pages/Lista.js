import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SNavigation, SPage, STheme, SView } from 'servisofts-component';
import Parent from '..';
import FloatButtom from '../../../../../Components/FloatButtom';

import { View, Text, ScrollView, TouchableOpacity, TextInput, Animated, Keyboard, Platform, Image } from 'react-native';



function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
var scroll;


class Lista extends Component {

    static navigationOptions = {
        headerShown: false,
    }


    constructor(props) {
        super(props);
        this.state = {
            animValue: new Animated.Value(0),
            inputValue: "",
            keyboardHeight: 3,
        };
    }



    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardWillShow', (e) => {
            console.log("Enrooooo");
            if (Platform.OS == "ios") {
                this.state.keyboardHeight = e.endCoordinates.height * 0.82;
            } else {
                this.state.keyboardHeight = 2;
            }
            console.log(this.state.keyboardHeight)
            this.setState({ ...this.state })
            this.fadeIn();
        });
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            this.fadeOut();
        });
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        if (!this.state.keyboardHeight) {
            return;
        }
        Animated.timing(this.state.animValue, {
            toValue: 100,
            duration: 350
        }).start();
    }

    fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(this.state.animValue, {
            toValue: 0,
            duration: 150
        }).start();
    }


    getVistoItem() {

        return (
            <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} center>

                <Text style={{
                    color: "#A5A5A5",
                    fontSize: 9,
                    marginLeft: "2%",
                    marginRight: "2%",
                    textAlign: "right",
                }}> YYYY-MM-DD hh:mm:ss </Text>
            </SView>)
    }


    render() {

        // return (
        //     <SPage title={'registro'} center>
        //          {this.getVistoItem()}
        //     </SPage>
        // )











        // var getListaMensajes = () => {


        // return Object.keys(mensajes).map((key) => {
        //     var chat = "hola mundo";
        //     var style = {
        //         borderRadius: 8,
        //         minHeight: 20,
        //         padding: 8,
        //         color: "#fff",
        //         maxWidth: "70%",
        //         flexDirection: "row",
        //     }
        //     var styleVisto = {
        //         textAlign: "center"
        //     }
        //     var isEmisor = false;
        //     if (chat.key_emisor != this.props.state.usuarioReducer.usuarioLog.key) {
        //         style.marginLeft = "1%"
        //         style.backgroundColor = "#E1E1E1";
        //         styleVisto.textAlign = "left";
        //     } else {
        //         isEmisor = true
        //         style.marginRight = "1%"
        //         // style.right=1;
        //         style.backgroundColor = STheme.color.primary;
        //         styleVisto.textAlign = "right";
        //     }

        return (
            <SPage title={'registro'} center >


                <View style={{
                    padding: 4,
                    width: "100%",
                    backgroundColor: "blue",
                    // alignItems: (!isEmisor ? "flex-start" : "flex-end")
                }}>
                    <View style={{
                        borderRadius: 8,
                        minHeight: 20,
                        padding: 8,
                        color: "#fff",
                        maxWidth: "70%",
                        flexDirection: "row",
                    }}>
                        <Text style={{
                            color: "red", fontSize: 12,
                            marginLeft: "1%",
                            backgroundColor: "#E1E1E1",
                            textAlign: "left",
                        }}>hola guapa</Text>
                        {this.getVistoItem()}

                    </View>

                    <View style={{
                        borderRadius: 8,
                        minHeight: 20,
                        padding: 8,
                        color: "#fff",
                        maxWidth: "70%",
                        flexDirection: "row",
                    }}>
                        <Text style={{
                            color: "white", fontSize: 12,
                            marginRight: "1%",
                            right: 1,
                            backgroundColor: STheme.color.primary,
                            textAlign: "right",

                        }}>quien eres?</Text>
                        {this.getVistoItem()}

                    </View>


                </View>
            </SPage>
        )
        // })
        // }












        // return (
        //     <View style={{
        //         flex: 1,
        //     }}>


        //         <View style={{
        //             flex: 1,
        //             backgroundColor: "#f2f2f2",
        //         }}>
        //             <ScrollView
        //                 ref={(ref) => {
        //                     this.state.scrollView = ref;
        //                 }}
        //                 style={{
        //                     width: "100%",
        //                     // height: "100%",
        //                     // backgroundColor: "#ccc"
        //                 }}
        //                 onContentSizeChange={() => {
        //                     this.state.scrollView.scrollToEnd({ amimated: true });
        //                 }}
        //                 contentContainerStyle={{
        //                     flexDirection: "column-reverse",
        //                     paddingBottom: 0,
        //                     minHeight: "100%",
        //                 }}>
        //                 <TouchableOpacity activeOpacity={1}
        //                     style={{
        //                         width: "100%",
        //                         height: "100%",
        //                         justifyContent: "flex-end",
        //                         overflow: "hidden"
        //                     }}>
        //                     {getListaMensajes()}
        //                 </TouchableOpacity>
        //             </ScrollView>

        //             <Animated.View style={{
        //                 width: "100%",
        //                 // backgroundColor: "#efefef",
        //                 height: 50,
        //                 paddingLeft: 8,
        //                 paddingRight: 8,
        //                 marginBottom: 8,
        //                 bottom: 0,
        //                 transform: [
        //                     {
        //                         translateY: this.state.animValue.interpolate({
        //                             inputRange: [0, 100],
        //                             outputRange: [0, this.state.keyboardHeight * -1]
        //                         }),
        //                     }
        //                 ],
        //             }}>

        //                 <View style={{
        //                     flex: 1,
        //                     width: "100%",
        //                     flexDirection: 'row',
        //                     borderWidth: 1,
        //                     borderColor: "#B3B3B3",
        //                     backgroundColor: "#fff",
        //                     borderRadius: 10,
        //                     overflow: 'hidden',
        //                 }}>
        //                     <TextInput
        //                         ref={(ref) => {
        //                             this.state.refMensaje = ref;
        //                         }}
        //                         onChangeText={(text) => {
        //                             this.state.inputValue = text;
        //                         }}
        //                         style={{
        //                             height: "100%",
        //                             flex: 1,
        //                             fontSize: 14,
        //                         }}
        //                         // onFocus={() => {
        //                         //     this.fadeIn();
        //                         // }}
        //                         // onBlur={() => {
        //                         //     this.fadeOut();
        //                         // }}
        //                         multiline={true}
        //                         placeholderTextColor="#CCCCCC"
        //                         autoCapitalize='none'
        //                         placeholder="Escriba su texto..."
        //                     />

        //                     <TouchableOpacity
        //                         onPress={() => {

        //                             // var exito = true
        //                             // if (!this.state.inputValue) {
        //                             //     exito = false
        //                             // }
        //                             // if (exito) {
        //                             //     this.props.state.socketClienteReducer.sessiones[AppParams.socket.name].send({
        //                             //         component: "mensaje",
        //                             //         type: "enviar",
        //                             //         estado: "cargando",
        //                             //         data: {
        //                             //             key: uuidv4(),
        //                             //             key_receptor: this.props.state.viajesReducer.data.key_conductor,
        //                             //             key_emisor: this.props.state.usuarioReducer.usuarioLog.key,
        //                             //             mensaje: this.state.inputValue,
        //                             //             key_viaje: this.props.state.viajesReducer.data.key,
        //                             //             fecha_envio: moment().format("YYYY-MM-DD HH:mm:ss")
        //                             //         }
        //                             //     }, true);
        //                             //     this.state.refMensaje.clear();
        //                             //     this.state.inputValue = "";
        //                             // }
        //                         }}
        //                         style={{
        //                             width: 50,
        //                             justifyContent: 'center',
        //                             alignItems: 'center',
        //                         }}>

        //                         <SIcon name="Girl"
        //                             style={{
        //                                 width: 30,
        //                                 height: 30,
        //                                 fill: "#a4a4a4"
        //                             }} />
        //                     </TouchableOpacity>
        //                 </View>
        //             </Animated.View>
        //         </View>
        //     </View>
        // );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Lista);