//  COMPONENT CONFIG
const component = "calificacion"; // COMPONENT NAME
const version = "2.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";
import Calificacion from "./Pages/Calificacion";

export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
         [component]: Calificacion,
        // ["admin/" + component + "/registro"]: registroPack,
        // [component + "/calificacion"]: Calificacion,
    },
    // Components: {
    //     Horario,
    // }
}
