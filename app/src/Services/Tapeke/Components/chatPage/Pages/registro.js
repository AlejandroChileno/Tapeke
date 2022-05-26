import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SPage, SView } from 'servisofts-component';
import PButtom from '../../../../../Components/PButtom';


class registro extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };

    }


    render() {

        return (
            <SPage title={'registro'} center>
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} center>

                    <SHr />
                    <PButtom fontSize={20} onPress={() => {
                        this.form.submit();
                    }}>CONFIRMAR</PButtom>
                    <SHr />
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(registro);