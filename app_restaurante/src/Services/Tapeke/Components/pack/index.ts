const component = "pack"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import registroPack from "./Pages/registroPack";
import Reducer from "./Reducer";

export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        ["admin/" + component + "/registro"]: registroPack,
    }
}
