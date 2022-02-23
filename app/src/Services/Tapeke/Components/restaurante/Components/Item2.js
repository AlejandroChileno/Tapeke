import React, { Component } from 'react';
import { SIcon, SImage, SText, STheme, SView } from 'servisofts-component';
export default class Item extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
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
			<SView col={"xs-11"} height={30} row style={{ position: 'absolute', top: 0 }} border={'transparent'}>
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
				<SView width={250} height={21} row center style={{ borderRadius: 8, overflow: 'hidden', backgroundColor: STheme.color.primary, left: 20, position: 'absolute' }}>
					<SText fontSize={12} font={"Roboto"} color={STheme.color.secondary} center style={{ position: 'absolute' }} >Veggie Garden - Gran Via</SText>
				</SView>
				<SView height={50} width={50} style={{ borderRadius: 50, overflow: 'hidden', backgroundColor: 'white', position: 'absolute' }}>
					<SImage src={require('../../../../../Pages/fotos/perfil001.png')} />
				</SView>
			</SView>
		</>

	}
	getItems() {
		return <>
			<SView height={30} />
			<SView col={"xs-12"} height={170} center >
				<SView col={"xs-11.9"} height row center border={STheme.color.card} style={{ borderRadius: 8, borderWidth: 2 }}>
					<SView col={"xs-12"} height={125} />
					<SView col={"xs-11"} row center border={'transparent'} >
						<SView col={"xs-5.5"} row center border={'transparent'} style={{ justifyContent: 'flex-start', }}>
							<SIcon name={'Reloj'} width={13} colSquare center />
							<SText fontSize={10} font={"Roboto"} style={{ left: 2 }} bold>Hoy 22:00 - 22:30</SText>
						</SView>
						<SView col={"xs-2.5"} row center style={{ justifyContent: 'flex-start', }}>
							<SIcon name={'Location'} height={13} width={9} center />
							<SText fontSize={10} font={"Roboto"} style={{ left: 2 }} bold>1,0 Km</SText>
						</SView>
						<SView col={"xs-4"} row center border={'transparent'} style={{ justifyContent: 'flex-end', }}>
							<SText fontSize={20} font={"Roboto"}>Bs. 5,16</SText>
						</SView>
					</SView>
				</SView>
				{this.HeaderItemFoto()}
				{this.HeaderItemDisponible()}
				{this.HeaderItemTitle()}
			</SView>

			<SView height={30} />
			<SView col={"xs-12"} height={170} center >
				<SView col={"xs-11.9"} height row center border={STheme.color.card} style={{ borderRadius: 8, borderWidth: 2 }}>
					<SView col={"xs-12"} height={125} />
					<SView col={"xs-11"} row center border={'transparent'} >
						<SView col={"xs-5.5"} row center border={'transparent'} style={{ justifyContent: 'flex-start', }}>
							<SIcon name={'Reloj'} width={13} colSquare center />
							<SText fontSize={10} font={"Roboto"} style={{ left: 2 }} bold>Hoy 22:00 - 22:30</SText>
						</SView>
						<SView col={"xs-2.5"} row center style={{ justifyContent: 'flex-start', }}>
							<SIcon name={'Location'} height={13} width={9} center />
							<SText fontSize={10} font={"Roboto"} style={{ left: 2 }} bold>1,0 Km</SText>
						</SView>
						<SView col={"xs-4"} row center border={'transparent'} style={{ justifyContent: 'flex-end', }}>
							<SText fontSize={20} font={"Roboto"}>Bs. 5,16</SText>
						</SView>
					</SView>
				</SView>
				{this.HeaderItemFoto()}
				{this.HeaderItemDisponible()}
				{this.HeaderItemTitle()}
			</SView>

			<SView height={30} />
			<SView col={"xs-12"} height={170} center >
				<SView col={"xs-11.9"} height row center border={STheme.color.card} style={{ borderRadius: 8, borderWidth: 2 }}>
					<SView col={"xs-12"} height={125} />
					<SView col={"xs-11"} row center border={'transparent'} >
						<SView col={"xs-5.5"} row center border={'transparent'} style={{ justifyContent: 'flex-start', }}>
							<SIcon name={'Reloj'} width={13} colSquare center />
							<SText fontSize={10} font={"Roboto"} style={{ left: 2 }} bold>Hoy 22:00 - 22:30</SText>
						</SView>
						<SView col={"xs-2.5"} row center style={{ justifyContent: 'flex-start', }}>
							<SIcon name={'Location'} height={13} width={9} center />
							<SText fontSize={10} font={"Roboto"} style={{ left: 2 }} bold>1,0 Km</SText>
						</SView>
						<SView col={"xs-4"} row center border={'transparent'} style={{ justifyContent: 'flex-end', }}>
							<SText fontSize={20} font={"Roboto"}>Bs. 5,16</SText>
						</SView>
					</SView>
				</SView>
				{this.HeaderItemFoto()}
				{this.HeaderItemDisponible()}
				{this.HeaderItemTitle()}
			</SView>

			<SView height={30} />
			<SView col={"xs-12"} height={170} center >
				<SView col={"xs-11.9"} height row center border={STheme.color.card} style={{ borderRadius: 8, borderWidth: 2 }}>
					<SView col={"xs-12"} height={125} />
					<SView col={"xs-11"} row center border={'transparent'} >
						<SView col={"xs-5.5"} row center border={'transparent'} style={{ justifyContent: 'flex-start', }}>
							<SIcon name={'Reloj'} width={13} colSquare center />
							<SText fontSize={10} font={"Roboto"} style={{ left: 2 }} bold>Hoy 22:00 - 22:30</SText>
						</SView>
						<SView col={"xs-2.5"} row center style={{ justifyContent: 'flex-start', }}>
							<SIcon name={'Location'} height={13} width={9} center />
							<SText fontSize={10} font={"Roboto"} style={{ left: 2 }} bold>1,0 Km</SText>
						</SView>
						<SView col={"xs-4"} row center border={'transparent'} style={{ justifyContent: 'flex-end', }}>
							<SText fontSize={20} font={"Roboto"}>Bs. 5,16</SText>
						</SView>
					</SView>
				</SView>
				{this.HeaderItemFoto()}
				{this.HeaderItemDisponible()}
				{this.HeaderItemTitle()}
			</SView>

		</>
	}
	render() {
		return (
			this.getItems()
		);
	}
}
