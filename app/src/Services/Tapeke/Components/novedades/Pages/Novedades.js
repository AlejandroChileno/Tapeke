import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SForm, SHr, SLoad, SNavigation, SPage, SText, SView, SDate, SInput, SPopup, STheme, SIcon, SImage } from 'servisofts-component';
import Parent from '..'
// import Horario from '../../horario';
import Pack from '../../pack';
import SSocket from 'servisofts-socket';
import PButtom from '../../../../../Components/PButtom';

class Novedades extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.key = SNavigation.getParam("key");
        this.key_horario = SNavigation.getParam("key_horario");
    }

    render() {

        return (
            <SPage title={'Novedades'} center>
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} >
                    <SHr height={50} />
                    <SView col={"xs-12"} row center backgroundColor={STheme.color.card} style={{ borderRadius: 8 }}>
                        <SImage src={require('../../../../../Assets/img/novedad.jpg')} style={{
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                            maxWidth: "100%", minWidth: "100%", overflow: "hidden",
                            resizeMode: "cover",
                            height: 165
                        }} />
                        <SHr height={20} />
                        <SView col={"xs-11"}>
                            <SText color={STheme.color.primary} font={"Roboto"} fontSize={18} style={{}}>Restaurante Doña Bella</SText>
                            <SHr height={5} />
                            <SView col={"xs-12"} row center style={{ borderBottomWidth: 1, borderColor: STheme.color.lightGray }} ></SView>
                            <SHr height={5} />
                            <SView col={"xs-12"}  center flex style={{ alignItems: "flex-end" }}>
                                <SText color={STheme.color.darkGray}>05/04/2022</SText>
                            </SView>
                            <SHr height={10} />
                            <SText color={STheme.color.text} font={"Roboto"} fontSize={15} style={{}}>
                                ¡¡Gran apertura!!
                                Con un servicio especial y diferente.
                                Visítanos será un gusto atenderte
                                Estamos ubicados a un costado de el parque municipal de El Chol, B.V.
                            </SText>
                        </SView>
                        <SHr height={25} />
                    </SView>
                    <SHr height={50} />
                    <SHr height={40} />
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Novedades);