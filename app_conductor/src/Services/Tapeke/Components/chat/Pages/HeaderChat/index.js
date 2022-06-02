import React, { Component } from 'react';
import { connect } from "react-redux";
import { SHr, SIcon, SImage, SLoad, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import usuario from '../../../../../Usuario/Components/usuario';

class HeaderChat extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }


    render() {
        var data = usuario.Actions.getByKey(this.props.emisor, this.props);
        if (!data) return <SLoad />;
        console.log(data);
        return (<SView col={"xs-12"} height={60} backgroundColor={STheme.color.primary} style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8, position: "absolute", top: 0 }} >
            <SView col={"xs-12"} height row center flex style={{ paddingLeft: 16, paddingRight: 16 }}>

                <SView height width={35} center backgroundColor={'transparent'} onPress={() => { SNavigation.goBack(); }} border={"transparent"}>
                    <SIcon name={"Back"} width={24} height={24} fill={STheme.color.secondary} style={{ paddingLeft: 6, }} />
                </SView>

                <SView flex center row  >
                    <SView width={60} center style={{ textAlign: "right" }} height border={"transparent"}>
                        <SView style={{ width: 50, height: 50, borderRadius: 30, overflow: "hidden", borderWidth: 1, borderColor: "#fff" }}>
                            <SImage src={SSocket.api.root + "usuario/" + data.key + "?date=" + new Date().getTime()} style={{
                                width: "100%", height: "100%", resizeMode: "cover"
                            }} />
                        </SView>
                    </SView>
                    <SView flex style={{ justifyContent: 'flex-start', }} border={"transparent"}  >
                        <SText font={"Roboto-Bold"} style={{ color: "#fff", fontSize: 20, }}  >{data.Nombres}</SText>
                    </SView>
                </SView>

                <SView height width={35} center backgroundColor={'transparent'} />
            </SView>
        </SView>
        );
    }
}
const initStates = (state) => {
    return { state };
};
export default connect(initStates)(HeaderChat);