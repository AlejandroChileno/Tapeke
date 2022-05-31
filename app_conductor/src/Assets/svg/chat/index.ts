

import AddChat, { ReactComponent as AddChatW } from './addChat.svg';
import Camara, { ReactComponent as CamaraW } from './camara.svg';
import Microfono, { ReactComponent as MicrofonoW } from './microfono.svg';
import Stick, { ReactComponent as StickW } from './stick.svg';

import BtnChat, { ReactComponent as BtnChatW } from './btnChat.svg';



const Assets = {
	"Microfono": { Native: Microfono, Web: MicrofonoW },
	"AddChat": { Native: AddChat, Web: AddChatW },
	"Camara": { Native: Camara, Web: CamaraW },
	"Stick": { Native: Stick, Web: StickW },
	"BtnChat": { Native: BtnChat, Web: BtnChatW },
}

export default Assets;