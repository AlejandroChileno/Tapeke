import { SPageListProps } from 'servisofts-component';
import chatPage from './Components/chatPage';

const ServiceName = "tapeke";

const Pages: SPageListProps = {
    ...chatPage.Pages,
}

const Reducers = {
    ...chatPage.Reducers,
}

export default {
    ServiceName,
    Pages,
    Reducers
};