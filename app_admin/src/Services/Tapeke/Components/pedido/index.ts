//  COMPONENT CONFIG
const component = "pedido"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";

import Lista from "./Pages/Lista";
import Activos from "./Pages/Activos";
import Entregados from "./Pages/Entregados";
import DashBoard from "./Pages/DashBoard";
import Home from "./Pages/Home";
import ByPackFecha from "./Pages/ByPackFecha";

export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        [component]: Home,
        [component + "/all"]: Lista,
        [component + "/activos"]: Activos,
        [component + "/entregados"]: Entregados,
        [component + "/dashboard"]: DashBoard,
        [component + "/byPackFecha"]: ByPackFecha,
    },
}