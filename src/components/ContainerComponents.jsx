import React from "react";
import GoogleComponents from "./GoogleComponents";
import { useState, useEffect } from "react";

const ContainerComponents = () => {
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((location) =>
      setMarker({
        let: Number(location.coords.latitude),
        lng: Number(location.coords.longitude),
      })
    );
  }, []);
  return (
    <div>
      <GoogleComponents

      /* etc. */
      />
    </div>
  );
};

export default ContainerComponents;
