import React, { Component, useRef, useState } from "react";
import "leaflet/dist/leaflet.css"
import L, { LatLng } from "leaflet";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { WMSTileLayer } from "react-leaflet";
// import FetchParadas from '../static/paradas';

import dummy_Data from '../static/paradas_vigo.json'

import LMarker from "./Marker";
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
function getIcon2() {
    return L.icon({
        iconUrl: '/static/Icons/icons8-bus-50.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
    })
}

// function LocationMarers() {

//     const [markers] = useState(data);
//     const lat = [];
//     const lng = [];

//     console.log(lat);
//     console.log(lng)
//     // const initialMarkers: LatLng() = [new LatLng(42,-8)]
//     // const [markers,setMarkers] = useState(initialMarkers);
//     return (
//         <React.Fragment>
//             {data.map(marker => <Marker position={[marker.lat,marker.lon]}></Marker>)    }
//         </React.Fragment>
//     );
// }
function MyMap() {
    const [data, setData] = React.useState(null);
    const [marker, setMarker] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const markerRef = useRef()
    const [isError, setIsError] = useState(false);
    const fetchData = () => {

        fetch('/paradas_vigo')
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);
                setMarker(data);
            })
            .catch((error) => {
                setIsLoading(false);
                setIsError(true);
                console.log(error);
            });

    };

    React.useEffect(() => {
        fetchData();
        // console.log(dummy_Data);
        // const marker = markerRef.current
    }, []);
    if (isLoading) {

        return <div>Loading...</div>;

    }
    const position = [42.2277567, -8.7371146];
    // console.log(!data ? "Loading..." : data)
    var latPC, lngPC = 0;


    return (
        <MapContainer
            center={position}
            zoom={18}
        >
            {marker.map}
            {/* <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                maxZoom={23}
            />   */}
              <WMSTileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://www.ign.es/wms-inspire/ign-base'
                layers="IGNBaseTodo"
                maxZoom={23}
            />  
            {/* <LMarker data={marker}></LMarker> */}
            {/* {dummy_Data.map(parada => {
                return <LMarker parada={parada} icon={getIcon()}></LMarker>
            })} */}
            

            {
                // iterate over dummy data and print the 

                marker.map(parada => {
                    if (parada.lineas.includes("C1") ) {
                        return <LMarker parada={parada} icon={getIcon()} key={parada.stop_id}></LMarker>
                    }
                })
            }
           
            <Marker ref={markerRef} position={position} icon={getIcon()}>

                <Popup>
                   Initial position
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default MyMap;