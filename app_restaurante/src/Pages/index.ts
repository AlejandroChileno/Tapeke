import { SPageListProps } from 'servisofts-component';
import CameraComponent from '../Components/CameraComponent';
import Services from '../Services';
import NotFoundPedido from '../Services/Tapeke/Components/pedido/Pages/notFoundPedido';
import lista002 from '../Services/Tapeke/Components/usuario_restaurante/Pages/lista002';
import Carga from './Carga';
import Inicio from './Inicio';

const Pages: SPageListProps = {
    "/": Inicio,
    // "/": lista001,

    // "/": Borrador,
    // "/": NotFoundPedido,
    // "/": lista002,
    "inicio": Inicio,
    "carga": Carga,
    "camara": CameraComponent,
     ...Services.Pages,
}

export default Pages;