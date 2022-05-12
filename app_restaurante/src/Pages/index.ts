import { SPageListProps } from 'servisofts-component';
import CameraComponent from '../Components/CameraComponent';
import Services from '../Services';
import Carga from './Carga';
import Inicio from './Inicio';


const Pages: SPageListProps = {
    "/": Inicio,
    "carga": Carga,
    "camara": CameraComponent,
    ...Services.Pages,
}

export default Pages;