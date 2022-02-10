import React from 'react';
import { SComponentContainer, SIcon, SNavigation, SView } from 'servisofts-component';

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
import BackgroundImage from './Components/BackgroundImage';
import BarraSuperior from './Components/Kolping/BarraSuperior';
setProps(SConfig.SocketProps);

const store = createStore(
    Reducer,
    {},
    applyMiddleware(reduxThunk),
);

const App = (props) => {
    return (
        <Provider store={store}>
            <SComponentContainer
                debug
                socket={SSocket}
                assets={Assets}
                background={<BackgroundImage />}
                theme={{ initialTheme: "default", themes: SConfig.SThemeProps }}>
                <SNavigation props={{
                    prefixes: ["https://component.servisofts.com", "component.servisofts://"],
                    pages: Pages,
                    title:"App Tapeke",
                    navBar: BarraSuperior,
                }} />
                <SSocket identificarse={(props) => {
                    var usuario = props.state.usuarioReducer.usuarioLog;
                    return {
                        data: usuario ? usuario : {},
                        deviceKey: "as-asa-as",
                    }
                }} />
                <NavBar />
            </SComponentContainer>
        </Provider>
    )
}
export default App;