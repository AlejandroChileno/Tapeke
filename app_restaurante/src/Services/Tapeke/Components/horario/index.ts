const component = "horario"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Horario from "./Components/Horario";
import listaHorario from "./Pages/listaHorario";
import registroHorario from "./Pages/registroHorario";
import Reducer from "./Reducer";

export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        ["admin/" + component]: listaHorario,
        ["admin/" + component + "/registro"]: registroHorario,
    },
    Components: {
        Horario,
    }
}
