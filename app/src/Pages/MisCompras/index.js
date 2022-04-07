import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SImage, SLoad, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import pedido from '../../Services/Tapeke/Components/pedido';
import SSocket from 'servisofts-socket';
import restaurante from '../../Services/Tapeke/Components/restaurante';

class index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			keyRestaurante: '9b8f27e9-696d-446f-ae9b-5d6d5bf1ab24',
		};
	}

	getLista() {
		var data = pedido.Actions.getAll(this.props);
		if (!data) return <SLoad />
		var arr = Object.values(data).filter(itm => itm.key_usuario == this.props.state.usuarioReducer.usuarioLog.key);
		return <SText>{JSON.stringify(arr, "\n", "\t")}</SText>
	}


	getCompras() {
		var data = pedido.Actions.getAll(this.props);
		if (!data) return <SLoad />
		alert(keyRestaurante);

		var dataRestaurante = restaurante.Actions.getByKey(this.state.keyRestaurante,this.props);
		if (!dataRestaurante) return <SLoad />

		const key_usuario = this.props.state.usuarioReducer.usuarioLog.key;
		var arr = Object.values(data).filter(itm => itm.key_usuario == this.props.state.usuarioReducer.usuarioLog.key);

		if (arr.length <= 0) {
			SNavigation.navigate("/")
			return <SText>No hay compras</SText>
		}
		return arr.map((obj) => {
			return <>
				<SView col={"xs-12"} height={64} row center border={"transparent"} onPress={() => {
					// this.props.dispatch({ component: "direccion_usuario", type: "editarMiDireccion", data: obj });
					SNavigation.goBack()
				}} >
					<SView col={"xs-2"} height={64} center   >
						<SView height={36} width={36} style={{ backgroundColor: '#E9EAEE', borderRadius: 50, }} center   >
							{/* <SIcon name={'Marker'} height={24} width={40} fill={'#484848'} /> */}
							<SImage src={`${SSocket.api.root}restaurante/${this.state.keyRestaurante}`} style={{ borderRadius: 8, resizeMode: 'cover' }} />
						</SView>
					</SView>
					<SView col={"xs-10"} row height={64} style={{ borderBottomWidth: 1, borderColor: STheme.color.lightGray, justifyContent: 'center', }}  >
						<SView col={"xs-10"} height={64} style={{ justifyContent: 'center', }}  >
							{/* <SText fontSize={15} font={"Roboto"} color={STheme.color.text} >{obj['descripcion']}</SText> */}
							<SText fontSize={15} font={"Roboto"} color={STheme.color.text} >{obj['descripcion']}</SText>
							<SHr height={5} />
							{/* <SText fontSize={12} font={"Roboto"} color={STheme.color.gray} >{obj['direccion']}</SText> */}
							<SText fontSize={12} font={"Roboto"} color={STheme.color.gray} >{obj['fecha_on']} - {obj['tipo_pago']} </SText>
						</SView>
						<SView col={"xs-2"} height={64} center onPress={() => {
							// SNavigation.goBack();
							// Parent.Actions.eliminar(obj, this.props)
							// Parent.Actions.eliminar(obj, this.props)
							//alert(key);
							//console.log(key);
						}} >
							<SView height={36} width={36} center   >
								<SText fontSize={12} font={"Roboto"} color={STheme.color.gray} >x{obj['cantidad']} </SText>

								{/* <SIcon name={'DeleteDir'} height={24} width={40} fill={'#484848'} /> */}
							</SView>
						</SView>
					</SView>

				</SView>
				<SHr height={10} />
			</>

		})
	}

	render() {
		return (

			<SPage title={'MisCompras'}>
				{this.getLista()}
				{this.getCompras()}


			</SPage>
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(index);