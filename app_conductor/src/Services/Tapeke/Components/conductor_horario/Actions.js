import { SDate } from 'servisofts-component';
import SSocket from 'servisofts-socket';
import horario from '../horario';
import pack from '../pack';
import restaurante from '../restaurante';
import Parent from './index';

export default class Actions {
    static _getReducer = (props) => {
        return props.state[Parent.component + "Reducer"];
    }
    static getAll = (props, force) => {
        var reducer = Actions._getReducer(props);
        var data = reducer.data;
        if (!data || force) {
            if (reducer.estado == "cargando") return null;
            SSocket.send({
                component: Parent.component,
                version: Parent.version,
                type: "getAll",
                estado: "cargando",
                key_usuario: props.state.usuarioReducer.usuarioLog.key,
            })
            // console.log("getAll");

            return null;
        }
        return data;
    }

    static getByKey = (key, props) => {
        var data = Actions.getAll(props);
        if (!data) return null;
        return data[key];
    }
    static getByKeyUsuario = (keyUsuario, props, force) => {
        var data = Actions.getAll(props, force);
        if (!data) return null;
        var arr = Object.values(data).filter(dta => dta.key_usuario == keyUsuario);
        return arr;
    }

    // TODO no borrar, es para guiarme
    // var data = conductor_horario.Actions.getByKeyUsuario(this.props.state.usuarioReducer.usuarioLog.key, this.props);
    // // var data = conductor_horario.Actions.getAll(this.props);
    // var data_horario = horario.Actions.getAll(this.props);
    // var data_restaurante = restaurante.Actions.getAll(this.props);
    // var data_pack = pack.Actions.getAll(this.props);
    // // var data_user = pack.Actions.getAll(this.props);
    // if (!data) return <SLoad />;
    // if (!data_horario) return <SLoad />;
    // if (!data_restaurante) return <SLoad />;
    // if (!data_pack) return <SLoad />;
    // var dataFinal = {}
    // Object.values(data).map(obj_ch => {
    // 	var horario = data_horario[obj_ch.key_horario]
    // 	var restaurante = data_restaurante[horario.key_restaurante]
    // 	var sd = new SDate();
    // 	if (!horario) return null;
    // 	if (horario?.dia == sd.getDayOfWeek()) {
    // 		//igual no hace nada
    // 	} else if (horario?.dia > sd.getDayOfWeek()) {
    // 		sd.addDay((- sd.getDayOfWeek()) + horario?.dia);
    // 	} else if (horario?.dia < sd.getDayOfWeek()) {
    // 		sd.addDay((7 - sd.getDayOfWeek()) + horario?.dia);
    // 	}
    // 	var fecha = sd.toString("yyyy-MM-dd");
    // 	var dia = new SDate(fecha + " " + horario?.hora_fin, "yyyy-MM-dd hh:mm");
    // 	if (dia.getTime() < new SDate().getTime()) {
    // 		fecha = sd.addDay(7).toString("yyyy-MM-dd");
    // 	}
    // 	dataFinal[obj_ch.key] = {
    // 		...obj_ch,
    // 		horario,
    // 		restaurante,
    // 		fecha: fecha
    // 	};
    // })
    // var arr = Object.values(dataFinal).slice(0, 6);

    static getAllPedidoProximoByKey = (keyuser, props) => {
        var data = Actions.getByKeyUsuario(keyuser, props);
        var data_horario = horario.Actions.getAll(props);
        var data_restaurante = restaurante.Actions.getAll(props);
        var data_pack = pack.Actions.getAll(props);
        if (!data) return null;
        if (!data_horario) return null;
        if (!data_restaurante) return null;
        if (!data_pack) return null;
        var dataFinal = {}
        Object.values(data).map(obj_ch => {
            var horario = data_horario[obj_ch.key_horario]
            var restaurante = data_restaurante[horario.key_restaurante]
            var sd = new SDate();
            if (!horario) return null;
            if (horario?.dia == sd.getDayOfWeek()) {
                //igual no hace nada
            } else if (horario?.dia > sd.getDayOfWeek()) {
                sd.addDay((- sd.getDayOfWeek()) + horario?.dia);
            } else if (horario?.dia < sd.getDayOfWeek()) {
                sd.addDay((7 - sd.getDayOfWeek()) + horario?.dia);
            }
            var fecha = sd.toString("yyyy-MM-dd");
            var dia = new SDate(fecha + " " + horario?.hora_fin, "yyyy-MM-dd hh:mm");
            if (dia.getTime() < new SDate().getTime()) {
                fecha = sd.addDay(7).toString("dd-MM-yyyy");
            }

            dataFinal[obj_ch.key] = {
                ...obj_ch,
                horario,
                restaurante,
                fecha: fecha
            };
        })
        var arr = Object.values(dataFinal);
        return arr;
    }
    static getPedidoProximoByKey = (keyuser, props) => {
        var data = Actions.getByKeyUsuario(keyuser, props);
        var data_horario = horario.Actions.getAll(props);
        var data_restaurante = restaurante.Actions.getAll(props);
        var data_pack = pack.Actions.getAll(props);
        if (!data) return null;
        if (!data_horario) return null;
        if (!data_restaurante) return null;
        if (!data_pack) return null;
        var dataFinal = {}
        Object.values(data).map(obj_ch => {
            var horario = data_horario[obj_ch.key_horario]
            var restaurante = data_restaurante[horario.key_restaurante]
            var sd = new SDate();

            // console.log("mira ",horario);



            if (!horario) return null;
            if (horario?.dia == sd.getDayOfWeek()) {
                //igual no hace nadar
            } else if (horario?.dia > sd.getDayOfWeek()) {
                sd.addDay((- sd.getDayOfWeek()) + horario?.dia);
            } else if (horario?.dia < sd.getDayOfWeek()) {
                sd.addDay((7 - sd.getDayOfWeek()) + horario?.dia);
            }
            var fecha = sd.toString("dd-MM-yyyy");
            var dia = new SDate(fecha + " " + horario?.hora_fin, "yyyy-MM-dd hh:mm");
            if (dia.getTime() < new SDate().getTime()) {
                fecha = sd.addDay(7).toString("dd-MM-yyyy");
            }

            // primero obtengo todos los pedidos de hoy o cercano
            // segundo obtengo comparo la hora

            // var dia = new SDate(dow.fecha + " " + dow.hora_fin, "yyyy-MM-dd hh:mm");
            // if (dia.getTime() < new SDate().getTime()) {
            //     dow.fecha = date.addDay(7).toString("yyyy-MM-dd");
            //     text = "Proximo " + SDate.getDayOfWeek(dow.dia).text?.toLowerCase();
            //     dia = new SDate(dow.fecha + " " + dow.hora_fin, "yyyy-MM-dd hh:mm");
            // }


            // var dia = new SDate(horario.fecha + " " + horario.hora_fin, "yyyy-MM-dd hh:mm");
            // if (dia.getTime() < new SDate().getTime()) {
            //     horario.fecha = date.addDay(7).toString("yyyy-MM-dd");
            //     text = "Proximo " + SDate.getDayOfWeek(horario.dia).text?.toLowerCase();
            //     dia = new SDate(horario.fecha + " " + horario.hora_fin, "yyyy-MM-dd hh:mm");
            // }

            // console.log("miralo ",sd);


            dataFinal[obj_ch.key] = {
                ...obj_ch,
                horario,
                restaurante,
                fecha: fecha,
                sdate:sd
            };
        })
        var arr = Object.values(dataFinal);
        arr.sort((a, b) => { return a.sdate.getTime() < b.sdate.getTime() ? 1 : -1 });

        return arr[0];


    }
    static registro = (data, props) => {
        SSocket.send({
            component: Parent.component,
            version: Parent.version,
            type: "registro",
            estado: "cargando",
            key_usuario: props.state.usuarioReducer.usuarioLog.key,
            data: data
        })
    }
    static editar = (data, props) => {
        SSocket.send({
            component: Parent.component,
            version: Parent.version,
            type: "editar",
            estado: "cargando",
            key_usuario: props.state.usuarioReducer.usuarioLog.key,
            data: data
        })
    }
    static eliminar = (data, props) => {
        SSocket.send({
            component: Parent.component,
            version: Parent.version,
            type: "editar",
            estado: "cargando",
            key_usuario: props.state.usuarioReducer.usuarioLog.key,
            data: {
                ...data,
                estado: 0,
            }
        })
    }
}