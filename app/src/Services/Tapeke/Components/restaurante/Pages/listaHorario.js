import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SImage, SLoad, SNavigation, SPage, SPopup, STable2, SText, SView,SDate } from 'servisofts-component';
import Parent from '..'
import horario from '../../horario';
import SSocket from 'servisofts-socket'
import FloatButtom from '../../../../../Components/FloatButtom';
class listaHorario extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key = SNavigation.getParam("key");
    }

    getLista() {
        var data = horario.Actions.getAll(this.props);
        if (!data) return <SLoad />
        var dataHorario = Object.values(data).filter(item => item.key_restaurante == this.key)

        return <STable2
            header={[
                { key: "index", label: "#", width: 100 },
                { key: "hora_inicio", label: "Hora Inicio", width: 100 },
                { key: "hora_fin", label: "Hora Fin", width: 100 },
                // { key: "dia", label: "Dia", width: 200 },
                {
                    key: "dia", label: "Dia", width: 100, center: true,
                    component: (item) => {
                        var dias = new SDate.getDaysOfWeek();
                        dias[-1] = { text: "Feriado", value: "Fer" };
                        return dias[item].text;
                    }
                },
                {
                    key: "key-editar", label: "Editar", width: 50, center: true,
                    component: (item) => {
                        return <SView onPress={() => { SNavigation.navigate("admin/" + Parent.component + "/registro", { key: item }) }}>
                            <SIcon name={"Edit"} width={35} />
                        </SView>
                    }
                },
                {
                    key: "key-eliminar", label: "Eliminar", width: 70, center: true,
                    component: (key) => {
                        return <SView width={35} height={35} onPress={() => { SPopup.confirm({ title: "Eliminar", message: "¿Esta seguro de eliminar?", onPress: () => { Parent.Actions.eliminar(data[key], this.props) } }) }}>
                            <SIcon name={'Delete'} />
                        </SView>
                    }
                },
               
            ]}
            data={dataHorario}
            filter={(dta)=>{
                if(dta.estado != 1) return false;
                return true;
            }}
        />
    }
    render() {
        return (
            <SPage title={'Lista horario'} disableScroll>

                <SView col={"xs-12"} center height>
                    {this.getLista()}
                </SView>
                <FloatButtom onPress={() => {
                    SNavigation.navigate("admin/restaurante/horario/registro", { key_restaurante: this.key });
                }} />
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(listaHorario);