import React, { Component } from 'react';

import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import {
	SGradient, SHr, SIcon, SImage, SLoad, SPage, SScrollView2, SText, STheme, SView, SNavigation, SInput,
} from 'servisofts-component';
import Item from './Item';
import PBarraFooter from '../../../../../Components/PBarraFooter';

class Favoritos extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		this.key = SNavigation.getParam("keyUsuario");

	}

	render() {
		return (
			<SPage title={'Mis Favoritos'} height disableScroll  >
				<ScrollView>
					<SView col={"xs-12"} row center height  >
						<SView col={"xs-11 md-8 lg-8 xl-6"} center height >
							<SHr height={10} />
							<Item></Item>
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