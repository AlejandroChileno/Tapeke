import React, { Component } from 'react';
import { SScrollView2, SText, STheme, SView } from 'servisofts-component';

export default class ListaMensajes extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    msjLeft(texto) {
        var timeMSJ = "10: 21 pm";
        return (<>
            <SView col={"xs-12"} row center border={"red"} style={{ justifyContent: 'flex-start' }}>
                <SView style={{ maxWidth: '95%', minWidth: "100%", overflow: "hidden", borderRadius: 5, backgroundColor: STheme.color.card, }} border={"yellow"} row center >
                    <SView width={5} height backgroundColor={"transparent"} />
                    <SView flex height border={"blue"}  >
                        <SText >{texto}</SText>
                        <SText fontSize={8} style={{ alignItems: 'flex-end' }} >{timeMSJ}</SText>
                    </SView>
                    <SView width={5} height backgroundColor={"transparent"} />
                </SView>
            </SView>
            <SView height={24} />
        </>
        );
    }
    msjRight(texto) {
        var timeMSJ = "10: 21 pm";
        return (<>
            <SView col={"xs-12"} row border={"transparent"} style={{ justifyContent: 'flex-end' }}>
                <SView style={{ maxWidth: '95%', borderRadius: 5, backgroundColor: STheme.color.card, }} border={"transparent"} row center >
                    <SView width={5} height backgroundColor={"transparent"} />
                    <SView flex height border={"transparent"}  >
                        <SText >{texto}</SText>
                        <SText fontSize={8} style={{ alignItems: 'flex-end' }} >{timeMSJ}</SText>
                    </SView>
                    <SView width={5} height backgroundColor={"transparent"} />
                </SView>
            </SView>
            <SView height={24} />
        </>
        );
    }

    render() {
        return (
            <SView col={"xs-12 md-9 lg-8"} height backgroundColor={"black"} border={"cyan"}  >
                <SScrollView2 disableHorizontal  >
                    <SView col={"xs-12"} center >
                        <SView col={"xs-11"} border={"transparent"} style={{ top: 24 }} >
                            {this.msjLeft("Hola Ing. Alvaro Siles ok")}
                            {this.msjRight("Hola Estudiante, que se le ofrece?")}
                            {this.msjLeft("Can you believe this amazing chat bubbles?It's all CSS. Can you believe this amazing chat bubbles? It's al CSS.Can you believe this amazing chat bubbles?It's all CSS. 😍")}
                            {this.msjRight("Can you believe this amazing chat bubbles?It's all CSS. Can you believe this amazing chat bubbles? It's al CSS.Can you believe this amazing chat bubbles?It's all CSS. 😍")}
                            {this.msjLeft("Can you believe this amazing chat bubbles?It's all CSS. Can you believe this amazing chat bubbles? It's al CSS.Can you believe this amazing chat bubbles?It's all CSS. 😍 Can you believe this amazing chat bubbles?It's all CSS. Can you believe this amazing chat bubbles? It's al CSS.Can you believe this amazing chat bubbles?It's all CSS. 😍 Can you believe this amazing chat bubbles?It's all CSS. Can you believe this amazing chat bubbles? It's al CSS.Can you believe this amazing chat bubbles?It's all CSS. 😍")}
                        </SView>
                    </SView>
                    <SView height={180} />

                </SScrollView2 >
            </SView >

        );
    }
}
