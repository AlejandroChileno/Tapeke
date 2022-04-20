import React from 'react';
import { connect } from 'react-redux';
import { SIcon, SLoad, SNavigation, SPage, SPopup, SScrollView2, SText, STheme, SView } from 'servisofts-component';
import BarraSuperiorTapeke from '../../../../../Components/BarraSuperiorTapeke';
import Direccion from '../../../../../Components/BarraSuperiorTapeke/Direccion';
import PBarraFooter from '../../../../../Components/PBarraFooter';
import Parent from '../index'
class Calificacion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.key = SNavigation.getParam("keyUsuario");
    }

    render() {
        return (
            <SPage title={''} hidden disableScroll center >
                <BarraSuperiorTapeke>
                </BarraSuperiorTapeke>
                <SView flex center col={"xs-12"}>
                    Calificación
                </SView>
                <PBarraFooter />
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Calificacion);