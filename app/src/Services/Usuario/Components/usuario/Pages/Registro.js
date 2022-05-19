import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SForm, SHr, SPage, SText, SNavigation, SLoad, SView, SIcon, SPopup, STheme } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import Parent from '../index'
import PButtom from '../../../../../Components/PButtom';
import usuario from '../index';
class Registro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            envio: 0,
            // telefono:"",
            // correo:"",
        };
        this.key = SNavigation.getParam("key");
        this.type = SNavigation.getParam("type");
    }
    getContent() {
        this.usr = {};
        if (this.key) {
            this.usr = Parent.Actions.getByKey(this.key, this.props);
            if (!this.usr) return <SLoad />
        }
        if (this.type) {
            var reducer = this.props.state.usuarioReducer;
            switch (this.type) {
                case "gmail":
                    var data = reducer.gmailData;
                    if (!data) {
                        SNavigation.goBack();
                        return;
                    }
                    this.usr = {
                        gmail_key: data.id,
                        Correo: data.email,
                        Nombres: data.givenName,
                        Apellidos: data.familyName,
                    }
                    break;
                case "facebook":
                    var data = reducer.facebookData;
                    if (!data) {
                        SNavigation.goBack();
                        return;
                    }
                    this.usr = {
                        facebook_key: data.id,
                        Correo: data.email,
                        Nombres: data.first_name,
                        Apellidos: data.last_name,
                    }
                    break;
            }
        }
        return <SForm
            ref={(form) => { this.form = form; }}
            col={"xs-11 sm-9 md-7 lg-5 xl-4"}
            inputProps={{
                col: "xs-12",
                separation: 16
            }}
            style={{
                alignItems: "center",
            }}
            inputs={{
                Nombres: { placeholder: "Nombres", isRequired: true, defaultValue: this.usr.Nombres },
                Apellidos: { placeholder: "Apellidos", isRequired: true, defaultValue: this.usr.Apellidos },
                "Telefono": { placeholder: "Teléfono", isRequired: true, defaultValue: this.usr["Telefono"], type: "phone" },
                Correo: { placeholder: "Correo", type: "email", isRequired: true, defaultValue: this.usr.Correo },
                ...(!this.type ? {
                    Password: { placeholder: "Password", isRequired: true, type: "password", defaultValue: this.usr.Password },
                    RepPassword: { placeholder: "Repetir password", type: "password", isRequired: true, defaultValue: this.usr.Password },
                } : {})
            }}
            onSubmit={(values) => {

                // if (values["Telefono"] = this.usr.Telefono) {
                //     alert("El Telefono ya esta registrado");
                //     return null;
                // }


                // if (values["Correo"] = this.state.correo) {
                //     alert("El correo ya esta registrado");
                //     return null;
                // }




                if (values["Password"] != values["RepPassword"]) {
                    alert("Las contraseñas no coinciden");
                    return null;
                }

                if (this.key) {
                    Parent.Actions.editar({
                        ...this.usr,
                        ...values
                    }, this.props);
                } else {
                    if (this.type) {
                        console.log(this.usr);
                        switch (this.type) {
                            case "gmail":
                                values["gmail_key"] = this.usr.gmail_key;
                                if (!values["gmail_key"]) return null;
                                break;
                            case "facebook":
                                break;
                        }
                    }
                    if (this.state.envio == 0) {
                        SPopup.alert("Debes aceptar los términos y condiciones")
                        // var error = "Debes aceptar los términos y condiciones"
                        // SPopup.open({ key: "errorRegistro", content: this.alertError(error) });
                    } else {
                        this.state.aux = values;
                        
                        Parent.Actions.registro(values, this.props);
                    }
                }
            }}
        />
    }

    //TODO LICETH: Falta que ricky me devuelva detalle de error de usuario para mostrar error en popup
    alertError(error) {
        // if (error.Correo == this.state.aux.Correo) {
        //     alert("El coreoooooooooooo ya esta registrado");
        //     SPopup.close("errorRegistro");
        //     return null;
        // }
 
        return <SView col={"xs-12 md-8 xl-6"} row style={{ height: 250, borderRadius: 8, }} backgroundColor={STheme.color.background} center>
            {/* <SView style={{
                width: "100%",
                top: 0,
                left: 0,
                position: "absolute",
                ...this.props.style,
            }}>
                <SIcon name={"Enfermera10"} height={500} />
            </SView> */}
            <SView col={"xs-11"}  >
                <SView height={30}></SView>
                <SIcon name={"UserAlert"} height={100} />
            </SView>
            <SView col={"xs-11"} center style={{
                // width: "100%",
                // height: "100%",
            }} >
                {/* <SText style={{ fontSize: 16, }}>El usuario ya existe</SText> */}
                <SText color={STheme.color.darkGray} style={{ fontSize: 20, fontWeight: "bold" }}>Número activo</SText>
                <SText color={STheme.color.darkGray} style={{ fontSize: 15 }}>El número que ingreso ya está asociado a una cuenta activa.</SText>
                {/* <SText secondary style={{ fontSize: 12, }}>{`Nombre: ${error["Nombres"] + " " + error["Apellidos"]}`}</SText> */}

                {/* <SText secondary style={{ fontSize: 12, }}>{`Correo: ${error["Correo"]}`}</SText> */}

                <SView height={30}></SView>
                {/* <SText style={{ fontSize: 12, }}>{`Fecha nacimiento: ${error["Fecha nacimiento"]}`}</SText> */}
                {/* <SText secondary style={{ fontSize: 12, }}>{`CI: ${error["CI"]}`}</SText>
                <SText secondary style={{ fontSize: 12, }}>{`Telefono: ${error["Telefono"]}`}</SText> */}
            </SView>
        </SView>
    }


    render() {
        // var error = Parent.Actions.getError("registro", this.props);
        var error = usuario.Actions.getError("registro", this.props);

        if (error) {
            console.log("alvaro1 ",error);
            console.log("alvaro2 ",this.state.aux);
          
            if (error.Telefono == this.state.aux.Telefono) {
                alert("El Telefono ya esta registrado");
                // return null;
            }

            if (error.Correo == this.state.aux.Correo) {
                alert("El correo ya esta registrado");
            // return null;
            }

            SPopup.open({ key: "errorRegistro", content: this.alertError(error) });
        }

        if (this.props.state.usuarioReducer.estado == "exito" && (this.props.state.usuarioReducer.type == "registro") || (this.props.state.usuarioReducer.type == "editar")) {
            this.props.state.usuarioReducer.estado = "";
            if (this.props.state.usuarioReducer.lastRegister) {
                this.key = this.props.state.usuarioReducer.lastRegister.key;
                var lastRegister = this.props.state.usuarioReducer.lastRegister;
                if (lastRegister.key) {
                    if (!Parent.Actions.validateSession(this.props, true)) {
                        if (lastRegister.gmail_key) {
                            Parent.Actions.loginGoogle({
                                id: lastRegister.gmail_key
                            }, this.props);
                        } else {
                            Parent.Actions.login({
                                usuario: this.props.state.usuarioReducer.lastRegister.Correo,
                                password: this.props.state.usuarioReducer.lastRegister.Password
                            }, this.props);
                        }

                    }
                }
            }
            if (this.form) {
                this.form.uploadFiles(SSocket.api.root + "upload/" + Parent.component + "/" + this.key);
            }
            // SNavigation.goBack();
        }
        if (this.key) {
            this.usr = Parent.Actions.getByKey(this.key, this.props);
            if (!this.usr) return <SLoad />
        }
        return (
            <SPage title={'Registro de ' + Parent.component} center>
                <SView height={30}></SView>
                <SView col={"xs-12"} center>
                    {this.getContent()}
                </SView>
                <SHr height={25} />
                <SView col={"xs-11 sm-9 md-7 lg-5 xl-4"} height={30}>
                    <SView col={"xs-10"} row center>
                        <SView col={"xs-1"} onPress={() => { this.setState(this.state.envio == 0 ? { envio: 1 } : { envio: 0 }); }}>
                            <SIcon name={this.state.envio != 0 ? 'IconCheckedOk' : "IconChecked"} fill={STheme.color.primary} width={30} height={30}></SIcon>
                        </SView>
                        <SView col={"xs-9"} center style={{ alignItems: "center" }} onPress={() => {
                            SNavigation.navigate('terminos');
                        }} >
                            <SText color={STheme.color.text} fontSize={14} font={"LondonBetween"} style={{ textDecorationLine: 'underline' }} >
                                Aceptar términos y condiciones
                            </SText>
                        </SView>
                    </SView>
                </SView>
                <SHr height={25} />
                <PButtom
                    props={{
                        type: "outline"
                    }}
                    onPress={() => {
                        this.form.submit()
                    }}
                >{(this.key ? "Editar" : "Registrar")}</PButtom>
                <SView height={40}></SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Registro);