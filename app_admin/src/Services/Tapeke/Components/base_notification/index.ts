//  COMPONENT CONFIG
const component = "base_notification"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";
import lista from "./Pages/lista";
import registro from "./Pages/registro";



//Horarios

//Packs

export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        [ component]: lista,
        [ component + "/registro"]: registro,
    },
    Components: {
       
    }
}