
import Map from "react-map-gl";

import 'mapbox-gl/dist/mapbox-gl.css';

const CustomMap: React.FC = () => {
  return (
      <Map
        mapboxAccessToken="pk.eyJ1Ijoid29vYW5kcmV3IiwiYSI6ImNsc2phbG1kbTFqa3kycnBnZnlzNmhmbHIifQ.IankZtYjSO3tCewk0eC5fg"
        initialViewState={{
          longitude: -84.3963,
          latitude: 33.7756,
          zoom: 16
        }}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/wooandrew/clsqslvbz04l201pb4ps8563c"
      />
  );
};

export default CustomMap;
