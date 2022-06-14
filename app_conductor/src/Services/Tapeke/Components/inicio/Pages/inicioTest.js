import React, { Component } from "react";
import { connect } from "react-redux";
import { SPage } from "servisofts-component";
import ShowBanner from "./ShowBanner";
import ShowInfo from "./ShowInfo";
import ShowMapa from "./ShowMapa";




class inicioTest extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.keyUserEmisor = "98871a44-44ee-48ca-b251-8e084ec5064f";

	}








	render() {

		return (
			<>

				<SPage title={""} hidden disableScroll center>

					<ShowBanner />
					<ShowMapa />
					<ShowInfo />
				</SPage>




			</>
		);
	}
}
const initStates = (state) => {
	return { state };
};
export default connect(initStates)(inicioTest);