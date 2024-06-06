import React, { useState, useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import 'mapbox-gl/dist/mapbox-gl.css';
import "../../App.css";

const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibWFyeXJpbmFsZGkiLCJhIjoiY2x3Nm1jNm05MXJjNjJxbDg1Mjg4d3lzayJ9.l2G9x4-qP7Nxo_nOE-jWeA'; 

function MapComponent() {
    // const [map, setMap] = useState(null);
    // const [center, setCenter] = useState([12.4964, 41.9028]);
    const mapContainer = useRef(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [12.4964, 41.9028],
          zoom: 12,
          accessToken: MAPBOX_ACCESS_TOKEN,
        });
    
        return () => map.remove();
      }, []);
      
      
    return (
      <div className="map-container" id="map-container" ref={mapContainer} style={{ width: '100%', height: '400px' }} />
      );    

}

export default MapComponent
