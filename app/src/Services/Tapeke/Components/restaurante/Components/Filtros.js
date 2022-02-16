import React, { Component } from 'react';

import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import {
	SGradient, SHr, SIcon, SImage, SLoad, SPage, SScrollView2, SText, STheme, SView, SNavigation, SInput,
} from 'servisofts-component';
import Item2 from './Item2';
import PBarraFooter from '../../../../../Components/PBarraFooter';
import BarraSuperiorFiltro from '../../../../../Components/BarraSuperiorFiltro';



class Filtros extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		this.key = SNavigation.getParam("keyUsuario");

	}


	render() {
		return (

			<SPage title={'Mis Favoritos'} hidden disableScroll>
				<BarraSuperiorFiltro  >
					<SText font={"Roboto"} fontSize={20} color={"#fff"}>Filtros</SText>
				</BarraSuperiorFiltro>



				<SHr height={50} />
				<PBarraFooter />

			</ SPage >
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(Filtros);