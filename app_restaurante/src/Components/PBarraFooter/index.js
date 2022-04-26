import React, { Component } from 'react';

import { SView, SText, STheme, SGradient, SIcon, SNavigation } from 'servisofts-component'

export default class PBarraFooter extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
		this.page = SNavigation.getParam("page");
		
	}

	getItem({ key, title, icon, url, params }) {
		var color = STheme.color.secondary + "66";
		if (key == this.props.url) {
			color = STheme.color.info + "ff";
		}
		
		return <SView flex center style={{backgroundColor: (this.page != key ? STheme.color.primary : "#ad5308")}} height onPress={() => {
			this.setState({
				key: key
			})
			console.log(this.page + " - "+ key)
			SNavigation.navigate(url, {page: key});
		}}>
			<SView height={23} colSquare center>
				<SIcon name={icon} fill={STheme.color.secondary} />
			</SView>
			<SView height={2} />
			<SText font={"Arial"} fontSize={8} center color={STheme.color.secondary}  >{title}</SText>
		</SView>
	}
	render() {
		return (
			<SView col={"xs-12"} height={50} border={'transparent'} style={{ backgroundColor: STheme.color.primary }}
				// style={{ position: 'absolute', bottom: 0, backgroundColor: STheme.color.primary, overflow: 'hidden' }}	
			>
				<SView col={'xs-12'} row height >
					{this.getItem({ key: "1", title: 'Pedidos de hoy', icon: 'Mpedidos', url: '/' })}
					{this.getItem({ key: "2", title: 'Calendario', icon: 'Mcalendario', url: 'pedido/calendario' })}
					{this.getItem({ key: "3", title: 'Mi calificación', icon: 'Mcalificacion', url: 'calificacion' })}
				</SView>
			</SView >
		);
	}
}
