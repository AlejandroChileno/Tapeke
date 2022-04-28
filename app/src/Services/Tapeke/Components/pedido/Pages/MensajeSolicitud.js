import React from 'react';
import { connect } from 'react-redux';
import { SHr, SPage, SText, SView, STheme, SIcon, SNavigation } from 'servisofts-component';
import PButtom from '../../../../../Components/PButtom2';
import TipoPago_QR from '../../../../Multipagos/Components/payment_type/Components/TipoPago_QR';
import TipoPago_TigoMoney from '../../../../Multipagos/Components/payment_type/Components/TipoPago_TigoMoney';

class MensajeSolicitud extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.key_tipoPago = SNavigation.getParam('key_tipoPago');
        // this.key_tipoPago = "QR";
    }

    mostrarContenido() {

        switch (this.key_tipoPago) {
            case "QR": return <TipoPago_QR />;
            case "TigoMoney": return <TipoPago_TigoMoney />;
            default: return <TipoPago_QR />;
        }

    }


    render() {


        return (
            <SPage center>
                <SView col={"xs-12"} row backgroundColor={STheme.color.card} center >
                    <SHr height={50} />
                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} height={650} center row style={{ backgroundColor: STheme.color.primary, borderRadius: 12 }}>
                        <SView col={"xs-12"} row center   >
                            <SView col={"xs-7"} border={'transparent'}  >
                                <SText fontSize={24} color='white' bold center> El restaurante está confirmando tu pedido</SText>
                            </SView>
                        </SView>

                        <SView col={"xs-11"} center  >
                            <SHr height={20} />
                            {this.mostrarContenido()}
                            <SHr height={20} />
                        </SView>

                        <SView col={"xs-12"} row center   >
                            <SView col={"xs-10"} border={'transparent'}  >
                                <SText fontSize={18} color='white' bold center>¡Recuerda usar tapaboca para recoger tu pedido!</SText>
                            </SView>
                            <SHr height={20} />
                            <SView col={"xs-12"} border={'transparent'} center>
                                <PButtom props={{ type: "outline" }} onPress={() => { SNavigation.navigate("/") }} >Ir a Inicio</PButtom>
                            </SView>
                        </SView>


                    </SView>
                    <SHr height={50} />
                </SView>
            </SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(MensajeSolicitud);