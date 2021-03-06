import TerminosCondiciones from '../Pages/TerminosCondiciones';
import Services from '../Services';
import chatPage from '../Services/Tapeke/Components/chatPage';
import Administracion from './Administracion';
import Ajustes from './Ajustes';
import Ayuda from './Ayuda';
import Carga from './Carga';
import Home from './Home';
import inDevelop from './inDevelop';
import Inicio from './Inicio';
import MisCompras from './MisCompras';
// import Billetera from '../Services/Tapeke/Components/billetera/Pages/Billetera';
import SelectDireccion from './SelectDireccion';


// import MensajeSolicitud from '../Services/Tapeke/Components/pedido/Pages/MensajeSolicitud';
// import Preparacion from '../Services/Tapeke/Components/pedido/Pages/PedidoConfirmacion';
const Pages = {

    
    // "/": MensajeSolicitud,
    // "/": chatPage,
    "/": Inicio,
    // "/": Test,
    // "/": PedidoQR,
    // "/": Preparacion,
    // "test": Test,
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