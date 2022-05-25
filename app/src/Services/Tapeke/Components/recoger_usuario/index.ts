//  COMPONENT CONFIG
const component = "recoger_usuario"; // COMPONENT NAME
const version = "2.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";
import Pagado from "./Pages/Pagado";

export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        [component + "/pagado"]: Pagado,
    },
    // Components: {
    //     Horario,
    // }
}
