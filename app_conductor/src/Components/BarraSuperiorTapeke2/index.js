import React, { Component } from 'react';
import { Animated } from 'react-native';
import { connect } from 'react-redux';
import { SHr, SIcon, SNavigation, STheme, SView } from 'servisofts-component';
import NavBar from '../NavBar';


class BarraSuperiorTapeke2 extends Component {
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
                borderBottomLeftRadius: 8, borderBottomRightRadius: 8,
            }} >

                <SView col={"xs-12"} height row center flex style={{ paddingLeft: 16, paddingRight: 16 }}>


                    <SView height width={35} center backgroundColor={'transparent'} onPress={() => { SNavigation.goBack() }} >
                        <SIcon name={"Back"} width={28} height={28} fill={STheme.color.secondary} style={{ paddingLeft: 6, paddingTop: 12, }} />
                    </SView>

                    <SView flex center backgroundColor={'transparent'} >
                        {this.props.children}
                    </SView>

                    {/* <SView height width={35} center backgroundColor={'transparent'} onPress={() => { NavBar.open(); }} >
                        <SIcon name={"AppAlert"} width={28} height={28} fill={STheme.color.secondary} style={{ paddingLeft: 6, paddingTop: 12, }} />
                    </SView> */}


                </SView>
            </SView >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(BarraSuperiorTapeke2);