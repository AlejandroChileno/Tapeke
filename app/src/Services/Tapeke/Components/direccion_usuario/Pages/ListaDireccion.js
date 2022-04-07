import React from 'react';
import { connect } from 'react-redux';
import { SIcon, SPage, SScrollView2, SText, STheme, SView, SMapView, SMarker, SInput, SNavigation, SHr, SLoad, SPopup, } from 'servisofts-component';
import BarraSuperiorTapeke from '../../../../../Components/BarraSuperiorTapeke';
import PButtom from '../../../../../Components/PButtom';
import Parent from '../index'
import FloatButtomTap from '../../../../../Components/FloatButtomTap';

import locationGoogleReducer from '../locationGoogleReducer';

class Direccion extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			region: {
				latitude: -17.808690397665742,
				longitude: -63.16250034566757,
			}
		};
	}

	getDirecciones() {
		var data = Parent.Actions.getAll(this.props);
		if (!data) return <SLoad />

		const key_usuario = this.props.state.usuarioReducer.usuarioLog.key;
		var arr = Object.values(data).filter(x => x.key_usuario == key_usuario && x.estado == 1);
		if (arr.length <= 0) {
			SNavigation.navigate("direccion_usuario")
			return <SText>No hay direcciones</SText>
		}
		return arr.map((obj) => {
			// if (!SBuscador.validate(data[key], this.state.find)) {
			//     return null;
			// }
			// if (data[key]['key_usuario'] != this.props.state.usuarioReducer.usuarioLog.key) return null;
			return <>
				<SView col={"xs-12"} height={64} row center border={"transparent"} onPress={() => {
					this.props.dispatch({ component: "direccion_usuario", type: "editarMiDireccion", data: obj });
					SNavigation.goBack()
				}} >
					<SView col={"xs-2"} height={64} center   >
						<SView height={36} width={36} style={{ backgroundColor: '#E9EAEE', borderRadius: 50, }} center   >
							<SIcon name={'Marker'} height={24} width={40} fill={'#484848'} />
						</SView>
					</SView>
					<SView col={"xs-10"} row height={64} style={{ borderBottomWidth: 1, borderColor: STheme.color.lightGray, justifyContent: 'center', }}  >
						<SView col={"xs-10"} height={64} style={{ justifyContent: 'center', }}  >
							<SText fontSize={15} font={"Roboto"} color={STheme.color.text} >{obj['descripcion']}</SText>
							<SHr height={5} />
							<SText fontSize={12} font={"Roboto"} color={STheme.color.gray} >{obj['direccion']}</SText>
						</SView>
						<SView col={"xs-2"} height={64} center onPress={() => {
							// SNavigation.goBack();
							Parent.Actions.eliminar(obj, this.props)
							//alert(key);
							//console.log(key);
						}} >
							<SView height={36} width={36} center   >
								<SIcon name={'DeleteDir'} height={24} width={40} fill={'#484848'} />
							</SView>
						</SView>
					</SView>

				</SView>
				<SHr height={10} />
			</>

		})
	}


	render() {

		return (<>
			<SPage title={'Mis Direcciones'} disableScroll center>
				{/* <BarraSuperiorTapeke  >
					<SText font={"Roboto"} fontSize={25} color={STheme.color.secondary}>Mis Favoritos</SText>
				</BarraSuperiorTapeke> */}
				<SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} flex >
					<SHr height={20} />
					<SView col={"xs-12"} center>
						<SInput col={"xs-12"} placeholder={"Escribir el nombre de la direccion..."} style={{ borderWidth: 0, height: "100%" }}
							color={STheme.color.text} placeholderTextColor={STheme.color.gray} height={40} fontSize={12} />
					</SView>
					<SHr height={10} />
					{this.getDirecciones()}

				</SView >

			</ SPage >
			<FloatButtomTap onPress={() => {
				SNavigation.navigate("direccion_usuario");
				this.props.state.direccion_usuarioReducer.estado = 0;
			}} />
		</>
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(Direccion);