import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SDate, SHr, SIcon, SImage, SLoad, SNavigation, SPage, SSection, SText, STheme, SView, SList } from 'servisofts-component';
import pedido from '../../Services/Tapeke/Components/pedido';
import SSocket from 'servisofts-socket';

class index extends Component {
	constructor(props) {
		super(props);

		this.state = {
			// keyRestaurante: '9b8f27e9-696d-446f-ae9b-5d6d5bf1ab24',
		};
	}

	getCompras() {
		const key_usuario = this.props.state.usuarioReducer.usuarioLog.key;
        var dataPedido = pedido.Actions.getPedidoByKeyUsuarioDetalle(this.props.state.usuarioReducer.usuarioLog.key, this.props)
		if (!dataPedido) return <SLoad />

		return <SList
			data={dataPedido}
			space={16}
			filter={(item) => item.estado == '1' && item.key_usuario == key_usuario && item.state != "pendiente_pago" && item.state != "timeout_pago"}
			render={(obj, key) => {
				// console.log("resta ", restaurante_obj);
				return <SView col={"xs-12 "} height={90} row border={STheme.color.card} style={{ borderRadius: 8, }} onPress={() => {
					if (obj.state == "pagado") {
						SNavigation.navigate("pedido/confirmacion", { key_pedido: obj.key });
					}
				}} >
					<SView col={"xs-2"} center   >
				
					<SView height={40} width={40} style={{ backgroundColor: '#E9EAEE', borderRadius: 50, }} center   >
							<SImage src={`${SSocket.api.root}restaurante/${obj?.restaurante?.key}`} style={{ borderRadius: 8, resizeMode: 'cover' }} />
						</SView>
						
					</SView>
					<SView col={"xs-10"} row center  >
						<SView col={"xs-10"} height={40} style={{ justifyContent: 'center', }}  >
							{/* <SText fontSize={15} font={"Roboto"} color={STheme.color.text} >{obj['descripcion']}</SText> */}
							<SText fontSize={16} font={"Roboto"} color={STheme.color.text} >{obj?.restaurante?.nombre}</SText>
							<SHr height={5} />
							{/* <SText fontSize={12} font={"Roboto"} color={STheme.color.gray} >{obj['direccion']}</SText> */}
							<SText fontSize={12} font={"Roboto"} color={STheme.color.gray} >{new SDate(obj['fecha_on']).toString("dd-MM-yyyy hh:mm")} - {obj['state']} </SText>
						</SView>
						<SView col={"xs-2"} height={40} style={{ alignContent: 'center', }}>
							<SView height={36} width={36} center   >
								
								<SText fontSize={18} font={"Roboto"} color={STheme.color.gray} >x {obj?.cantidad}</SText>
							</SView>
						</SView>
					</SView>
					<SView col={"xs-12"} row   >

						<SView col={"xs-6"} center onPress={() => { SNavigation.navigate('comoteparecio') }}   >
							<SText width={120} height={20} style={{ backgroundColor: '#EEEEEE', borderRadius: 4, fontSize: 14, alignItems: 'center', }} center >Opinar</SText>
						</SView>
						<SView col={"xs-6"} center>
							<SText width={120} height={20} style={{ backgroundColor: '#EEEEEE', borderRadius: 4, fontSize: 14, alignItems: 'center', }} center>Repetir </SText>
						</SView>
					</SView>
				</SView>
			}} />
	}

	render() {
		return (
			<SPage title={'MisCompras'}>
				<SView col={"xs-12"} row center >
					<SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} >
						{this.getCompras()}
					</SView>
				</SView>
			</SPage>
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(index);