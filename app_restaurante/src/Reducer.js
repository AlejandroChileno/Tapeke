import { combineReducers } from 'redux';
import { SStorage } from 'servisofts-component';
 import Services from './Services';
import backgroundLocationReducer from './SBLocation/backgroundLocationReducer';
const reducers = combineReducers({
     ...Services.Reducers,
    backgroundLocationReducer
});

export default (state, action) => {
    switch (action.type) {
        case 'USUARIO_LOGOUT':
            SStorage.removeItem("usr_log");
            state = undefined;
            break;
        default:
            break;
    }
    return reducers(state, action);
}