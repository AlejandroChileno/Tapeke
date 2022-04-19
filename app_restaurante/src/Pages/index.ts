import { SPageListProps } from 'servisofts-component'
import Services from '../Services';
import Carga from './Carga';

import Inicio from './Inicio';



const Pages: SPageListProps = {
    "/": Inicio,
    "carga": Carga,

    ...Services.Pages,

}

export default Pages;