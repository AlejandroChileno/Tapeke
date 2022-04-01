//  COMPONENT CONFIG
const component = "pack"; // COMPONENT NAME
const version = "2.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";
import testing from "./Pages/testing";
// import Horario from "./Components/Horario";


export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        [component]: testing,
        [component + "/testing"]: testing,
    },
    // Components: {
    //     Horario,
    // }
}
