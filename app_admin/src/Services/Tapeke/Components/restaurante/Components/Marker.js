import React from 'react';
import { SHr, SIcon, SImage, SMapView, SMarker, SNavigation, SPage, SText, STheme, SView } from 'servisofts-component';
import SSocket from 'servisofts-socket';

const Marker = (props) => {
    var obj = props.data;
    var size = 68;
    return <SMarker lat={obj.latitude} lng={obj.longitude} {...props} >
        <SView width={size} height={size} style={{
            alignItems: 'center',
        }}>
            <SIcon name={"MarcadorMapa"} width={size} height={size} />
            <SView style={{
                position: 'absolute',
                top: size * 0.03,
                width: size * 0.56,
                height: size * 0.56,
                backgroundColor: "#ffffff66",
                borderRadius: size,
                overflow: 'hidden',
            }}>
                <SImage src={SSocket.api.root + "restaurante/" + obj.key} style={{
                    resizeMode: 'cover',
                    width: "100%",
                    height: "100%",
                }} />
            </SView>
        </SView>
    </SMarker>
}
export default Marker;