import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SImage, SInput, SLoad, SNavigation, SPage, SPopup, STable2, SText, SView } from 'servisofts-component';
import Parent from '..'
import SSocket from 'servisofts-socket'
import FloatButtom from '../../../../../Components/FloatButtom';
import usuario from '../../../../Usuario/Components/usuario';
import horario from '../../horario';
import restaurante from '../../restaurante';
class lista extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.key_horario = SNavigation.getParam("key_horario");
    }

    getLista() {
        var data;
        if (this.key_horario) {
            data = Parent.Actions.getByKeyHorario(this.key_horario, this.props);
        } else {
            data = Parent.Actions.getAll(this.props);
        }

        var horarios = horario.Actions.getAll(this.props);
        var usuarios = usuario.Actions.getAll(this.props);
        var restaurantes = restaurante.Actions.getAll(this.props);
        if (!data) return <SLoad />
        if (!usuarios) return <SLoad />
        if (!horario) return <SLoad />
        if (!restaurantes) return <SLoad />
        return <STable2
            header={[
                { key: "index", label: "#", width: 50 },
                {
                    key: "key_usuario", label: "Usuario", width: 130, render: (key_usuario) => {
                        if (!key_usuario) return "";
                        var usr = usuarios[key_usuario];
                        return usr.Nombres + " " + usr.Apellidos;
                    }
                },
                {
                    key: "key_horario-hi", label: "H. inicio", width: 130, render: (key_horario) => {
                        if (!key_horario) return "";
                        var hor = horarios[key_horario];
                        return hor.hora_inicio;
                    }
                },
                {
                    key: "key_horario-hf", label: "H. fin", width: 130, render: (key_horario) => {
                        if (!key_horario) return "";
                        var hor = horarios[key_horario];
                        return hor.hora_fin;
                    }
                },
                {
                    key: "key_horario-resta", label: "H. fin", width: 130, render: (key_horario) => {
                        if (!key_horario) return "";
                        var hor = horarios[key_horario];
                        if (!hor.key_restaurante) return "";
                        var rest = restaurantes[hor.key_restaurante];
                        return rest.nombre;
                    }
                },
                {
                    key: "-eliminar", label: "Eliminar", width: 70, center: true,
                    component: (obj) => {
                        return <SView width={35} height={35} onPress={() => { SPopup.confirm({ title: "Eliminar", message: "¿Esta seguro de eliminar?", onPress: () => { Parent.Actions.eliminar(obj, this.props) } }) }}>
                            <SIcon name={'Delete'} />
                        </SView>
                    }
                },
            ]}

            data={data}
            filter={(dta) => {
                if (dta.estado != 1) return false;
                return true;
            }}
        />
    }
    render() {
        return (
            <SPage title={'lista'} disableScroll>
                <SView col={"xs-12"} center height>
                    {this.getLista()}
                </SView>
                {/* <FloatButtom onPress={() => {
                    SNavigation.navigate("conductor_horario/registro", { key_horario: this.key_horario });
                }} /> */}
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(lista);