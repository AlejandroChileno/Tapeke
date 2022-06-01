import { SPageListProps } from 'servisofts-component';
import Services from '../Services';
import Lista from '../Services/Tapeke/Components/conductor_horario/Pages/Lista';
import Carga from './Carga';
import Inicio from './Inicio';
import PedidoConfirmacion from './PedidoConfirmacion';
import PedidoDelivery from './PedidoDelivery';
import PedidoPrepacion from './PedidoPrepacion';



 


const Pages: SPageListProps = {
    // "/": registro,
     "/": Inicio,
    // "/": ListaEstrega,
    // "/": Lista,
    "carga": Carga,

    "confirmacion": PedidoConfirmacion,
    "delivery": PedidoDelivery,
    "preparacion": PedidoPrepacion,

    ...Services.Pages,

}

export default Pages;