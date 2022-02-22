import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SImage, SNavigation, SText, STheme, SView } from 'servisofts-component';
export default class Item extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	HeaderItemFoto() {
		return <>
			<SView col={"xs-12"} row center height={110} border={'transparent'} style={{ position: 'absolute', top: -10 }}  >
				<SImage src={require('../../../../../Pages/fotos/bg003.png')} style={{ borderRadius: 8, resizeMode: 'cover' }} />
			</SView>
		</>
	}
	HeaderItemDisponible() {
		return <>
			<SView col={"xs-11"} height={30} row style={{ position: 'absolute', top: 10 }} border={'transparent'}>
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
			</SView>
		</>
	}
	HeaderItemTitle() {
		return <>
			<SView col={"xs-11"} height={50} row center style={{ position: 'absolute', top: 75, justifyContent: 'flex-start', }} >
				<SView width={193} height={21} style={{ borderRadius: 8, overflow: 'hidden', backgroundColor: STheme.color.primary, left: 40, position: 'absolute' }}>
					<SText fontSize={12} font={"Roboto"} color={STheme.color.secondary} center >Veggie Garden - Gran Via</SText>
				</SView>
				<SView width={50} height={50} style={{ borderRadius: 50, overflow: 'hidden', backgroundColor: 'white', position: 'absolute', }}>
					<SImage src={require('../../../../../Pages/fotos/perfil001.png')} />
				</SView>
			</SView>
		</>
	}

	itemFarmacia() {

		return (
			<>
				<SView width={160} height={152} backgroundColor={STheme.color.background} style={{ borderRadius: 8, overflow: 'hidden', borderColor: STheme.color.card, borderWidth: 1, overflow: 'hidden', }}>
					<SView col={"xs-12"} row center >

						<SView col={"xs-12"} height={100} center  >
							<SImage src={require('../../../../../Pages/fotos/bg002.png')} style={{ borderRadius: 8, backgroundColor: STheme.color.card, }} />
						</SView>

						<SView col={"xs-10.5"}   >


							<SView col={"xs-12"} height={58} row center>
								<SText col={"xs-12"} fontSize={12} font={"LondonMM"}  > alvaro</SText>
							</SView>


							<SView center height={32} onPress={() => {
								SNavigation.navigate("farmacia/agregarCarrito");
							}}>
								<SView col={"xs-12"} height={28} row center>
									<SView col={"xs-6"} row style={{ justifyContent: 'flex-start', }}>
										<SText fontSize={14} font={"LondonMM"} bold >Bs. 222</SText>
									</SView>
									<SView col={"xs-6"} row style={{ justifyContent: 'flex-end', }} >
										<SIcon name={'IconCartTrue'} fill={STheme.color.primary} height={24} width={24} />
									</SView>
								</SView>
							</SView>
						</SView>
					</SView >
				</SView >
				<SView width={160} height={196} backgroundColor={STheme.color.background} style={{ borderRadius: 8, overflow: 'hidden', borderColor: STheme.color.card, borderWidth: 1, overflow: 'hidden', }}>
					<SView col={"xs-12"} row center >

						<SView col={"xs-12"} height={100} center  >
							<SImage src={require('../../../../../Pages/fotos/bg002.png')} style={{ borderRadius: 8, backgroundColor: STheme.color.card, }} enablePreview />
						</SView>

						<SView col={"xs-10.5"}   >


							<SView col={"xs-12"} height={58} row center>
								<SText col={"xs-12"} fontSize={12} font={"LondonMM"}  > alvaro</SText>
							</SView>


							<SView center height={32} onPress={() => {
								SNavigation.navigate("farmacia/agregarCarrito");
							}}>
								<SView col={"xs-12"} height={28} row center>
									<SView col={"xs-6"} row style={{ justifyContent: 'flex-start', }}>
										<SText fontSize={14} font={"LondonMM"} bold >Bs. 222</SText>
									</SView>
									<SView col={"xs-6"} row style={{ justifyContent: 'flex-end', }} >
										<SIcon name={'IconCartTrue'} fill={STheme.color.primary} height={24} width={24} />
									</SView>
								</SView>
							</SView>
						</SView>
					</SView >
				</SView >
				<SView width={160} height={196} backgroundColor={STheme.color.background} style={{ borderRadius: 8, overflow: 'hidden', borderColor: STheme.color.card, borderWidth: 1, overflow: 'hidden', }}>
					<SView col={"xs-12"} row center >

						<SView col={"xs-12"} height={100} center  >
							<SImage src={require('../../../../../Pages/fotos/bg002.png')} style={{ borderRadius: 8, backgroundColor: STheme.color.card, }} enablePreview />
						</SView>

						<SView col={"xs-10.5"}   >


							<SView col={"xs-12"} height={58} row center>
								<SText col={"xs-12"} fontSize={12} font={"LondonMM"}  > alvaro</SText>
							</SView>


							<SView center height={32} onPress={() => {
								SNavigation.navigate("farmacia/agregarCarrito");
							}}>
								<SView col={"xs-12"} height={28} row center>
									<SView col={"xs-6"} row style={{ justifyContent: 'flex-start', }}>
										<SText fontSize={14} font={"LondonMM"} bold >Bs. 222</SText>
									</SView>
									<SView col={"xs-6"} row style={{ justifyContent: 'flex-end', }} >
										<SIcon name={'IconCartTrue'} fill={STheme.color.primary} height={24} width={24} />
									</SView>
								</SView>
							</SView>
						</SView>
					</SView >
				</SView >
				<SView width={160} height={196} backgroundColor={STheme.color.background} style={{ borderRadius: 8, overflow: 'hidden', borderColor: STheme.color.card, borderWidth: 1, overflow: 'hidden', }}>
					<SView col={"xs-12"} row center >

						<SView col={"xs-12"} height={100} center  >
							<SImage src={require('../../../../../Pages/fotos/bg002.png')} style={{ borderRadius: 8, backgroundColor: STheme.color.card, }} enablePreview />
						</SView>

						<SView col={"xs-10.5"}   >


							<SView col={"xs-12"} height={58} row center>
								<SText col={"xs-12"} fontSize={12} font={"LondonMM"}  > alvaro</SText>
							</SView>


							<SView center height={32} onPress={() => {
								SNavigation.navigate("farmacia/agregarCarrito");
							}}>
								<SView col={"xs-12"} height={28} row center>
									<SView col={"xs-6"} row style={{ justifyContent: 'flex-start', }}>
										<SText fontSize={14} font={"LondonMM"} bold >Bs. 222</SText>
									</SView>
									<SView col={"xs-6"} row style={{ justifyContent: 'flex-end', }} >
										<SIcon name={'IconCartTrue'} fill={STheme.color.primary} height={24} width={24} />
									</SView>
								</SView>
							</SView>
						</SView>
					</SView >
				</SView >
			</>
		);
	}

	items10000() {
		return <>
			<SView width={290} height={160} row center  >
				<SView col={"xs-11.9"} height={160} row center border={STheme.color.card} style={{ borderRadius: 8, borderWidth: 2, }}>
					<SView col={"xs-12"} height={130} border={'transparent'} />
					<SView col={"xs-11"} row border={'transparent'} >
						<SView col={"xs-6"} row center style={{ justifyContent: 'flex-start', }}>
							<SIcon name={'Reloj'} width={13} colSquare center />
							<SText fontSize={10} font={"Roboto"} style={{ left: 2 }}>Hoy 22:00 - 22:30</SText>
						</SView>
						<SView col={"xs-3"} row center style={{ justifyContent: 'flex-start', }}>
							<SIcon name={'Location'} height={13} width={9} center />
							<SText fontSize={10} font={"Roboto"} style={{ left: 2 }}>1,0 Km</SText>
						</SView>
						<SView col={"xs-3"} row center style={{ justifyContent: 'flex-end', }}>
							<SText fontSize={10} color={STheme.color.primary} font={"Roboto"}>Bs. 5,16</SText>
						</SView>
					</SView>
				</SView>
				{this.HeaderItemFoto()}
				{this.HeaderItemDisponible()}
				{this.HeaderItemTitle()}
			</SView>
			<SView width={10} />

			<SView width={290} height={170} row center  >
				<SView col={"xs-11.9"} height={163} row center border={STheme.color.card} style={{ borderRadius: 8, borderWidth: 2, }}>
					<SView col={"xs-12"} height={130} border={'transparent'} />
					<SView col={"xs-11"} row border={'transparent'} >
						<SView col={"xs-6"} row center style={{ justifyContent: 'flex-start', }}>
							<SIcon name={'Reloj'} width={13} colSquare center />
							<SText fontSize={10} font={"Roboto"} style={{ left: 2 }}>Hoy 22:00 - 22:30</SText>
						</SView>
						<SView col={"xs-3"} row center style={{ justifyContent: 'flex-start', }}>
							<SIcon name={'Location'} height={13} width={9} center />
							<SText fontSize={10} font={"Roboto"} style={{ left: 2 }}>1,0 Km</SText>
						</SView>
						<SView col={"xs-3"} row center style={{ justifyContent: 'flex-end', }}>
							<SText fontSize={10} color={STheme.color.primary} font={"Roboto"}>Bs. 5,16</SText>
						</SView>
					</SView>
				</SView>
				{this.HeaderItemFoto()}
				{this.HeaderItemDisponible()}
				{this.HeaderItemTitle()}
			</SView>
			<SView width={10} />

			<SView width={290} height={170} row center  >
				<SView col={"xs-11.9"} height={163} row center border={STheme.color.card} style={{ borderRadius: 8, borderWidth: 2, }}>
					<SView col={"xs-12"} height={130} border={'transparent'} />
					<SView col={"xs-11"} row border={'transparent'} >
						<SView col={"xs-6"} row center style={{ justifyContent: 'flex-start', }}>
							<SIcon name={'Reloj'} width={13} colSquare center />
							<SText fontSize={10} font={"Roboto"} style={{ left: 2 }}>Hoy 22:00 - 22:30</SText>
						</SView>
						<SView col={"xs-3"} row center style={{ justifyContent: 'flex-start', }}>
							<SIcon name={'Location'} height={13} width={9} center />
							<SText fontSize={10} font={"Roboto"} style={{ left: 2 }}>1,0 Km</SText>
						</SView>
						<SView col={"xs-3"} row center style={{ justifyContent: 'flex-end', }}>
							<SText fontSize={10} color={STheme.color.primary} font={"Roboto"}>Bs. 5,16</SText>
						</SView>
					</SView>
				</SView>
				{this.HeaderItemFoto()}
				{this.HeaderItemDisponible()}
				{this.HeaderItemTitle()}
			</SView>
			<SView width={10} />

			<SView width={290} height={170} row center  >
				<SView col={"xs-11.9"} height={163} row center border={STheme.color.card} style={{ borderRadius: 8, borderWidth: 2, }}>
					<SView col={"xs-12"} height={130} border={'transparent'} />
					<SView col={"xs-11"} row border={'transparent'} >
						<SView col={"xs-6"} row center style={{ justifyContent: 'flex-start', }}>
							<SIcon name={'Reloj'} width={13} colSquare center />
							<SText fontSize={10} font={"Roboto"} style={{ left: 2 }}>Hoy 22:00 - 22:30</SText>
						</SView>
						<SView col={"xs-3"} row center style={{ justifyContent: 'flex-start', }}>
							<SIcon name={'Location'} height={13} width={9} center />
							<SText fontSize={10} font={"Roboto"} style={{ left: 2 }}>1,0 Km</SText>
						</SView>
						<SView col={"xs-3"} row center style={{ justifyContent: 'flex-end', }}>
							<SText fontSize={10} color={STheme.color.primary} font={"Roboto"}>Bs. 5,16</SText>
						</SView>
					</SView>
				</SView>
				{this.HeaderItemFoto()}
				{this.HeaderItemDisponible()}
				{this.HeaderItemTitle()}
			</SView>
			<SView width={10} />
		</>
	}

	render() {
		return (
			// this.itemFarmacia()
			this.items10000()
		);
	}
}
