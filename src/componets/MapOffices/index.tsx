import React, { useEffect, useState } from "react";
import Layout from "@/ui/Layout";
import Title from "@/ui/Title";
import Loader from "@/ui/Loader";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import { loader } from "@/componets/Booking/style";
import {
  book_button,
  office_block,
  offices_block,
  mapWrapper,
  main_map,
  work_block,
  currency_wrapper,
  currency_item,
  currency_icon,
  showAllOfficesButton,
  modalOverlay,
  modalContent,
  modalCloseButton,
  modalOfficesList,
} from "@/componets/MapOffices/style";

import { TOffice } from "@/types";
import { Icon } from "@/ui/Icon";
import { motion, useDragControls } from "framer-motion";
type CurrencyRate = {
  buy: number;
  sell: number;
};

type TOfficeWithRates = TOffice & {
  rates?: CurrencyRate | null;
};

const MapOffices: React.FC<{
  city: { id: number; name: string };
  onSelectOffice: (office: TOfficeWithRates) => void;
}> = ({ city, onSelectOffice }) => {
  const [offices, setOffices] = useState<TOfficeWithRates[]>([]);
  const [loading, setLoading] = useState(true);
  const [mapCenter, setMapCenter] = useState<[number, number]>([55.75, 37.61]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchRateByOffice = async (
    addressId: number,
  ): Promise<CurrencyRate | null> => {
    const API_URL = `https://backbron.kamkombank.ru/v1/currency/exchange?address_id=${addressId}`;

    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      const usdRate = data.result[0]?.find(
        (rate: any) => rate.currency_name === "Доллар США",
      );

      if (!usdRate) {
        console.warn(`Нет курса доллара для офиса ${addressId}`);
        return null;
      }

      return {
        buy: usdRate.buy,
        sell: usdRate.sell,
      };
    } catch (error) {
      console.error(
        `Ошибка при загрузке курсов для офиса ${addressId}:`,
        error,
      );
      return null;
    }
  };
  const dragControls = useDragControls();

  useEffect(() => {
    const API_URL = `https://backbron.kamkombank.ru/v1/order/address-list?currentHour=15&city=${city.id}`;

    const fetchData = async () => {
      setLoading(true);

      try {
        const res = await fetch(API_URL);
        const data: TOffice[] = await res.json();

        const updatedOffices: TOfficeWithRates[] = await Promise.all(
          data.map(async office => {
            const rates = await fetchRateByOffice(office.id);
            return { ...office, rates };
          }),
        );

        setOffices(updatedOffices);

        if (updatedOffices.length > 0) {
          setMapCenter([
            parseFloat(updatedOffices[0].lat),
            parseFloat(updatedOffices[0].lon),
          ]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Ошибка загрузки данных офисов:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [city.id]);

  const scrollUp = () => {
    const isMobile = window.innerWidth <= 768;
    window.scrollTo({
      top: window.scrollY - (isMobile ? 1500 : 1000),
      behavior: "smooth",
    });
  };

  const iconHtml = `
    <svg width="50" height="50">
      <use xlink:href="#location-icon"></use>
    </svg>
  `;

  const customMarkerIcon = L.divIcon({
    html: iconHtml,
    className: "",
    iconSize: [40, 40],
    iconAnchor: [30, 15],
  });

  return (
    <Layout.Container>
      <Title.H2>Офисы Банка</Title.H2>

      {loading ? (
        <div className={loader}>
          <Loader loadingText="Подождите, идет загрузка" />
        </div>
      ) : (
        <div className={mapWrapper}>
          {/* Карта */}
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
                icon={customMarkerIcon}
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

                <div className={currency_wrapper}>
                  <div className={currency_item}>
                    <span>Покупка</span>
                    <div>
                      <div className={currency_icon}>
                        <Icon name={"dollar-icon"} />
                      </div>
                      <strong>{office.rates?.buy ?? "--"} ₽</strong>
                    </div>
                  </div>

                  <div className={currency_item}>
                    <span>Продажа</span>
                    <div>
                      <div className={currency_icon}>
                        <Icon name={"dollar-icon"} />
                      </div>
                      <strong>{office.rates?.sell ?? "--"} ₽</strong>
                    </div>
                  </div>
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

          <button
            className={showAllOfficesButton}
            onClick={() => setIsModalOpen(true)}
          >
            Показать все офисы
          </button>

          {isModalOpen && (
            <div className={modalOverlay}>
              <motion.div
                className={modalContent}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                drag="y"
                dragListener={false}
                dragControls={dragControls}
                dragConstraints={{ top: 0, bottom: 0 }}
                dragElastic={0.2}
                onDragEnd={(event, info) => {
                  if (info.point.y > 100) {
                    setIsModalOpen(false);
                  }
                }}
              >
                <div
                  onPointerDown={e => dragControls.start(e)}
                  style={{
                    width: "40px",
                    height: "5px",
                    backgroundColor: "#ccc",
                    borderRadius: "9999px",
                    margin: "8px auto",
                    cursor: "grab",
                  }}
                />

                <button
                  className={modalCloseButton}
                  onClick={() => setIsModalOpen(false)}
                >
                  ✕
                </button>

                <h3
                  style={{
                    padding: "10px",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  Результаты поиска
                </h3>

                <div className={modalOfficesList}>
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

                      <div className={currency_wrapper}>
                        <div className={currency_item}>
                          <span>Покупка</span>
                          <div>
                            <div className={currency_icon}>
                              <Icon name={"dollar-icon"} />
                            </div>
                            <strong>{office.rates?.buy ?? "--"} ₽</strong>
                          </div>
                        </div>

                        <div className={currency_item}>
                          <span>Продажа</span>
                          <div>
                            <div className={currency_icon}>
                              <Icon name={"dollar-icon"} />
                            </div>
                            <strong>{office.rates?.sell ?? "--"} ₽</strong>
                          </div>
                        </div>
                      </div>

                      <button
                        className={book_button}
                        onClick={() => {
                          onSelectOffice(office);
                          setIsModalOpen(false);
                          scrollUp();
                        }}
                      >
                        Зарезервировать сумму
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      )}
    </Layout.Container>
  );
};

export default MapOffices;
