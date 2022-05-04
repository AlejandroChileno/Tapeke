import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SHr, SPage, SText, STheme, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import LogoCargando from '../Components/LogoCargando';
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'PRESIONA EL BOTON',
        };
    }

    render() {
        return (
            <SPage title={'Test'} center>


                <SView col={"xs-12"} row center flex border={"transparent"} >
                    <LogoCargando />

                </SView >

                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} height={230} row center backgroundColor={'transparent'} >
                    <SHr height={20} />
                    <SText fontSize={14.5} font={"Roboto"} bold >El restaurante esta preparando tu pedido!!!</SText>
                    <SHr height={15} />

                    <SView col={"xs-10"} height={5} backgroundColor={STheme.color.card} style={{ borderRadius: 8 }}></SView>

                    <SHr height={15} />

                    <SView col={"xs-11"} height={40} row center border={'transparent'}  >
                        <SView flex row center style={{ justifyContent: 'flex-start', }}>
                            <SText fontSize={16} font={"Roboto"}>Hora de entrega:</SText>
                        </SView>
                        <SView flex row center style={{ justifyContent: 'flex-end', }}>
                            <SText fontSize={20} font={"Roboto"}>  10:00am - 11:00am</SText>
                        </SView>
                    </SView>
                    <SHr height={5} />
                    <SView col={"xs-11"} height={80} row  style={{borderBottomWidth: 1, borderColor: STheme.color.lightGray,}} >
                        <SView flex row center style={{ justifyContent: 'flex-start', }}>
                            <SView width={46} height={48} row center   >
                                <SView width={46} height={48} style={{ backgroundColor: '#E9EAEE', borderRadius: 50, }} center   >
                                    <SIcon name={'Marker'} height={24} width={40} fill={'#484848'} />
                                </SView>
                            </SView>
                            <SView width={10} height={48} row center />
                            <SView flex row height={40}   >
                                <SText fontSize={14} font={"Roboto"} color={STheme.color.text} bold>"Burger King"</SText>
                                <SHr height={3} />
                                <SText fontSize={14} font={"Roboto"} color={STheme.color.gray} >Restaurant</SText>
                            </SView>
                        </SView>
                        <SView width={100} row center border={'transparent'}   >
                            <SHr height={15} />
                            <SView width={90} height={20} row center border={STheme.color.card} style={{ backgroundColor: '#E9EAEE', borderRadius: 50, }} >
                                <SText fontSize={12} font={"Roboto"} > Contactar</SText>
                            </SView>
                        </SView>
                    </SView>
                    <SHr height={15} />
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Test);