import { SPageListProps } from 'servisofts-component'
import payment_type from './Components/payment_type';


const ServiceName = "multipagos";
const Pages: SPageListProps = {
    ...payment_type.Pages,
    // ...notificacion.Pages,
  
    
}

const Reducers = {
    ...payment_type.Reducers,
    // ...notificacion.Reducers,
 
}

export default {
    ServiceName,
    Pages,
    Reducers

};

