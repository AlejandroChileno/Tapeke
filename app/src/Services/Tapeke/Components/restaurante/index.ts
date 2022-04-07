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
import ExploradorMapa from "./Pages/ExploradorMapa";



//Horarios
import alvaro from "./Pages/alvaro";
import MapaTest from "./Pages/MapaTest";

//Packs
import ComoLLegar from "./Pages/ComoLLegar";

export default {
    component,
    version,
    Actions,
    Reducers: {
        [component + 'Reducer']: Reducer
    },
    Pages: {
        [component + "/perfil"]: Perfil,
        [component + "/comollegar"]: ComoLLegar,

        // ["favoritos"]: Favoritos,
        [component + "/categoria"]: Categoria,
        ["explorar"]: Explorador,
        ["explorar/filtros"]: Filtros,
        // [component + "/filtros"]: Filtros,

        ["mapa"]: ExploradorMapa,
        ["admin/" + component]: lista,
        ["admin/" + component + "/registro"]: registro,
        // ["admin/" + component + "/horario/lista"]: listaHorario,



        [component + "/mapaTest"]: MapaTest,
        // [component + "/alvaro"]: alvaro,
    },
    Components: {
        Item,
        Item2,
    }
}