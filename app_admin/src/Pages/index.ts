import Services from '../Services';
import Carga from './Carga';
import Ajustes from './Ajustes';
import Administracion from './Administracion';
import TerminosCondiciones from '../Pages/TerminosCondiciones';
import inDevelop from './inDevelop';
import SelectDireccion from './SelectDireccion';
import Ayuda from './Ayuda';
import Test from './Test';
const Pages = {
    "/": Administracion,
    "carga": Carga,
    "ajustes": Ajustes,
    "terminos": TerminosCondiciones,
    "inDevelop": inDevelop,
    ...Services.Pages,
    "direccion": SelectDireccion,
    "ayuda": Ayuda,
    "test": Test
}

export default Pages;