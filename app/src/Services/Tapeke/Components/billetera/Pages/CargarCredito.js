import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SHr, SNavigation, SPage, SText, SView, STheme, SLoad, SButtom, SIcon, SWebView } from 'servisofts-component';
import { WebView } from 'react-native';
import PButtom from '../../../../../Components/PButtom';


class CargarCredito extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    getHeaderCredito() {
        return <><SHr height={10} />
            <SView col={"xs-12"} height={201} center>
                <SText fontSize={24} color={'black'} font={"Roboto"} bold>¡Recarga creditos a tu billetera!</SText>
                <SText fontSize={16} color={'#979797'} font={"Roboto"} >Compra creditos para facilitar la compra de tu packs.</SText>
            </SView>
        </>
    }

    getBodyCredito() {
        return <><SHr height={10} />
            <SView col={"xs-12"} center >
                <SText font={"Roboto"} color={STheme.color.primary} fontSize={18} style={{ paddingLeft: 10 }} >Tipo de pago</SText>
            </SView>
        </>
    }

    render() {
        // var data = Parent.Actions.getAll(this.props);
        // var usuarios = usuario.Actions.getAll(this.props);
        // if (!data) return <SLoad />;
        // if (!usuarios) return <SLoad />;
        return (
            <>
                <SPage title={'Billetera'}>
                    <SView col={"xs-12"} row center >

                        <SView col={"xs-11 sm-10 lg-8 xl-3.5"} row center border={'red'}>
                            {this.getHeaderCredito()}
                            <SHr height={18} color={STheme.color.card} />
                        </SView>

                        <SView col={"xs-11"} row center border={'red'}>
                            {this.getBodyCredito()}
                            <SHr height={18} color={STheme.color.card} />
                        </SView>

                        <SView col={"xs-11"} row center border={'red'}>
                            <SHr height={10} />
                            <PButtom fontSize={20} onPress={() => { alert('alvaro'); }}>CARGAR CRÉDITO</PButtom>
                            <SHr height={10} />
                        </SView>


                    </SView>
                </SPage>
            </>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(CargarCredito);