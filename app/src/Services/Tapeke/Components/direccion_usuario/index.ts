//  COMPONENT CONFIG
const component = "direccion_usuario"; // COMPONENT NAME
const version = "2.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";
import MapaBolivia from "./Pages/MapaBolivia";

export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        [component + "/"]: MapaBolivia,
        [component + "/mapaBolivia"]: MapaBolivia,
    },
    Components: {
        // Item,
        // Item2,
    }
}