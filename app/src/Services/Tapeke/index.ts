import { SPageListProps } from 'servisofts-component'
import intro from "./Components/intro"
import restaurante from "./Components/restaurante"
import pedido from "./Components/pedido"
import horario from './Components/horario';
import direccion_usuario from './Components/direccion_usuario';
import pack from './Components/pack';
import billetera from './Components/billetera';

const ServiceName = "tapeke";

const Pages: SPageListProps = {
    ...intro.Pages,
    ...restaurante.Pages,
    ...horario.Pages,
    ...pedido.Pages,
    ...direccion_usuario.Pages,
    ...pack.Pages,
    ...billetera.Pages

    
}

const Reducers = {
    ...restaurante.Reducers,
    ...pedido.Reducers,
    ...horario.Reducers,
    ...direccion_usuario.Reducers,
    ...pack.Reducers,
    ...billetera.Reducers
}

export default {
    ServiceName,
    Pages,
    Reducers
};