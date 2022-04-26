//  COMPONENT CONFIG
const component = "pedido"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";
import Calendario from "./Pages/Calendario";
import Detalle from "./Pages/Detalle";

export default {
    component,
    version,
    Actions,
    Reducers: {
         [component + 'Reducer']: Reducer
    },
    Pages: {
        // [component]: testing,
        // ["admin/" + component + "/registro"]: registroPack,
        [component + "/calendario"]: Calendario,
        [component + "/"]: Detalle,
    },
    // Components: {
    //     Horario,
    // }
}
