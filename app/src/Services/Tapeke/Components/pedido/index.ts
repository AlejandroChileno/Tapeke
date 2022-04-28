//  COMPONENT CONFIG
const component = "pedido"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";

import Detalle from "./Pages/Detalle";
import Confirmar from "./Pages/Confirmar";
import Mapa from "./Pages/Mapa";
import MensajeSolicitud from "./Pages/MensajeSolicitud";

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
        [component + "/mapa"]: Mapa,
        [component + "/mensajeSolicitud"]: MensajeSolicitud,
        
    },
}