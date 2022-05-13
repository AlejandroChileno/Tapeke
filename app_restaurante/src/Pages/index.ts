import { SPageListProps } from 'servisofts-component';
import CameraComponent from '../Components/CameraComponent';
import Services from '../Services';
import lista001 from '../Services/Tapeke/Components/usuario_restaurante/Pages/lista001';
import lista002 from '../Services/Tapeke/Components/usuario_restaurante/Pages/lista002';
import Borrador from './Borrador';
import Carga from './Carga';
import Inicio from './Inicio';
import PedidoEscaneado from './PedidoEscaneado';


const Pages: SPageListProps = {
    // "/": Inicio,
    // "/": lista001,

    // "/": Borrador,
    "/": lista002,
    "inicio": Inicio,

    "carga": Carga,
    "camara": CameraComponent,
    "pedidoescaneado": PedidoEscaneado,
    ...Services.Pages,
}

export default Pages;