import React, { Component } from "react";
import { connect } from "react-redux";
import { SLoad, SScrollView2, SText, SView } from 'servisofts-component';
import chat from "..";
import usuario from "../../../../Usuario/Components/usuario";
import FooterChats from "../Pages/FooterChats";
import ListaMensajes from "../Pages/ListaMensajes";
import HeaderChat from "./HeaderChat";
import { ScrollView } from 'react-native';




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
				<SView col={"xs-12"} height backgroundColor={"transparent"}>
					<SScrollView2 disableHorizontal  >
						{/* <SScrollView2 disableHorizontal  > */}
						{/* INFO SE DEJA PARA EL NOMBRE USUARIO {this.getRestaurantes()} */}
						<SView height={60} />
						<SView flex border={"transparent"} center >
							<ListaMensajes emisor={this.keyUserEmisor} />
						</SView>
						{/* INFO SE DEJA PARA EL IMPUT EL FOOTER */}
						<SView height={70} />
					</SScrollView2   >
				</SView>
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