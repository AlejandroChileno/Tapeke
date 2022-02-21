import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SImage, SLoad, SNavigation, SText, STheme, SView } from 'servisofts-component';
import SSocket from "servisofts-socket"
import NavBar from '../NavBar';

import { View, Text, Animated, Dimensions, TouchableOpacity, Platform } from 'react-native';

class BarraSuperiorTapeke extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anim: new Animated.Value(0),

        };

    }


    render() {
        var usuario = this.props.state.usuarioReducer.usuarioLog
        if (!usuario) {
            // SNavigation.navigate("login");
            return <SView />
        }

        return (
            <SView col={"xs-12"} height={60} backgroundColor={STheme.color.primary} style={{
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
            }} >


                <SView col={"xs-12"} height row center flex style={{
                    paddingLeft: 16, paddingRight: 16,
                }}>


                    <SView height width={35} center backgroundColor={'transparent'} onPress={()=>{
                        NavBar.open();
                    }} >
                        <SIcon name={"KMenu"} width={32} />
                    </SView>

                    <SView flex center  >
                        {this.props.children}
                    </SView>

                    <SView height width={30} center backgroundColor={'transparent'}>
                        <SIcon name={"AppAlert"} width={24} height={24} fill="#fff" />
                    </SView>
                </SView>
            </SView >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(BarraSuperiorTapeke);