//  COMPONENT CONFIG
const component = "inicio"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Lista from "./Pages/inicioTest";
import ShowInfo from "./Pages/ShowInfo";
import ShowMapa from "./Pages/ShowMapa";
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
         [component + "/mapa"]: ShowMapa,
         [component + "/info"]: ShowInfo,

    },
    Components: {}
}
