//  COMPONENT CONFIG
const component = "pedido"; // COMPONENT NAME
const version = "2.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";

import Detalle from "./Pages/Detalle";
import Confirmar from "./Pages/Confirmar";

export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        [component + "/detalle"]: Detalle,
        [component + "/confirmar"]: Confirmar,

    },
}