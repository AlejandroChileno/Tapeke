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
import BackgroundImage from './Components/BackgroundImage';
import BarraSuperior from './Components/BarraSuperior';
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
                // debug
                socket={SSocket}
                assets={Assets}
                inputs={SConfig.SConfig_Inputs}
                // background={<BackgroundImage />}
                theme={{ initialTheme: "default", themes: SConfig.SThemeProps }}>


                <SView col={"xs-12"} height={30} backgroundColor={'#FA790E'} >
                    <SView col={"xs-12"} row flex style={{
                        paddingLeft: 16, paddingRight: 16,
                    }}>
                        <SView width={30} center flex >
                            <SText font={"Roboto-Bold"} fontSize={14} color={"#fff"}>9:27</SText>
                        </SView>
                        <SView row >
                            <SView width={25} center  >
                                <SIcon name={"AppSignal"} width={18} fill="#fff" />
                            </SView>
                            <SView width={30} center  >
                                <SIcon name={"AppWifi"} width={19} fill="#fff" />
                            </SView>
                            <SView width={30} center  >
                                <SIcon name={"AppBaterry"} width={25} fill="#fff" />
                            </SView>
                        </SView>
                    </SView>
                </SView>
                <SNavigation props={{
                    prefixes: ["https://component.servisofts.com", "component.servisofts://"],
                    pages: Pages,
                    title: "App Tapeke",
                    navBar: BarraSuperior,
                }} />
                {/* NO HAY BD */}
                <SSocket identificarse={(props) => {
                    var usuario = props.state.usuarioReducer.usuarioLog;
                    return {
                        data: usuario ? usuario : {},
                        deviceKey: "as-asa-as",
                    }
                }} />
                <NavBar />

            </SComponentContainer>
        </Provider >
    )
}
export default App;