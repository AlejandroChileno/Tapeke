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
		var data = conductor_horario.Actions.getByKeyUsuario(this.props.state.usuarioReducer.usuarioLog.key, this.props);
		// var data = conductor_horario.Actions.getAll(this.props);
		var data_horario = horario.Actions.getAll(this.props);
		var data_restaurante = restaurante.Actions.getAll(this.props);
		var data_pack = pack.Actions.getAll(this.props);

		// var data_user = pack.Actions.getAll(this.props);

		if (!data) return <SLoad />;
		if (!data_horario) return <SLoad />;
		if (!data_restaurante) return <SLoad />;
		if (!data_pack) return <SLoad />;
		var dataFinal = {}

		Object.values(data).map(obj_ch => {
			var horario = data_horario[obj_ch.key_horario]
			var restaurante = data_restaurante[horario.key_restaurante]
			var sd = new SDate();
			if (!horario) return null;
			if (horario?.dia == sd.getDayOfWeek()) {
				//igual no hace nada
			} else if (horario?.dia > sd.getDayOfWeek()) {
				sd.addDay((- sd.getDayOfWeek()) + horario?.dia);
			} else if (horario?.dia < sd.getDayOfWeek()) {
				sd.addDay((7 - sd.getDayOfWeek()) + horario?.dia);
			}
			var fecha = sd.toString("yyyy-MM-dd");
			var dia = new SDate(fecha + " " + horario?.hora_fin, "yyyy-MM-dd hh:mm");
			if (dia.getTime() < new SDate().getTime()) {
				fecha = sd.addDay(7).toString("yyyy-MM-dd");
			}

			dataFinal[obj_ch.key] = {
				...obj_ch,
				horario,
				restaurante,
				fecha: fecha
			};
		})

		var arr = Object.values(dataFinal).slice(0, 6);



		// const found = arr.find(element => element > 2);
		console.log("tamaño " + arr[0].horario['hora_inicio']);
		console.log("tamaño " + JSON.stringify(arr[0]));

		// INFO Aqui ordeno por fecha mas cercas


		return <SList
			data={arr}
			space={16}
			center
			order={[{ key: "fecha", order: "asc" }]}
			render={(obj) => {

				console.log(obj['fecha'] + " " + obj.horario['hora_inicio']);

				return <>
					{/* <SView col={"xs-12"} border={'green'} >
					<SText > {JSON.stringify(obj["fecha"], "\n", "\t")} </SText>
					<SText > {JSON.stringify(obj.horario["hora_inicio"], "\n", "\t")} </SText>
					<SText > {JSON.stringify(obj.horario["hora_fin"], "\n", "\t")} </SText>
					<SText > {JSON.stringify(obj.restaurante["nombre"], "\n", "\t")} </SText>
					<SText > {JSON.stringify(obj["key"], "\n", "\t")} </SText>
					<SText > {JSON.stringify(obj, "\n", "\t")} </SText>
				</SView> */}
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
									<SText fontSize={22} font={"Roboto"} color={STheme.color.gray} >x 13</SText>
								</SView>
							</SView>
							<SHr height={10} />

							<SView col={"xs-12"} height={30} row border={"transparent"}  >
								<SView col={"xs-6"} height center onPress={() => { alert("hola") }}   >
									<SText width={120} height={25} style={{ backgroundColor: '#EEEEEE', borderRadius: 4, fontSize: 14, alignItems: 'center', }} center >Ubicacion</SText>
								</SView>
								<SView col={"xs-6"} height center onPress={() => { alert("chau") }}>
									<SText width={120} height={25} style={{ backgroundColor: '#EEEEEE', borderRadius: 4, fontSize: 14, alignItems: 'center', }} center>Cliente </SText>
								</SView>
							</SView>
						</SView>
						{/* <SHr height={10} /> */}
					</SSection>
					{/* <SHr height={40} /> */}

				</>
			}} />
		// })

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