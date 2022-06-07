import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { connect } from "react-redux";
import { SIcon, SInput, STheme, SView } from 'servisofts-component';
import chat from '../..';


class FooterChats extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    boton_send() {
        return (
            <SView width={44} height={44} style={{ borderRadius: 50, paddingLeft: 6, }} backgroundColor={STheme.color.secondary} center
                onPress={() => {
                    values = {
                        key_usuario_emisor: this.props.state.usuarioReducer.usuarioLog.key,
                        key_usuario_receptor: this.props.emisor,
                        mensaje: this.input_message.getValue(),
                    }
                    chat.Actions.send(values, this.props);
                    this.input_message.setValue("");
                }}>
                <SIcon name="BtnChat" fill={STheme.color.primary} width={24} height={24} />
            </SView>
        );
    }



    render() {
        return (
            <SView col={"xs-12"} center height={70} style={{
                position: "absolute",
                bottom: 0, overflow: 'hidden',
                backgroundColor: STheme.color.primary,
            }}>


                <SView col={"xs-11"} row height backgroundColor={"transparent"} center>
                    <SView col={"xs-10"} center height backgroundColor={"transparent"} >
                        <SInput center height={48} placeholder={"Message"}
                            ref={r => this.input_message = r} style={{ borderRadius: 100, backgroundColor: STheme.color.card, fontSize: 16, }} />
                        {/* <SForm row center
                            ref={(form) => { this.form = form; }}
                            inputs={{ mensaje: { placeholder: "Mensaje", isRequired: true, type: "text" } }}
                            onSubmit={(values) => { }}
                        /> */}
                        {/* <TextInput style={{ height: 50, borderRadius: 100, backgroundColor: STheme.color.card, fontSize: 16, }} placeholder="Message..." returnKeyType="send" /> */}
                    </SView>
                    <SView col={"xs-2"} center height backgroundColor={"transparent"}  >
                        {this.boton_send()}
                    </SView>
                </SView>
            </SView >
        );
    }
}
const initStates = (state) => {
    return { state };
};
export default connect(initStates)(FooterChats);