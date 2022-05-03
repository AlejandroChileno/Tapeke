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
            })
            return null;
        }
        return data;
    }


    static getByKey = (key, props) => {
        var data = Actions.getAll(props);
        if (!data) return null;
        return data[key];
    }

    static getDetalle = (key,props) => {
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


    static getVendidos = ({ key_pack, fecha }, props) => {
        var data = Actions.getAll(props);
        if (!data) return null;
        var arr = Object.values(data).filter(item => item.key_pack == key_pack && item.fecha == fecha);
        var cantidad = 0;
        arr.map(item => cantidad += item.cantidad);
        return cantidad;
    }

    static registro = (data,key_pedido, props) => {
        var sendT = {
            component: Parent.component,
            version: Parent.version,
            key_pedido:key_pedido,
            type: "registro",
            estado: "cargando",
            key_usuario: props.state.usuarioReducer.usuarioLog.key,
            data: data
        }
        console.log("alvaro ",sendT);
        SSocket.send(sendT)
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