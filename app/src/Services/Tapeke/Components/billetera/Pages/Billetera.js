import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SNavigation, SPage, SText, SView, STheme, SLoad, SButtom, SIcon, SWebView } from 'servisofts-component';
import { WebView } from 'react-native';
import PButtom from '../../../../../Components/PButtom';


class Billetera extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getHeaderBilletera(montoTotal, key_usuario) {
        return <><SHr height={10} />
            <SView col={"xs-12"} height={201} center>
                <SIcon name={'Chip'} width={290} height={181} style={{ position: "absolute" }} />
                <SView width={250} height={140}>
                    <SView style={{ top: 20, left: 0, position: "absolute" }}>
                        <SText fontSize={14} color={'#ffffffbb'} font={"Roboto"} >Monto actual</SText>
                        <SText fontSize={28} color={'#ffffffbb'} font={"Roboto"} >Bs. {montoTotal}</SText>
                    </SView>
                    <SView style={{ bottom: 0, right: 0, position: "absolute" }}>
                        <SText fontSize={13} color={'#ffffffbb'} font={"Roboto"} >{key_usuario}</SText>
                    </SView>
                </SView>
            </SView>
        </>
    }

    getDetalleBilletera(fecha, descripcion, tipoIcon, monto) {
        return <><SHr height={10} />
            <SView col={"xs-12"} center >
                <SView col={"xs-12"} row backgroundColor={STheme.color.card} height={52} center style={{ borderRadius: 8 }}>
                    <SView col={"xs-8"} >
                        <SText font={"Manrope"} color={STheme.color.lightGray} fontSize={10} style={{ paddingLeft: 10 }} >{fecha}</SText>
                        <SText font={"Manrope"} color={STheme.color.text} fontSize={12} style={{ paddingLeft: 10 }} >{descripcion}</SText>
                    </SView>
                    <SView col={"xs-4"} style={{ textAlign: "right" }} row center><SIcon name={tipoIcon} width={20} height={15} fill={"#8DBF3B"} /><SView col={"xs-1"} />
                        <SText font={"Manrope"} color={STheme.color.text} fontSize={10}>{monto}</SText>
                    </SView>
                </SView>
            </SView>
        </>
    }

    render() {
        // var data = Parent.Actions.getAll(this.props);
        // var usuarios = usuario.Actions.getAll(this.props);
        // if (!data) return <SLoad />;
        // if (!usuarios) return <SLoad />;
        return (
            <>
                <SPage title={'Billetera'}>
                    <SView col={"xs-12"} center>
                        {this.getHeaderBilletera('120,00', '5294 2436 4780 2468')}
                        <SHr height={18} color={STheme.color.card} />

                        <SView col={"xs-8"} row center>
                            <SHr height={10} />
                            <PButtom fontSize={20} onPress={() => { alert('alvaro'); }}>CARGAR CRÉDITO</PButtom>
                            <SHr height={10} />
                        </SView>
                        <SHr height={18} color={STheme.color.card} />
                        <SView col={"xs-11 md-8 lg-6 xl-4"}>
                            {this.getDetalleBilletera('Enero, 06 - 16:45', 'Recarga de crédito', 'Ingreso', 'Bs. 100.00')}
                            {this.getDetalleBilletera('Enero, 06 - 16:45', 'Compra de producto', 'Egreso', 'Bs. -80.00')}
                            {this.getDetalleBilletera('Enero, 06 - 16:45', 'Recarga de crédito', 'Ingreso', 'Bs. 100.00')}
                            {this.getDetalleBilletera('Enero, 06 - 16:45', 'Recarga de crédito', 'Ingreso', 'Bs. 100.00')}
                            {this.getDetalleBilletera('Enero, 06 - 16:45', 'Compra de producto', 'Egreso', 'Bs. -80.00')}
                            {this.getDetalleBilletera('Enero, 06 - 16:45', 'Recarga de crédito', 'Ingreso', 'Bs. 100.00')}
                            <SHr height={50} />
                        </SView>

                        <SView col={"xs-8"} row center style={{position:'absolute'}} border={'red'}>
                            <SHr height={10} />
                            <PButtom fontSize={20} onPress={() => { alert('alvaro'); }}>CARGAR CRÉDITO</PButtom>
                            <SHr height={10} />
                        </SView>


                    </SView>
                </SPage>
            </>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Billetera);