import { SPageListProps } from 'servisofts-component'
import inventario_Editorial from "./Components/inventario_Editorial"
import inventario_kardex from "./Components/inventario_kardex"

const ServiceName = "Inventario";


const Pages: SPageListProps = {
    ...inventario_Editorial.Pages,
    ...inventario_kardex.Pages,
}

const Reducers = {
    ...inventario_Editorial.Reducers,
    ...inventario_kardex.Reducers,
}

export default {
    ServiceName,
    Pages,
    Reducers

};

