import { SPageListProps } from 'servisofts-component';
import chat from './Components/chat';
import conductor_horario from './Components/conductor_horario';
import horario from './Components/horario';
import pack from './Components/pack';
import restaurante from './Components/restaurante';

const ServiceName = "tapeke";

const Pages: SPageListProps = {
    ...chat.Pages,
     ...pack.Pages,
    ...restaurante.Pages,
    ...horario.Pages,
    ...conductor_horario.Pages,

}

const Reducers = {
    ...chat.Reducers,
     ...pack.Reducers,
    ...restaurante.Reducers,
    ...horario.Reducers,
    ...conductor_horario.Reducers,

}

export default {
    ServiceName,
    Pages,
    Reducers
};