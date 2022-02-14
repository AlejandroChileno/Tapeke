

import Billetera, { ReactComponent as BilleteraW } from './billetera.svg';
import Chip, { ReactComponent as ChipW } from './chip.svg';
import Logo, { ReactComponent as LogoW } from './logo.svg';
import Logosolo, { ReactComponent as LogosoloW } from './logosolo.svg';
import Flecha1, { ReactComponent as Flecha1W } from './flecha1.svg';

import Favorito, { ReactComponent as FavoritoW } from './favorito.svg';
import Location, { ReactComponent as LocationW } from './location.svg';
import Reloj, { ReactComponent as RelojW } from './reloj.svg';
import Menu_explorar, { ReactComponent as Menu_explorarW } from './menu_explorar.svg';
import Menu_favoritos, { ReactComponent as Menu_favoritosW } from './menu_favoritos.svg';
import Menu_location, { ReactComponent as Menu_locationW } from './menu_location.svg';


const Assets = {
	// alvaro
	"Billetera": { Native: Billetera, Web: BilleteraW },
	"Chip": { Native: Chip, Web: ChipW },
	"Logo": { Native: Logo, Web: LogoW },
	"Logosolo": { Native: Logosolo, Web: LogosoloW },
	"Flecha1": { Native: Flecha1, Web: Flecha1W },
	"Reloj": { Native: Reloj, Web: RelojW },
	"Favorito": { Native: Favorito, Web: FavoritoW },
	"Location": { Native: Location, Web: LocationW },
	"Menu_explorar": { Native: Menu_explorar, Web: Menu_explorarW },
	"Menu_favoritos": { Native: Menu_favoritos, Web: Menu_favoritosW },
	"Menu_location": { Native: Menu_location, Web: Menu_locationW },
}

export default Assets;