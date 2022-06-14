import React, { Component } from 'react';
import { Animated } from 'react-native';
import { connect } from 'react-redux';
import { SHr, SIcon, SNavigation, STheme, SView } from 'servisofts-component';
import NavBar from '../NavBar';


class SNotification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anim: new Animated.Value(0),

        };

    }

    popupSinFondos() {
        return <>
            <SView width={362} height={286} center row style={{ borderRadius: 8 }} withoutFeedback backgroundColor={STheme.color.background}   >
                <SHr height={20} />
                <SView col={"xs-12"} height={35} center style={{ borderBottomWidth: 1, borderColor: STheme.color.primary }}>
                    <SText color={STheme.color.darkGray} style={{ fontSize: 20 }} bold center >Alvaro</SText>
                </SView>
                <SHr height={20} />
                <SView col={"xs-11"} center row>
                    <SView col={"xs-11"} center >
                        <SIcon width={100} name='Girl'></SIcon>
                    </SView>
                    <SView col={"xs-11"} center>
                        <SHr height={8} />
                        <SText fontSize={14} color={STheme.color.primary}  >Hola mundo.</SText>
                    </SView>
                </SView>
                <SView col={"xs-12"} center>
                    <SHr height={15} />
                    <SView width={140} height={44} center backgroundColor={STheme.color.primary} style={{ borderRadius: 8 }}
                        onPress={() => {
                            // var data = ParentBilletera.Actions.getByKeyCliente(this.props.state.usuarioReducer.usuarioLog.key, this.props);
                            // if (!data) return <SLoad />;
                            // var montoTotal = 0;
                            // data.map((obj) => { montoTotal += obj.monto; })
                            SNavigation.navigate('billetera')
                            SPopup.close("sinFondos");
                        }}  >
                        <SText fontSize={14} color={STheme.color.white} bold>Cargar crédito</SText>
                    </SView>
                    <SHr height={15} />
                </SView>
            </SView>
        </>
    }
    render() {


        return (popupSinFondos());

    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(SNotification);