import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SImage, SNavigation, SText, STheme, SView, SLoad } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import restaurante from '../../restaurante';


class TipoPago extends Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.state = {

            pagado: 0,

        };
    }


    item(key, imagen, descripcion) {
        return <>
            <SHr height={15} />
            <SView col={"xs-12"} row center onPress={() => { this.setState({ pagado: 600 }); }}>
                <SView col={"xs-2"} >
                    <SView center style={{
                        width: 40,
                        height: 40, borderRadius: 8,
                        borderWidth: 1, borderColor: STheme.color.lightGray
                    }}>
                        <SImage src={imagen} style={{
                            borderRadius: 8,
                            width: 30
                        }} />
                    </SView>
                </SView>
                <SView col={"xs-8"} >
                    <SText fontSize={16} font={"Roboto"} style={{ fontWeight: "bold" }}>{descripcion} </SText>
                </SView>
                <SView col={"xs-2"} center>
                    <SView width={18} height={18} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 25 }}></SView>
                </SView>
            </SView>
        </>
    }




    getTipoPago() {


        return <>
            <SHr height={15} />
            <SView col={"xs-11 sm-6 lg-4"} border={'transparent'} row>
                <SView col={"xs-12"} row style={{ justifyContent: 'flex-start', }}>
                    <SText font={"Roboto"} style={{ color: STheme.color.primary, fontSize: 18 }} >Tipo de pago</SText>
                </SView>
                {/* <SView col={"xs-2"} row style={{ justifyContent: 'flex-end', }}>
                    <SIcon fill={STheme.color.primary} name={"Add"} width={20} height={20} />
                </SView> */}
            </SView>
            <SHr height={15} />
            <SView col={"xs-11 sm-6 lg-4"} row center style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 6 }}>
                <SView col={"xs-11"} row >
                    <SView col={"xs-12"} row center>
                        <SHr height={15} />


                        {this.item("0001", require('../../../../../Assets/img/efectivo.png'), "tigo")}

                    </SView>
                    <SHr height={15} />

                    <SView col={"xs-12"} row center onPress={() => { this.setState({ pagado: 100 }); }}>
                        <SView col={"xs-2"} >
                            <SView center style={{
                                width: 40,
                                height: 40, borderRadius: 8,
                                borderWidth: 1, borderColor: STheme.color.lightGray
                            }}>
                                <SImage src={require('../../../../../Assets/img/efectivo.png')} style={{ borderRadius: 8, width: 30 }}
                                />
                            </SView>
                        </SView>
                        <SView col={"xs-8"} >
                            <SText fontSize={16} font={"Roboto"} style={{ fontWeight: "bold" }}>Efectivo</SText>
                        </SView>
                        <SView col={"xs-2"} center>
                            <SView width={18} height={18} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 25, backgroundColor: STheme.color.primary }}></SView>
                        </SView>
                    </SView>

                    <SHr height={15} />

                    <SView col={"xs-12"} row center onPress={() => { this.setState({ pagado: 200 }); }}>

                        <SView col={"xs-2"} >
                            <SView center style={{
                                width: 40,
                                height: 40, borderRadius: 8,
                                borderWidth: 1, borderColor: STheme.color.lightGray
                            }}>
                                <SImage src={require('../../../../../Assets/img/tapeke.png')} style={{
                                    borderRadius: 8,
                                    width: 30
                                }} />
                            </SView>
                        </SView>
                        <SView col={"xs-8"} >
                            <SText fontSize={16} font={"Roboto"} style={{ fontWeight: "bold" }}>Billetera Tapeke</SText>
                        </SView>
                        <SView col={"xs-2"} center>
                            <SView width={18} height={18} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 25 }}></SView>
                        </SView>

                    </SView>

                    <SHr height={15} />

                    <SView col={"xs-12"} row center onPress={() => { this.setState({ pagado: 300 }); }}>
                        <SView col={"xs-2"} >
                            <SView center style={{
                                width: 40,
                                height: 40, borderRadius: 8,
                                borderWidth: 1, borderColor: STheme.color.lightGray
                            }}>
                                <SImage src={require('../../../../../Assets/img/Ptarjeta.png')} style={{
                                    borderRadius: 8,
                                    width: 30
                                }} />
                            </SView>
                        </SView>
                        <SView col={"xs-8"} >
                            <SText fontSize={16} font={"Roboto"} style={{ fontWeight: "bold" }}>Tarjeta de Debito / Crédito</SText>
                        </SView>
                        <SView col={"xs-2"} center>
                            <SView width={18} height={18} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 25 }}></SView>
                        </SView>
                    </SView>

                    <SHr height={15} />

                    <SView col={"xs-12"} row center onPress={() => { this.setState({ pagado: 400 }); }}>
                        <SView col={"xs-2"} >
                            <SView center style={{
                                width: 40,
                                height: 40, borderRadius: 8,
                                borderWidth: 1, borderColor: STheme.color.lightGray
                            }}>
                                <SImage src={require('../../../../../Assets/img/Pfassil.png')} style={{
                                    borderRadius: 8,
                                    width: 30
                                }} />
                            </SView>
                        </SView>
                        <SView col={"xs-8"} >
                            <SText fontSize={16} font={"Roboto"} style={{ fontWeight: "bold" }}>Banco FASSIL</SText>
                        </SView>
                        <SView col={"xs-2"} center>
                            <SView width={18} height={18} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 25 }}></SView>
                        </SView>
                    </SView>

                    <SHr height={15} />

                    <SView col={"xs-12"} row center onPress={() => { this.setState({ pagado: 500 }); }}>
                        <SView col={"xs-2"} >
                            <SView center style={{
                                width: 40,
                                height: 40, borderRadius: 8,
                                borderWidth: 1, borderColor: STheme.color.lightGray
                            }}>
                                <SImage src={require('../../../../../Assets/img/Ptransferencia.png')} style={{
                                    borderRadius: 8,
                                    width: 30
                                }} />
                            </SView>
                        </SView>
                        <SView col={"xs-8"} >
                            <SText fontSize={16} font={"Roboto"} style={{ fontWeight: "bold" }}>Transferencia QR</SText>
                        </SView>
                        <SView col={"xs-2"} center>
                            <SView width={18} height={18} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 25 }}></SView>
                        </SView>
                    </SView>

                    <SHr height={15} />

                    <SView col={"xs-12"} row center onPress={() => { this.setState({ pagado: 600 }); }}>
                        <SView col={"xs-2"} >
                            <SView center style={{
                                width: 40,
                                height: 40, borderRadius: 8,
                                borderWidth: 1, borderColor: STheme.color.lightGray
                            }}>
                                <SImage src={require('../../../../../Assets/img/Ptigo.png')} style={{
                                    borderRadius: 8,
                                    width: 30
                                }} />
                            </SView>
                        </SView>
                        <SView col={"xs-8"} >
                            <SText fontSize={16} font={"Roboto"} style={{ fontWeight: "bold" }}>Tigo Money</SText>
                        </SView>
                        <SView col={"xs-2"} center>
                            <SView width={18} height={18} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 25 }}></SView>
                        </SView>
                    </SView>

                </SView>
            </SView>
            <SHr height={20} />
            {/* </SView> */}
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