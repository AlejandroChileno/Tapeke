import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SForm, SHr, SIcon, SLoad, SNavigation, SPage, SPopup, SText, STheme, SView } from 'servisofts-component';
import Parent from '../index'
import Usuario from '..';
import PButtom from '../../../../../Components/PButtom';
import PButtom2 from '../../../../../Components/PButtom2';
import CryptoJS from 'crypto-js';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "Pendiente" // Pendiente, Historial
        };
    }

    getForm() {
        return <SForm
            ref={(ref) => { this.form = ref; }}
            props={{
                col: "xs-12",
            }}
            inputProps={{
                separation: 16,
            }}
            inputs={{
                usuario: {
                    placeholder: "Correo",
                    isRequired: true, keyboardType: "email-address", autoCapitalize: "none", type: "email", autoFocus: true, onKeyPress: (evt) => {
                        if (evt.key === "Enter") {
                            this.form.focus("password");
                        }
                    },
                    // icon: <SIcon name={"InputEmail"} width={40} height={30} />
                },
                password: {
                    placeholder: "Contraseña",
                    type: "password", isRequired: true, onKeyPress: (evt) => {
                        if (evt.key === "Enter") {
                            this.form.submit();
                        }
                    },
                    // icon: <SIcon name={"InputPassword"} width={40} height={30} />
                },
            }}
            onSubmit={(data) => {
                if (data) {
                    
                    data["password"] = CryptoJS.MD5(data["password"]).toString();

                    // console.log("sssssssssssssssssssssssssss ",data);
                    Parent.Actions.login(data, this.props);
                }
            }}
        />
    }

    getCargando() {
        if (this.props.state.usuarioReducer.estado != "cargando") return null;
        return <SView col={"xs-12"} height style={{
            position: "absolute",
        }}
            backgroundColor='#00000066'
            center
        >
            <SLoad />
        </SView>
    }

    getFilter() {
        return <SView col={"xs-11 sm-10 md-8 lg-6 xl-6"} height={50} row>
            <SView col={"xs-6"} height card>
                <PButtom2 outline={this.state.filter != "Pendiente"} onPress={() => { this.setState({ filter: "Pendiente" }) }}>Inicio Sesión</PButtom2>
            </SView>
            <SView col={"xs-6"} height card>
                <PButtom2 outline={this.state.filter != "Historial"} onPress={() => { SNavigation.navigate("usuario/registro") }}>Registro</PButtom2>
            </SView>

        </SView>
    }
    render() {
        var error = Parent.Actions.getError("login", this.props);
        if (error) {
            SPopup.alert("Usuario no encontrado, Verifique sus datos.");
        }
        var reducer = this.props.state.usuarioReducer;
        if (reducer.type == "loginGmail") {
            if (reducer.estado == "error") {
                reducer.estado = "";
                SNavigation.navigate("usuario/registro", { type: "gmail" })
            }
        }
        if (reducer.type == "loginFacebook") {
            if (reducer.estado == "error") {
                reducer.estado = "";
                SNavigation.navigate("usuario/registro", { type: "facebook" })
            }
        }
        if (Parent.Actions.validateSession(this.props, true)) {
            SNavigation.replace('/');
            return null;
        }
        if (reducer.type == "login") {
            this.props.state.usuarioReducer.type = "";
        }
        // if (Parent.Actions.validateSession(this.props, true)) {
        //     alert("Session");
        //     SNavigation.replace('/');
        //     return null;
        // }

        return (
            <>
                <SPage title={'Login ' + Parent.component} center hidden>
                    <SView center col={"xs-12"}>
                        <SHr height={50} />
                        <SView col={"xs-11 md-6 xl-4"} center  >
                            <SView col={"xs-11"} height={180}>
                                <SIcon name={"Logo"} />
                            </SView>
                            <SView height={30} />

                            {this.getFilter()}
                            <SHr height={20} />
                            {this.getForm()}
                            <SView height={20} />
                            <SView col={"xs-11"} height={40} row center  >
                                <SView col={"xs-3"} height center>
                                    <SHr color={STheme.color.lightGray} height={1.5} ></SHr>
                                </SView>
                                <SView col={"xs-6"} height center>
                                    <SText fontSize={14} color={STheme.color.darkGray} font={"LondonMM"}> o Iniciar sesión con  </SText>
                                </SView>
                                <SView col={"xs-3"} height center>
                                    <SHr color={STheme.color.lightGray} height={1.5} ></SHr>
                                </SView>
                            </SView>

                   
                            <SView height={10} />
                            <SView col={"xs-11"} row center>
                                <PButtom fontSize={20} onPress={() => {
                                    this.form.submit();
                                }}>Login</PButtom>
                          
                            </SView>
                            <SView col={"xs-11"} height={50} row center  >
                                <SView col={"xs-12"} flex height center>
                                    <SText fontSize={14} color={STheme.color.lightBlack} style={{ textDecorationLine: 'underline' }} font={"LondonMM"} onPress={() => { SNavigation.navigate(Parent.component + '/recuperarContrasena'); }}>¿Olvidaste tu correo o contraseña?</SText>
                                </SView>
                            </SView>
                            <SView height={40} />
                        </SView>
                    </SView>
                </SPage>
                {this.getCargando()}
            </>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Login);