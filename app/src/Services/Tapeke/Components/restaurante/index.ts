//  COMPONENT CONFIG
const component = "restaurante"; // COMPONENT NAME
const version = "2.0";
// ---------------------------------------
import Actions from "./Actions";
import Reducer from "./Reducer";

import Perfil from "./Pages/Perfil";

import Item from "./Components/Item";
import Item2 from "./Components/Item2";

import Favoritos from "./Components/Favoritos";
import Categoria from "./Components/Categoria";
import Filtros from "./Components/Filtros";

import Explorador from "./Components/Explorador";

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

    },
    Components: {
        Item,
        Item2,

    }
}