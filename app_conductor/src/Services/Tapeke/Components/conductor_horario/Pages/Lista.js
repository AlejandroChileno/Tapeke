import React, { Component } from "react";
import { connect } from "react-redux";
import { SDate, SHr, SIcon, SImage, SList, SLoad, SNavigation, SPage, SScrollView2, SSection, SText, STheme, SView } from 'servisofts-component';
import conductor_horario from "..";
import horario from "../../horario";
import pack from "../../pack";
import restaurante from "../../restaurante";
import SSocket from 'servisofts-socket';

class Lista extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		conductor_horario.Actions.getByKeyUsuario(this.props.state.usuarioReducer.usuarioLog.key, this.props, true);
	}


	getPedidos() {
		// TODO Step 1.- Get list array
		var arr = conductor_horario.Actions.getAllPedidoProximoByKey(this.props.state.usuarioReducer.usuarioLog.key, this.props);

		// TODO Step 2.- check if null
		if (!arr) return <SLoad />;

		// TODO Step 3.- check if empty
		if (arr.length <= 0) {
			return <>
				<SView col={"xs-12"} height center border={"transparent"}>
					<SText font={"Roboto"} fontSize={20} color={STheme.color.primary}>No hay pedidos asignados</SText>
				</SView>
			</>
		}

		// TODO Step 4.- check array list and format JSON in template
		console.log("tamaño " + JSON.stringify(arr));
		console.log("primero " + JSON.stringify(arr[0].horario['hora_inicio']));

		// TODO Step 5.- I loop through the array list
		return <SList
			data={arr}
			space={16}
			center
			order={[{ key: "fecha", order: "asc" }]}
			render={(obj) => {

				console.log(obj['fecha'] + " " + obj.horario['hora_inicio']);

				return <>
					<SSection key={"m_compra" + obj["key"]} center>
						<SView col={"xs-12 "} height={120} row border={STheme.color.card} style={{ borderRadius: 8, }} center   >
							<SHr height={10} />
							<SView col={"xs-2.5"} height={60} center border={"transparent"} >
								<SView height={45} width={45} style={{ backgroundColor: '#E9EAEE', borderRadius: 50, }} center   >
									<SImage src={`${SSocket.api.root}restaurante/${obj.restaurante["key"]}`} style={{ borderRadius: 8, resizeMode: 'cover' }} />
								</SView>
							</SView>
							<SView flex height={60} row center border={"transparent"}  >
								<SView flex height style={{ justifyContent: 'center', }} border={"transparent"}  >
									<SText fontSize={16} font={"Roboto"} color={STheme.color.text} >{obj.restaurante["nombre"]} </SText>
									<SHr height={5} />
									<SText fontSize={12} font={"Roboto"} color={STheme.color.gray} >{obj['fecha']} {obj.horario['hora_inicio']} - {obj.horario['hora_fin']}</SText>
								</SView>
								<SView col={"xs-3"} height style={{ justifyContent: 'center', }} border={"transparent"}>
									<SText fontSize={18} font={"Roboto"} color={STheme.color.gray} >x 1</SText>
								</SView>
							</SView>
							<SHr height={10} />
							<SView col={"xs-12"} height={30} row border={"transparent"}  >
								<SView col={"xs-6"} height center onPress={() => { SNavigation.navigate("restaurante/comollegar", { key: obj.restaurante["key"] }); }}   >
									<SText width={120} height={25} style={{ backgroundColor: '#EEEEEE', borderRadius: 4, fontSize: 14, alignItems: 'center', }} center >Ubicacion</SText>
								</SView>
								{/* <SView col={"xs-6"} height center onPress={() => { alert("chau") }}>
									<SText width={120} height={25} style={{ backgroundColor: '#EEEEEE', borderRadius: 4, fontSize: 14, alignItems: 'center', }} center>Cliente </SText>
								</SView> */}
							</SView>
						</SView>
						{/* <SHr height={10} /> */}
					</SSection>
					{/* <SHr height={40} /> */}

				</>
			}} />


	}

	example() {
		var listaKeys = Array.from(Array(5).keys())
		if (listaKeys.length <= 0) {
			//SNavigation.navigate("/")
			return <>
				<SView col={"xs-12"} row center>
					<SView col={"xs-11"} border={'transparent'}  >
						<SHr height={20} />
						<SText fontSize={24} color={STheme.color.primary} font={"Roboto"} bold center>Usted no tiene pedidos</SText>
						<SHr height={20} />
						<SText fontSize={18} color={STheme.color.text} bold center font={"Roboto"} >No tiene pedidos asignados en este momento.</SText>
					</SView>
				</SView>
			</>
		}

		return listaKeys.map((obj, key) => {
			return <>
				<SSection key={"m_compra" + key}>
					<SView col={"xs-12 "} height={90} row border={STheme.color.card} style={{ borderRadius: 8, }}   >
						<SView col={"xs-2"} center   >
							<SView height={40} width={40} style={{ backgroundColor: '#E9EAEE', borderRadius: 50, }} center   >
								{/* <SImage src={`${SSocket.api.root}restaurante/${this.state.keyRestaurante}`} style={{ borderRadius: 8, resizeMode: 'cover' }} /> */}
							</SView>
						</SView>
						<SView col={"xs-10"} row center  >
							<SView col={"xs-10"} height={40} style={{ justifyContent: 'center', }}  >
								{/* <SText fontSize={15} font={"Roboto"} color={STheme.color.text} >{obj['descripcion']}</SText> */}
								{/* <SText fontSize={16} font={"Roboto"} color={STheme.color.text} >{dataRestaurante['nombre']}</SText> */}
								<SText fontSize={16} font={"Roboto"} color={STheme.color.text} >Burger king  {JSON.stringify(key)} </SText>
								<SHr height={5} />
								{/* <SText fontSize={12} font={"Roboto"} color={STheme.color.gray} >{new SDate(obj['fecha_on']).toString("dd-MM-yyyy hh:mm")} - {obj['state']} </SText> */}
								<SText fontSize={12} font={"Roboto"} color={STheme.color.gray} > Hoy miercoles 22/08/2022 </SText>
							</SView>
							<SView col={"xs-2"} height={40} style={{ alignContent: 'center', }}>
								<SView height={36} width={36} center   >
									{/* <SText fontSize={18} font={"Roboto"} color={STheme.color.gray} >x{obj['cantidad']}</SText> */}
									<SText fontSize={18} font={"Roboto"} color={STheme.color.gray} >x 100</SText>
								</SView>
							</SView>
						</SView>
						<SView col={"xs-12"} row   >

							<SView col={"xs-6"} center onPress={() => { SNavigation.navigate('comoteparecio') }}   >
								<SText width={120} height={20} style={{ backgroundColor: '#EEEEEE', borderRadius: 4, fontSize: 14, alignItems: 'center', }} center >Ubicacion</SText>
							</SView>
							{/* <SView col={"xs-6"} center>
							<SText width={120} height={20} style={{ backgroundColor: '#EEEEEE', borderRadius: 4, fontSize: 14, alignItems: 'center', }} center>Ubicacion </SText>
						</SView> */}
						</SView>
					</SView>
					<SHr height={10} />
				</SSection>
			</>

		})
	}



	render() {



		return (
			<>
				<SPage title={""} hidden disableScroll     >

					<SView col={"xs-12"} height={60} backgroundColor={STheme.color.primary} style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8, }} >
						<SView col={"xs-12"} height row center flex style={{ paddingLeft: 16, paddingRight: 16 }}>
							<SView height width={35} center backgroundColor={'transparent'} onPress={() => { SNavigation.goBack(); }} >
								<SIcon name={"Back"} width={24} height={24} fill={STheme.color.secondary} style={{ paddingLeft: 6, paddingTop: 12, }} />
							</SView>
							<SView flex center >
								<SText font={"Roboto"} fontSize={24} color={STheme.color.secondary}>conductor_horario</SText>
							</SView>
							<SView height width={35} center backgroundColor={'transparent'} />
						</SView>
					</SView>
					<SHr height={20} />

					<SView col={"xs-12"} height center border={"transparent"}>
						<SView col={"xs-11 sm-6 md-6 lg-4 xl-4"} height center border={"transparent"}	>
							<SScrollView2 disableHorizontal>
								{this.getPedidos()}
								<SHr height={80} />
							</SScrollView2>
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
export default connect(initStates)(Lista);