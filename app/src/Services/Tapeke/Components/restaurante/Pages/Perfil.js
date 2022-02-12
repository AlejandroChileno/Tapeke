import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SButtom, SForm, SHr, SPage, SText, SNavigation, SLoad, SView, SIcon, STheme, SImage } from 'servisofts-component';
class Paso1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <SPage center>
                <SView col={"xs-12 sm-10 md-8 lg-6 xl-4"} center>
                    <SView center col={"xs-12"}  backgroundColor={"#9B060C"} >
                    <SImage src={require('../../../../../Assets/img/restPerfil.jpg')} style={{
                        width: "100%",
                        height: 250,
                        position: "relative",
                        resizeMode: "cover"

                    }} />
                        </SView>
                </SView>
                <SView flex center col={"xs-11 sm-10 md-8 lg-6 xl-4"}>
                    <SView col={"xs-12"} >

                        <SHr height={30} />
                        <SView col={"xs-12"} center>
                            <SText color={STheme.color.text} fontSize={21} style={{ fontWeight: "bold" }} center >Buscar en el mapa</SText>
                            <SHr height={15} />
                            <SText color={STheme.color.gray} fontSize={13} center height={45}>No tienes que ir muy lejos para encontrar un buen restaurante, hemos proporcionado todos los
                                restaurantes que está cerca de ti</SText>
                        </SView>
                    </SView>
                    <SHr height={60} />
                    
                    <SHr height={40} />
                </SView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Paso1);