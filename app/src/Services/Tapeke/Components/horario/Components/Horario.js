import React, { Component } from 'react';
import { SIcon, SImage, SNavigation, SText, STheme, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket';

export default class Horario extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    item() {
        return <>
            <SView col={"xs-11"} height={50} row center style={{ position: 'absolute', top: 75, justifyContent: 'flex-start', }} >
                <SView width={250} height={21} row center style={{ borderRadius: 8, overflow: 'hidden', backgroundColor: STheme.color.primary, left: 1, position: 'absolute' }}>
                    {/* <SText col={"xs-12"} fontSize={12} font={"Roboto"} color={STheme.color.secondary} center style={{ position: 'absolute' }} > HOLA </SText> */}
                    <SText col={"xs-12"} fontSize={12} font={"Roboto"} color={STheme.color.secondary} center style={{ position: 'absolute' }} >{this.props.data.key_restaurante}</SText>
                </SView>
            </SView>
        </>
    }


    render() {
        return (
            this.item()
        );
    }
}
