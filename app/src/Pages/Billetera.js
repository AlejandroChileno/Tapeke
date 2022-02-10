import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SNavigation, SPage, SText, SView, STheme, SLoad, SButtom, SIcon, SWebView } from 'servisofts-component';
import { WebView } from 'react-native';
class Kolping extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    getDetalleBilletera(fecha, descripcion, tipoIcon, monto) {
        return <SView col={"xs-12"} center >
            <SView onPress={() => { SNavigation.navigate("ficha/horarios"); }}
                col={"xs-12"} row backgroundColor={STheme.color.card} height={52} center style={{ borderRadius: 8 }}>



                <SView col={"xs-8"} >
                    <SText font={"Manrope"} color={STheme.color.lightGray} fontSize={10} style={{ paddingLeft: 10 }} >{fecha}</SText>
                    <SText font={"Manrope"} color={STheme.color.text} fontSize={12} style={{ paddingLeft: 10 }} >{descripcion}</SText>
                </SView>

                <SView col={"xs-4"} style={{ textAlign: "right" }} row center>
                    <SIcon name={tipoIcon} width={20} height={15} fill={"#8DBF3B"} />
                    <SView col={"xs-1"} />
                    <SText font={"Manrope"} color={STheme.color.text} fontSize={10}>{monto}</SText>
                </SView>
            </SView>
            <SHr height={15} />
        </SView>

    }

    render() {
        return (
            <SPage title={'Billetera'}>
                <SView col={"xs-12"} center>

                    <SHr height={15} />

                    <SView col={"xs-12"}>
                        <SView col={"xs-12"} row center>
                            <SIcon name={'Chip'} width={190} height={181} />

                        </SView>
                    </SView>

                    <SHr height={18} />
                    <SView col={"xs-12"} backgroundColor={'red'}>
                        <SButtom primary >CARGAR CRÉDITO</SButtom>
                    </SView>

                    <SHr height={18} />


                    <SView col={"xs-11"}>

                        {this.getDetalleBilletera('Enero, 06 - 16:45', 'Recarga de crédito', 'Ingreso', 'Bs. 100.00')}
                        {this.getDetalleBilletera('Enero, 06 - 16:45', 'Compra de producto', 'Egreso', 'Bs. -80.00')}
                        {this.getDetalleBilletera('Enero, 06 - 16:45', 'Recarga de crédito', 'Ingreso', 'Bs. 100.00')}
                        {this.getDetalleBilletera('Enero, 06 - 16:45', 'Recarga de crédito', 'Ingreso', 'Bs. 100.00')}
                        {this.getDetalleBilletera('Enero, 06 - 16:45', 'Compra de producto', 'Egreso', 'Bs. -80.00')}
                        {this.getDetalleBilletera('Enero, 06 - 16:45', 'Recarga de crédito', 'Ingreso', 'Bs. 100.00')}

                    </SView>
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Kolping);