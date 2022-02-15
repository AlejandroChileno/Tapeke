import React, { Component } from 'react';

import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import {
	SGradient, SHr, SIcon, SImage, SLoad, SPage, SScrollView2, SText, STheme, SView, SNavigation, SInput,
} from 'servisofts-component';
import Item from './Item';

class Favoritos extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		this.key = SNavigation.getParam("keyUsuario");

	}

	render() {
		return (
			<SPage title={'Favoritos'} center>
				<SText fontSize={18} font={"LondonMM"} bold >{this.key}</SText>
				<Item></Item>
			</SPage>
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(Favoritos);