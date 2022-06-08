//  COMPONENT CONFIG
const component = "restaurante"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import ComoLLegar from "./Pages/ComoLLegar";
import Lista from "./Pages/ListadosR";
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
         [component + "/comollegar"]: ComoLLegar,

    },
    Components: {}
}
