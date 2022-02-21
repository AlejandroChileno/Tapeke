import React, { Component } from 'react';

import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import {
	SGradient, SHr, SIcon, SImage, SLoad, SPage, SScrollView2, SText, STheme, SView, SNavigation, SInput,
} from 'servisofts-component';
import Item from '../Components/Item';

class Categoria extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};

		this.key = SNavigation.getParam("keyCategoria");

	}

	render() {
		return (
			<SPage title={'Categoria: ' + this.key} center>

				<Item></Item>
			</SPage>
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(Categoria);