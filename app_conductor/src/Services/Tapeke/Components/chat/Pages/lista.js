import React, { Component } from "react";
import { connect } from "react-redux";
import { SHr, SIcon, SImage, SLoad, SNavigation, SPage, SScrollView2, SText, STheme, SView } from 'servisofts-component';
import chat from "..";
import restaurante from "..";
import usuario from "../../../../Usuario/Components/usuario";
import SSocket from 'servisofts-socket';
import ListaMensajes from "../Pages/ListaMensajes";
import FooterChats from "../Pages/FooterChats";
import HeaderChat from "./HeaderChat";

class ListadosR extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.keyUserEmisor = "98871a44-44ee-48ca-b251-8e084ec5064f";

	}



	getRestaurantes() {
		var data = chat.Actions.getAll(this.props);
		if (!data) return <SLoad />;
		var listaKeys = Object.keys(data);
		return listaKeys.map((key, index) => {
			var obj = data[key];
			console.log(obj);
			return <SView col={"xs-12"} border={'transparent'} >
				<SText > {JSON.stringify(obj["mensaje"], "\n", "\t")} </SText>
				{/* <SText > {JSON.stringify(obj["key"])} </SText> */}
			</SView>
		})
	}




	render() {
		var emisor = usuario.Actions.getByKey(this.keyUserEmisor, this.props);
		if (!emisor) return <SLoad />;
		console.log(emisor);
		return (
			<>
				
				<SScrollView2 disableHorizontal  >

					<SView flex border={"transparent"} center >
						<ListaMensajes emisor={this.keyUserEmisor} />
						{/* {this.getRestaurantes()} */}

					</SView>
				</SScrollView2   >
				<HeaderChat emisor={this.keyUserEmisor} />

				<FooterChats emisor={this.keyUserEmisor} />

			</>
		);
	}
}
const initStates = (state) => {
	return { state };
};
export default connect(initStates)(ListadosR);