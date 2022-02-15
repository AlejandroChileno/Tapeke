import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { SHr, SIcon, SImage, SInput, SPage, SScrollView2, SText, STheme, SView } from 'servisofts-component';
import PBarraFooter from '../Components/PBarraFooter';

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	header(title) {
		return (
			<SView col={"xs-12"} height={30} center>
				<SView col={"xs-11 md-8 lg-8 xl-6"} font={"Roboto"} fontSize={18}>
					<SText fontSize={18} bold>{title}</SText>
				</SView>
			</SView>
		);
	}

	items() {
		return <>
			<SView col={"xs-12"} center  >
				<SView col={"xs-11 md-8 lg-8 xl-6"} height={180} row center >
					<ScrollView horizontal={true} >

						<SView width={290} height={160} row center>
							<SView col={"xs-12"} height={100}     >
								<SImage src={require('./fotos/bg004.png')} style={{

									borderRadius: 8, backgroundColor: STheme.color.card,
								}} />
							</SView>
							<SView col={"xs-11"} height={30} row style={{ position: 'absolute', top: 15 }}>
								<SView col={"xs-10"} row center style={{ justifyContent: 'flex-start', }}>
									<SView width={112} height={20} center style={{ borderRadius: 4, overflow: 'hidden', backgroundColor: '#FFBB3E' }}>
										<SText fontSize={10} font={"Roboto"} color={STheme.color.secondary} >4 disponible(s)</SText>
									</SView>
								</SView>
								<SView col={"xs-2"} row center style={{ justifyContent: 'flex-end', }}>
									<SView width={24} height={24} center style={{ borderRadius: 50, overflow: 'hidden', backgroundColor: '#DADEE2' }}>
										<SIcon name={'Favorite'} height={14} width={14} fill={'#ADB5BD'} />
									</SView>
								</SView>
							</SView>
							<SView col={"xs-11"} height={50} row center style={{ position: 'absolute', top: 75, justifyContent: 'flex-start', }} >
								<SView width={193} height={21} center style={{
									borderRadius: 8, overflow: 'hidden', backgroundColor: STheme.color.primary, left: 35
								}}>
									<SText fontSize={14} font={"Roboto"} color={STheme.color.secondary} >Veggie Garden - Gran Via</SText>
								</SView>
								<SView height={50} width={50} style={{
									borderRadius: 50, overflow: 'hidden', backgroundColor: 'white', position: 'absolute',
								}}>
									<SImage src={require('./fotos/perfil001.png')} />
								</SView>
							</SView>
							<SView col={"xs-12"} height={10} backgroundColor={'transparent'} />
							<SView col={"xs-11"} height={20} row center backgroundColor={'transparent'} >
								<SView col={"xs-6"} height={20} row center style={{ justifyContent: 'flex-start', }}>
									<SIcon name={'Reloj'} height={13} width={13} />
									<SText fontSize={10} font={"Roboto"} >  Hoy 22:00 - 22:30</SText>
								</SView>
								<SView col={"xs-3"} height={20} row center border={'transparent'} style={{ justifyContent: 'flex-start', }}>
									<SIcon name={'Location'} height={13} width={13} />
									<SText fontSize={10} font={"Roboto"} > 1,0 Km</SText>
								</SView>
								<SView col={"xs-3"} height={20} row center style={{ justifyContent: 'flex-end', }}>
									<SText fontSize={10} font={"Roboto"} color={STheme.color.primary} >Bs. 4.54</SText>
								</SView>
							</SView>
						</SView>
						<SView width={10} />

						<SView width={290} height={160} row center>
							<SView col={"xs-12"} height={100}     >
								<SImage src={require('./fotos/bg003.png')} style={{

									borderRadius: 8, backgroundColor: STheme.color.card,
								}} />
							</SView>
							<SView col={"xs-11"} height={30} row style={{ position: 'absolute', top: 15 }}>
								<SView col={"xs-10"} row center style={{ justifyContent: 'flex-start', }}>
									<SView width={112} height={20} center style={{ borderRadius: 4, overflow: 'hidden', backgroundColor: '#FFBB3E' }}>
										<SText fontSize={10} font={"Roboto"} color={STheme.color.secondary} >4 disponible(s)</SText>
									</SView>
								</SView>
								<SView col={"xs-2"} row center style={{ justifyContent: 'flex-end', }}>
									<SView width={24} height={24} center style={{ borderRadius: 50, overflow: 'hidden', backgroundColor: '#DADEE2' }}>
										<SIcon name={'Favorite'} height={14} width={14} fill={'#ADB5BD'} />
									</SView>
								</SView>
							</SView>
							<SView col={"xs-11"} height={50} row center style={{ position: 'absolute', top: 75, justifyContent: 'flex-start', }} >
								<SView width={193} height={21} center style={{
									borderRadius: 8, overflow: 'hidden', backgroundColor: STheme.color.primary, left: 35
								}}>
									<SText fontSize={14} font={"Roboto"} color={STheme.color.secondary} >Veggie Garden - Gran Via</SText>
								</SView>
								<SView height={50} width={50} style={{
									borderRadius: 50, overflow: 'hidden', backgroundColor: 'white', position: 'absolute',
								}}>
									<SImage src={require('./fotos/perfil002.png')} />
								</SView>
							</SView>
							<SView col={"xs-12"} height={10} backgroundColor={'transparent'} />
							<SView col={"xs-11"} height={20} row center backgroundColor={'transparent'} >
								<SView col={"xs-6"} height={20} row center style={{ justifyContent: 'flex-start', }}>
									<SIcon name={'Reloj'} height={13} width={13} />
									<SText fontSize={10} font={"Roboto"} >  Hoy 22:00 - 22:30</SText>
								</SView>
								<SView col={"xs-3"} height={20} row center border={'transparent'} style={{ justifyContent: 'flex-start', }}>
									<SIcon name={'Location'} height={13} width={13} />
									<SText fontSize={10} font={"Roboto"} > 1,0 Km</SText>
								</SView>
								<SView col={"xs-3"} height={20} row center style={{ justifyContent: 'flex-end', }}>
									<SText fontSize={10} font={"Roboto"} color={STheme.color.primary} >Bs. 4.54</SText>
								</SView>
							</SView>
						</SView>
						<SView width={10} />

						<SView width={290} height={160} row center>
							<SView col={"xs-12"} height={100}     >
								<SImage src={require('./fotos/bg002.png')} style={{

									borderRadius: 8, backgroundColor: STheme.color.card,
								}} />
							</SView>
							<SView col={"xs-11"} height={30} row style={{ position: 'absolute', top: 15 }}>
								<SView col={"xs-10"} row center style={{ justifyContent: 'flex-start', }}>
									<SView width={112} height={20} center style={{ borderRadius: 4, overflow: 'hidden', backgroundColor: '#FFBB3E' }}>
										<SText fontSize={10} font={"Roboto"} color={STheme.color.secondary} >4 disponible(s)</SText>
									</SView>
								</SView>
								<SView col={"xs-2"} row center style={{ justifyContent: 'flex-end', }}>
									<SView width={24} height={24} center style={{ borderRadius: 50, overflow: 'hidden', backgroundColor: '#DADEE2' }}>
										<SIcon name={'Favorite'} height={14} width={14} fill={'#ADB5BD'} />
									</SView>
								</SView>
							</SView>
							<SView col={"xs-11"} height={50} row center style={{ position: 'absolute', top: 75, justifyContent: 'flex-start', }} >
								<SView width={193} height={21} center style={{
									borderRadius: 8, overflow: 'hidden', backgroundColor: STheme.color.primary, left: 35
								}}>
									<SText fontSize={14} font={"Roboto"} color={STheme.color.secondary} >Veggie Garden - Gran Via</SText>
								</SView>
								<SView height={50} width={50} style={{
									borderRadius: 50, overflow: 'hidden', backgroundColor: 'white', position: 'absolute',
								}}>
									<SImage src={require('./fotos/perfil003.png')} />
								</SView>
							</SView>
							<SView col={"xs-12"} height={10} backgroundColor={'transparent'} />
							<SView col={"xs-11"} height={20} row center backgroundColor={'transparent'} >
								<SView col={"xs-6"} height={20} row center style={{ justifyContent: 'flex-start', }}>
									<SIcon name={'Reloj'} height={13} width={13} />
									<SText fontSize={10} font={"Roboto"} >  Hoy 22:00 - 22:30</SText>
								</SView>
								<SView col={"xs-3"} height={20} row center border={'transparent'} style={{ justifyContent: 'flex-start', }}>
									<SIcon name={'Location'} height={13} width={13} />
									<SText fontSize={10} font={"Roboto"} > 1,0 Km</SText>
								</SView>
								<SView col={"xs-3"} height={20} row center style={{ justifyContent: 'flex-end', }}>
									<SText fontSize={10} font={"Roboto"} color={STheme.color.primary} >Bs. 4.54</SText>
								</SView>
							</SView>
						</SView>
						<SView width={10} />

						<SView width={290} height={160} row center>
							<SView col={"xs-12"} height={100}     >
								<SImage src={require('./fotos/bg004.png')} style={{

									borderRadius: 8, backgroundColor: STheme.color.card,
								}} />
							</SView>
							<SView col={"xs-11"} height={30} row style={{ position: 'absolute', top: 15 }}>
								<SView col={"xs-10"} row center style={{ justifyContent: 'flex-start', }}>
									<SView width={112} height={20} center style={{ borderRadius: 4, overflow: 'hidden', backgroundColor: '#FFBB3E' }}>
										<SText fontSize={10} font={"Roboto"} color={STheme.color.secondary} >4 disponible(s)</SText>
									</SView>
								</SView>
								<SView col={"xs-2"} row center style={{ justifyContent: 'flex-end', }}>
									<SView width={24} height={24} center style={{ borderRadius: 50, overflow: 'hidden', backgroundColor: '#DADEE2' }}>
										<SIcon name={'Favorite'} height={14} width={14} fill={'#ADB5BD'} />
									</SView>
								</SView>
							</SView>
							<SView col={"xs-11"} height={50} row center style={{ position: 'absolute', top: 75, justifyContent: 'flex-start', }} >
								<SView width={193} height={21} center style={{
									borderRadius: 8, overflow: 'hidden', backgroundColor: STheme.color.primary, left: 35
								}}>
									<SText fontSize={14} font={"Roboto"} color={STheme.color.secondary} >Veggie Garden - Gran Via</SText>
								</SView>
								<SView height={50} width={50} style={{
									borderRadius: 50, overflow: 'hidden', backgroundColor: 'white', position: 'absolute',
								}}>
									<SImage src={require('./fotos/perfil004.jpg')} />
								</SView>
							</SView>
							<SView col={"xs-12"} height={10} backgroundColor={'transparent'} />
							<SView col={"xs-11"} height={20} row center backgroundColor={'transparent'} >
								<SView col={"xs-6"} height={20} row center style={{ justifyContent: 'flex-start', }}>
									<SIcon name={'Reloj'} height={13} width={13} />
									<SText fontSize={10} font={"Roboto"} >  Hoy 22:00 - 22:30</SText>
								</SView>
								<SView col={"xs-3"} height={20} row center border={'transparent'} style={{ justifyContent: 'flex-start', }}>
									<SIcon name={'Location'} height={13} width={13} />
									<SText fontSize={10} font={"Roboto"} > 1,0 Km</SText>
								</SView>
								<SView col={"xs-3"} height={20} row center style={{ justifyContent: 'flex-end', }}>
									<SText fontSize={10} font={"Roboto"} color={STheme.color.primary} >Bs. 4.54</SText>
								</SView>
							</SView>
						</SView>
						<SView width={10} />
					</ScrollView>
				</SView>
			</SView>
		</>

	}




	render() {
		return (
			<SPage title={'Alvaro'} disableScroll>
				<SView col={"xs-12"} center height>
					<SScrollView2 disableHorizontal={true}>

						<SView col={"xs-12"} center >
							<SView height={15}></SView>
							{this.header('Recomendado Para Ti')}
							{this.items()}
							<SHr height={20} />
							{this.header('Cerca')}
							{this.items()}
							<SHr height={10} />
							<SView col={'xs-11'} height={160} >
								<SImage src={require('./fotos/publicidad.png')} />
							</SView>
							<SHr height={10} />
							{this.header('Alimentación')}
							{this.items()}
							<SHr height={20} />
							{this.header('Favoritos')}
							{this.items()}
						</SView>
					</SScrollView2>

					<PBarraFooter />
				</SView>
			</SPage>
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(Menu);
{/* <PBarraFooter url={"menu"} /> */ }
