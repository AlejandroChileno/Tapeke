//  COMPONENT CONFIG
const component = "payment_type"; // COMPONENT NAME 
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";
// import Components from "./Components";
import Lista from "./Pages/Lista";
import Registro from "./Pages/Registro";
import TipoPago from "./Components/TipoPago";
 

//alvaro
export default {
    component,
    version,
    Actions,
    // ...Components,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        [component + "/"]: Lista,

        [component + "/registro"]: Registro,
        [component + "/lista"]: Lista,
    } , 
    Components: {
        TipoPago
    }
}