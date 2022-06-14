import { SAssets } from 'servisofts-component';
import Tapeke from "./svg/tapeke";
import Inputs from "./svg/inputs";
import Login from "./svg/login";
import Pedido from "./svg/pedido";
import Switch from "./svg/switch";
import Chat from "./svg/chat";

//Logo
import Logo, { ReactComponent as LogoW } from './svg/logo.svg';
import LogoFalse, { ReactComponent as LogoFalseW } from './svg/logofalse.svg';
import Logosolo, { ReactComponent as LogosoloW } from './svg/logosolo.svg';

const Assets: SAssets = {
    svg: {
 
        "Logo": { Native: Logo, Web: LogoW },
        "LogoFalse": { Native: LogoFalse, Web: LogoFalseW },
        "Logosolo": { Native: Logosolo, Web: LogosoloW },
        ...Login,
        ...Tapeke,
        ...Inputs,
        ...Pedido,
        ...Switch,
        ...Chat,
        
    }
}

export default Assets;