import { SPageListProps } from 'servisofts-component'
import Services from '../Services';
import Carga from './Carga';

import Inicio from './Inicio';
import CameraComponent from '../Components/CameraComponent';
import LeerQr from './LeerQr';

import Informacion from './Informacion';
 import Detalle from '../Services/Tapeke/Components/pedido/Pages/Detalle';
import Login from '../Services/Usuario/Components/usuario/Pages/Login';


const Pages: SPageListProps = {
    // "/": LeerQr,
    "/": Inicio,
    // "/": ,
    // "/": Detalle,
    "carga": Carga,
    "camara": CameraComponent,
    "leerqr": LeerQr,
    "informacion": Informacion,

    ...Services.Pages,

}

export default Pages;