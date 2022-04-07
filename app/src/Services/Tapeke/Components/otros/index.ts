//  COMPONENT CONFIG
const component = "pack"; // COMPONENT NAME
const version = "2.0";
// ---------------------------------------
import Actions from "./Actions";
// import Horario from "./Components/Horario";
import Contacto from "./Pages/Contacto";

export default {
    component,
    version,
    Actions,

    Pages: {
        [component + "/contactanos"]: Contacto,
    },
    // Components: {
    //     Horario,
    // }
}
