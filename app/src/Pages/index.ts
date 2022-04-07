import Services from '../Services';
import Home from './Home';
import Carga from './Carga';
import Ajustes from './Ajustes';
import Inicio from './Inicio';
import Administracion from './Administracion';
import TerminosCondiciones from '../Pages/TerminosCondiciones';
import inDevelop from './inDevelop';
// import Billetera from '../Services/Tapeke/Components/billetera/Pages/Billetera';

import SelectDireccion from './SelectDireccion';
import Ayuda from './Ayuda';

import MisCompras from './MisCompras';

const Pages = {
    "/": Inicio,

    "carga": Carga,
    "home": Home,
    "ajustes": Ajustes,
    "admin": Administracion,
    "terminos": TerminosCondiciones,
    "inDevelop": inDevelop,
    ...Services.Pages,
    "direccion": SelectDireccion,
    "compras": MisCompras,
    // "billetera": Billetera,
    "ayuda": Ayuda,




}

export default Pages;