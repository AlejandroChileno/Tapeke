

// import Actions from "./Actions";
import Reducer from "./Reducer";
import Lista from "./Pages/Lista";
import Registro from "./Pages/Registro";

const component = "inventario_kardex"; // COMPONENT NAME 
const version = "1.0";

//alvaro
export default {
    component,
    version,
    // Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        //el component cuando paso un dato
        [component]: Lista,
        [component + "/registro"]: Registro,
        [component + "/kolping/lista"]: Lista,
    }
}