import { SPageListProps } from 'servisofts-component'
import pedido from "./Components/pedido"
import calificacion from "./Components/calificacion"
// import restaurante from './Components/restaurante';
// import horario from './Components/horario';
const ServiceName = "tapeke";

const Pages: SPageListProps = {
    ...pedido.Pages,
    ...calificacion.Pages,
    // ...restaurante.Pages,
    // ...horario.Pages,
}

const Reducers = {
    ...pedido.Reducers,
    ...calificacion.Reducers,
    // ...restaurante.Reducers,
    // ...horario.Reducers,
}

export default {
    ServiceName,
    Pages,
    Reducers
};