import React from 'react';
import { connect } from 'react-redux';
import { SIcon, SLoad, SNavigation, SPage, SPopup, SScrollView2, SText, STheme, SView, SDate, SHr } from 'servisofts-component';
import BarraSuperiorTapeke from '../../../../../Components/BarraSuperiorTapeke';
import PBarraFooter from '../../../../../Components/PBarraFooter';
import Parent from '../index'
import PButtom from '../../../../../Components/PButtom';
import pedido from '../index';
import horario from '../../horario';

class Calendario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fecha: new SDate(),
            // dia: 0,
        };
        this.page = SNavigation.getParam("page");
        // this.key_restaurante = "9b8f27e9-696d-446f-ae9b-5d6d5bf1ab24";
        this.key_restaurante = SNavigation.getParam("key_restaurante");
    }

    // getDiaa(dia, diastr) {
    //     console.log(dia + " /// " + diastr);
    //     return <SView width={80} height={90} center style={{ backgroundColor: (this.state.dia == dia ? STheme.color.primary : STheme.color.card), borderRadius: 8, borderColor: STheme.color.lightGray, borderWidth: 1 }}
    //         onPress={() => {
    //             this.setState({
    //                 dia: dia
    //             })
    //         }}>
    //         <SText font={"LondonTwo"} fontSize={24} color={(this.state.dia == dia ? STheme.color.secondary : STheme.color.text)} >{dia}</SText>
    //         <SHr height={10} />
    //         <SText font={"Roboto"} fontSize={14} color={(this.state.dia == dia ? STheme.color.secondary : STheme.color.text)}>{diastr}</SText>
    //     </SView>
    // }
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

    // listaDias() {
    //     // var mesActual= this.state.fecha;
    //     var mesActualOriginal = new SDate();
    //     var mesActual = new SDate();
    //     var dia = "";
    //     var arrayDias = ["LU", "MAR", "MI", "JU", "VI", "SA", "DO"];
    //     var arrayReturn = [];
    //     for (var i = 0; i < 31; i++) {
    //         if (i == 0) var diaDinamico = mesActual.setDay(mesActual.getDay() - 1);
    //         var diaDinamico = mesActual.setDay(mesActual.getDay() + 1);
    //         if (parseInt(mesActualOriginal.getMonth()) == parseInt(diaDinamico.getMonth())) {
    //             // console.log(diaDinamico.getMonth() + " - " + diaDinamico.getDay());
    //             // console.log(arrayDias[diaDinamico.getDayOfWeek()]);
    //             var diaSemana = arrayDias[diaDinamico.getDayOfWeek()];
    //             // this.getDia(diaDinamico.getDay(), diaSemana);
    //             arrayReturn.push("" + diaDinamico.getDay() + "-" + diaSemana + "");
    //         } else {
    //             break;
    //         }
    //     }
    //     return arrayReturn;
    // }

    // getAllMonth(arrayMe) {
    //     var instance = this;
    //     return arrayMe.map(function (item, index) {
    //         var index = item.split("-");
    //         var dia = index[0];
    //         var diastr = index[1];
    //         // <SView col={"xs-4"} center style={{ padding: 5 }}>{index[0] } ppp {index[1] } </SView>
    //         return <><SView width={80} height={90} center style={{ backgroundColor: (instance.state.dia == dia ? STheme.color.primary : STheme.color.card), borderRadius: 8, borderColor: STheme.color.lightGray, borderWidth: 1 }}
    //             onPress={() => {
    //                 instance.setState({
    //                     dia: dia
    //                 })
    //             }}>
    //             <SText font={"LondonTwo"} fontSize={24} color={(instance.state.dia == dia ? STheme.color.secondary : STheme.color.text)} >{dia}</SText>
    //             <SHr height={10} />
    //             <SText font={"Roboto"} fontSize={14} color={(instance.state.dia == dia ? STheme.color.secondary : STheme.color.text)}>{diastr}</SText>
    //         </SView>
    //             <SView width={10} />
    //         </>
    //     });
    // }


    getListahorarioAlvaro() {
        var auxdata = horario.Actions.getAll(this.props);
        if (!auxdata) return <SLoad />
        var arr = Object.values(auxdata).filter(item => item.key_restaurante == this.key_restaurante)
        console.log("alvaro ", JSON.stringify(arr));
        return arr.map((obj, index) => {
            return <SView key={"itmDav" + index} row col={"xs-10 md-5 lg-4 xl-3"} border={'transparent'} >
                {JSON.stringify(obj["dia"])}

                {/* {this.getAllMonth(obj)} */}
                {/* {this.getDiaa(obj["dia"], "MA")} */}

                <SHr />
                <SHr />
            </SView>
        })
    }

    getDias_() {
        var auxDia = [2, 3];
        var dias = new SDate().addMonth(1).setDay(0).getDay();
        var curDate = new SDate();
        var arr = Array.from(Array(dias - curDate.getDay() + 1).keys())

        return arr.map((i) => {
            var day = i + curDate.getDay();
            var fecha = new SDate().setDay(day);
            if (!auxDia.includes(fecha.getDayOfWeek())) return console.log("fecha ", fecha);
            var isCurrent = fecha.toString("yyyy-MM-dd") == new SDate().toString("yyyy-MM-dd");
            // return <SText border={"red"}>{fecha.toString("MON,dd") + "\t"} d= {fecha.getDayOfWeek()} {"\t"} {fecha.getDayOfWeekJson().text}  {isCurrent ? "(HOY)" : ""}</SText>
            // <SText font={"LondonTwo"} fontSize={24} color={(this.state.dia == dia ? STheme.color.secondary : STheme.color.text)} >{dia}</SText>
            // var dia = JSON.stringify(fecha.toString("dd"));
            return <>
                <SView width={80} height={90} center style={{
                    backgroundColor: STheme.color.card, borderRadius: 8,
                    borderColor: this.state.dia == JSON.stringify(fecha.toString("dd")) ? STheme.color.primary : STheme.color.lightGray, borderWidth: 1
                }}
                    onPress={() => {
                        this.setState({ dia: JSON.stringify(fecha.toString("dd")) })
                    }}  >
                    <SText font={"LondonTwo"} fontSize={24} color={this.state.dia == JSON.stringify(fecha.toString("dd")) ? STheme.color.primary : STheme.color.text} >{fecha.toString("dd")}</SText>
                    <SHr height={10} />
                    <SText font={"Roboto"} fontSize={14} color={(this.state.dia == JSON.stringify(fecha.toString("dd")) ? STheme.color.primary : STheme.color.text)}>{fecha.getDayOfWeekJson().text}</SText>
                </SView>
                <SView width={10} />
            </>
        })
    }

    getDias() {
        var auxDia = [2, 3];
        var dias = new SDate().addMonth(1).setDay(0).getDay();
        var curDate = new SDate();
        var arr = Array.from(Array(dias - curDate.getDay() + 1).keys())

        var dataHorario = horario.Actions.getByKeyRestaurante(this.key_restaurante, this.props);
        //var dataHorario = horario.Actions.getByKeyRestauranteProximo(this.key_restaurante, this.props);
        // var data = horario.Actions.getAll(this.props);
        // if (!data) return <SLoad />
        // var dataHorario = Object.values(data).filter(item => item.key_restaurante == this.key_restaurante)
        if (!dataHorario) return <SLoad />


        // var arrDias = Object.values(dataHorario).filter(item => item.dia != null)
        var arrDias = [];
        //Object.keys(dataHorario).map(k => arrDias.push(dataHorario[k].dia))
        console.log(JSON.stringify(dataHorario) + "dataHorario");
        //console.log(JSON.stringify(arrDias) + "arrHorario");
        return Object.keys(dataHorario).map((key) => {
            //var day = index + curDate.getDay();
            //var fecha = new SDate(dataHorario[key].fecha_on)
           
            var day = key + curDate.getDay();
            // var fecha = new SDate().setDay(day);
            var fecha = new SDate().setDay(day);
            console.log(fecha)
            // if (!auxDia.includes(fecha.getDayOfWeek())) return console.log("fecha ", fecha);
            
            // var isCurrent = fecha.toString("yyyy-MM-dd") == new SDate().toString("yyyy-MM-dd");
            
            // return <SText border={"red"}>{fecha.toString("MON,dd") + "\t"} d= {fecha.getDayOfWeek()} {"\t"} {fecha.getDayOfWeekJson().text}  {isCurrent ? "(HOY)" : ""}</SText>
            // <SText font={"LondonTwo"} fontSize={24} color={(this.state.dia == dia ? STheme.color.secondary : STheme.color.text)} >{dia}</SText>
            // var dia = JSON.stringify(fecha.toString("dd"));
            return <>
                <SView width={80} height={90} center style={{
                    backgroundColor: STheme.color.card, borderRadius: 8,
                    borderColor: this.state.dia == JSON.stringify(fecha.toString("dd")) ? STheme.color.primary : STheme.color.lightGray, borderWidth: 1
                }}
                    onPress={() => {
                        this.setState({ dia: JSON.stringify(fecha.toString("dd")) })
                        this.setState({ hora: JSON.stringify(dataHorario[key].hora_inicio +" - "+ dataHorario[key].hora_fin) })
                    }}  >
                    <SText font={"LondonTwo"} fontSize={24} color={this.state.dia == JSON.stringify(fecha.toString("dd")) ? STheme.color.primary : STheme.color.text} >{fecha.toString("dd")}</SText>
                    <SHr height={10} />
                    <SText font={"Roboto"} fontSize={14} color={(this.state.dia == JSON.stringify(fecha.toString("dd")) ? STheme.color.primary : STheme.color.text)}>{fecha.getDayOfWeekJson().text}</SText>
                </SView>
                <SView width={10} />
            </>
        })
    }

    render() {



        return (<>
            <BarraSuperiorTapeke>
            </BarraSuperiorTapeke>
            <SPage title={''} hidden center >
                <SView col={"xs-11 sm-10 md-8 lg-6 xl-4"} row center height backgroundColor={"transparent"} >
                    <SHr height={20} />
                    <SView col={"xs-12"} style={{ borderBottomWidth: 2, borderColor: STheme.color.primary }}>
                        <SText font={"Roboto"} color={STheme.color.text} fontSize={20} >{this.state.fecha.toString("MONTH, yyyy")}</SText>
                        <SHr height={25} />
                        <SView col={"xs-12"} height={110}>
                            <SScrollView2>
                                <SView center row>
                                    {/* {this.listaDias()} */}
                                    {/* {this.getDiaa(18, "MA")}
                                    <SView width={10} />
                                    {this.getDiaa(19, "MI")}
                                    <SView width={10} />
                                    {this.getDiaa(20, "JU")}
                                    <SView width={10} />
                                    {this.getDiaa(21, "VI")} */}
                                    {/* {this.getDia(21, "VI", this.listaDias())} */}
                                    {/* {this.getAllMonth(this.listaDias())} */}
                                    {this.getDias()}
                                    {/* {this.getListahorarioAlvaro()} */}
                                </SView>
                            </SScrollView2>
                        </SView>
                        <SHr height={20} />
                    </SView>
                    {/* {this.getAllMonthaasas()} */}


                    <SHr height={25} />
                    <SView col={"xs-12"} style={{ borderBottomWidth: 2, borderColor: STheme.color.primary }}>
                        <SText font={"Roboto"} fontSize={20} color={STheme.color.text} >Horarios</SText>
                        <SHr height={25} />
                        <SView col={"xs-12"} row center>
                            {(this.state.hora) ? this.getHora(this.state.hora): <SText font={"Roboto"} fontSize={20} color={STheme.color.text} >Seleccione un dia</SText>}
                            {/* {this.getHora("09:30 AM")}
                            {this.getHora("10:00 AM")}
                            {this.getHora("10:30 AM")}
                            {this.getHora("11:00 AM")}
                            {this.getHora("11:30 AM")} */}
                        </SView>
                        <SHr height={20} />
                    </SView>

                    <SView col={"xs-12"} center>
                        <SHr height={45} />
                        <PButtom onPress={() => {
                            if (!this.state.dia || !this.state.hora) {
                                SPopup.alert("Debe seleccionar el d??a y la hora para ver los pedidos!")
                                return;
                            }
                            SNavigation.navigate("ficha/paciente", { fecha: this.state.fecha.toString("yyyy-MM"), dia: this.state.dia, hora: this.state.hora })
                        }}  >VER PEDIDOS</PButtom>
                        <SHr height={30} />
                    </SView>

                </SView>
                {/* <SHr height={30} /> */}
            </SPage>
            <PBarraFooter url={"calendario"} />
        </>);

    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Calendario);