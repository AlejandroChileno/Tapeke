import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SDate, SIcon, SPage, SText, SThread, SView } from 'servisofts-component';

class StatusBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hora: new SDate().toString("hh:mm"),
        };
    }
    hilo() {
        new SThread(1000, "seg", false).start(() => {
            if (this.state.hora !== new SDate().toString("hh:mm")) {
                this.setState({ hora: new SDate().toString("hh:mm") });
            }
            this.hilo();

        })
    }

    render() {
        this.hilo();
        return (
            <SView col={"xs-12"} height={30} backgroundColor={'#FA790E'} >
                <SView col={"xs-12"} row flex style={{
                    paddingLeft: 16, paddingRight: 16,
                }}>
                    <SView width={30} center flex >
                        <SText font={"Roboto-Bold"} fontSize={14} color={"#fff"}>{this.state.hora}</SText>
                    </SView>
                    <SView row >
                        <SView width={25} center  >
                            <SIcon name={"AppSignal"} width={18} fill="#fff" />
                        </SView>
                        <SView width={30} center  >
                            <SIcon name={"AppWifi"} width={19} fill="#fff" />
                        </SView>
                        <SView width={30} center  >
                            <SIcon name={"AppBaterry"} width={25} fill="#fff" />
                        </SView>
                    </SView>
                </SView>
            </SView>
        );
    }
}

export default StatusBar