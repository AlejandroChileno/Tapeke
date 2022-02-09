//  COMPONENT CONFIG
const component = "cotizacion_farmacia"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";
import Lista from "./Pages/Lista";
import Registro from "./Pages/Registro";
import Perfil from "./Pages/Perfil";
import Home from "./Pages/Home";
import ListaUsuario from "./Pages/ListaUsuario";


//alvaro
export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        //el component cuando paso un dato
        ["admin/" + component]: Home,
        // ["admin/" + component]: Lista,
        [component + "/registro"]: Registro,
        [component + "/perfil"]: Perfil,
        ["admin/" + component + "/lista"]: Lista,
        [component + "/listaCotizada"]: ListaUsuario,

    }
}