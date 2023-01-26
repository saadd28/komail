import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";

const Map = ({ location, zoomLevel }) => {
  return (
    <>
      {/* <div className=""> */}
      <div className="">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCs1KptNx8uY3OlgvqhnERe2v0S-h53gZo" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
      {/* </div> */}
    </>
  );
};

export default Map;
