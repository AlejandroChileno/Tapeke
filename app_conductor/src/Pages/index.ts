import { SPageListProps } from 'servisofts-component'
import Services from '../Services';
import Carga from './Carga';

import PedidoConfirmacion from './PedidoConfirmacion';
import PedidoPrepacion from './PedidoPrepacion';
import PedidoDelivery from './PedidoDelivery';


import Inicio from './Inicio';
import registro from '../Services/Tapeke/Components/chatPage/Pages/registro';



const Pages: SPageListProps = {
    // "/": registro,
    "/": Inicio,
    "carga": Carga,

    "confirmacion": PedidoConfirmacion,
    "delivery": PedidoDelivery,
    "preparacion": PedidoPrepacion,

    ...Services.Pages,

}

export default Pages;