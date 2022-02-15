import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { SHr, SIcon, SImage, SLoad, SPage, SScrollView2, SText, STheme, SView, SNavigation, } from 'servisofts-component';
import Kolping from '../Components/Kolping';
import usuario from '../Services/Usuario/Components/usuario';
import PBarraFooter from '../Components/PBarraFooter';
import Item from '../Services/Tapeke/Components/restaurante/Components/Item';

class Inicio extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        if (!usuario.Actions.validateSession(this.props)) {
            return <SLoad />
        }
    }


    categoria(title) {
        return (<>

            <SView col={"xs-11 xl-6 "} height={30} row center  >
                <SView col={"xs-6"} row style={{ justifyContent: 'flex-start', }}>
                    <SText fontSize={18} font={"LondonMM"} bold >{title}</SText>
                </SView>
                <SView col={"xs-6"} row center style={{ justifyContent: 'flex-end', }}
                    onPress={() => { SNavigation.navigate("restaurante/categoria", { keyCategoria: title }) }} >
                    <SText fontSize={12} font={"LondonMM"} center style={{ fontWeight: "bold", }}>
                        Ver todos
                    </SText>
                    <SView width={6} />
                    <SIcon name={"Back"} width={12} height={12} fill={STheme.color.primary} style={{ transform: [{ rotate: "180deg" }] }} />
                </SView>


            </SView>
            <SView col={"xs-12 xl-12"} center  >
                <SView col={"xs-12"} height={180} row center >
                    {/* recordar a ricardo que debe solucionar el ScrollView2 */}
                    {/* observacion que no funciona el maxWidth and minWidth */}
                    {/* observacion el de crear 2 barra superior  */}
                    <ScrollView horizontal={true} >
                        <SView style={{ width: 18, maxWidth: '80%', minWidth: '90%', }} />
                        <Item ></Item>
                    </ScrollView>
                    <SHr height={200} />

                </SView>
            </SView>

        </>
        );
    }





    render() {
        if (!usuario.Actions.validateSession(this.props)) {
            return <SLoad />
        }
        // var UsuaioPage = Pages["usuarioPage/lista"];

        return (
            <SPage title={'Inicio'} hidden disableScroll>
                <Kolping.KBarraUsuario />
                <SHr height={100} />
                <SView col={"xs-12"} center height>
                    <SScrollView2 disableHorizontal={true}>
                        <SView col={"xs-12"} center >
                            <SView height={15}></SView>
                            {this.categoria('Recomendado Para Ti')}
                            <SHr height={20} />
                            {this.categoria('Cerca')}
                            <SHr height={10} />
                            <SView col={'xs-11'} height={160} >
                                <SImage src={require('./fotos/publicidad.png')} />
                            </SView>
                            <SHr height={10} />
                            {this.categoria('Alimentación')}
                            <SHr height={20} />
                            {this.categoria('Favoritos')}
                        </SView>
                    </SScrollView2>
                </SView>
                <PBarraFooter />
            </SPage >
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Inicio);