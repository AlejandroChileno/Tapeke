
import Usuario from './Usuario';
import Roles_permisos from './Roles_permisos';
import Tapeke from './Tapeke';
 const Pages = {
    ...Usuario.Pages,
    ...Roles_permisos.Pages,
    ...Tapeke.Pages,
 }

const Reducers = {
    ...Usuario.Reducers,
    ...Roles_permisos.Reducers,
    ...Tapeke.Reducers,
 }

export default {
    Pages,
    Reducers
}