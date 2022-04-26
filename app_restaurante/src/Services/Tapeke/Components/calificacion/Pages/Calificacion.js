import React from 'react';
import { connect } from 'react-redux';
import { SIcon, SLoad, SNavigation, SPage, SPopup, SScrollView2, SText, STheme, SView, SHr } from 'servisofts-component';
import BarraSuperiorTapeke from '../../../../../Components/BarraSuperiorTapeke';
import Direccion from '../../../../../Components/BarraSuperiorTapeke/Direccion';
import PBarraFooter from '../../../../../Components/PBarraFooter';
import Parent from '../index'
class Calificacion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        //this.key = SNavigation.getParam("keyUsuario");
        this.page = SNavigation.getParam("page");
    }

    render() {
        return (<>
            <BarraSuperiorTapeke>
            </BarraSuperiorTapeke>
            <SPage title={''} hidden center >
                <SView flex center col={"xs-12 sm-10 md-8 lg-6 xl-4"} >
                <SHr height={30} />
                    <SView col={"xs-11"} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 8 }} row center backgroundColor={STheme.color.card} >
                        <SHr height={10} />
                        <SView col={"xs-5"} center style={{ borderRightWidth: 1, borderColor: STheme.color.lightGray }}>
                            <SIcon name={"CalCalidad"} width={60} fill={STheme.color.card} />
                        </SView>
                        <SView col={"xs-7"} center >
                            <SText color={STheme.color.darkGray} fontSize={24}>CALIDAD</SText>
                            <SHr height={10} />
                            <SView col={"xs-10"} center style={{ borderWidth: 2, borderColor: STheme.color.primary, backgroundColor: STheme.color.white, borderRadius: 8 }}>
                                <SText color={STheme.color.text} fontSize={32}>4.6</SText>
                            </SView>
                        </SView>
                        <SHr height={10} />
                    </SView>
                    <SHr height={25} />
                    <SView col={"xs-11"} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 8 }} row center backgroundColor={STheme.color.card} >
                        <SHr height={10} />
                        <SView col={"xs-5"} center style={{ borderRightWidth: 1, borderColor: STheme.color.lightGray }}>
                            <SIcon name={"CalCantidad"} width={60} fill={STheme.color.card} />
                        </SView>
                        <SView col={"xs-7"} center >
                            <SText color={STheme.color.darkGray} fontSize={24}>CANTIDAD</SText>
                            <SHr height={10} />
                            <SView col={"xs-10"} center style={{ borderWidth: 2, borderColor: STheme.color.primary, backgroundColor: STheme.color.white, borderRadius: 8 }}>
                                <SText color={STheme.color.text} fontSize={32}>4.2</SText>
                            </SView>
                        </SView>
                        <SHr height={10} />
                    </SView>
                    <SHr height={25} />
                    <SView col={"xs-11"} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 8 }} row center backgroundColor={STheme.color.card} >
                        <SHr height={10} />
                        <SView col={"xs-5"} center style={{ borderRightWidth: 1, borderColor: STheme.color.lightGray }}>
                            <SIcon name={"CalServicio"} width={60} fill={STheme.color.card} />
                        </SView>
                        <SView col={"xs-7"} center >
                            <SText color={STheme.color.darkGray} fontSize={24}>SERVICIO</SText>
                            <SHr height={10} />
                            <SView col={"xs-10"} center style={{ borderWidth: 2, borderColor: STheme.color.primary, backgroundColor: STheme.color.white, borderRadius: 8 }}>
                                <SText color={STheme.color.text} fontSize={32}>3.8</SText>
                            </SView>
                        </SView>
                        <SHr height={10} />
                    </SView>
                    <SHr height={25} />
                    <SView col={"xs-11"} height={110} style={{ borderWidth: 1, borderColor: STheme.color.lightGray, borderRadius: 8 }} row center backgroundColor={STheme.color.card} >
                        <SHr height={10} />
                        <SView col={"xs-5"} center style={{ borderRightWidth: 1, borderColor: STheme.color.lightGray }}>
                            <SIcon name={"calComentario"} width={60} fill={STheme.color.card} />
                        </SView>
                        <SView col={"xs-7"} center >
                            <SText color={STheme.color.darkGray} fontSize={24}>COMENTARIOS</SText>
                        </SView>
                        <SHr height={10} />
                    </SView>
                    <SHr height={30} />
                </SView>

            </SPage>
            <PBarraFooter page={this.page} />
        </>);
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Calificacion);