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
            {/* <SPage title={'chat'} disableScroll center > */}
            {/* </SPage> */}
            <BarraSuperiorTapeke  >
                <SText font={"Roboto"} fontSize={25} color={STheme.color.secondary}>Chat</SText>
            </BarraSuperiorTapeke>
            <SView flex border={"transparent"} >
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