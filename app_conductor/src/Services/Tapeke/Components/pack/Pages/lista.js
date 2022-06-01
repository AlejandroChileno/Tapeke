import React, { Component } from "react";
import { connect } from "react-redux";
import { SHr, SLoad, SPage, SText, SView } from 'servisofts-component';
import pack from "..";

class lista extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	getPacks() {
		var data = pack.Actions.getAll(this.props);
		if (!data) return <SLoad />;
		var listaKeys = Object.keys(data);
		return listaKeys.map((key, index) => {
			var obj = data[key];
			return <SView col={"xs-10 md-5 lg-8 xl-3"} border={'transparent'} >
				<SText > {JSON.stringify(obj)} </SText>
			</SView>
		})

	}

	render() {
		return (
			<>
				<SPage title={""} hidden disableScroll   >
					<SView col={"xs-12"} row center >
						<SView col={"xs-11 sm-6 md-6 lg-4 xl-4"} >
							<SHr height={20} />
							{this.getPacks()}
							<SHr height={20} />
						</SView>
					</SView>
				</SPage>
			</>
		);
	}
}
const initStates = (state) => {
	return { state };
};
export default connect(initStates)(lista);