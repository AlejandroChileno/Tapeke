import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SIcon, SInput, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import FooterChats from './FooterChats';
import ListaMensajes from './ListaMensajes';

class registro extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }




    getItem({ key, title, icon, url, params }) {
        var color = "#ffffff";
        // var isSelect = (key == this.props.url)
        return <SView flex center height onPress={() => {
            SNavigation.navigate(url, params);
        }} >
            <SView style={{
                borderRadius: 16,
                backgroundColor: "#ffffff44",
                width: 55,
                height: 45,
            }} center>
                <SView height={23} colSquare center >
                    <SIcon name={icon} />
                </SView>
                <SView height={2} />
                <SText font={"Arial"} fontSize={8} center color={color}  >{title}</SText>
            </SView>
        </SView>
    }


    render() {

        return (<>
            {/* <SPage title={'chat'} disableScroll center > */}
            {/* </SPage> */}
            <SView flex row center >

                <ListaMensajes />
            </SView>

            <FooterChats />



        </>


        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(registro);