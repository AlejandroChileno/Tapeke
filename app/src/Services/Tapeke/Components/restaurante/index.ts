//  COMPONENT CONFIG
const component = "restaurante"; // COMPONENT NAME
const version = "2.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";

import Perfil from "./Pages/Perfil";

import Item from "./Components/Item";
import Item2 from "./Components/Item2";
import Filtros from "./Components/Filtros";

import Favoritos from "./Pages/Favoritos";
import Categoria from "./Pages/Categoria";
import Explorador from "./Pages/Explorador";
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
        [component + "/perfil"]: Perfil,
        [component + "/favoritos"]: Favoritos,
        [component + "/categoria"]: Categoria,
        [component + "/filtros"]: Filtros,
        [component + "/explorador"]: Explorador,
        ["admin/" + component]: lista,
        ["admin/" + component+"/registro"]: registro,

    },
    Components: {
        Item,
        Item2,

    }
}