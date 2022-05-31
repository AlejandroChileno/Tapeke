import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SIcon, SMapView, SMarker, SPage, SText } from 'servisofts-component';
import SSocket from 'servisofts-socket';
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount(){
        this.getLista();
    }
    getLista() {
        SSocket.sendPromise({
            "component":"pedido",
            "type":"getAllMapa"
        }).then(res => {
            this.setState({data:res.data})
        })  
    }
    getMarkers() {
        if(!this.state.data)return null;
        
        return Object.values(this.state.data).map((obj, index) => {
            return <SMarker lat={obj.direccion?.latitude} lng={obj.direccion?.longitude} label={"asdas"}>
                <SIcon name='Marker' width={20}/>
                {/* <SText>{index}</SText> */}
            </SMarker>
        })
    }
    render() {
        return (
            <SPage title={'Test'} disableScroll>
                <SMapView 
                initialRegion={{
                    latitude: -17.7720281,
                    longitude: -63.202375,
                }}>
                    {this.getMarkers()}
                </SMapView>
            </SPage>
        );
    }
}
const initStates = (state) => {
    return { state }
};
export default connect(initStates)(Test);