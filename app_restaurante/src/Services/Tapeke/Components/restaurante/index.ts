//  COMPONENT CONFIG
const component = "restaurante"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Item from "./Components/Item";
import Item2 from "./Components/Item2";
import lista from "./Pages/lista";
import Perfil from "./Pages/Perfil";
import registro from "./Pages/registro";
import Reducer from "./Reducer";





export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        [component + "/perfil"]: Perfil,
        ["admin/" + component]: lista,
        ["admin/" + component + "/registro"]: registro,
    },
    Components: {
        Item,
        Item2,
    }
}