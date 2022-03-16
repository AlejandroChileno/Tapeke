import React from 'react';
import { connect } from 'react-redux';
import { SIcon, SNavigation, SPage, SScrollView2, SText, STheme, SView,SLoad } from 'servisofts-component';
import BarraSuperiorTapeke from '../../../../../Components/BarraSuperiorTapeke';
import PBarraFooter from '../../../../../Components/PBarraFooter';
import Parent from '../index'
import SSocket from 'servisofts-socket';
import Horario from '../Components/Horario';

class testing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.key = SNavigation.getParam("keyUsuario");
    }



  
    getHorarios() {
        var data = Parent.Actions.getAll(this.props);
        if (!data) return <SLoad />;
        var listaKeys = Object.keys(data);
        return listaKeys.map((key, index) => {
            var obj = data[key];
            return <SView col={"xs-10 md-5 lg-4 xl-3"} border={'transparent'} >
                <Horario data={obj} ></Horario>
                {/* <SText > {JSON.stringify(obj)} </SText> */}
            </SView>
        })
    }

    render() {
        return (
            <>
                < SPage title={''} hidden disableScroll center >
                    {/* <BarraSuperiorTapeke>
                        <SView row border={'transparent'} >
                            <SView height={50} width={15}>
                                <SView style={{ top: 6 }} center>
                                    <SIcon name={"Location"} height={18} fill={STheme.color.secondary} />
                                </SView>
                            </SView>
                            <SView height={50} style={{ justifyContent: 'center', paddingLeft: 8, paddingRight: 8, }}>
                                <SText font={"Roboto"} fontSize={10} center bold color={STheme.color.secondary}>{" "}Las palmas, Santa cruz de la sierra</SText>
                                <SText font={"Roboto"} fontSize={12} center bold color={STheme.color.secondary}>{" "}A menos de 30 km</SText>
                            </SView>
                            <SView height={50} width={25}>
                                <SView style={{ top: 6 }} center>
                                    <SIcon name={"Back"} height={18} fill={STheme.color.secondary} style={{ transform: [{ rotate: "-90deg" }] }} />
                                </SView>
                            </SView>
                        </SView>
                    </BarraSuperiorTapeke> */}

                                       {this.getHorarios()}

                    {/* <PBarraFooter /> */}
                </ SPage >
            </>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(testing);