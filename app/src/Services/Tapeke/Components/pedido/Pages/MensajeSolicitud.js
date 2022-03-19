import React from 'react';
import { connect } from 'react-redux';
import { SHr, SPage, SText, SView, STheme, } from 'servisofts-component';
class MensajeSolicitud extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {


        return (
            <SPage center>
                <SView col={"xs-12"} row backgroundColor={STheme.color.card} center>
                    <SHr height={18} />
                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center row style={{ backgroundColor: STheme.color.white }}>
                        <SView col={"xs-11"} row center>
                            <SText> El restaurante está confirmando tu pedido</SText>
                        </SView>
                    </SView>
                    <SHr height={18} />
                </SView>
            </SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(MensajeSolicitud);