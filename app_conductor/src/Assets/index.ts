import { SAssets } from 'servisofts-component'
import Tapeke from "./svg/tapeke"

import IconFaceb, { ReactComponent as IconFacebW } from './svg/iconFaceb.svg';
import IconGoogle, { ReactComponent as IconGoogleW } from './svg/iconGoogle.svg';



const Assets: SAssets = {
    svg: {
        "IconFaceb": { Native: IconFaceb, Web: IconFacebW },
        "IconGoogle": { Native: IconGoogle, Web: IconGoogleW },
        
        ...Tapeke
    }
}

export default Assets;