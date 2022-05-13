//  COMPONENT CONFIG
const component = "restaurante"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";
import Perfil from "./Pages/Perfil";
import Item from "./Components/Item";
import Marker from "./Components/Marker";
import Item2 from "./Components/Item2";
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
        ["admin/" + component]: lista,
        ["admin/" + component + "/registro"]: registro,
        [component + "/perfil"]: Perfil,
    },
    Components: {
        Item,
        Item2,
        Marker
    }
}