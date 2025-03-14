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
  work_block,
} from "@/componets/MapOffices/style";
import { TOffice } from "@/types";
import { Icon } from "@/ui/Icon";

const MapOffices: React.FC<{
  city: { id: number; name: string };
  onSelectOffice: (office: TOffice) => void;
}> = ({ city, onSelectOffice }) => {
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
    const isMobile = window.innerWidth <= 768;
    window.scrollTo({
      top: window.scrollY - (isMobile ? 1500 : 1000),
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
                position={[parseFloat(office.lat), parseFloat(office.lon)]} // 🟢 Используем стандартный маркер
              >
                <Popup>{office.address_name}</Popup>
              </Marker>
            ))}
          </MapContainer>

          <div className={offices_block}>
            {offices.map(office => (
              <div key={office.id} className={office_block}>
                <h4>{office.address_name}</h4>
                <div className={work_block}>
                  <Icon name={"clock-icon"} />
                  <p>
                    Понедельник-воскресенье:{" "}
                    {office.info.today_schedule.opening_hour} :{" "}
                    {office.info.today_schedule.closing_hour}
                    <br />
                    Без перерыва
                  </p>
                </div>

                <button
                  className={book_button}
                  onClick={() => {
                    onSelectOffice(office);
                    scrollUp();
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
