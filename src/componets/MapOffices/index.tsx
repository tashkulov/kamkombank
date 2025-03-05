import React, { useEffect, useState } from "react";
import Layout from "@/ui/Layout";
import Title from "@/ui/Title";
import Loader from "@/ui/Loader";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { loader } from "@/componets/Booking/style";
import {
  book_button,
  office_block,
  offices_block,
  mapWrapper,
  main_map,
} from "@/componets/MapOffices/style";
import { TOffice } from "@/types";

type TProps = {
  city: { id: number; name: string };
  onSelectOffice: (office: TOffice) => void;
};

const MapOffices: React.FC<TProps> = ({ city, onSelectOffice }) => {
  const [offices, setOffices] = useState<TOffice[]>([]);
  const [loading, setLoading] = useState(true);
  const [mapCenter, setMapCenter] = useState<[number, number]>([55.75, 37.61]);

  useEffect(() => {
    const API_URL = `https://backbron.kamkombank.ru/v1/order/address-list?currentHour=15&city=${city.id}`;

    setLoading(true);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setOffices(data);
        if (data.length > 0) {
          setMapCenter([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error("Ошибка загрузки данных:", err);
        setLoading(false);
      });
  }, [city.id]);

  const scrollUp = () => {
    window.scrollTo({
      top: window.scrollY - 1000,
      behavior: "smooth",
    });
  };

  return (
    <Layout.Container>
      <Title.H2>Офисы Банка</Title.H2>
      {loading ? (
        <div className={loader}>
          <Loader loadingText="Подождите, идет загрузка" />
        </div>
      ) : (
        <div className={mapWrapper}>
          <MapContainer
            key={city.id}
            center={mapCenter}
            zoom={12}
            className={main_map}
            scrollWheelZoom={false}
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {offices.map(office => (
              <Marker
                key={office.id}
                position={[parseFloat(office.lat), parseFloat(office.lon)]}
              >
                <Popup>{office.address_name}</Popup>
              </Marker>
            ))}
          </MapContainer>
          <div
            className={offices_block}
            style={{ maxHeight: "500px", overflowY: "auto" }}
          >
            {offices.map(office => (
              <div key={office.id} className={office_block}>
                <p>{office.address_name}</p>
                <p>
                  Понедельник-воскресенье:{" "}
                  {office.info.today_schedule.opening_hour} :{" "}
                  {office.info.today_schedule.closed_hour}
                </p>
                <button
                  className={book_button}
                  onClick={() => {
                    onSelectOffice(office);
                    scrollUp(); // Прокручиваем страницу на 200 пикселей вверх
                  }}
                >
                  Зарезервировать сумму
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </Layout.Container>
  );
};

export default MapOffices;
