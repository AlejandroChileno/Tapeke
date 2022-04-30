import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SImage, SNavigation, SText, STheme, SView, SLoad } from 'servisofts-component';
// import Parent from '../index';

class TipoPago extends Component {
    constructor(props) {
        super(props);
        this.state = {
            KeytipoPago: null,
            tipoPago: null,
        };
    }


    componentDidMount() {
        this.props.callback({ tipopago: this.state.KeytipoPago })
    }



    // INFO ESTO TRAIA DE LA BASE DE DATOS
    // getAux(data) {

    //     switch (data) {
    //         case "Billetera":
    //             return require('../../../../../Assets/img/tapeke.png');
    //         case "Crédito":
    //             return require('../../../../../Assets/img/Ptarjeta.png');
    //         case "fassil":
    //             return require('../../../../../Assets/img/Pfassil.png');
    //         case "QR":
    //             return require('../../../../../Assets/img/Ptarjeta.png');
    //         case "TigoMoney":
    //             return require('../../../../../Assets/img/Ptigo.png');
    //         default:
    //             return require('../../../../../Assets/img/Ptransferencia.png');
    //     }
    // }

    // INFO ESTO TRAIA DE LA BASE DE DATOS
    // getIcono() {
    //     var data = Parent.Actions.getAll(this.props);
    //     if (!data) return <SLoad />;
    //     console.log(data);
    //     return data.map((obj) => {
    //         return <SView col={"xs-8"} >
    //             <SText fontSize={16} font={"Roboto"} style={{ fontWeight: "bold" }}>{obj}   </SText>
    //             <SView center style={{ width: 40, height: 40, borderRadius: 8, borderWidth: 1, borderColor: STheme.color.lightGray }}>
    //                 <SImage src={this.getAux(obj)} style={{ borderRadius: 8, width: 30 }} />
    //             </SView>
    //         </SView>
    //     })
    // }

    item(key, descripcion, imagen) {

        return <>
            <SHr height={15} />
            <SView col={"xs-12"} row center onPress={() => {
                // start document
                this.state.KeytipoPago = key;
                this.state.tipoPago = descripcion;
                if (this.props.callback) this.props.callback({ tipopago: this.state.KeytipoPago })
                this.setState({ ...this.state });
                // end document
            }}>
                <SView col={"xs-2"} center>
                    <SView center style={{ width: 40, height: 40, borderRadius: 8, borderWidth: 1, borderColor: STheme.color.lightGray }}>
                        <SImage src={imagen} style={{ borderRadius: 8, width: 30 }} />
                    </SView>
                </SView>
                <SView col={"xs-8"} >
                    <SText fontSize={16} font={"Roboto"} style={{ fontWeight: "bold" }}>{descripcion} </SText>
                </SView>
                <SView col={"xs-2"} center>
                    <SView width={18} height={18} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 25 }}
                        backgroundColor={this.state.tipoPago == descripcion ? STheme.color.primary : 'transparent'}
                    ></SView>
                </SView>
            </SView>
        </>
    }

    getTipoPago() {

        return <>
            <SView col={"xs-12 "} center >
                <SView col={"xs-12"} row center style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 6 }}>
                    <SView col={"xs-11"} row >

                        <SHr height={15} />
                         {/* {this.item("p0002", "Billetera Tapeke", require('../../../../../Assets/img/tapeke.png'))} */}
                        {this.item("Credito", "Tarjeta de Debito / Crédito", require('../../../../../Assets/img/Ptarjeta.png'))}
                        {this.item("Fassil", "Banco FASSIL", require('../../../../../Assets/img/Pfassil.png'))}
                        {this.item("QR", "Transferencia QR", require('../../../../../Assets/img/Ptransferencia.png'))}
                        {this.item("TigoMoney", "Tigo Money", require('../../../../../Assets/img/Ptigo.png'))}
                    </SView>
                    <SHr height={15} />
                </SView>
            </SView>
            <SView col={"xs-10 sm-5 lg-3"} border={'transparent'} style={{ position: 'absolute' }}  >
                <SText>  {this.state.KeytipoPago} </SText>
                <SText>  {this.state.tipoPago} </SText>
            </SView>
        </>
    }




    render() {
        // var data = Parent.Actions.getAll(this.props);
        // if (!data) return <SLoad />;
        // console.log(data);
        return (
            this.getTipoPago()
        );
    }
}

const initStates = (state) => {
    return { state }
};
export default connect(initStates)(TipoPago);