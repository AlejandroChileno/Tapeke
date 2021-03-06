//  COMPONENT CONFIG
const component = "filtros"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";

import BarraFiltros from "./Components/BarraFiltros";

export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
    },
    Components: {
        BarraFiltros
    }
}
