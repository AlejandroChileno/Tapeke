import React from 'react';
import { connect } from 'react-redux';
import { SIcon, SPage, SScrollView2, SText, STheme, SView, SMapView, SMarker, SInput, SNavigation, SHr, SLoad, } from 'servisofts-component';
import BarraSuperiorTapeke from '../../../../../Components/BarraSuperiorTapeke';
import PButtom from '../../../../../Components/PButtom';
import Parent from '../index'
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

	showMapa() {
		return <>
			<SView col={"xs-12"} flex>
				<SMapView initialRegion={
					{
						latitude: -17.808690397665742,
						longitude: -63.16250034566757,
						latitudeDelta: 0.0922,
						longitudeDelta: 0.0421,
					}}

					// nos permite guardar temporal
					// explicar
					ref={(map) => this.map = map}

					onPress={(e) => {
						// console.log(e)
						this.setState({ regionClick: e })
						// alert(e);
					}}

					onRegionChangeComplete={(region) => {

						// console.log(region);
						this.setState({ region: region })
					
						
 


					}}

					preventCenter>
					<SMarker lat={this.state.region?.latitude} lng={this.state.region?.longitude}  >
						<SIcon name="Marker" width={20} height={30} />
					</SMarker>
				</SMapView>
			</SView>

			<SView style={{ position: 'absolute', }} center   >
				<SIcon name="MarcadorMapa" width={20} height={20} />
			</SView>

			<SView col={"xs-12"} height={50} style={{ position: 'absolute', backgroundColor: 'cyan', top: 50 }} center   >
				<SText fontSize={18} font={"Roboto"} style={{ fontWeight: "bold" }}>latitude: {this.state.region?.latitude}</SText>
				<SText fontSize={18} font={"Roboto"} style={{ fontWeight: "bold" }}>longitude: {this.state.region?.longitude}</SText>
			</SView>
		</>
	}

	getGeocode(){
		var geocode = Parent.Actions.geocode(this.state.region, this.props);
		if (!geocode) return <SLoad />
		 return <SText>{geocode.direccion}</SText>
	}

	render() {
		return (
			<SPage title={''} hidden disableScroll center>
				<BarraSuperiorTapeke  >
					<SText font={"Roboto"} fontSize={25} color={STheme.color.secondary}>Mis Favoritos</SText>
				</BarraSuperiorTapeke>
				<SView col={"xs-12 md-10 lg-8 xl-6"} center flex    >
					{this.showMapa()}
				</SView >

				<SView col={"xs-12 md-10 lg-8 xl-6"} height={280} row center>
					<SHr height={20} />

					<SView col={"xs-12"} center row border={'transparent'}>
						<SView col={"xs-10"}>
							<SInput fontSize={16} placeholder={"Nombre de la Ubicación"} height={55} />
						</SView>
						<SHr height={10} />
						<SView col={"xs-10"}>
							<SInput fontSize={16} placeholder={"Busca una direccion!"} height={55} iconR={<SIcon name={"SearchTapeke"} width={40} height={14} fill={STheme.color.primary} />} />
							{this.getGeocode()}
						</SView>
					</SView>

					<SView col={"xs-12"} row center border={'transparent'}>
						<SView width={40} center>
							<SIcon name={'LocationTapeke'} height={14} width={14} />
						</SView>

						<SView width={200} onPress={() => {
							// alert('vamos a centrar');
							// this.setState({ regionClick: e })
							// this.setState({ region: region })
							this.map.center();
						}}>
							<SText fontSize={15} font={"Roboto"} bold>Utilizar mi ubicación actual</SText>
						</SView>
					</SView>

					<SView col={"xs-8.8"} row center border={'transparent'}  >
						<PButtom fontSize={16} onPress={() => {
							alert('comprar cena');

						}}>ELEGIR ESTA UBICACIÓN</PButtom>
					</SView>
					<SHr height={10} />

				</SView >



			</ SPage >
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(Direccion);