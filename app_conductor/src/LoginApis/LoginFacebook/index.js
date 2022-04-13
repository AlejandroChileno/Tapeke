import React, { Component } from 'react';
import { SButtom, SPage, SText, SView } from 'servisofts-component';
class LoginFacebook extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (

            <SView >{this.props.children}</SView>

        );
    }
}

export default LoginFacebook;