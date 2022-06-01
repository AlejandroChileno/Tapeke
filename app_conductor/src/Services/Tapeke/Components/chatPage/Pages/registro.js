import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SInput, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import BarraSuperiorTapeke from '../../../../../Components/BarraSuperiorTapeke';
import FooterChats from './FooterChats';
import ListaMensajes from './ListaMensajes';

class registro extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        return (<>


            <SView col={"xs-12"} height={60} backgroundColor={STheme.color.primary} style={{borderBottomLeftRadius: 8, borderBottomRightRadius: 8,}} >
                <SView col={"xs-12"} height row center flex style={{ paddingLeft: 16, paddingRight: 16 }}>
                    <SView height width={35} center backgroundColor={'transparent'} onPress={() => { SNavigation.goBack(); }} >
                        <SIcon name={"Back"} width={24} height={24} fill={STheme.color.secondary} style={{ paddingLeft: 6, paddingTop: 12, }} />
                    </SView>
                    <SView flex center >
                        <SText font={"Roboto"} fontSize={24} color={STheme.color.secondary}>Chat</SText>
                    </SView>
                    <SView height width={35} center backgroundColor={'transparent'} />
                </SView>
            </SView>
            <SView flex border={"transparent"} center >
                <ListaMensajes />
            </SView>
            <FooterChats />
        </>);
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(registro);