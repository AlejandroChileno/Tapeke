import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SForm, SHr, SLoad, SNavigation, SPage, SText, SView, SDate, SInput, SPopup, SImage, STheme, SIcon } from 'servisofts-component';
import Parent from '..'
import SSocket from 'servisofts-socket';
import PButtom3 from '../../../../../Components/PButtom3';

class NoHayTarjeta extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key = SNavigation.getParam("key");
    }

    render() {
        // var reducer = this.props.state[Parent.component + "Reducer"];
        // if (reducer.type == "registro" || reducer.type == "editar") {
        //     if (reducer.estado == "exito") {
        //         if (reducer.type == "registro") this.key = reducer.lastRegister?.key;
        //         if (this.form) {
        //             this.form.uploadFiles(SSocket.api.root + "upload/" + Parent.component + "/" + this.key);
        //         }
        //         reducer.estado = "";
        //         SNavigation.goBack();
        //     }
        // }

        return (
            <SPage hidden center>
                <SView col={"xs-12"} row backgroundColor={STheme.color.white} center >
                    <SHr height={20} />
                    <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} height={650} center row style={{ backgroundColor: STheme.color.primary, borderRadius: 12 }}>
                        <SView col={"xs-12"} row center   >
                            <SView col={"xs-7"} border={'transparent'}  >
                                <SHr height={20} />
                                <SText fontSize={24} color={STheme.color.white} font={"Roboto"} bold center> No hay tarjeta registrada</SText>
                                <SHr height={20} />
                                <SText fontSize={18} color={STheme.color.white} bold center font={"Roboto"} >Agrega tu tarjeta de crédito o débito para usarla en cualquier momento</SText>
                            </SView>
                        </SView>
                        <SView col={"xs-11"} center  >
                            <SHr height={20} />
                            <SView center col={"xs-12"}   >
                                <SIcon name="SinTarjeta" width={230}></SIcon >
                            </SView>
                        </SView>
                        <SView col={"xs-12"} row center   >
                            <SView col={"xs-12"} border={'transparent'} center>
                                <PButtom3 secondary props={{ type: "outline" }} onPress={() => { }} >AÑADIR TARJETA</PButtom3>
                                <SHr height={20} />
                            </SView>
                            <SHr height={10} />
                        </SView>
                    </SView>
                </SView>
            </SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(NoHayTarjeta); 