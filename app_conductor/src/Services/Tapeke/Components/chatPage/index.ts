//  COMPONENT CONFIG
const component = "chatPage"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
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
        "/": Registro,
        [component + "/registro"]: Registro,

    },
    Components: {}
}
