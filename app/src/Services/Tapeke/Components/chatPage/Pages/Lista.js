import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SNavigation, SPage } from 'servisofts-component';
import Parent from '..';
import FloatButtom from '../../../../../Components/FloatButtom';
class Lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {
        return (
            <SPage title={'Lista'} disableScroll center>


                <FloatButtom onPress={() => {
                    SNavigation.navigate("admin/" + Parent.component + "/registro");
                }} />
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Lista);