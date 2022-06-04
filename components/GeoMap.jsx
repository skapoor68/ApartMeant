import 'mapbox-gl/dist/mapbox-gl.css' 

import React, { useState } from 'react';
import Map, { Marker, NavigationControl } from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2thcG9vcjY4IiwiYSI6ImNsM3MzcDVqcjBtbHkzZW5rZ2M5cHp2MXgifQ.SQp-8XjQRxiLd1AFkWhIrQ';

const GeoMap = ({ data }) => {
  const [viewState, setViewState] = useState({
    latitude: data.lat,
    longitude: data.lng,
    zoom: 12
  });

  return (
    <Map
      {...viewState}
      onMove={e => setViewState(e.viewState)}
      style={{width: 600, height: 450}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
    >
      <Marker latitude={data.lat} longitude={data.lng} color='blue' />
      <NavigationControl />
    </Map>
  );
}

export default GeoMap;
