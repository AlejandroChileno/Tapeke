import React from 'react';
import { connect } from 'react-redux';
import { SIcon, SLoad, SNavigation, SPage, SPopup, SScrollView2, SText, STheme, SView, SDate, SHr } from 'servisofts-component';
import BarraSuperiorTapeke from '../../../../../Components/BarraSuperiorTapeke';
import PBarraFooter from '../../../../../Components/PBarraFooter';
import Parent from '../index'
import PButtom from '../../../../../Components/PButtom';

class Calendario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fecha: new SDate(),
        };
        this.key = SNavigation.getParam("keyUsuario");
    }

    getDia(dia, diastr) {
        return <SView width={80} height={90} center style={{ backgroundColor: (this.state.dia == dia ? STheme.color.primary : STheme.color.card), borderRadius: 8, borderColor: STheme.color.lightGray, borderWidth: 1 }}
            onPress={() => {
                this.setState({
                    dia: dia
                })
            }}>
            <SText font={"LondonTwo"} fontSize={24} color={(this.state.dia == dia ? STheme.color.secondary : STheme.color.text)} >{dia}</SText>
            <SHr height={10} />
            <SText font={"Roboto"} fontSize={14} color={(this.state.dia == dia ? STheme.color.secondary : STheme.color.text)}>{diastr}</SText>
        </SView>
    }
    getHora(hora) {
        var isSelect = false;
        return <SView col={"xs-4"} center style={{ padding: 5 }}
            onPress={() => {
                this.setState({
                    hora: hora
                })
            }}>
            <SView col={"xs-12"} center height={40} style={{ backgroundColor: (this.state.hora != hora ? STheme.color.card : STheme.color.primary), borderRadius: 8, borderColor: STheme.color.lightGray, borderWidth: 1 }}>
                <SText font={"LondonTwo"} fontSize={14} color={(this.state.hora != hora ? STheme.color.text : STheme.color.secondary)} >{hora}</SText>
            </SView>
        </SView>
    }

    render() {
        return (<>
            <SPage title={''} hidden disableScroll center >
                <BarraSuperiorTapeke>
                </BarraSuperiorTapeke>
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row>
                    <SHr height={30} />

                    <SView col={"xs-12"} style={{ borderBottomWidth: 2, borderColor: STheme.color.primary }}>
                        <SText font={"Roboto"} color={STheme.color.text} fontSize={20} >{this.state.fecha.toString("MONTH, yyyy")}</SText>
                        <SHr height={25} />
                        <SView col={"xs-12"} height={110}>
                            <SScrollView2>
                                <SView center row>

                                    {/* {this.getDia(17, "LU")}
                                    <SView width={10} /> */}
                                    {this.getDia(18, "MA")}
                                    <SView width={10} />
                                    {this.getDia(19, "MI")}
                                    <SView width={10} />
                                    {this.getDia(20, "JU")}
                                    <SView width={10} />
                                    {this.getDia(21, "VI")}
                                    {/* <SView width={10} />
                                    {this.getDia(22, "SA")}
                                    <SView width={10} />
                                    {this.getDia(23, "DO")}
                                    <SView width={10} />
                                    {this.getDia(24, "LU")}
                                    <SView width={10} /> */}


                                </SView>
                            </SScrollView2>
                        </SView>
                        <SHr height={20} />
                    </SView>


                    <SHr height={25} />
                    <SView col={"xs-12"} style={{ borderBottomWidth: 2, borderColor: STheme.color.primary }}>
                        <SText font={"Roboto"} fontSize={20} color={STheme.color.text} >Horarios</SText>
                        <SHr height={25} />
                        <SView col={"xs-12"} row center>
                            {this.getHora("09:00 AM")}
                            {this.getHora("09:30 AM")}
                            {this.getHora("10:00 AM")}
                            {this.getHora("10:30 AM")}
                            {this.getHora("11:00 AM")}
                            {this.getHora("11:30 AM")}
                        </SView>
                        <SHr height={20} />
                    </SView>

                    <SView col={"xs-12"} center>
                        <SHr height={45} />
                        <PButtom onPress={() => {
                            if (!this.state.dia || !this.state.hora) {
                                SPopup.alert("Debe seleccionar el día y la hora para ver los pedidos!")
                                return;
                            }
                            SNavigation.navigate("ficha/paciente", { fecha: this.state.fecha.toString("yyyy-MM"), dia: this.state.dia, hora: this.state.hora })
                        }}  >VER PEDIDOS</PButtom>
                        <SHr height={30} />
                    </SView>

                </SView>
                <SHr height={30} />
            </SPage>
            <PBarraFooter />
        </>);
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Calendario);