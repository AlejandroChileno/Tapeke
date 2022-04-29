//  COMPONENT CONFIG
const component = "pago_tarjeta"; // COMPONENT NAME
const version = "2.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";
import Registro from "./Pages/Registro";
import Facturacion from "./Pages/Facturacion";
import MisTarjetas from "./Pages/MisTarjetas";
//Horarios

//Packs

export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        [component + "/registro"]: Registro,
        [component + "/facturacion"]: Facturacion,
        [component + "/misTarjetas"]: MisTarjetas,
    },
    Components: {
       
    }
}