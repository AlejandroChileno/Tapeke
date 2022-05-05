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
import ComoTeParecio from './MisCompras/ComoTeParecio';
import Test from './Test';
import PedidoQR from '../Services/Tapeke/Components/pedido/Pages/PedidoQR';
// import MensajeSolicitud from '../Services/Tapeke/Components/pedido/Pages/MensajeSolicitud';
// import Preparacion from '../Services/Tapeke/Components/pedido/Pages/PedidoConfirmacion';
const Pages = {

    
    // "/": MensajeSolicitud,
    "/": Inicio,
    // "/": PedidoQR,
    // "/": Preparacion,
    "test": Test,
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
    "comoteparecio": ComoTeParecio,




}

export default Pages;