import React from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SImage, SPage, SText, STheme, SView ,SNavigation} from 'servisofts-component';
import FloatButtomBack from '../../../../../Components/FloatButtomBack';
import ImgSaveGallery from '../../../../../Components/ImgSaveGallery';
import ImgShared from '../../../../../Components/ImgShared';
import PButtom from '../../../../../Components/PButtom';
import SSocket from "servisofts-socket";
 class MensajeSolicitud extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.key_pedido = SNavigation.getParam('key_pedido');
        // this.key_qr = SNavigation.getParam('key_qr',"");
  
    }

    render() {
        return (
            // <SPage hidden disableScroll center>
            <SPage hidden center>
                <SHr height={40} />

                <SView flex center col={"xs-11 sm-10 md-8 lg-6 xl-4"}  >
                    <SView col={"xs-12"} center row flex style={{ backgroundColor: STheme.color.primary, borderRadius: 12 }}>
                        <SHr height={50} />
                        <SView col={"xs-12"} row center   >
                            <SView col={"xs-11"} border={'transparent'}  >
                                <SText fontSize={24} color='white' bold center> El restaurante está confirmando tu pedido</SText>
                            </SView>
                        </SView>
                        <SHr height={60} />
                        <SView col={"xs-12"} center  >
                            <SView center col={"xs-12"} height={250}   >
                                {/* <SImage src={`data:image/png;base64,${this.key_qr}`} /> */}
                            </SView>
                        </SView>
                        <SHr height={50} />
                        <SView col={"xs-12"} height={100} row center  >
                            <SView col={"xs-2"} height center>
                            </SView>
                            <SView flex center height={60} >
                                <SView height={60} colSquare center style={{ backgroundColor: 'white', borderRadius: 8, borderColor: STheme.color.primary, borderWidth: 2, padding: 8 }} onPress={() => { 
                                    // ImgSaveGallery.guardar(this.key_qr);
                                     }}>
                                    <SIcon name={"ImgSave"} />
                                </SView>
                            </SView>
                            <SView flex center height={60} >
                                <SView height={60} colSquare center style={{ backgroundColor: 'white', borderRadius: 8, borderColor: STheme.color.primary, borderWidth: 2, padding: 8 }} onPress={() => { 
                                    // ImgShared.compartir(this.key_qr);
                                     }}>
                                    <SIcon name={"ImgShare"} />
                                </SView>
                            </SView>
                            <SView col={"xs-2"} height center>
                            </SView>
                        </SView>
                        <SHr height={30} />

                        <PButtom fontSize={20} onPress={() => {
                         // SNavigation.navigate(Parent.component + "/confirmar", { key: this.key_restaurante, cantidad: this.state.cantidad, envio: this.state.envio, })
                    }}>REALIZAR PEDIDO</PButtom>
                        <SHr height={30} />


                        <PButtom fontSize={20} onPress={() => {
                            SSocket.sendPromise(
                                {
                                    component:"pedido",
                                    type:"get_payment_order",
                                    key_pedido:this.key_pedido,
                                }
                            ).then((resp) => {
                                console.log(resp);
                            }).catch((err) => {
                            });
                    }}>get payment order</PButtom>
                        <SHr height={30} />


                        <SView col={"xs-12"} row center   >
                            <SView col={"xs-11"} border={'transparent'}  >
                                <SText fontSize={18} color='white' bold center>¡Recuerda usar tapaboca para recoger tu pedido!</SText>
                                <SHr height={20} />
                            </SView>
                        </SView>
                        <SHr height={40} />

                    </SView>
                </SView>
                <SHr height={20} />
            </SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(MensajeSolicitud);