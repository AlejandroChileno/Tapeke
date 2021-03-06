import { SAssets } from 'servisofts-component';
import Tapeke from "./svg/tapeke";
import Imputs from "./svg/imputs";
import Login from "./svg/login";
import Pedidos from "./svg/pedido";
import Calificacion from "./svg/calificacion";
import Camara from "./svg/camara";
import Mensaje from "./svg/mensaje";

//Logo
import Logo, { ReactComponent as LogoW } from './svg/logo.svg';
import Logosolo, { ReactComponent as LogosoloW } from './svg/logosolo.svg';

 
const Assets: SAssets = {
    svg: {
 
        "Logo": { Native: Logo, Web: LogoW },
        "Logosolo": { Native: Logosolo, Web: LogosoloW },
        ...Login,
        ...Tapeke,
        ...Imputs,
        ...Pedidos,
        ...Calificacion,
        ...Camara,
        ...Mensaje,

    }
}

export default Assets;