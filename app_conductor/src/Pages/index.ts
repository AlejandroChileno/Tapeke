import { SPageListProps } from 'servisofts-component'
import Services from '../Services';
import Carga from './Carga';

import PedidoConfirmacion from './PedidoConfirmacion';
import PedidoPrepacion from './PedidoPrepacion';
import PedidoDelivery from './PedidoDelivery';


import Inicio from './Inicio';



const Pages: SPageListProps = {
    "/": Inicio,
    "carga": Carga,
    
    "confirmacion": PedidoConfirmacion,
    "delivery": PedidoDelivery,
    "preparacion": PedidoPrepacion,

    ...Services.Pages,

}

export default Pages;