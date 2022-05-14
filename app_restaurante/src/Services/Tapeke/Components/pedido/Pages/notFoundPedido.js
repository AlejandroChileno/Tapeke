import React from 'react';
import { connect } from 'react-redux';
import { SButtom, SGradient, SHr, SIcon, SImage, SLoad, SMath, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import usuario from '../../../../Usuario/Components/usuario';
import pedido from '../index';
import Parent from '../index';
import SSocket from 'servisofts-socket';
import PButtom from '../../../../../Components/PButtom';

class Detalle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <SPage center>

                <SView col={"xs-12"} row backgroundColor={STheme.color.card} center>
                    <SHr height={18} />
                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center style={{ backgroundColor: STheme.color.white }}>
                        <SView col={"xs-11"} row center>
                            <SView col={"xs-12"} row center>
                                <SHr height={15} />

                                <SIcon name='NotFoundPedido' fill='red'></SIcon>
                                <SHr height={15} />


                                <SText fontSize={24} font={"Roboto"} style={{ fontWeight: "bold" }} color={STheme.color.darkGray}>Pedido no encontrado</SText>
                                <SText fontSize={14} font={"Roboto"} style={{ justifyContent: 'center' }} color={STheme.color.darkGray}>Su pedido no pertenece a este restaurante
                                    intente escanear nuevamente.</SText>
                                <SHr height={15} />

                                <PButtom fontSize={20} >Intentar otra vez</PButtom>

                            </SView>

                        </SView>
                        <SHr height={18} />
                    </SView>
                    <SHr height={18} />
                </SView>
            </SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Detalle);