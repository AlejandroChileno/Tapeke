import React, { Component } from 'react';
import { SLoad, SText, STheme, SView } from 'servisofts-component';

import { Animated } from 'react-native';

type _SwitchRastreoProps = {
    colors: {
        active?: string,
        inactive?: string,
        acent?: string,
    },
    width?: number,
    height?: number,
}

export default class SwitchRastreo extends Component<_SwitchRastreoProps> {
    state;
    animValue;
    constructor(props: any) {
        super(props);
        this.state = {
            active: false,
            colors: {
                active: this.props.colors?.active ?? "#2FC25F",
                inactive: this.props.colors?.inactive ?? "#B7B7B7",
                acent: this.props.colors?.acent ?? "#fff"
            },
        };
        this.animValue = new Animated.Value(0);
    }
    fadeIn() {
        this.animValue.stopAnimation();
        Animated.timing(this.animValue, {
            toValue: this.state.active ? 0 : 1,
            duration: 250,
            useNativeDriver: false
        }).start(() => {
            this.state.active = !this.state.active;
            this.setState({
                active: this.state.active
            });
        });
    }

    render() {
        return <SView animated style={{
            width: this.props.width ?? 100,
            height: this.props.height ?? 40,
            borderRadius: 18,
            justifyContent: 'center',
            backgroundColor: this.animValue.interpolate({
                inputRange: [0, 1],
                outputRange: [this.state.colors["inactive"], this.state.colors["active"]]
            }),


        }}
            onPress={() => { this.fadeIn() }}>





            <SView animated center style={{
                width: 50,
                height: 33,
                position: "absolute",
                right: this.animValue.interpolate({ inputRange: [0, 1], outputRange: [16, (this.props.width ?? 100) - 50 - 16] }),
            }}
            >
                <SText>{this.state.active ? "Online" : "OffLine"}</SText>
            </SView>


            <SView animated style={{
                width: 33,
                height: 33,
                borderRadius: 100,
                position: "absolute",
                left: this.animValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [4, (this.props.width ?? 100) - 33 - 4]
                }),
            }}
                backgroundColor={this.state.colors["acent"]}
            >

            </SView>
        </SView>
    }
}
