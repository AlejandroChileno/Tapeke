import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';
import { STheme, SView } from 'servisofts-component';
export default class BarraCargando extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // size: 250,
            // dotSize: 16
        };
        this.animValue = new Animated.Value(0);
    }
    componentDidMount() {
        this.anim_rotar();
    }

    anim_rotar() {
        Animated.timing(this.animValue, {
            toValue: 1,
            duration: 3500,
            useNativeDriver: false,
            easing: Easing.linear
        }).start(() => {
            this.animValue.setValue(0);
            this.anim_rotar();
        });
    }


    render() {
        return (
            <SView col={"xs-12"} height={6} style={{ justifyContent: 'center', overflow: 'hidden', backgroundColor: STheme.color.card }}  >

                <SView animated style={{ left: this.animValue.interpolate({ inputRange: [0, 1], outputRange: ["-3%", "100%"] }) }}>
                    <SView width={50} height={4} style={{ borderRadius: 8, backgroundColor: STheme.color.primary, }} />
                </SView>
            </SView>
        )
    }
}