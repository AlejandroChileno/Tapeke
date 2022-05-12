import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SNavigation, SPage, SText, SView, STheme, SLoad, SButtom, SIcon, SWebView, SImage, SInput } from 'servisofts-component';
import { WebView } from 'react-native';
import PButtom from '../../../../../Components/PButtom';
// import TipoPago from '../Components/TipoPago';
import Parent from '..'
import billetera from '..';
import TipoPago from '../../../../Multipagos/Components/payment_type/Components/TipoPago';
// import TipoPago from '../../../../Multipagos/Components/payment_type/Components/TipoPago';

// backgroundColor={this.state.envio != 0 ? STheme.color.primary : "transparent"}
class CargarCredito extends Component {
    constructor(props) {
        super(props);
        this.state = { cantidad: 0, tipoPagoSeleccionado: null };

        // this.monto = SNavigation.getParam('monto');

    }



    getHeaderCredito() {
        return <>
            <SHr height={30} />
            <SView col={"xs-10 sm-5 lg-3.5"} border={'transparent'} center  >
                <SView col={"xs-12"} border={'transparent'}>
                    <SText fontSize={24} color={'black'} font={"Roboto"} bold center>¡Recarga crédito a tu billetera!</SText>
                </SView>
                <SHr height={25} />
                <SView col={"xs-12"} border={'transparent'}>
                    <SText fontSize={16} color={'#979797'} font={"Roboto"} center>Compra crédito para facilitar la compra de tus packs.</SText>
                </SView>


                <SHr height={25} />

                <SInput type={'money'}
                    placeholder={"0"}
                    placeholderTextColor={STheme.color.gray}
                    onChangeText={(text) => { this.setState({ cantidad: text }) }}
                />
                {/* <SText fontSize={40} color={'#979797'} font={"Roboto"} center>{this.state.tipoPagoSeleccionado} </SText> */}
                <SHr height={20} />

            </SView>
        </>
    }




    getBoton() {
        return <>
            <SView col={"xs-10 sm-5 lg-3"} row center   >
                <SHr height={30} />
                <PButtom fontSize={20} onPress={() => {
                    if (this.state.cantidad <= 0)
                        return alert("cantidad esta vacio");
                    var dataOk = {}
                    dataOk = {
                        monto: this.state.cantidad,
                        tipo_pago: this.state.tipoPagoSeleccionado,
                        key_cliente: this.props.state.usuarioReducer.usuarioLog.key,
                    }
                    // Parent.Actions.registro(dataOk, this.props);
                    // TODO: registrar el pago
                }}>CARGAR CRÉDITO</PButtom>
                <SHr height={30} />
            </SView>
        </>
    }

    render() {
        return (
            <>
                <SPage title={'Cargar crédito'}>
                    <SView col={"xs-12"} row center border={'red'} >
                        {this.getHeaderCredito()}
                        <SHr height={18} />

                        <SView col={"xs-11 md-5 lg-3"} center style={{ backgroundColor: STheme.color.white }}>
                            <TipoPago callback={(resp) => {
                                this.setState({ tipoPagoSeleccionado: resp.tipopago });
                            }} />
                        </SView>
                        <SHr height={18} />

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