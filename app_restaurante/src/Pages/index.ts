import { SPageListProps } from 'servisofts-component'
import Services from '../Services';
import Carga from './Carga';
import Inicio from './Inicio';
import CameraComponent from '../Components/CameraComponent';
import Detalle from '../Services/Tapeke/Components/pedido/Pages/Detalle';
import Login from '../Services/Usuario/Components/usuario/Pages/Login';


const Pages: SPageListProps = {
    "/": Inicio,
    "carga": Carga,
    "camara": CameraComponent,

    ...Services.Pages,
}

export default Pages;