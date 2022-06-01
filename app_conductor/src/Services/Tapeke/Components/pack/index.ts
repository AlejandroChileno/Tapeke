//  COMPONENT CONFIG
const component = "pack"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import ListaEstrega from "./Pages/lista";
import Reducer from "./Reducer";

export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        [component + "/lista"]: ListaEstrega,

    },
    Components: {}
}
