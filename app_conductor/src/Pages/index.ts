import { SPageListProps } from 'servisofts-component';
import Services from '../Services';
import Carga from './Carga';
import Inicio from './Inicio';
import Inicio2 from './Inicio2';
import PedidoConfirmacion from './PedidoConfirmacion';
import PedidoDelivery from './PedidoDelivery';
import PedidoPrepacion from './PedidoPrepacion';



 


const Pages: SPageListProps = {
    // "/": registro,
     "/": Inicio,
    //  "/": Inicio,
    // "/": ListaEstrega,
    // "/": Lista,
    "carga": Carga,

    "confirmacion": PedidoConfirmacion,
    "delivery": PedidoDelivery,
    "preparacion": PedidoPrepacion,

    ...Services.Pages,

}

export default Pages;