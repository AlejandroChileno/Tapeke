//  COMPONENT CONFIG
const component = "conductor_horario"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";
import lista from "./Pages/lista";
import registro from "./Pages/registro";



export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        [component]: lista,
        [component + "/registro"]: registro,
    },
    Components: {
    }
}