//  COMPONENT CONFIG
const component = "usuario_restaurante"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";
import lista001 from "./Pages/lista001";
import lista002 from "./Pages/lista002";
import RestauranteSeleccionado from "./Pages/RestauranteSeleccionado";



export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        ["admin/" + component]: lista001,
        ["admin/" + component + "/lista002"]: lista002,
        ["admin/" + component + "/restaurante"]: RestauranteSeleccionado,
    },
    Components: {
    }
}