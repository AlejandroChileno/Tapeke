import React from 'react';
import { SComponentContainer, SIcon, SNavigation, SText, STheme, SView } from 'servisofts-component';

import Pages from './Pages';
import Assets from './Assets';

//---------REDUX----------
import Reducer from './Reducer';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
//------------------------
import SSocket, { setProps } from 'servisofts-socket'
import NavBar from './Components/NavBar';

import SConfig from './SConfig';
import SBLocation from './SBLocation';
import NavBar2 from './Components/NavBar2';

setProps(SConfig.SocketProps);

const store = createStore(
    Reducer,
    {},
    applyMiddleware(reduxThunk),
);

const App = (props) => {
    SBLocation.initEmitter();
    return (
        <Provider store={store}>
            <SComponentContainer
                // debug
                socket={SSocket}
                assets={Assets}
                inputs={SConfig.SConfig_Inputs}
                // background={<BackgroundImage />}
                theme={{ initialTheme: "default", themes: SConfig.SThemeProps }}>
                <SNavigation props={{
                    prefixes: ["https://component.servisofts.com", "component.servisofts://"],
                    pages: Pages,
                    title: "App Tapeke",
 
                }} />
                <SSocket store={store}  identificarse={(props) => {
                    // var usuario = props.state.usuarioReducer.usuarioLog;
                    var usuario = {}
                    return {
                        data: usuario ? usuario : {},
                        deviceKey: "as-asa-as",
                    }
                }} />
                <NavBar />
                <NavBar2 />
 
            </SComponentContainer>
        </Provider >
    )
}
export default App;