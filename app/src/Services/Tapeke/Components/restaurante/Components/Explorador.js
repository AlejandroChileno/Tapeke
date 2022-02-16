import React, { Component } from 'react';

import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import {
	SGradient, SHr, SIcon, SImage, SLoad, SPage, SScrollView2, SText, STheme, SView, SNavigation, SInput,
} from 'servisofts-component';
import Item2 from './Item2';
import PBarraFooter from '../../../../../Components/PBarraFooter';
import BarraSuperiorTapeke from '../../../../../Components/BarraSuperiorTapeke';



class Explorador extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		this.key = SNavigation.getParam("keyUsuario");

	}




	render() {
		return (

			<SPage title={'Mis Favoritos'} hidden disableScroll>
				<BarraSuperiorTapeke >
					<SView row >
						<SView height={50} width={15} backgroundColor={'transparent'}    >
							<SView style={{ top: 6 }} center >
								<SIcon name={"Location"} width={12} height={17} fill="#fff" />
							</SView>
						</SView>

						<SView height={50} flex center style={{ justifyContent: 'center', paddingLeft: 8, paddingRight: 8, }}  >
							<SText font={"Roboto-Bold"} fontSize={10} center color={"#fff"}>Las palmas, Santa cruz de la sierra</SText>
							<SText font={"Roboto-Bold"} fontSize={12} center color={"#fff"}>A menos de 30 km</SText>
						</SView>

						<SView height={50} width={20} backgroundColor={'transparent'} >
							<SView style={{ top: 12 }} center >
								<SIcon name={"Back"} height={12} fill="#fff" style={{ transform: [{ rotate: "-90deg" }], }} />
							</SView>
						</SView>
					</SView>
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

				<PBarraFooter />

			</ SPage >
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(Explorador);