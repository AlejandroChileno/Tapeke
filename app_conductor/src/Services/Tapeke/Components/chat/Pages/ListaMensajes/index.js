import React, { Component } from 'react';
import { SHr, SScrollView2, SText, STheme, SView } from 'servisofts-component';

export default class ListaMensajes extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    msjLeft(texto) {
        var timeMSJ = "10: 21 pm";
        return (<>
            <SView col={"xs-12"} row style={{ justifyContent: 'flex-start', }}>
                <SView style={{ maxWidth: '90%', minWidth: '10%', paddingLeft: 8, paddingRight: 8, borderRadius: 5, backgroundColor: STheme.color.card }}>
                    <SView height={8} />
                    <SText>{texto}</SText>
                    <SText fontSize={8} style={{ alignItems: 'flex-end' }} >{timeMSJ}</SText>
                    <SView height={8} />
                </SView>
            </SView>
            {/* <SView col={"xs-12"} row center border={"red"} style={{ maxWidth: '95%', minWidth: "100%",justifyContent: 'flex-start' }}>
                <SView style={{ maxWidth: '95%', minWidth: "100%", overflow: "hidden", borderRadius: 5, backgroundColor: STheme.color.danger, }} border={"yellow"} row   >
                    <SView width={5} height backgroundColor={"transparent"} />
                    <SView flex height border={"blue"}  >
                        <SText >{texto}</SText>
                        <SText fontSize={8} style={{ alignItems: 'flex-end' }} >{timeMSJ}</SText>
                    </SView>
                    <SView width={5} height backgroundColor={"transparent"} />
                </SView>
            </SView> */}
            <SView height={20} backgroundColor={"transparent"} />
        </>
        );
    }
    msjRight(texto) {
        var timeMSJ = "10: 21 pm";
        return (<>
            <SView col={"xs-12"} row style={{ justifyContent: 'flex-end', }}>
                <SView style={{ maxWidth: '90%', minWidth: '10%', paddingLeft: 8, paddingRight: 8, borderRadius: 5, backgroundColor: STheme.color.card }}>
                    <SView height={8} />
                    <SText>{texto}</SText>
                    <SText fontSize={8} style={{ alignItems: 'flex-end' }} >{timeMSJ} </SText>
                    <SView height={8} />
                </SView>
            </SView>
            <SView height={20} backgroundColor={"transparent"} />

        </>
        );
    }

    render() {
        return (
            <SView col={"xs-12 md-9 lg-8"} height backgroundColor={"transparent"} border={"transparent"}  >
                <SScrollView2 disableHorizontal  >
                    <SHr height={20} />
                    <SView col={"xs-12"} row center>
                        <SView col={"xs-11"} height border={"transparent"}   >
                            {this.msjLeft("Hola Ing. Alvaro Siles ok")}
                            {this.msjRight("Hola Estudiante, que se le ofrece?")}
                            {this.msjLeft("Can you believe this amazing chat bubbles?It's all CSS. Can you believe this amazing chat bubbles? It's al CSS.Can you believe this amazing chat bubbles?It's all CSS. 😍")}
                            {this.msjRight("Can you believe this amazing chat bubbles?It's all CSS. Can you believe this amazing chat bubbles? It's al CSS.Can you believe this amazing chat bubbles?It's all CSS. 😍")}
                            {this.msjLeft("Can you believe this amazing chat bubbles?It's all CSS. Can you believe this amazing chat bubbles? It's al CSS.Can you believe this amazing chat bubbles?It's all CSS. 😍 Can you believe this amazing chat bubbles?It's all CSS. Can you believe this amazing chat bubbles? It's al CSS.Can you believe this amazing chat bubbles?It's all CSS. 😍 Can you believe this amazing chat bubbles?It's all CSS. Can you believe this amazing chat bubbles? It's al CSS.Can you believe this amazing chat bubbles?It's all CSS. 😍")}
                            {this.msjLeft("Chau 😍")}
                            {this.msjLeft("Chau 😍")}
                            {this.msjRight("Chau 😍")}
                            {this.msjRight("Chau 😍")}
                        </SView>
                    </SView>
                </SScrollView2 >
            </SView >
        );
    }
}
