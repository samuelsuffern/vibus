import React, { Component, useState } from "react";
import L, { LatLng } from "leaflet";
import { Marker, Popup, } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
function getIcon() {
    return L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    })
}

const LMarker = ({ parada, icon }) => {
    return <Marker position={[parada.lat, parada.lon]} key={parada.stop_id} icon={icon}>
            <Popup>
                ${parada.nombre}
            </Popup>
        </Marker>
}

export default LMarker;