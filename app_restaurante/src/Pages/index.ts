import { SPageListProps } from 'servisofts-component';
import CameraComponent from '../Components/CameraComponent';
import Services from '../Services';
import lista from '../Services/Tapeke/Components/usuario_restaurante/Pages/lista';
import Carga from './Carga';
import Inicio from './Inicio';


const Pages: SPageListProps = {
    // "/": Inicio,
    "/": lista,
    "carga": Carga,
    "camara": CameraComponent,
    ...Services.Pages,
}

export default Pages;