import React, { Component } from 'react';

import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import {
	SGradient, SHr, SIcon, SImage, SLoad, SPage, SScrollView2, SText, STheme, SView, SNavigation, SInput,
} from 'servisofts-component';
import Item2 from '../Components/Item2';
import PBarraFooter from '../../../../../Components/PBarraFooter';
import BarraSuperiorTapeke from '../../../../../Components/BarraSuperiorTapeke';
import Parent from '../index'



class Favoritos extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		this.key = SNavigation.getParam("keyUsuario");

	}




	getRestaurante() {
		var data = Parent.Actions.getAll(this.props);
		if (!data) return <SLoad />;
		var listaKeys = Object.keys(data);
		return listaKeys.map((key, index) => {
			var obj = data[key];
			return <SView col={"xs-10 md-5 lg-4 xl-3"} border={'cyan'} >
				<Item2 data={obj} ></Item2>
			</SView>
		})
	}


	render() {
		return (

			<SPage title={''} hidden disableScroll center>
				<BarraSuperiorTapeke  >
					<SText font={"Roboto"} fontSize={25} color={STheme.color.secondary}>Mis Favoritos</SText>
				</BarraSuperiorTapeke>

				<SScrollView2 disableHorizontal={true}>
					<SView col={"xs-12"} center height border={'transparent'} >
						{this.getRestaurante()}
					</SView >
					<SHr height={80} />
				</SScrollView2>

				<PBarraFooter />

			</ SPage >
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(Favoritos);