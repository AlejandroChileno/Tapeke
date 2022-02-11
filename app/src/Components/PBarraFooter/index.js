import React, { Component } from 'react';

import { SView, SText, STheme, SGradient, SIcon, SNavigation } from 'servisofts-component'

export default class PBarraFooter extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	getItem({ key, title, icon, url }) {
		var color = STheme.color.secondary + "66";
		if (key == this.props.url) {
			color = STheme.color.info + "ff";
		}
		return <SView flex center height onPress={() => {
			SNavigation.navigate(url);
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
			<SView col={"xs-12"} height={60} >
				<SView col={'xs-12'} row height={50} backgroundColor={STheme.color.primary}  >
					{this.getItem({ key: "100", title: 'Descrubir', icon: 'Girl', url: 'home' })}
					{this.getItem({ key: "200", title: 'Explorar', icon: 'Girl', url: 'home' })}
					{this.getItem({ key: "300", title: 'Favoritos', icon: 'Girl', url: 'home' })}
				</SView>
			</SView>
		);
	}
}
