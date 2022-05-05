import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SImage, SNavigation, SText, STheme, SView, SLoad } from 'servisofts-component';
import ParenTarjeta from '../../../../Tapeke/Components/pago_tarjeta';


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

        if (key == "Credito") {
            var dataTarjeta = ParenTarjeta.Actions.getAll(this.props);
            if (!dataTarjeta) return;
        }
        return <>
            <SHr height={15} />
            <SView col={"xs-12"} row center onPress={() => {
                // start document
                var tarjetaNumber = "";
                if (key == "Credito") {
                    //Consultando si existe tarjetas


                    const key_usuario = this.props.state.usuarioReducer.usuarioLog.key;
                    var arr = Object.values(dataTarjeta).filter(x => x.key_usuario == key_usuario && x.estado == 1);
                    var pagina = "";

                    if (arr.length > 0) {
                        // SNavigation.navigate(Parent.component +"/misTarjetas", { callback: this.callback});
                        // return <SText>No hay tarjetas registradas</SText>
                        pagina = "pago_tarjeta/misTarjetas";
                    } else {
                        pagina = "pago_tarjeta";
                    }

                    SNavigation.navigate(pagina, {
                        callback: (tarjeta) => {
                            this.state.KeytipoPago = key;
                            this.state.tipoPago = descripcion;
                            if (this.props.callback) this.props.callback({ tipopago: this.state.KeytipoPago, objTarjeta: null })
                            this.setState({ ...this.state });
                            console.log(JSON.stringify(tarjeta) + " AAAAA " + tarjeta.objTarjeta.numero_tarjeta);
                            var digitos = tarjeta.objTarjeta.numero_tarjeta.slice(-4);
                            //alert(digitos);
                            this.tarjetaNumber = "*** *** *** " + digitos;
                        }
                    });
                    return;
                }
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
                    {key == "Credito" ? <SText fontSize={16} font={"Roboto"} style={{ fontWeight: "bold" }}> {this.tarjetaNumber} </SText> : null}
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
                        {this.item("Billetera", "Billetera Tapeke", require('../../../../../Assets/img/tapeke.png'))}
                        {this.item("Credito", "Tarjeta de Debito / Crédito", require('../../../../../Assets/img/Ptarjeta.png'))}
                        {/* {this.item("Fassil", "Banco FASSIL", require('../../../../../Assets/img/Pfassil.png'))} */}
                        {this.item("QR", "Transferencia QR", require('../../../../../Assets/img/Ptransferencia.png'))}
                        {this.item("TigoMoney", "Tigo Money", require('../../../../../Assets/img/Ptigo.png'))}
                    </SView>
                    <SHr height={15} />
                </SView>
            </SView>
            {/* <SView col={"xs-10 sm-5 lg-3"} border={'transparent'} style={{ position: 'absolute' }}  >
                <SText>  {this.state.KeytipoPago} </SText>
                <SText>  {this.state.tipoPago} </SText>
            </SView> */}
        </>
    }




    render() {
        // var data = Parent.Actions.getAll(this.props);
        // if (!data) return <SLoad />;
        // console.log(data);
        // switch (this.state.KeytipoPago) {
        //     case "Credito":


        //     // case "Fassil":
        //     //     return SNavigation.push(this.props.navigation, 'pago_fassil', { callback: this.props.callback });
        //     // case "QR":
        //     //     return SNavigation.push(this.props.navigation, 'pago_qr', { callback: this.props.callback });
        //     // case "TigoMoney":
        //     //     return SNavigation.push(this.props.navigation, 'pago_tigo', { callback: this.props.callback });
        //     // default:
        //     //     return SNavigation.push(this.props.navigation, 'pago_transferencia', { callback: this.props.callback });


        // }
        return (
            this.getTipoPago()
        );
    }
}

const initStates = (state) => {
    return { state }
};
export default connect(initStates)(TipoPago);