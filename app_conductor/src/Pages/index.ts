import { SPageListProps } from 'servisofts-component';
import Services from '../Services';
import Carga from './Carga';
import Inicio from './Inicio';
import PedidoConfirmacion from './PedidoConfirmacion';
import PedidoDelivery from './PedidoDelivery';
import PedidoPrepacion from './PedidoPrepacion';
import ListaMensajes from '../Services/Tapeke/Components/chat/Pages/lista';
import Test from './Test3';
import inicioTest from '../Services/Tapeke/Components/inicio/Pages/inicioTest';


const Pages: SPageListProps = {
      "/": Inicio,
      // "/": inicioTest,
    //  "/": ListaMensajes,
    // "/": Test,
    "carga": Carga,
    "confirmacion": PedidoConfirmacion,
    "delivery": PedidoDelivery,
    "preparacion": PedidoPrepacion,
    ...Services.Pages,
}

export default Pages;