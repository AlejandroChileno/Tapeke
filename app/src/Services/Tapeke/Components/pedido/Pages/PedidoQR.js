import React from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SImage, SLoad, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import Parent from '../index';


class PedidoQR extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
        this.key_pedido = SNavigation.getParam('key_pedido');
    }



    render() {
        this.auxPedido = Parent.Actions.getDetalle(this.key_pedido, this.props)
        if (!this.auxPedido) return <SLoad />


        return (
            // <SPage hidden disableScroll center>
            <SPage center  >

                <SView flex center col={"xs-11 sm-10 md-8 lg-6 xl-4"}  >
                    <SView col={"xs-12"} center row flex border={"transparent"} >

                        <SHr height={40} />

                        <SView col={"xs-12"} border={'transparent'}>
                            <SText fontSize={24} bold center>¡Tu pedido está listo!</SText>
                            <SHr height={20} />
                            <SText fontSize={16} center>El restaurante verificará tu pedido escaneando el código QR.</SText>
                        </SView>

                        <SHr height={40} />

                        <SView col={"xs-12"} height={350} border={'transparent'}  >
                            <SImage src={require("./qr.png")} />
                        </SView>

                        <SText fontSize={18} font={"Roboto"} color={STheme.color.primary} bold center >Hora de entrega: {this.auxPedido?.horario?.hora_inicio} - {this.auxPedido?.horario?.hora_fin}</SText>

                        <SHr height={70} />



                        <SView col={"xs-11"} row height={60} border={'transparent'} style={{ bottom: 40 }} >
                            <SView width={60} border={'transparent'} center >
                                <SIcon name="PedDelivery" fill={STheme.color.primary} />
                            </SView>

                            <SView width={5} />

                            <SView flex border={'transparent'} style={{ justifyContent: 'flex-start', alignContent: 'center', }} row  >
                                <SText col={"xs-12"} fontSize={13.5} font={"Roboto"} color={STheme.color.text} bold>Juan Manuel Perez Perez</SText>
                                <SText col={"xs-12"} fontSize={12} font={"Roboto"} color={STheme.color.gray} >Moto</SText>
                            </SView>

                            <SView width={40} height center border={'transparent'}   >
                                <SIcon name={'IChat'} fill={"#FABB2D"} />
                                <SHr height={5} />
                            </SView>
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
export default connect(initStates)(PedidoQR);