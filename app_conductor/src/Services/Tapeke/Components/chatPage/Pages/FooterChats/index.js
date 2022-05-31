import React, { Component } from 'react';
import { SIcon, SInput, STheme, SView } from 'servisofts-component';

export default class FooterChats extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <SView col={"xs-12"} center height={90} style={{
                position: 'absolute',
                bottom: 0,
                backgroundColor: 'blue',
            }}

                border={"red"}
            >
                {/* <SGradient colors={[
                    STheme.color.primary,
                    STheme.color.primary,
                    STheme.color.primary,
                    STheme.color.secondary + "22"
                ]} /> */}
                <SView col={"xs-12"} row height>
                    <SView col={"xs-1.5"} height center>
                        <SIcon name="AddChat" stroke={STheme.color.info} height={22} />
                    </SView>
                    <SView flex height center >
                        <SInput style={{
                            borderRadius: 100,
                            backgroundColor: STheme.color.card,
                            paddingLeft: 8,
                            // paddingBottom: 58,
                        }}
                            iconR={<SView width={32} style={{ justifyContent: 'center', }}><SIcon name="Stick" width={22} stroke={STheme.color.info} /></SView>}
                            height={45} />

                    </SView>
                    <SView col={"xs-1.5"} height center>
                        <SIcon name="Camara" stroke={STheme.color.info} height={22} />
                    </SView>
                    <SView col={"xs-1.5"} height center>
                        <SIcon name="Microfono" stroke={STheme.color.info} height={22} width={22} />
                    </SView>
                </SView>

            </SView >
        );
    }
}
