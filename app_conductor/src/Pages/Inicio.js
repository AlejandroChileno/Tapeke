import React, { Component } from "react";
import { connect } from "react-redux";
import { SLoad, SPage } from "servisofts-component";
import BarraSuperiorTapeke from "../Components/BarraSuperiorTapeke";
import SwitchRastreo from "../Components/SwitchRastreo";
import SBLocation from "../SBLocation";
import ShowBanner from "../Services/Tapeke/Components/inicio/Pages/ShowBanner";
import ShowInfo from "../Services/Tapeke/Components/inicio/Pages/ShowInfo";
import ShowMapa from "../Services/Tapeke/Components/inicio/Pages/ShowMapa";
import usuario from "../Services/Usuario/Components/usuario";

class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    if (!usuario.Actions.validateSession(this.props)) { return <SLoad />; }
    SBLocation.addListener((data) => {
      this.setState({ isActive: SBLocation.isStarted() })
      console.log(data);
    })
  }

  render() {
    if (!usuario.Actions.validateSession(this.props)) {
      return <SLoad />;
    }

    return (
      <>
        <BarraSuperiorTapeke>
          <SwitchRastreo width={130} height={40}
            callback={(resp) => {
              // this.setState({ active: resp.ConductorOnline });
              if (!SBLocation.isStarted) return;
              if (!SBLocation.isStarted()) {
                SBLocation.start({
                  minTime: 3000,
                  minDistance: 1
                });
              }
              if (SBLocation.isStarted()) {
                SBLocation.stop();
              }
            }} />
        </BarraSuperiorTapeke>

        <SPage title={""} hidden disableScroll center>
          <ShowMapa />
          <ShowBanner />
          <ShowInfo />
        </SPage>
      </>
    );
  }
}
const initStates = (state) => {
  return { state };
};
export default connect(initStates)(Inicio);
