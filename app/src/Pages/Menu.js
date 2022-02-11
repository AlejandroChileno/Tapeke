import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SInput, SPage, SText, STheme, SView } from 'servisofts-component';
import PBarraFooter from '../Components/PBarraFooter';

class Menu extends Component {
	constructor(props) {
		super(props);
		this.state = {
		};
	}

	header() {
		return (<SView col={"xs-12"} height={50} row>
			<SView flex style={{
				justifyContent: "center",
			}}>
				<SText fontSize={28} bold>Camara</SText>
			</SView>
			<SView row center >

			</SView>
		</SView>
		);
	}

	lista() {
		return (
			<>
				<SView col={"xs-12"} height={32} >
					<SInput
						height
						placeholder={"Search for chats and people"}
						icon={
							<SView width={30} center>
								<SIcon name={"Search"} width={20} fill={STheme.color.secondary} />
							</SView>
						}
						style={{
							backgroundColor: STheme.color.card,
							borderRadius: 8,
						}} />
				</SView>
				<SView height={24} />
				<SView col={"xs-12"} flex>

				</SView>
			</>
		);

	}

	render() {
		return (
			<SPage hidden >
				<SView col={"xs-12"} center height backgroundColor={STheme.color.background}>
					<SView col={"xs-11"} flex >
						<SView height={24}></SView>

						{this.header()}
						{this.lista()}


						{/* <Header /> */}
						{/* <List /> */}
					</SView>
					<PBarraFooter url={"camara"} />
				</SView>

			</SPage>
		);
	}
}
const initStates = (state) => {
	return { state }
};
export default connect(initStates)(Menu);