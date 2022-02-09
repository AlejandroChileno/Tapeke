import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SForm, SHr, SIcon, SNavigation, SPage, SText, SView, SLoad, STheme } from 'servisofts-component';
import Parent from '../index';
import Kolping from '../../../../../Components/Kolping';
import KButtom from '../../../../../Components/Kolping/KButtom';

class Registro extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key = SNavigation.getParam("key");
    }

    render() {


        return (
            <SPage title={'Registro de ' + Parent.component} center>
                <SHr height={32} />
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"}>
                    <SText font={"LondonTwo"} fontSize={20} color={STheme.color.info}>{"Adjunta tu receta (imagen nítida)"}</SText>
                    <SView col={"xs-12"} height={2} style={{ borderBottomWidth: 1, borderColor: STheme.color.primary, }}></SView>
                </SView>
                <SHr height={32} />
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} center>
                    <SView col={"xs-11"} height={200} style={{ overflow: 'hidden', borderRadius: 16 }}>
                        <SView col={"xs-12"} height backgroundColor={STheme.color.lightGray+"99"} center>
                            <SIcon name={"Camera"} width={100} />
                        </SView>
                    </SView>
                </SView>
                <SHr height={32} />
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} center>
                    <KButtom>COTIZAR</KButtom>
                    <SHr />
                    <SHr />
                    <KButtom secondary>CANCELAR</KButtom>
                </SView>

            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Registro);