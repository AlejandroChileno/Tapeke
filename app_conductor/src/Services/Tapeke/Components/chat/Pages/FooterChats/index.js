import React, { Component } from 'react';
import { SHr, SIcon, SInput, STheme, SView } from 'servisofts-component';
import chat from '../..';
import { connect } from "react-redux";

class FooterChats extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <SView col={"xs-12"} center height={70} style={{
                position: "absolute",
                bottom: 0, overflow: 'hidden',
                backgroundColor: STheme.color.primary,
            }}>
                <SView col={"xs-11"} row height backgroundColor={"transparent"} center>

                    {/* todo el SInput  debajo de la barra de navegacion no tiene padding */}
                    {/* cuando escribo un texto autoscrolearse */}
                    <SView flex center  >
                        <SInput center ref={r => this.input_message = r} style={{ borderRadius: 100, backgroundColor: STheme.color.card, fontSize: 16, height: 48 }}
                            // iconR={<SView width={32} style={{ justifyContent: 'center', }}><SIcon name="Stick" width={22} stroke={STheme.color.info} /></SView>}
                            placeholder={"Message"} />
                    </SView>
                    <SView width={55} height backgroundColor={"transparent"} center >
                        <SView width={44} height={44} style={{ borderRadius: 50, paddingLeft: 6, }} backgroundColor={STheme.color.secondary} center onPress={() => {

                            alert(this.input_message.getValue() ?? "no hay texto");

                            values = {
                                key_usuario_emisor: this.props.state.usuarioReducer.usuarioLog.key,
                                key_usuario_receptor: this.props.emisor,
                                mensaje: this.input_message.getValue(),
                            }
                            // values  = { this.input_message.getValue() }
                            // chat.sendMessage(values);
                            chat.Actions.send(values, this.props);

                        }}>
                            <SIcon name="BtnChat" fill={STheme.color.primary} width={24} height={24} />
                        </SView>
                    </SView>
                    {/* <SHr col={"xs-12"} height={32} /> */}
                </SView>
                {/* <SHr col={"xs-12"} height={32} /> */}
            </SView >
        );
    }
}
const initStates = (state) => {
    return { state };
};
export default connect(initStates)(FooterChats);