import { SStorage, SNavigation, SPopup } from 'servisofts-component';

export default class Validations {


    static set_pedido_en_curso(obj) {
        this._obj_pedido_en_curso = obj;
        SStorage.setItem("pedido_en_curso", JSON.stringify(obj));
    }
    static _obj_pedido_en_curso;
    static async pedido_en_curso(url) {
        if (!this._obj_pedido_en_curso) {
            SStorage.getItem("pedido_en_curso", (val) => {
                if (val) {
                    var obj = JSON.parse(val);
                    this._obj_pedido_en_curso = obj;
                    this._pedido_en_curso(obj, url);
                }
            })
            return;
        }
        this._pedido_en_curso(this._obj_pedido_en_curso, url);
    }
    static async _pedido_en_curso(obj, url) {
        switch (obj.state) {
            case "pendiente_pago":
                if (url == "pedido/confirmar") return;
                SNavigation.navigate("pedido/confirmar", { keyPedido: obj.key })
                return;
            case "pago_en_proceso":
                if (url == "pedido/mensajeSolicitud") return;
                SNavigation.replace("pedido/mensajeSolicitud", { key_pedido: obj.key })
                return;
            case "pagado"://AQUI SE DEBE DE CARGAR EL PEDIDO A RECOGER
                SStorage.removeItem("pedido_en_curso")
                console.log(JSON.stringify(obj) + "AQUIII");
                if (obj.delivery == 0) {
                    SNavigation.replace("recoger_usuario/pagado", { key_pedido: obj.key })
                }
                if (obj.delivery != 0) {
                    console.log("CON DELIVERY");
                    SNavigation.replace("recoger_delivery/pagado", { key_pedido: obj.key })
                }
                // SNavigation.replace("pedido/confirmacion", { key_pedido: obj.key });
                return;
            case "timeout_pago":
                SStorage.removeItem("pedido_en_curso")
                SPopup.alert("El tiempo de espera para pagar ha expirado");
                SNavigation.replace("/");
                return;
        }
    }
}