import React from 'react';
import { connect } from 'react-redux';
import { SHr, SPage, SText, SView, STheme, SIcon, SNavigation, SImage } from 'servisofts-component';
import ImgSaveGallery from '../../../../../Components/ImgSaveGallery';
import ImgShared from '../../../../../Components/ImgShared';
import PButtom from '../../../../../Components/PButtom2';
import TipoPago_QR from '../../../../Multipagos/Components/payment_type/Components/TipoPago_QR';
import TipoPago_TigoMoney from '../../../../Multipagos/Components/payment_type/Components/TipoPago_TigoMoney';



class MensajeSolicitud extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        // this.key_tipoPago = SNavigation.getParam('key_tipoPago');
        // this.key_qr = SNavigation.getParam('key_qr');
        this.key_tipoPago = "QR";
        this.key_qr = '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';
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
            <SPage hidden center>
                <SView col={"xs-12"} row backgroundColor={STheme.color.card} center >
                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} height={650} center row style={{ backgroundColor: STheme.color.primary, borderRadius: 12 }}>
                        <SView col={"xs-12"} row center   >
                            <SView col={"xs-7"} border={'transparent'}  >
                                <SText fontSize={24} color='white' bold center> El restaurante está confirmando tu pedido</SText>
                            </SView>
                        </SView>

                        <SView col={"xs-11"} center  >
                            <SHr height={20} />
                            <SView center col={"xs-12"} height={200}   >
                                <SImage src={`data:image/png;base64,${this.key_qr}`} />
                            </SView>
                            {/* {this.mostrarContenido()} */}
                            <SHr height={20} />
                        </SView>

                        <SView col={"xs-12"} row center   >
                            <SView col={"xs-10"} border={'transparent'}  >
                                <SText fontSize={18} color='white' bold center>¡Recuerda usar tapaboca para recoger tu pedido!</SText>
                            </SView>
                            <SHr height={20} />
                            <SView col={"xs-12"} border={'transparent'} center>
                                {/* <PButtom props={{ type: "outline" }} onPress={() => { SNavigation.navigate("/") }} >Ir a Inicio</PButtom> */}
                                <PButtom props={{ type: "outline" }} onPress={() => { ImgShared.compartir(this.key_qr); }} >compartir</PButtom>

                                <SHr height={20} />
                                <PButtom props={{ type: "outline" }} onPress={() => { ImgSaveGallery.guardar(this.key_qr); }} >galeria</PButtom>
                                <SHr height={20} />

                            </SView>

                            <SHr height={20} />



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
export default connect(initStates)(MensajeSolicitud);