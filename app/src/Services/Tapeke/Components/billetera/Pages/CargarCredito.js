import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SNavigation, SPage, SText, SView, STheme, SLoad, SButtom, SIcon, SWebView, SImage, SInput } from 'servisofts-component';
import { WebView } from 'react-native';
import PButtom from '../../../../../Components/PButtom';
import TipoPago from '../Components/TipoPago';

// backgroundColor={this.state.envio != 0 ? STheme.color.primary : "transparent"}
class CargarCredito extends Component {
    constructor(props) {
        super(props);
        this.state = { cantidad: 0, };

        // this.monto = SNavigation.getParam('monto');

    }

    getHeaderCredito() {
        return <>
            <SHr height={30} />
            <SView col={"xs-11 sm-8 lg-4"} border={'transparent'} center backgroundColor={'red'}>
                <SView width={300} border={'transparent'}>
                    <SText fontSize={24} color={'black'} font={"Roboto"} bold center>¡Recarga creditos a tu billetera!</SText>
                </SView>
                <SHr height={25} />
                <SView col={"xs-12 sm-8 lg-4"} border={'transparent'}>
                    <SText fontSize={16} color={'#979797'} font={"Roboto"} center>Compra creditos para facilitar la compra de tu packs.</SText>
                </SView>


                <SHr height={25} />

                <SInput type={'money'} defaultValue={this.state.cantidad} />

                <SText fontSize={70} color={'#979797'} font={"Roboto"} center>Bs {this.state.cantidad} </SText>
                <SHr height={20} />

            </SView>
        </>
    }




    getBoton() {
        return <>
            <SView col={"xs-10"} row center backgroundColor={'red'} >
                <SHr height={30} />
                <PButtom fontSize={20} onPress={() => { alert('alvaro'); }}>CARGAR CRÉDITO</PButtom>
                <SHr height={30} />
            </SView>
        </>
    }

    render() {
        return (
            <>
                <SPage title={'Cargar crédito'}>
                    <SView col={"xs-12"} row center >
                        {this.getHeaderCredito()}
                        <TipoPago />
                        {this.getBoton()}
                    </SView>
                </SPage>
            </>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(CargarCredito);