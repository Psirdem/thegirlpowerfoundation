import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Map = () => {
  return (
    <MapContainer
      center={[6.67508, -1.61645]}
      zoom={13}
      scrollWheelZoom={true}
      style={{ height: "500px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
      />
      <Marker position={[6.67508, -1.61645]}>
        <Popup>
          <span>Our location</span>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
