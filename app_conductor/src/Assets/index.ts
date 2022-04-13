import { SAssets } from 'servisofts-component';
import Tapeke from "./svg/tapeke";
import Imputs from "./svg/imputs";
import Login from "./svg/login";

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
    }
}

export default Assets;