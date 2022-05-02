import { SStorage, SNavigation } from 'servisofts-component';

export default class Validations{
    
    static pedido_en_curso(){
        SStorage.getItem("pedido_en_curso", (val) => {
            if (val){
                var obj = JSON.parse(val);
                SNavigation.navigate("pedido/confirmar", {keyPedido:obj.key})
            }
        })
    }
}