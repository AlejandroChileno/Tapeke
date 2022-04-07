import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SImage, SNavigation, SText, STheme, SView, SLoad } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import restaurante from '../../restaurante';


class TipoPago extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tipoPago: "",
            foco: false,
        };
    }


    item(descripcion, imagen) {
        return <>
            <SHr height={15} />
            <SView col={"xs-12"} row center onPress={() => { this.setState({ tipoPago: descripcion }); }}>
                <SView col={"xs-2"} center border={'red'} >
                    <SView center style={{ width: 40, height: 40, borderRadius: 8, borderWidth: 1, borderColor: STheme.color.lightGray }}>
                        <SImage src={imagen} style={{ borderRadius: 8, width: 30 }} />
                    </SView>
                </SView>
                <SView col={"xs-8"} >
                    <SText fontSize={16} font={"Roboto"} style={{ fontWeight: "bold" }}>{descripcion} </SText>
                </SView>
                <SView col={"xs-2"} center border={'red'}> 
                    <SView width={18} height={18} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 25 }}
                    // backgroundColor={foco=true?STheme.color.primary:"transparent"}
                    ></SView>
                </SView>
            </SView>
        </>
    }




    getTipoPago() {
        return <>
            <SView col={"xs-12"} border={'transparent'} center >
                <SView col={"xs-10 sm-5 lg-3"} row center style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 6 }}>
                    <SView col={"xs-11"} row >
                        {this.item("Efectivo", require('../../../../../Assets/img/efectivo.png'))}
                        {this.item("Billetera Tapeke", require('../../../../../Assets/img/tapeke.png'))}
                        {this.item("Tarjeta de Debito / Crédito", require('../../../../../Assets/img/Ptarjeta.png'))}
                        {this.item("Banco FASSIL", require('../../../../../Assets/img/Pfassil.png'))}
                        {this.item("Transferencia QR", require('../../../../../Assets/img/Ptransferencia.png'))}
                        {this.item("Tigo Money", require('../../../../../Assets/img/Ptigo.png'))}
                    </SView>
                    <SHr height={15} />
                </SView>
            </SView>
            <SView col={"xs-10 sm-5 lg-3"} border={'transparent'} style={{ position: 'absolute' }}  >
                <SText>  {this.state.tipoPago} </SText>
            </SView>
        </>
    }




    render() {
        return (
            this.getTipoPago()
        );
    }
}

const initStates = (state) => {
    return { state }
};
export default connect(initStates)(TipoPago);