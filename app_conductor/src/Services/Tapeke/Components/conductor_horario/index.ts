//  COMPONENT CONFIG
const component = "conductor_horario"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Lista from "./Pages/Lista";
import Reducer from "./Reducer";

export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
         [component + "/lista"]: Lista,
    },
    Components: {}
}
