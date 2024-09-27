// src/components/MapIlford.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS directly in the component
import L from "leaflet";

// Manually setting the default marker icons
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fixing the default icon for Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const MapIlford = () => {
  const ilfordCoords = [51.5588, 0.0814]; // Coordinates for Ilford, London
  return (
    <div>
      <h2 className="text-4xl text-center font-bold ">Find Us Here</h2>;
      <div className="w-full h-96 my-4">
        <MapContainer
          center={ilfordCoords}
          zoom={13}
          scrollWheelZoom={false}
          className="h-full rounded-lg" // Tailwind CSS for responsiveness and styling
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={ilfordCoords}>
            <Popup>
              Ilford, London <br /> A vibrant town in East London.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default MapIlford;
