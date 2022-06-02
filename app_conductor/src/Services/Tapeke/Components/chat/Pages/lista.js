import React, { Component } from "react";
import { connect } from "react-redux";
import { SHr, SIcon, SImage, SLoad, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import chat from "..";
import restaurante from "..";
import usuario from "../../../../Usuario/Components/usuario";
import SSocket from 'servisofts-socket';
import ListaMensajes from "../Pages/ListaMensajes";
import FooterChats from "../Pages/FooterChats";

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
				<SText > {JSON.stringify(obj, "\n", "\t")} </SText>
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
				<SView col={"xs-12"} height={60} backgroundColor={STheme.color.primary} style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8, }} >
					<SView col={"xs-12"} height row center flex style={{ paddingLeft: 16, paddingRight: 16 }}>

						<SView height width={35} center backgroundColor={'transparent'} onPress={() => { SNavigation.goBack(); }} border={"transparent"}>
							<SIcon name={"Back"} width={24} height={24} fill={STheme.color.secondary} style={{ paddingLeft: 6, }} />
						</SView>

						<SView flex center row  >
							<SView width={60} center style={{ textAlign: "right" }} height border={"transparent"}>
								<SView style={{ width: 50, height: 50, borderRadius: 30, overflow: "hidden", borderWidth: 1, borderColor: "#fff" }}>
									<SImage src={SSocket.api.root + "usuario/" + emisor.key + "?date=" + new Date().getTime()} style={{
										width: "100%", height: "100%", resizeMode: "cover"
									}} />
								</SView>
							</SView>
							<SView flex style={{ justifyContent: 'flex-start', }} border={"transparent"}  >
								<SText font={"Roboto-Bold"} style={{ color: "#fff", fontSize: 20, }}  >{emisor.Nombres}</SText>
							</SView>
						</SView>

						<SView height width={35} center backgroundColor={'transparent'} />
					</SView>
				</SView>

				{/* <SPage title={""} hidden disableScroll   >
					<SView col={"xs-12"} row center >
						<SView col={"xs-11 sm-6 md-6 lg-4 xl-4"} height>
							<SHr height={20} />
							{this.getRestaurantes()}
							<SHr height={20} />
						</SView>
					</SView>
				</SPage> */}

				<SView flex border={"transparent"} center >
					<ListaMensajes />
				</SView>
				<FooterChats />

			</>
		);
	}
}
const initStates = (state) => {
	return { state };
};
export default connect(initStates)(ListadosR);