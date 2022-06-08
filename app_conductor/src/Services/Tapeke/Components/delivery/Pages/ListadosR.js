import React, { Component } from "react";
import { connect } from "react-redux";
import { SHr, SLoad, SPage, SText, SView } from 'servisofts-component';
import delivery from "..";
import conductor_horario from "../../conductor_horario";

class ListadosR extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}



	getAllDate() {
		var data = delivery.Actions.getActivo(this.props);
		
		if (!data) return <SLoad />;
		var listaKeys = Object.keys(data);

		return listaKeys.map((key, index) => {
			var obj = data[key];
			return <SView col={"xs-12"} border={'transparent'} >
				<SText > {JSON.stringify(obj, "\n", "\t")} </SText>
				{/* <SText > {JSON.stringify(obj["key"])} </SText> */}
			</SView>
		})
	}




	render() {
		return (
			<>
				<SPage title={""} hidden disableScroll   >
					<SView col={"xs-12"} row center >
						<SView col={"xs-11 sm-6 md-6 lg-4 xl-4"} height>
							<SHr height={20} />
							{this.getAllDate()}
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
export default connect(initStates)(ListadosR);