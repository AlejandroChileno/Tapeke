import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SImage, SInput, SPage, SScrollView2, SText, STheme, SView } from 'servisofts-component';
import PBarraFooter from '../Components/PBarraFooter';

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	header(title) {
		return (
			<SView col={"xs-12"} height={30} center border={'black'}>
				<SView col={"xs-11 md-8 lg-8 xl-6"} font={"Roboto"} fontSize={18} border={'blue'} >
					<SText fontSize={18} bold>{title}</SText>
				</SView>
			</SView>
		);
	}

	items() {
		return <>
			<SView col={"xs-12"} center >
				<SView height={10} />
				<SView col={"xs-11 md-8 lg-8 xl-6"} border={'red'}>

					<SView col={"xs-12"} height={160} row border={'blue'}    >

						<SView col={"xs-12"} height={97} backgroundColor={'red'} style={{ borderRadius: 8, overflow: 'hidden' }} >
							<SImage src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Rf9fDge2R4SbykwZAwpRN4UniaU7nlwxmA&usqp=CAU'} />
						</SView>

						<SView col={"xs-12"} height={50} border={'yellow'} center style={{ position: 'absolute', top: 70 }} >
							<SView width={193} height={21} center style={{
								borderRadius: 8, overflow: 'hidden', backgroundColor: STheme.color.primary,
							}}>
								<SText fontSize={14} font={"Roboto"} color={STheme.color.secondary} >Veggie Garden - Gran Via</SText>
							</SView>


							<SView height={50} width={50} style={{
								borderRadius: 50, overflow: 'hidden', backgroundColor: STheme.color.secondary, position: 'absolute', left: 20
							}}>
								<SImage src={'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Burger_King_logo_%281999%29.svg/1200px-Burger_King_logo_%281999%29.svg.png'} />
							</SView>
						</SView>

						<SView col={"xs-12"} height={30} />
						{/* campo para el logo */}

						<SView col={"xs-12"} style={{ padding: 4, overflow: 'hidden' }} backgroundColor={'cyan'} row >

							<SView col={"xs-5"} height={20} row center border={'blue'}>
								<SIcon name={'Girl'} height={13} width={13} />
								<SText fontSize={10} font={"Roboto"} >Hoy 22:00 - 22:30</SText>
							</SView>
							<SView col={"xs-4"} height={20} row center border={'blue'}>
								<SIcon name={'Girl'} height={13} width={13} />
								<SText fontSize={10} font={"Roboto"} >1,0 Km</SText>
							</SView>
							<SView col={"xs-3"} height={20} row center border={'blue'}>
								<SText fontSize={10} font={"Roboto"} color={STheme.color.primary} >Bs. 4.54</SText>
							</SView>


						</SView>

						<SView col={"xs-12"} height={30} border={'yellow'} row style={{ position: 'absolute', top: 10 }} >
							<SView col={"xs-10"} center border={'red'}>
								<SView width={112} height={20} center style={{
									borderRadius: 4, overflow: 'hidden', backgroundColor: '#FFBB3E',
								}}>
									<SText fontSize={10} font={"Roboto"} color={STheme.color.secondary} >4 disponible(s)</SText>
								</SView>
							</SView>
							<SView col={"xs-2"} center border={'red'}>
								<SView width={24} height={24} center style={{
									borderRadius: 50, overflow: 'hidden', backgroundColor: STheme.color.card,
								}}>
									<SIcon name={'IconFavFalse'} height={14} width={14} fill={STheme.color.primary} />

								</SView>
							</SView>


						</SView>

					</SView>

				</SView>
			</SView>
		</>

	}

	lista() {
		return <>
			<SView col={"xs-12 "} center >
				<SView height={10} />
				<SView col={"xs-11 md-8 lg-8 xl-6"}>

					<SView col={"xs-12"} height={120} row    >

						<SView col={"xs-3"} height  >
							<SImage src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Rf9fDge2R4SbykwZAwpRN4UniaU7nlwxmA&usqp=CAU'} />
						</SView>
						<SView col={"xs-9"} height style={{ padding: 4, }} >
							<SView col={"xs-12"} height={40} row >
								<SView col={"xs-9.5"} style={{ justifyContent: 'flex-start' }}>
									<SText fontSize={12} color={STheme.color.text} font={"LondonMM"} col={"xs-11"}> hola </SText>
								</SView>

								<SView col={"xs-2.5"} style={{ justifyContent: 'flex-start' }} row   >
									<SView col={"xs-6"} row style={{ justifyContent: 'flex-start' }} onPress={() => {
										this.props.dispatch({
											component: "carrito",
											type: "eliminar",
											estado: "exito",
											data: {
												...obj,
											}
										});
									}}>
										<SIcon name={'IconBtnDelete'} height={20} width={20} />
									</SView>
									<SView col={"xs-6"} row style={{ justifyContent: 'flex-end' }} onPress={() => { alert('favorito'); }}>
										<SIcon name={'IconFavFalse'} height={20} width={20} />
									</SView>
								</SView>
							</SView>
							<SView col={"xs-12"} height={20} center  >
								<SText fontSize={12} bold color={STheme.color.primary} font={"LondonMM"} col={"xs-12"}>En stock</SText>
							</SView>
							<SView col={"xs-12"} height={50} row center   >

								<SView col={"xs-6"} height center style={{ paddingTop: 15 }}   >
									<SText fontSize={20} bold color={STheme.color.text} font={"LondonMM"} col={"xs-12"}> 51515 Bs</SText>
								</SView>

								<SView col={"xs-6"} height center      >
									<SView col={"xs-7"} height={30} row center backgroundColor={'#F0F3F6'} style={{ borderRadius: 20, }}  >
										<SView style={{ position: "absolute", left: -15, }} onPress={() => {
											if (obj.cantidad <= 1) return;
											this.props.dispatch({
												component: "carrito",
												type: "registro",
												estado: "exito",
												data: {
													...obj,
													cantidad: -1,
												}
											});
										}}>
											<SIcon name={'IconBtnMinus'} height={34} width={34} />
										</SView>
										<SText fontSize={18} bold color={'#111111'} > 888 </SText>
										<SView style={{ position: "absolute", right: -15, }} onPress={() => {
											this.props.dispatch({
												component: "carrito",
												type: "registro",
												estado: "exito",
												data: {
													...obj,
													cantidad: 1,
												}
											});
										}}>
											<SIcon name={'IconBtnPlus'} height={34} width={34} />
										</SView>
									</SView>
								</SView>

							</SView>


						</SView>
					</SView>
					<SView col={"xs-12"} height={2} style={{ borderTopWidth: 1, borderColor: '#D7D8D9', }}></SView>

					<SView height={5} />
				</SView>
			</SView>
		</>

	}

	render() {
		return (


			<SPage title={'Alvaro'} disableScroll>
				<SView col={"xs-12"} center height border={'red'}>
					<SScrollView2 disableHorizontal={true}>

						<SView col={"xs-11"} flex >
							<SView height={24}></SView>

							{this.header('Recomendado Para Ti')}
							{/* {this.lista()} */}

							{this.items()}

							{/* <Header /> */}
							{/* <List /> */}
						</SView>
					</SScrollView2>

					<PBarraFooter url={"menu"} />
				</SView>
			</SPage>
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(Menu);