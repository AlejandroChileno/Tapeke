import { SPageListProps } from 'servisofts-component'
import pedido from "./Components/pedido"
import calificacion from "./Components/calificacion"
const ServiceName = "tapeke";

const Pages: SPageListProps = {
    ...pedido.Pages,
    ...calificacion.Pages,
}

const Reducers = {
    ...pedido.Reducers,
    ...calificacion.Reducers,
}

export default {
    ServiceName,
    Pages,
    Reducers
};