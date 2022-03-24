//  COMPONENT CONFIG
const component = "direccion_usuario"; // COMPONENT NAME
const version = "2.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";
import locationGoogleReducer from "./locationGoogleReducer";
import MapaBolivia from "./Pages/MapaBolivia";
import Direccion from "./Pages/Direccion";

export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer,
        locationGoogleReducer,
    },
    Pages: {
        [component + "/"]: MapaBolivia,
        [component + "/mapaBolivia"]: MapaBolivia,
        [component + "/direccion"]: Direccion,
    },
    Components: {
        // Item,
        // Item2,
    }
}