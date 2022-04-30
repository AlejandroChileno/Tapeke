import React from 'react';
import { connect } from 'react-redux';
import { SForm, SGradient, SHr, SImage, SLoad, SMath, SNavigation, SPage, SPopup, SText, STheme, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket';
// import PButtom from '../../../../../Components/PButtom';
import TipoPago from '../../../../Multipagos/Components/payment_type/Components/TipoPago';
import Parent from '../index';
import PButtom from '../../../../../Components/PButtom';

class Confirmar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { tipoPagoSeleccionado: null, };
		this.keyPedido = SNavigation.getParam('keyPedido');
	}

	datosCliente() {
		var usuario = this.props.state.usuarioReducer.usuarioLog;
		console.log("cliente ", usuario["Nombres"] + " " + usuario["Apellidos"]);
		console.log("Telefono ", usuario["Telefono"]);
		console.log("Correo ", usuario["Correo"]);
	}

	getViewDetalle() {
		this.auxPedido = Parent.Actions.getDetalle(this.keyPedido, this.props)
		if (!this.auxPedido) return <SLoad />
		return <>
			<SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center row style={{ backgroundColor: STheme.color.white }}>
				<SView col={"xs-11"} row center>
					<SView col={"xs-12"}>
						<SHr height={15} />
						<SText fontSize={18} font={"Roboto"} bold>Detalle pedido</SText>
						<SHr height={15} />
					</SView>
					<SView center col={"xs-2"} backgroundColor={"#9B060C"} height={85} style={{ borderRadius: 8, overflow: 'hidden', }}>
						<SImage src={require('../../../../../Assets/img/restPerfil.jpg')} style={{
							width: "100%",
							position: "relative",
							resizeMode: "cover"
						}} />
						<SGradient colors={["#00000045", "#00000045",]} />
					</SView>
					<SView col={"xs-10"} row >
						<SView col={"xs-1"}  >
						</SView>
						<SView col={"xs-11"} row >
							<SView col={"xs-12"} >
								<SText color={STheme.color.text} fontSize={14} bold  >{this.auxPedido.restaurante.nombre}</SText>
							</SView>
							<SHr height={15} />
							<SView col={"xs-6"} style={{ justifyContent: 'flex-start', }}>
								<SText fontSize={14} font={"Roboto"} color={STheme.color.primary} bold> Precio</SText>
								<SHr height={5} />
								<SText fontSize={20} font={"Roboto"} bold>Bs. {this.auxPedido.pack?.precio ?? 0} </SText>
							</SView>
							<SView col={"xs-6"} center row>
								<SView col={"xs-12"} center>
									<SText fontSize={14} font={"Roboto"} color={STheme.color.primary} >Cantidad</SText>
								</SView>
								<SHr height={5} />
								<SView col={"xs-12"} center   >
									<SView col={"xs-6"} center style={{ height: 40, backgroundColor: STheme.color.card, borderRadius: 6 }}>
										<SText fontSize={14} font={"Roboto"}   > {this.auxPedido.cantidad ?? 0} </SText>
									</SView>
								</SView>
							</SView>
						</SView>
						<SHr height={5} />
					</SView>
					<SHr height={15} />
					<SView col={"xs-12"} style={{ borderBottomWidth: 1, borderColor: STheme.color.lightGray }}></SView>
					<SHr height={12} />
					<SView col={"xs-12"} center>
						<SText fontSize={16} font={"Roboto"} bold>{this.auxPedido.delivery == 0 ? "Recoger del lugar" : "Envio a domicilio"}</SText>
					</SView>
					<SHr height={18} />
				</SView>
			</SView>
			<SHr height={18} />
			<SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} row center style={{ backgroundColor: STheme.color.white }}>
				<SView col={"xs-11"} row center>
					<SHr height={15} />
					<SView col={"xs-6"} >
						<SText style={{ textAlign: "justify" }} fontSize={15} font={"Roboto"} >Total</SText>
					</SView>
					<SView col={"xs-6"} style={{ alignItems: "flex-end" }}>
						<SText fontSize={15} font={"Roboto"} >Bs. {SMath.formatMoney((this.auxPedido.pack?.precio ?? 0) * this.auxPedido.cantidad)}</SText>
					</SView>
					<SHr height={10} />
					<SView col={"xs-6"} >
						<SText style={{ textAlign: "justify" }} fontSize={15} font={"Roboto"} >Envío</SText>
					</SView>
					<SView col={"xs-6"} style={{ alignItems: "flex-end" }}>
						<SText fontSize={15} font={"Roboto"} >{"Bs. " + SMath.formatMoney(this.auxPedido.delivery)}</SText>
					</SView>
					<SHr height={10} />
					<SView col={"xs-12"} style={{ borderBottomWidth: 1, borderColor: STheme.color.lightGray }}></SView>
					<SHr height={10} />
					<SView col={"xs-6"} >
						<SText style={{ textAlign: "justify" }} fontSize={15} font={"Roboto"} bold>Total:</SText>
					</SView>
					<SView col={"xs-6"} style={{ alignItems: "flex-end" }}>
						<SText fontSize={15} font={"Roboto"} bold >Bs. {SMath.formatMoney(((this.auxPedido.pack?.precio ?? 0) * this.auxPedido.cantidad) + parseFloat(this.auxPedido.delivery ?? 0))}</SText>
					</SView>
					<SHr height={15} />
				</SView>
			</SView>

		</>
	}

	getViewTipoPago() {
		this.auxPedido = Parent.Actions.getDetalle(this.keyPedido, this.props)
		if (!this.auxPedido) return <SLoad />
		return <>
			<SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} center style={{ backgroundColor: STheme.color.white }}>
				<TipoPago callback={(resp) => { this.setState({ tipoPagoSeleccionado: resp.tipopago }); }} />
			</SView>

		</>
	}

	getViewFactura() {
		return <>
			<SForm
				ref={(form) => { this.form = form; }}
				col={"xs-11 sm-9 md-7 lg-5 xl-4"}
				center
				inputProps={{ customStyle: "kolping" }}
				inputs={{
					nit: { label: "Nit" },
					business_name: { label: "Razon social" },
				}}
				onSubmit={(values) => {
					var usuario = this.props.state.usuarioReducer.usuarioLog;
					SSocket.sendPromise(
						{
							"component": "pedido",
							"type": "select_pay_method",
							"key_pedido": this.keyPedido,
							"pay_method": this.state.tipoPagoSeleccionado,
							"client": {
								"name": usuario["Nombres"],
								"last_name": usuario["Apellidos"],
								"ci": usuario["ci"] ?? " ",
								"phone": usuario["Telefono"],
								"email": usuario["Correo"],
								"bussiness_name": values["business_name"],
								"nit": values["nit"]
							}
						}
					).then((resp) => {
						SNavigation.navigate("pedido/mensajeSolicitud", { key_tipoPago: this.state.tipoPagoSeleccionado, key_qr: resp.data.qr });
						alert("exito ", resp);
						SPopup.close("confirmar");

					}).catch((err) => {
						alert("negativo ", err.error)
						SPopup.close("confirmar");
					});
 				}}
			/>
		</>
	}

	popupConfirmacion() {
		return <>
			<SView width={362} height={216} center row style={{ borderRadius: 8 }} withoutFeedback backgroundColor={STheme.color.background}>
				<SHr col={"xs-12"} height={50} />
				<SView col={"xs-9"} center>
					<SText color={STheme.color.darkGray} style={{ fontSize: 20 }} bold center >¿Estás seguro que deseas realizar este pedido?</SText>
				</SView>
				<SHr col={"xs-12"} height={20} />
				<SView col={"xs-11"} row center>
					<SView col={"xs-6"} center>
						<SView width={140} height={44} center border={STheme.color.primary} style={{ borderRadius: 8 }} onPress={() => { SPopup.close("confirmar"); }}  >
							<SText fontSize={14} color={STheme.color.primary} bold>No, cancelar</SText>
						</SView>
					</SView>
					<SView col={"xs-6"} center>
						<SView width={140} height={44} center backgroundColor={STheme.color.primary} style={{ borderRadius: 8 }}
							onPress={() => {
								this.form.submit()
								// alert("si");
								// SPopup.close("confirmar");  // cerrar el popup

								// sin usar promise
								// var dataOk = {}
								// dataOk = {
								//     key_pack: this.auxRestaurante.pack.key,
								//     cantidad: this.cantidad,
								//     tipo_pago: "Efectivo",
								//     delivery: this.envioN,
								//     fecha: this.auxRestaurante.horario.fecha,
								//     direccion:{
								//         key_direccion_usuario: this.props.state.direccion_usuarioReducer.miDireccion.key,
								//     }
								// }
								// // console.log(this.auxRestaurante)
								// // console.log(JSON.stringify(dataOk) + " aquiii")
								// Parent.Actions.registro(dataOk,this.state.key_pedido, this.props);
								// // console.log(this.props.state.direccion_usuarioReducer.miDireccion)
							}}>
							<SText fontSize={14} color={STheme.color.white} bold >Sí, Confirmar</SText>
						</SView>
					</SView>
				</SView>
				<SHr col={"xs-12"} height={50} />
			</SView>
		</>
	}


    render() {
        this.auxPedido = Parent.Actions.getDetalle(this.keyPedido, this.props)
        if (!this.auxPedido) return <SLoad />
        console.log(this.state.tipoPagoSeleccionado+ " AAAA")
        return (
            <SPage center>
                <SView col={"xs-12"} row backgroundColor={STheme.color.card} center>
                    <SHr height={18} />
                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center row style={{ backgroundColor: STheme.color.white }}>
                        <SView col={"xs-11"} row center>
                            <SView col={"xs-12"}>
                                <SHr height={15} />
                                <SText fontSize={18} font={"Roboto"} style={{ fontWeight: "bold" }}>Detalle pedido</SText>
                                <SHr height={15} />
                            </SView>
                            <SView center col={"xs-2"} backgroundColor={"#9B060C"} height={85} style={{ borderRadius: 8, overflow: 'hidden', }}>
                                <SImage src={require('../../../../../Assets/img/restPerfil.jpg')} style={{
                                    width: "100%",
                                    position: "relative",
                                    resizeMode: "cover"
                                }} />
                                <SGradient colors={["#00000045", "#00000045",]} />
                            </SView>
                            <SView col={"xs-10"} row >
                                <SView col={"xs-1"}  >
                                </SView>
                                <SView col={"xs-11"} row >
                                    <SView col={"xs-12"} >
                                        <SText color={STheme.color.text} fontSize={14} style={{ fontWeight: "bold" }}  >{this.auxPedido.restaurante.nombre}</SText>
                                    </SView>
                                    <SHr height={15} />
                                    <SView col={"xs-6"} style={{ justifyContent: 'flex-start', }}>
                                        <SText fontSize={14} font={"Roboto"} color={STheme.color.primary} fontWeight> Precio</SText>
                                        <SHr height={5} />
                                        <SText fontSize={20} font={"Roboto"} style={{ fontWeight: "bold" }}>Bs. {this.auxPedido.pack?.precio ?? 0} </SText>
                                    </SView>
                                    <SView col={"xs-6"} center row>
                                        <SView col={"xs-12"} center>
                                            <SText fontSize={14} font={"Roboto"} color={STheme.color.primary} >Cantidad</SText>
                                        </SView>
                                        <SHr height={5} />
                                        <SView col={"xs-12"} center   >
                                            <SView col={"xs-6"} center style={{ height: 40, backgroundColor: STheme.color.card, borderRadius: 6 }}>
                                                <SText fontSize={14} font={"Roboto"}   > {this.auxPedido.cantidad ?? 0} </SText>
                                            </SView>
                                        </SView>
                                    </SView>
                                </SView>
                                <SHr height={5} />
                            </SView>
                            <SHr height={15} />
                            <SView col={"xs-12"} style={{ borderBottomWidth: 1, borderColor: STheme.color.lightGray }}></SView>
                            <SHr height={12} />
                            <SView col={"xs-12"} center>
                                <SText fontSize={16} font={"Roboto"} style={{ fontWeight: "bold" }}>{this.auxPedido.delivery == 0 ? "Recoger del lugar" : "Envio a domicilio"}</SText>
                            </SView>
                            <SHr height={18} />
                        </SView>
                    </SView>
                    <SHr height={18} />
                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} row center style={{ backgroundColor: STheme.color.white }}>
                        <SView col={"xs-11"} row center>
                            <SHr height={15} />
                            <SView col={"xs-6"} >
                                <SText style={{ textAlign: "justify" }} fontSize={15} font={"Roboto"} >Total</SText>
                            </SView>
                            <SView col={"xs-6"} style={{ alignItems: "flex-end" }}>
                                <SText fontSize={15} font={"Roboto"} >Bs. {SMath.formatMoney((this.auxPedido.pack?.precio ?? 0) * this.auxPedido.cantidad)}</SText>
                            </SView>
                            <SHr height={10} />
                            <SView col={"xs-6"} >
                                <SText style={{ textAlign: "justify" }} fontSize={15} font={"Roboto"} >Envío</SText>
                            </SView>
                            <SView col={"xs-6"} style={{ alignItems: "flex-end" }}>
                                <SText fontSize={15} font={"Roboto"} >{"Bs. " + SMath.formatMoney(this.auxPedido.delivery)}</SText>
                            </SView>
                            <SHr height={10} />
                            <SView col={"xs-12"} style={{ borderBottomWidth: 1, borderColor: STheme.color.lightGray }}></SView>
                            <SHr height={10} />
                            <SView col={"xs-6"} >
                                <SText style={{ textAlign: "justify", fontWeight: "bold" }} fontSize={15} font={"Roboto"} >Total:</SText>
                            </SView>
                            <SView col={"xs-6"} style={{ alignItems: "flex-end" }}>
                                <SText fontSize={15} font={"Roboto"} style={{ fontWeight: "bold" }} >Bs. {SMath.formatMoney(((this.auxPedido.pack?.precio ?? 0) * this.auxPedido.cantidad) + parseFloat(this.auxPedido.delivery ?? 0))}</SText>
                            </SView>
                            <SHr height={15} />
                        </SView>
                    </SView>
                    <SHr height={18} />
                    <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} center style={{ backgroundColor: STheme.color.white }}>
                        <TipoPago callback={(resp) => { this.setState({ tipoPagoSeleccionado: resp.tipopago }); }} />
                    </SView>
                    <SHr height={18} />
                    {this.getFormFacturacion()}
                    <SHr height={40} />
                    <PButtom fontSize={20} onPress={() => {
                        this.form.submit()
                        // SPopup.open({ content: this.popupConfirmacion(), key: "confirmar" });
                    }}>CONFIRMAR</PButtom>
                    <SHr height={40} />
                </SView>
            </SPage >
        );
    }
	render() {
		// this.auxPedido = Parent.Actions.getDetalle(this.keyPedido, this.props)
		// if (!this.auxPedido) return <SLoad />
		return (
			<SPage center>
				<SView col={"xs-12"} row backgroundColor={STheme.color.card} center>
					<SHr height={18} />
					{this.getViewDetalle()}
					<SHr height={18} />
					{this.getViewTipoPago()}
					<SHr height={18} />
					{this.getViewFactura()}
					<SHr height={40} />
					<PButtom fontSize={20} onPress={() => {
						// this.form.submit();
						if (this.state.tipoPagoSeleccionado == null) {
							alert("Seleccione un tipo de pago");
							return;
						}
						SPopup.open({ key: "confirmar", content: this.popupConfirmacion() });
					}}>CONFIRMAR</PButtom>
					<SHr height={40} />
				</SView>
			</SPage >
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(Confirmar);