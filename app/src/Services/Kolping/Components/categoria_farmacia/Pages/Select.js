import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SImage, SLoad, SNavigation, SPage, SPopup, STable2, SText, SView } from 'servisofts-component';
import FloatButtom from '../../../../../Components/Kolping/FloatButtom';
import Kolping from '../../../../../Components/Kolping';
import Parent from '../index'
import SSocket from 'servisofts-socket';

class Select extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.onSelect = SNavigation.getParam('onSelect');

    }

    getContent() {
        var data = Parent.Actions.getAll(this.props);
        if (!data) return <SLoad />;
        return <STable2
            header={[
                { key: "index", label: "#", width: 50 },
                // {
                //     key: "key-foto", label: "foto", width: 100,
                //     render: (item) => {
                //         // SSocket.api.root+'medico/key'
                //         return SSocket.api.root + Parent.component + "/" + item
                //     },
                //     component: (url) => {
                //         return <SImage src={url + "?time=" + new Date().getTime()} width={"100%"} height={"100%"} />
                //     }
                // },
                { key: "descripcion", label: "Descripcion", width: 250 },
                // { key: "precio", label: "Precio", width: 150, center:true,render: (item) => { return `Bs. ${parseFloat(item).toFixed(2)}` } },
                {
                    key: "key-select", label: "Seleccionar", width: 70, center: true, component: (item) => {
                        return <SView onPress={() => {
                            if (this.onSelect) {
                                this.onSelect(data[item]);
                            }
                            SNavigation.goBack();
                        }}> <SIcon name={"Salir"} width={35} /></SView>
                    }
                },
                // { key: "key-eliminar", label: "Eliminar", width: 70, center: true, component: (key) => { return <SView width={35} height={35} onPress={() => { SPopup.confirm({ title: "Eliminar", message: "¿Esta seguro de eliminar?", onPress: () => { Parent.Actions.eliminar(data[key], this.key_servicio, this.props) } }) }}> <SIcon name={'Delete'} /> </SView> } },

            ]}
            filter={(data) => {
                if (data.estado != 1) return false;
                return true;
            }}
            data={data}
        />
    }

    render() {
        return (
            <SPage title={'Select de ' + Parent.component} disableScroll center>
                {this.getContent()}


                {/* <FloatButtom onPress={() => {
                    SNavigation.navigate(Parent.component + "/registro")
                }} /> */}


                {/* <Kolping.KButtom onPress={() => {
                    SNavigation.navigate(Parent.component + "/registro", { key: null })
                }}>Registrar nuevo</Kolping.KButtom> */}


            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Select);