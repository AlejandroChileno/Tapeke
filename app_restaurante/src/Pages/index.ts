import { SPageListProps } from 'servisofts-component'
import Services from '../Services';
import Carga from './Carga';

import Inicio from './Inicio';
import CameraComponent from '../Components/CameraComponent';
import LeerQr from './LeerQr';

import Informacion from './Informacion';


const Pages: SPageListProps = {
    // "/": LeerQr,
    "/": Inicio,
    "carga": Carga,
    "camara": CameraComponent,
    "leerqr": LeerQr,
    "informacion": Informacion,

    ...Services.Pages,

}

export default Pages;