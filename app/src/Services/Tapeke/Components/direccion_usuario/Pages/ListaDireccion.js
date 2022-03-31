import React from 'react';
import { connect } from 'react-redux';
import { SIcon, SPage, SScrollView2, SText, STheme, SView, SMapView, SMarker, SInput, SNavigation, SHr, SLoad, SPopup, } from 'servisofts-component';
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



	render() {
		return (
			<SPage title={''} hidden disableScroll center>
				<BarraSuperiorTapeke  >
					<SText font={"Roboto"} fontSize={25} color={STheme.color.secondary}>Mis Favoritos</SText>
				</BarraSuperiorTapeke>
				<SView col={"xs-11 md-10 lg-4 xl-4"} flex >
					<SHr height={20} />
					<SView col={"xs-12"} center>
						<SInput col={"xs-12"} placeholder={"Escribir el nombre de la direccion..."} style={{ borderWidth: 0, height: "100%" }}
							color={STheme.color.text} placeholderTextColor={STheme.color.gray} height={40} fontSize={12} />
					</SView>
					<SHr height={10} />
					<SView col={"xs-12"} height={64} row center border={"transparent"} >
						<SView col={"xs-2"} height={64} center   >
							<SView height={36} width={36} style={{ backgroundColor: '#E9EAEE', borderRadius: 50, }} center   >
								<SIcon name={'Marker'} height={24} width={40} fill={'#484848'} />
							</SView>
						</SView>
						<SView col={"xs-10"} height={64} style={{ borderBottomWidth: 1, borderColor: STheme.color.lightGray, justifyContent: 'center', }}  >
							<SText fontSize={12} font={"Roboto"} color={STheme.color.gray} >Calle La Paz # 766 entre Moldes y, Saavedra,</SText>
							<SText fontSize={12} font={"Roboto"} color={STheme.color.gray}>Santa Cruz de la Sierra, Bolivia.</SText>
						</SView>
					</SView>
					<SHr height={10} />
					<SView col={"xs-12"} height={64} row center border={"transparent"} >
						<SView col={"xs-2"} height={64} center   >
							<SView height={36} width={36} style={{ backgroundColor: '#E9EAEE', borderRadius: 50, }} center   >
								<SIcon name={'Marker'} height={24} width={40} fill={'#484848'} />
							</SView>
						</SView>
						<SView col={"xs-10"} height={64} style={{ borderBottomWidth: 1, borderColor: STheme.color.lightGray, justifyContent: 'center', }}  >
							<SText fontSize={12} font={"Roboto"} color={STheme.color.gray} >Calle La Paz # 766 entre Moldes y, Saavedra,</SText>
							<SText fontSize={12} font={"Roboto"} color={STheme.color.gray}>Santa Cruz de la Sierra, Bolivia.</SText>
						</SView>
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