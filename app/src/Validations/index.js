import { SStorage, SNavigation } from 'servisofts-component';

export default class Validations {

    static async pedido_en_curso() {
        SStorage.getItem("pedido_en_curso", (val) => {
            if (val) {
                var obj = JSON.parse(val);
                switch (obj.state.code) {
                    case "pendiente_pago":
                        SNavigation.navigate("pedido/confirmar", { keyPedido: obj.key })
                        return;
                    case "pago_en_proceso":
                        SNavigation.navigate("pedido/mensajeSolicitud", { key_pedido: obj.key })
                        return;
                }
            }
        })
    }
}