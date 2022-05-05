import { SStorage, SNavigation, SPopup } from 'servisofts-component';

export default class Validations {

    static set_pedido_en_curso(obj) {
        SStorage.setItem("pedido_en_curso", JSON.stringify(obj));
    }
    static async pedido_en_curso(url) {
        SStorage.getItem("pedido_en_curso", (val) => {
            if (val) {
                var obj = JSON.parse(val);
                switch (obj.state.code) {
                    case "pendiente_pago":
                        if (url == "pedido/confirmar") return;
                        SNavigation.navigate("pedido/confirmar", { keyPedido: obj.key })
                        return;
                    case "pago_en_proceso":
                        if (url == "pedido/mensajeSolicitud") return;
                        SNavigation.replace("pedido/mensajeSolicitud", { key_pedido: obj.key })
                        return;
                    case "pagado":
                        SStorage.removeItem("pedido_en_curso")
                        SNavigation.replace("pedido/confirmacion", { key_pedido: obj.key });
                        return;
                    case "timeout_pago":
                        SStorage.removeItem("pedido_en_curso")
                        SPopup.alert("El tiempo de espera para pagar ha expirado");
                        SNavigation.replace("/");
                        return;
                }
            }
        })
    }
}