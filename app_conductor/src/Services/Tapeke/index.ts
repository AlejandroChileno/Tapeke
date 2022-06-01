import { SPageListProps } from 'servisofts-component';
import chatPage from './Components/chatPage';
import conductor_horario from './Components/conductor_horario';
import horario from './Components/horario';
import pack from './Components/pack';
import restaurante from './Components/restaurante';

const ServiceName = "tapeke";

const Pages: SPageListProps = {
    ...chatPage.Pages,
    ...pack.Pages,
    ...restaurante.Pages,
    ...horario.Pages,
    ...conductor_horario.Pages,

}

const Reducers = {
    ...chatPage.Reducers,
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