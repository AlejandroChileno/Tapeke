import { SPageListProps } from 'servisofts-component'
import intro from "./Components/intro"
import restaurante from "./Components/restaurante"
import pedido from "./Components/pedido"

const ServiceName = "tapeke";

const Pages: SPageListProps = {
    ...intro.Pages,
    ...restaurante.Pages,
    ...pedido.Pages,
}

const Reducers = {
    ...restaurante.Reducers,
    ...pedido.Reducers,
}

export default {
    ServiceName,
    Pages,
    Reducers

};