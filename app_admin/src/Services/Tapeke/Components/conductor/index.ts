//  COMPONENT CONFIG
const component = "conductor"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Home from "./Pages/Home";
import Mapa from "./Pages/Mapa";



export default {
    component,
    version,
    Reducers: {
        // [component + 'Reducer']: Reducer
    },
    Pages: {
        [component]: Home,
        [component + '/mapa']: Mapa
    },
    Components: {
    }
}