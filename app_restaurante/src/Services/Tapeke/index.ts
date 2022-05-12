import { SPageListProps } from 'servisofts-component'
import pedido from "./Components/pedido"
import calificacion from "./Components/calificacion"
import horario from './Components/horario';
import pack from './Components/pack';
import restaurante from './Components/restaurante';
import usuario_restaurante from './Components/usuario_restaurante';


const ServiceName = "tapeke";

const Pages: SPageListProps = {
    ...pedido.Pages,
    ...calificacion.Pages,
    ...horario.Pages,
    ...pack.Pages,
    ...restaurante.Pages,
    ...usuario_restaurante.Pages,
}

const Reducers = {
    ...pedido.Reducers,
    ...calificacion.Reducers,
    ...horario.Reducers,
    ...pack.Reducers,
    ...restaurante.Reducers,
    ...usuario_restaurante.Reducers,
}

export default {
    ServiceName,
    Pages,
    Reducers
};