import React, { Component } from 'react';

import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import {
	SGradient, SHr, SIcon, SImage, SLoad, SPage, SScrollView2, SText, STheme, SView, SNavigation, SInput,
} from 'servisofts-component';
import Item2 from '../Components/Item2';
import PBarraFooter from '../../../../../Components/PBarraFooter';
import BarraSuperiorTapeke from '../../../../../Components/BarraSuperiorTapeke';



class Favoritos extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		this.key = SNavigation.getParam("keyUsuario");

	}




	getItems() {
		return <>

			<SView col={"xs-12 "} height={180} border={'transparent'} style={{ borderRadius: 8, }}   >
				<SView center>

					<SView col={"xs-12"} height={110} border={'transparent'}  >
						<SImage src={require('../../../../../Pages/fotos/bg003.png')} style={{ borderRadius: 8, resizeMode: 'cover' }} />
					</SView>

					{/* <SView col={"xs-11"} height={30} row style={{ position: 'absolute', top: 15 }} border={'transparent'}>
						<SView col={"xs-10"} row center style={{ justifyContent: 'flex-start', }}>
							<SView width={112} height={24} center style={{ borderRadius: 4, overflow: 'hidden', backgroundColor: '#FFBB3E' }}>
								<SText fontSize={10} font={"Roboto"} color={STheme.color.secondary} >4 disponible(s)</SText>
							</SView>
						</SView>
						<SView col={"xs-2"} row center style={{ justifyContent: 'flex-end', }}>
							<SView width={24} height={24} center style={{ borderRadius: 50, overflow: 'hidden', backgroundColor: '#FFFDFC' }}>
								<SIcon name={'Favorite'} width={14} height={13} fill={'#FA4A0C'} />
							</SView>
						</SView>
					</SView> */}


					{/* <SView col={"xs-11"} height={50} row center border={'transparent'} style={{ position: 'absolute', top: 85, justifyContent: 'flex-start', }} >
						<SView width={210} height={21} center style={{
							borderRadius: 8, overflow: 'hidden', backgroundColor: STheme.color.primary, left: 30
						}}>
							<SText fontSize={14} font={"Roboto"} color={STheme.color.secondary} >Veggie Garden - Gran Via</SText>
						</SView>
						<SView height={50} width={50} style={{
							borderRadius: 50, overflow: 'hidden', backgroundColor: 'white', position: 'absolute',
						}}>
							<SImage src={require('../../../../../Pages/fotos/perfil001.png')} />
						</SView>
					</SView> */}

					<SView col={"xs-11.9"} center border={'red'} style={{
						position: 'absolute', top: 100, zIndex: 0,

						// borderTopLeftRadius: 0,
						// borderTopRightRadius: 0,
						borderBottomLeftRadius: 8,
						borderBottomRightRadius: 8,
						borderWidth: 3,
					}}>


						<SView col={"xs-12"} height={50} border={'transparent'} />


						<SView col={"xs-11"} row border={'transparent'} >
							<SView col={"xs-6"} row center style={{ justifyContent: 'flex-start', }}>
								<SIcon name={'Reloj'} width={13} colSquare center />
								<SText fontSize={10} font={"Roboto"} style={{ left: 5 }}>Hoy 22:00 - 22:30</SText>
							</SView>
							<SView col={"xs-3"} row center style={{ justifyContent: 'flex-start', }}>
								<SIcon name={'Location'} height={13} width={9} center />
								<SText fontSize={10} font={"Roboto"} style={{ left: 5 }}>1,0 Km</SText>
							</SView>
							<SView col={"xs-3"} row center style={{ justifyContent: 'flex-end', }}>
								<SText fontSize={20} font={"Roboto"}>Bs. 5,16</SText>
							</SView>
						</SView>
					</SView>

				</SView>

			</SView>
			<SView width={10} />



		</>

	}

	render() {
		return (

			<SPage title={'Mis Favoritos'} hidden disableScroll>
				<BarraSuperiorTapeke  >
					<SText font={"Roboto-Bold"} fontSize={25} color={"#fff"}>Mis Favoritos</SText>
				</BarraSuperiorTapeke>

				<ScrollView>
					<SView col={"xs-12"} row center height border={'transparent'} >
						<SView col={"xs-11 md-5 lg-4 xl-2.5"}    >
							<SHr height={30} />
							<Item2></Item2>
							<SHr height={30} />
							<Item2></Item2>
							<SHr height={30} />
							<Item2></Item2>
							<SHr height={30} />
							<Item2></Item2>
							<SHr height={30} />
							<Item2></Item2>
							<SHr height={30} />
							<Item2></Item2>
							<SHr height={30} />
						</SView>

					</SView >
				</ScrollView>
				<SHr height={50} />
				<PBarraFooter />

			</ SPage >
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(Favoritos);