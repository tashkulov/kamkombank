import React from "react";
import Layout from "@/ui/Layout";
import Title from "@/ui/Title";
import { loader } from "@/componets/Booking/style";
import Loader from "@/ui/Loader";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

type TProps = {
  loading: boolean;
};

const MapOffices: React.FC<TProps> = ({ loading }) => {
  return (
    <Layout.Container>
      <Title.H2>Офисы Банка</Title.H2>
      {loading ? (
        <div className={loader}>
          <Loader loadingText="Подождите, идет загрузка" />
        </div>
      ) : (
        <MapContainer
          center={[55.75, 37.61]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer
            attribution=' <a href="https://www.openstreetmap.org/copyright">'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[55.737568, 55.737568]}>
            <Popup>Офис банка</Popup>
          </Marker>
        </MapContainer>
      )}
    </Layout.Container>
  );
};

export default MapOffices;
