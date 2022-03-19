import React from 'react';
import { connect } from 'react-redux';
import { SHr, SPage, SText, SView, STheme, SIcon, } from 'servisofts-component';
class MensajeSolicitud extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {


        return (
            <SPage center>
                <SView col={"xs-12"} row backgroundColor={STheme.color.card} center >
                    <SHr height={50} />
                    <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} height={650} center row style={{ backgroundColor: STheme.color.primary, borderRadius: 12 }}>
                        <SView col={"xs-12"} row center   >
                            <SView col={"xs-7"} border={'transparent'}  >
                                <SText fontSize={24} color='white' bold center> El restaurante está confirmando tu pedido</SText>
                            </SView>
                        </SView>

                        <SView col={"xs-11"} row center>
                            <SIcon name={"MensajeSolicitud"}   height={290} />

                        </SView>

                        <SView col={"xs-12"} row center   >
                            <SView col={"xs-10"} border={'transparent'}  >
                                <SText fontSize={18} color='white' bold center>¡Recuerda usar tapaboca para recoger tu pedido!</SText>
                            </SView>
                        </SView>

                         
                    </SView>
                    <SHr height={50} />
                </SView>
            </SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(MensajeSolicitud);