
import Usuario from './Usuario';
import Kolping from './Kolping';
import Inventario from './Inventario';

import Roles_permisos from './Roles_permisos';
const Pages = {
    ...Usuario.Pages,
    ...Kolping.Pages,
    ...Roles_permisos.Pages,
    ...Inventario.Pages,
}

const Reducers = {
    ...Usuario.Reducers,
    ...Kolping.Reducers,
    ...Roles_permisos.Reducers,
    ...Inventario.Reducers,
}

export default {
    Pages,
    Reducers
}