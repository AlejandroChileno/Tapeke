import React, { Component } from 'react';
import { connect } from "react-redux";
import { SButtom, SDate, SHr, SIcon, SImage, SLoad, SNavigation, SText, STheme, SView } from "servisofts-component";
import SSocket from 'servisofts-socket';
import BarraCargando from '../../../../../../Components/BarraCargando';
import SBLocation from '../../../../../../SBLocation';
import usuario from '../../../../../Usuario/Components/usuario';
import conductor_horario from '../../../conductor_horario';
import restaurante from '../../../restaurante';


class ShowInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    componentDidMount() {
        if (!usuario.Actions.validateSession(this.props)) { return <SLoad />; }
        SBLocation.addListener((data) => {
            this.setState({ isActive: SBLocation.isStarted(), conductor: data });
            // console.log(data);
        })
    }


    render() {

        var dataFirst = conductor_horario.Actions.getPedidoProximoByKey(this.props.state.usuarioReducer.usuarioLog.key, this.props);
        if (!dataFirst) return <SLoad />;
        var dataConductor = this.state.conductor;



        if (dataFirst.length <= 0) {
            return <>
                <SView col={"xs-12 md-6 lg-4"} height={320} backgroundColor={STheme.color.secondary} style={{ position: 'absolute', bottom: 0 }} center  >
                    <SView col={"xs-12"} height={20} />
                    <SView col={"xs-12"} height center border={"transparent"}>
                        <SText font={"Roboto"} fontSize={20} color={STheme.color.primary}>No hay horarios asignados</SText>
                    </SView>
                </SView>
            </>
        }


        var printer = restaurante.Actions.getDistance(
            dataFirst?.restaurante["latitude"], dataFirst?.restaurante["longitude"],
            dataConductor?.data?.latitude ?? 0, dataConductor?.data?.longitude ?? 0);

        console.log("impreso ", printer + " mtrs");

        var parseado = parseFloat(printer / 1000).toFixed(1);
        console.log("impreso ", parseado + " km");
        // console.log("impreso ", JSON.stringify(dataFirst) + " km");
    	
        // var form=new SDate().toString("yyyy-MM-dd hh:mm:ss") ;
        // var dia = new SDate(fecha + " " + horario?.hora_fin, "yyyy-MM-dd hh:mm");
        // console.log("telefono ", form + " tiempo");



        if (!SBLocation.isStarted()) {
            return <SView col={"xs-12 md-6 lg-4"} height={250} backgroundColor={STheme.color.secondary} style={{ position: 'absolute', bottom: 0 }} center  >

                <SView col={"xs-2.5"} height={80} center border={"transparent"} >
                    <SIcon name="AppAlert" fill={STheme.color.primary} width={80} ></SIcon>
                </SView>

                <SHr height={10} />


                <SView col={"xs-10 md-11 lg-10 xl-8"} height={70} center row backgroundColor={"transparent"} >
                    {/* <SView width={41} height={41} center border={'transparent'}>
                        <SIcon name="AppAlert" fill={STheme.color.primary} width={20} ></SIcon>
                    </SView> */}
                    <SView flex height center border={'transparent'}    >
                        <SView col={"xs-12"} height={4} />
                        <SView col={"xs-12"} border={'transparent'}   >
                            <SText style={{ fontSize: 14 }} center >Conéctate para que descubras los pedidos asignados</SText>
                        </SView>
                    </SView>
                </SView>

            </SView>
        }
        // if (parseado <= 1) {
        else {
            return <>
                <SView col={"xs-12 md-6 lg-4"} height={350} backgroundColor={STheme.color.secondary} style={{ position: 'absolute', bottom: 0 }} center  >
                    <SView col={"xs-12"} height={20} />
                    <SView col={"xs-11"} height={60} border={"transparent"} center >


                        <SView col={"xs-12"} height={30} center row backgroundColor={"transparent"} >
                            <SView width={41} height center border={'transparent'}>
                                <SIcon name="Calendario" fill={STheme.color.primary} width={20} ></SIcon>
                            </SView>
                            <SView flex height center border={'transparent'}    >
                                <SView col={"xs-12"} height={4} />
                                <SView col={"xs-12"} border={'transparent'}   >
                                    <SText style={{ fontSize: 14 }} bold >Hoy {dataFirst['fecha']} </SText>
                                </SView>
                            </SView>
                        </SView>

                        <SView col={"xs-12"} height={30} center row backgroundColor={"transparent"} >
                            <SView width={41} height center border={'transparent'}>
                                <SIcon name="Reloj" fill={STheme.color.primary} width={20} ></SIcon>
                            </SView>
                            <SView flex height center border={'transparent'}    >
                                <SView col={"xs-12"} height={4} />
                                <SView col={"xs-12"} border={'transparent'}   >
                                    <SText style={{ fontSize: 14 }} bold > {dataFirst.horario['hora_inicio']} am - Delivery </SText>
                                </SView>
                            </SView>
                        </SView>
                    </SView>



                    <SView col={"xs-12"} center>
                        <SHr color={STheme.color.lightGray} height={0.5}></SHr>
                    </SView>
                    <SView col={"xs-11 md-11 lg-10 xl-8"} height={50} center row backgroundColor={"transparent"} >
                        <SView width={41} height={41} center border={'transparent'}>
                            <SIcon name="RestauranteLogo" fill={STheme.color.primary} width={20} ></SIcon>
                        </SView>
                        <SView flex height center border={'transparent'}    >
                            <SView col={"xs-12"} height={4} />
                            <SView col={"xs-12"} border={'transparent'}   >
                                <SText style={{ fontSize: 14 }} bold >{dataFirst?.restaurante["nombre"]} </SText>
                            </SView>
                        </SView>
                    </SView>
                    <SView col={"xs-12"} center>
                        <SHr color={STheme.color.lightGray} height={0.5}></SHr>
                    </SView>
                    <SView col={"xs-11 md-11 lg-10 xl-8"} height={60} center row backgroundColor={"transparent"} >
                        <SView width={41} height={41} center border={'transparent'}>
                            <SIcon name="Location" fill={STheme.color.primary} width={18} ></SIcon>
                        </SView>
                        <SView flex height center border={'transparent'}    >
                            <SView col={"xs-12"} height={4} />
                            <SView col={"xs-12"} border={'transparent'}   >
                                <SText style={{ fontSize: 14 }} bold >{dataFirst.restaurante["direccion"]}</SText>
                            </SView>
                        </SView>
                    </SView>
                    <SView col={"xs-12"} center>
                        <SHr color={STheme.color.lightGray} height={0.5}></SHr>
                    </SView>
                    <BarraCargando />
                    <SView col={"xs-11 md-11 lg-10 xl-8"} height={70} center row backgroundColor={"transparent"} >




                        <SView width={41} height={41} center border={'transparent'}>
                            <SIcon name="AppAlert" fill={STheme.color.primary} width={20} ></SIcon>
                        </SView>
                        <SView flex height center border={'transparent'}    >
                            <SView col={"xs-12"} height={4} />
                            <SView col={"xs-12"} border={'transparent'}   >
                                <SText style={{ fontSize: 14 }}   >poner mensaje</SText>
                            </SView>
                        </SView>
                    </SView>
                    <SView col={"xs-12"} center>
                        <SHr color={STheme.color.lightGray} height={0.5}></SHr>
                    </SView>
                    <SView col={"xs-12"} height={80} row center   >
                        <SView flex center   >
                            <SButtom style={{ backgroundColor: STheme.color.primary, width: 150, height: 44, fontSize: 180, borderRadius: 25, }} onPress={() => { SNavigation.navigate("restaurante/comollegar", { key: dataFirst.restaurante["key"] }) }} fontSize={50} >Ir al restaurante</SButtom>
                        </SView>
                    </SView>


                    {/* <SView col={"xs-12"} height={80} row center   >
                  <SView flex center   >
                    <SButtom style={{ backgroundColor: "#FF5E5C", width: 150, height: 44, fontSize: 24, borderRadius: 25, }} onPress={() => { alert("cancelado") }} >Rechazar</SButtom>
                  </SView>
                  <SView flex center   >
                    <SButtom style={{ backgroundColor: "#2BC25F", width: 150, height: 44, fontSize: 180, borderRadius: 25, }} onPress={() => { alert("confirmado") }} fontSize={50} >Aceptar</SButtom>
                  </SView>
                </SView> */}
                </SView>
            </>
        }
        // else {
        //     return <>
        //         <SView col={"xs-12 md-6 lg-4"} height={320} backgroundColor={STheme.color.secondary} style={{ position: 'absolute', bottom: 0 }} center  >


        //             <SView col={"xs-12"} height={200} center backgroundColor={"transparent"}  >
        //                 <SIcon name="LogoFalse" fill={STheme.color.gray} height={150} ></SIcon>
        //             </SView>



        //             <SView col={"xs-12"} height={60} row backgroundColor={"transparent"} >
        //                 <SView width={41} height center border={'transparent'}>
        //                     <SIcon name="AppAlert" fill={STheme.color.primary} width={20} ></SIcon>
        //                 </SView>
        //                 <SView flex height center border={'transparent'}    >
        //                     <SView col={"xs-12"} height={4} />
        //                     <SView col={"xs-12"} border={'transparent'}   >
        //                         <SText style={{ fontSize: 14, color: STheme.color.gray }}  >Se encuentra lejos del restaurante, debe estar dentro de 1km </SText>
        //                     </SView>
        //                 </SView>
        //             </SView>

        //         </SView>
        //     </>
        // }
    }
}
const initStates = (state) => {
    return { state };
};
export default connect(initStates)(ShowInfo);