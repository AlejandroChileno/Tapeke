import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SImage, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';

class ListaUsuario extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	getEstadoCotiza(tipo) {
		switch (tipo) {
			case "aceptada":
				return "#018992";
			case "en espera":
				return "#DAA047";

			default:
				return "#DAA047";
		}
	}

	getLista(cotizacion, glosa, fecha, estado) {
		return (<>
			<SView col={'xs-11 md-8 lg-6 xl-4'} height={90} row center backgroundColor={'#EEEEEE'} style={{ borderRadius: 8, }}  >
				<SView width={80} height style={{
					borderBottomStartRadius: 7,
					borderTopStartRadius: 7,
					backgroundColor: "#CF9749",
				}} row center >
					<SImage src={'https://www.saludymedicina.org/wp-content/uploads/2020/08/Captura-de-pantalla-2020-08-01-a-las-7.47.01.png'} />
				</SView>
				<SView width={8} height />
				<SView flex height row center >
					<SView col={"xs-12"} row style={{ justifyContent: 'flex-start' }} >
						< SText col={"xs-12"} fontSize={18} font={"LondonTwo"} color={'#000000'} Bold >COTIZACIÓN: {cotizacion} Bs  </SText>
						< SText col={"xs-12"} fontSize={12} font={"LondonTwo"} color={'#666666'} >GLOSA: {glosa} </SText>
						< SText col={"xs-12"} fontSize={12} font={"LondonTwo"} color={'#666666'} >FECHA: {fecha}</SText>
					</SView>
					<SView col={"xs-12"} row style={{ justifyContent: 'flex-end' }} center>
						<SView width={12} height={12} style={{ borderRadius: 50 }} backgroundColor={this.getEstadoCotiza(estado)} />
						<SView width={4} height />
						< SText fontSize={12} font={"LondonTwo"} color={'#018992'} >Cotización {estado}</SText>
					</SView>
				</SView>
				<SView width={8} height />

			</SView>

			<SView col={'xs-12'} height={18} />

		</>
		);
	}

	render() {
		return (
			<SPage title={'ListaUsuario'}>

				<SView col={'xs-12'} height={50} />
				<SView col={'xs-12'} center >
					{this.getLista('1', 'glosa', 'fecha', 'aceptada')}
					{this.getLista('12', 'Prueba detallada Nro 58', '02/08/2021', 'aceptada')}
					{this.getLista('12', 'Prueba detallada Nro 58', '02/08/2021', 'en espera')}
					{this.getLista('12', 'Prueba detallada Nro 58', '02/08/2021', 'aceptada')}
				</SView>



			</SPage >
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(ListaUsuario);