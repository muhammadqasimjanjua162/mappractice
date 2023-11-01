import React from "react";
import {
  GoogleMap,
  useJsApiLoader,
  HeatmapLayer,
} from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "90vw",
  height: "90vh",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function GoogleComponents(props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBcvPgnzMq0W_aa2MgIyLdecXl5CiJOpAs", // Replace with your actual API key
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(
    function callback(map) {
      // Check if the Google Maps API is loaded before using the google object
      if (isLoaded) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map);
      }
    },
    [isLoaded]
  );

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  const heatmapData = [
    new window.google.maps.LatLng(-3.7440031588962737, -38.52206826210022),
    new window.google.maps.LatLng(-3.7444956319141656, -38.52163910865784),
    new window.google.maps.LatLng(-3.744210995148375, -38.52184771194048),
    new window.google.maps.LatLng(-3.744281513244763, -38.52034091949463),
    new window.google.maps.LatLng(-3.7454484593578687, -38.52201461791992),
  ];

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      onClick={(ev) => {
        console.log("latitide = ", ev.latLng.lat());
        console.log("longitude = ", ev.latLng.lng());
      }}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <Marker position={center} />
      <HeatmapLayer data={heatmapData} />
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
}

export default React.memo(GoogleComponents);
