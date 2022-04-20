import { SPageListProps } from 'servisofts-component'
import Services from '../Services';
import Carga from './Carga';

import Inicio from './Inicio';
import CameraComponent from '../Components/CameraComponent';
import LeerQr from './LeerQr';



const Pages: SPageListProps = {
     "/": LeerQr,
    // "/": Inicio,
    "carga": Carga,
    "camara": CameraComponent,
    "leerqr": LeerQr,
    
    ...Services.Pages,

}

export default Pages;