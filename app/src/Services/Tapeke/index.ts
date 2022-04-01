import { SPageListProps } from 'servisofts-component'
import intro from "./Components/intro"
import restaurante from "./Components/restaurante"
import pedido from "./Components/pedido"
import horario from './Components/horario';
import direccion_usuario from './Components/direccion_usuario';
import pack from './Components/pack';
import billetera from './Components/billetera';
import favorito from './Components/favorito';

const ServiceName = "tapeke";

const Pages: SPageListProps = {
    ...intro.Pages,
    ...restaurante.Pages,
    ...horario.Pages,
    ...pedido.Pages,
    ...direccion_usuario.Pages,
    ...pack.Pages,
    ...billetera.Pages,
    ...favorito.Pages

    
}

const Reducers = {
    ...restaurante.Reducers,
    ...pedido.Reducers,
    ...horario.Reducers,
    ...direccion_usuario.Reducers,
    ...pack.Reducers,
    ...billetera.Reducers,
    ...favorito.Reducers
}

export default {
    ServiceName,
    Pages,
    Reducers
};