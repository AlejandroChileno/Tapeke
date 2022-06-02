import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SMapView, SMarker, SPage, SText } from 'servisofts-component';
import SSocket from 'servisofts-socket';
class Mapa extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.getData();
    }
    getData() {

        SSocket.sendPromise({
            component: "backgroundLocation",
            type: "getAll"
        }).then(res => {
            this.setState({ data: res.data })
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    }
    getMarkers() {
        if (!this.state.data) return null
        return Object.values(this.state.data).map((item, index) => {
            return <SMarker lat={item.latitude} lng={item.longitude}>
                <SIcon name={"Marker"} width={10}/>
            </SMarker>
        })
    }
    render() {
        return (
            <SPage title={'Mapa conductor'} disableScroll>

                <SMapView
                    initialRegion={
                        {
                            latitude: -17.78629,
                            longitude: -63.18117,
                            latitudeDelta: 1.1922,
                            longitudeDelta: 1.1421,
                        }}
                >
                    {this.getMarkers()}
                </SMapView>

            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Mapa);