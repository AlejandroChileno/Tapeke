//  COMPONENT CONFIG
const component = "chat"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Lista from "./Pages/lista";
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
