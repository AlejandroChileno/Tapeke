//  COMPONENT CONFIG
const component = "chatPage"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Lista from "./Pages/Lista";
import Registro from "./Pages/registro";
import Reducer from "./Reducer";

export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        [component + ""]: Lista,
        [component + "/lista"]: Lista,
        [component + "/registro"]: Registro,

    },
    Components: {}
}
