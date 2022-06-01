import React, { Component } from 'react';

import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import {
	SGradient, SHr, SIcon, SImage, SLoad, SPage, SScrollView2, SText, STheme, SView, SNavigation, SInput, SForm, SButtom
} from 'servisofts-component';
import Item2 from '../../restaurante/Components/Item2';
import PBarraFooter from '../../../../../Components/PBarraFooter';
import BarraSuperiorFiltro from '../../../../../Components/BarraSuperiorFiltro';
import PButtom from '../../../../../Components/PButtom';

import Parent from '..';

class Filtros extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		this.key = SNavigation.getParam("keyUsuario");

	}

	getContent() {
		// this.data = {};
		// if (this.key) {
		// 	this.data = Parent.Actions.getByKey(this.key, this.props);
		// 	if (!this.data) return <SLoad />
		// } else {
		// 	this.data = {};
		// }
		this.data = Parent.Actions.getCustom(this.props);
		return <SForm
			ref={(form) => { this.form = form; }}
			col={"xs-11 sm-9 md-7 lg-5 xl-4"}
			// inputProps={{
			// 	// customStyle: "Calistenia"
			// 	col: "xs-12",
			// 	separation: 16
			// }}
			inputs={{
				nombre: { label: "Nombre del establecimiento", placeholder: "Buscar", defaultValue: this.data?.nombre },
				categoria: { label: "Categoría", placeholder: "Todas", defaultValue: this.data?.categoria },
				preferencias: { label: "Preferencias alimenticias", placeholder: "Ninguna", defaultValue: this.data?.preferencias },
				horario: { label: "Horario de recogida", placeholder: "Todo el día", defaultValue: this.data?.horario },
				pack: { label: "Ocultar sin packs", placeholder: "No", defaultValue: this.data?.pack },
			}}
			// onSubmitName={"APLICAR"}
			onSubmit={(values) => {
				Parent.Actions.setCustom(values, this.props);
				SNavigation.goBack();
			}}
		/>
	}

	render() {
		return (

			<SPage title={'Mis Favoritos'} hidden disableScroll>

				<BarraSuperiorFiltro clearAlvaro={() => { this.form.clear() }}  >
					<SText font={"Roboto"} fontSize={20} color={"#fff"}>Filtros</SText>
				</BarraSuperiorFiltro>



				{/* <PButtom onPress={() => { this.form.clear() }} >{("Limpiar")}</PButtom> */}


				<SScrollView2 disableHorizontal={true}>
					<SView center col={"xs-12"} row>
						<SHr height={10} />
						{this.getContent()}
						<SHr height={20} />
						<PButtom
							props={{
								type: "outline"
							}}
							onPress={() => { this.form.submit() }}
						>{("APLICAR")}</PButtom>
						<SHr height={30} />
					</SView>
				</SScrollView2>

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