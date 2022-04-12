import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SNavigation, SPage, SText, SView, STheme, SLoad, SButtom, SIcon, SWebView, SInput } from 'servisofts-component';
import { WebView } from 'react-native';
import PButtom from '../../Components/PButtom';


class ComoTeParecio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectValue: -1
		};
	}



	getEstrella() {
		// let arr = Array(5);
		// // arr.fill('⭐');
		// arr.fill('⭐', 1);
		// console.log(arr);

		let arr = Array(5).fill(0);
		return arr.map((x, i) => {
			return <>
				<SView col={"xs-1.5"} row center onPress={() => {
					if (this.state.selectValue == i) {
						// this.setState({ selectValue: 1 });
						// alert("igual")
					}
					this.setState({ selectValue: i });
				}}>
					<SIcon name={i > this.state.selectValue ? "EstrellaOff" : "EstrellaOn"} width={36} height={36} fill="white" />
				</SView>
			</>
		})
	}





	render() {
		return (
			<>
				<SPage title={'Ayuda'}>

					<SHr height={20} />
					<SView col={"xs-12  "} row center >
						<SView col={"xs-11 sm-6 lg-3.5 "} backgroundColor={STheme.color.primary} style={{ borderRadius: 16 }} center >
							<SView col={"xs-11  "} center >
								<SHr height={50} />
								<SText fontSize={36} font={"Roboto"} color={STheme.color.secondary} bold>¿Cómo te pareció?</SText>
								<SHr height={5} />
								<SText fontSize={24} font={"Roboto"} color={STheme.color.secondary} >Califica tu experiencia</SText>
								<SHr height={20} />
								{<SView col={"xs-11 "} center row  >
									{this.getEstrella()}

								</SView>}
								<SHr height={20} />
								<SView col={"xs-12 "} row>
									<SView col={"xs-4"}>
										<SView col={"xs-12"} center>
											<SView width={70} height={70} border={STheme.color.card} backgroundColor={'#F39773'} style={{ borderRadius: 35 }} center >
												<SIcon name={"Medalla1"} width={40} height={40} fill="transparent" />
											</SView>
										</SView>
										<SText col={"xs-12 "} fontSize={12} font={"Roboto"} color={STheme.color.secondary} center  >Buena calidad</SText>
									</SView>
									<SView col={"xs-4"}  >
										<SView col={"xs-12"} center>
											<SView width={70} height={70} border={STheme.color.card} backgroundColor={'#F39773'} style={{ borderRadius: 35 }} center >
												<SIcon name={"Medalla2"} width={40} height={40} fill="white" />
											</SView>
										</SView>
										<SText col={"xs-12 "} fontSize={12} font={"Roboto"} color={STheme.color.secondary} center  >Buena calidad</SText>
									</SView>
									<SView col={"xs-4"}   >
										<SView col={"xs-12"} center>
											<SView width={70} height={70} border={STheme.color.card} backgroundColor={'#F39773'} style={{ borderRadius: 35 }} center >
												<SIcon name={"Medalla3"} width={40} height={40} fill="white" />
											</SView>
										</SView>
										<SText col={"xs-12 "} fontSize={12} font={"Roboto"} color={STheme.color.secondary} center  >Buena calidad</SText>
									</SView>
								</SView>
								<SHr height={40} />
								<SText col={"xs-12"} fontSize={16} font={"Roboto"} color={STheme.color.secondary} style={{ justifyContent: 'flex-start' }} >Describe tu experiencia (opcional)</SText>
								<SHr height={5} />
								<SInput type={'textArea'} fontSize={18} height={110} font={"Roboto"} color={STheme.color.secondary} style={{ borderRadius: 8 }} center backgroundColor={STheme.color.card} placeholder={"Descripción"}
								/>
								<SHr height={5} />
								<PButtom fontSize={20} height={50} bold withe center >Enviar</PButtom>
								<SHr height={60} />
							</SView>
						</SView>
					</SView>
					<SHr height={20} />


	 
				</SPage>
			</>
		);
	}
}

const initStates = (state) => {
	return { state }
};
export default connect(initStates)(ComoTeParecio);