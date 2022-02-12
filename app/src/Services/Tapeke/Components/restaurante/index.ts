//  COMPONENT CONFIG
const component = "restaurante"; // COMPONENT NAME 
const version = "2.0"; 
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";

import Perfil from "./Pages/Perfil";

export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        [component + "/perfil"]: Perfil,
    }
}