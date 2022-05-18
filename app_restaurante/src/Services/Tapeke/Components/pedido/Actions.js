import SSocket from 'servisofts-socket';
import Parent from './index';
import Service from '../../index';

export default class Actions {
    static _getReducer = (props) => {
        return props.state[Parent.component + "Reducer"];
    }

    
    static getAll = (props) => {
        var reducer = Actions._getReducer(props);
        var data = reducer.data;
        if (!data) {
            if (reducer.estado == "cargando") return null;
            SSocket.send({
                component: Parent.component,
                version: Parent.version,
                type: "getAll",
                estado: "cargando",
                 key_usuario: props.state.usuarioReducer.usuarioLog.key,

                // key_usuario: this.props.state.usuarioReducer.usuarioLog.key,
            })
            return null;
        }
        // console.log("alvaro ", data);
        return data;
    }

    static getByKeyRestauranteHorarios = (key, props) => {
        var data = Actions.getAllHorarios(props);
        if (!data) return null;
        return Object.values(data).filter(itm => itm.key_restaurante == key)
    }

    static getAllHorarios = (props) => {
        var reducer = Actions._getReducer(props);
        var data = reducer.data;
        if (!data) {
            if (reducer.estado == "cargando") return null;
            SSocket.send({
                component: "horario",
                version: "1.0",
                type: "getAll",
                estado: "cargando",
                 key_usuario: props.state.usuarioReducer.usuarioLog.key,
            })
            return null;
        }
        // console.log("romeo "+ data);
        return data;
    }

    static getDetalle = (key, props) => {
        var reducer = Actions._getReducer(props);
        var data = reducer.dataDetalle[key];
        if (!data) {
            if (reducer.estado == "cargando") return null;
            SSocket.send({
                component: Parent.component,
                version: Parent.version,
                type: "getDetalle",
                estado: "cargando",
                key_pedido: key,
                key_usuario: props.state.usuarioReducer.usuarioLog.key,
            })
            return null;
        }

        // console.log("romoe ",JSON.stringify(data));
        // console.log("romoe ",data);
        return data;
    }


    static getByKey = (key, props) => {
        var data = Actions.getAll(props);
        if (!data) return null;
        console.log(data);
        return data[key];
    }



    static getByKeyHorario = (key_horario, props) => {
        var data = Actions.getAll(props);
        if (!data) return null;
        return Object.values(data).filter(item => item.key_horario == key_horario)[0];
    }

    static getVendidosData = ({ key_pack, fecha }, props) => {
        var data = Actions.getAll(props);
        if (!data) return null;
        var arr = Object.values(data).filter(item => item.key_pack == key_pack && item.fecha == fecha && (item.state != "pendiente_pago" && item.state != "timeout_pago"));
        var cantidad = 0;
        arr.map(item => cantidad += item.cantidad);
        return arr;
    }

    static entregar = (key, props) => {
        SSocket.send({
            component: Parent.component,
            version: Parent.version,
            type: "entregar",
            estado: "cargando",
            key_pedido: key,
            key_usuario: props.state.usuarioReducer.usuarioLog.key,
        })
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