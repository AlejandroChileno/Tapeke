import { SPageListProps } from 'servisofts-component';
import chat from './Components/chat';
import conductor_horario from './Components/conductor_horario';
import horario from './Components/horario';
import inicio from './Components/inicio';
import pack from './Components/pack';
import restaurante from './Components/restaurante';
import delivery from './Components/delivery';

const ServiceName = "tapeke";

const Pages: SPageListProps = {
    ...inicio.Pages,
    ...chat.Pages,
    ...pack.Pages,
    ...restaurante.Pages,
    ...horario.Pages,
    ...conductor_horario.Pages,
    ...delivery.Pages,

}

const Reducers = {
    ...inicio.Reducers,
    ...chat.Reducers,
    ...pack.Reducers,
    ...restaurante.Reducers,
    ...horario.Reducers,
    ...conductor_horario.Reducers,
    ...delivery.Reducers,

}

export default {
    ServiceName,
    Pages,
    Reducers
};