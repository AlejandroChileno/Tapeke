import Services from '../Services';
import Carga from './Carga';
import Ajustes from './Ajustes';
import Administracion from './Administracion';
import TerminosCondiciones from '../Pages/TerminosCondiciones';
import inDevelop from './inDevelop';
import SelectDireccion from './SelectDireccion';
import Ayuda from './Ayuda';
const Pages = {
    "/": Administracion,
    "carga": Carga,
    "ajustes": Ajustes,
    "terminos": TerminosCondiciones,
    "inDevelop": inDevelop,
    ...Services.Pages,
    "direccion": SelectDireccion,
    "ayuda": Ayuda,
}

export default Pages;