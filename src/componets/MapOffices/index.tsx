import React, { useEffect, useState } from "react";
import Layout from "@/ui/Layout";
import Title from "@/ui/Title";
import Loader from "@/ui/Loader";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import L from "leaflet";
import { motion, useDragControls } from "framer-motion";

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
  modalContentForOne,
  book_button_desktop,
} from "@/componets/MapOffices/style";

import { TOffice } from "@/types";
import { Icon } from "@/ui/Icon";
import { Currency } from "@/store/currencies/types";
import { loader } from "@/componets/Booking/style";

type CurrencyRate = {
  buy: number;
  sell: number;
};

type TOfficeWithRates = TOffice & {
  rates?: CurrencyRate | null;
};

const currencyIcons: Record<
  "USD" | "RUB" | "EUR" | "GBP" | "JPY" | "AED" | "INR" | "PHP",
  string
> = {
  USD: "USD",
  RUB: "RUB",
  EUR: "EUR",
  GBP: "GBP",
  JPY: "JPY",
  AED: "AED",
  INR: "INR",
  PHP: "PHP",
};

interface MapOfficesProps {
  city: { id: number; name: string };
  onSelectOffice: (office: TOfficeWithRates) => void;
  selectedCurrency: Currency | null;
}

const MapOffices: React.FC<MapOfficesProps> = ({
  city,
  onSelectOffice,
  selectedCurrency,
}) => {
  const [offices, setOffices] = useState<TOfficeWithRates[]>([]);
  const [loading, setLoading] = useState(true);
  const [mapCenter, setMapCenter] = useState<[number, number]>([55.75, 37.61]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState<TOfficeWithRates | null>(
    null,
  );
  const [isOfficeModalOpen, setIsOfficeModalOpen] = useState(false);

  const dragControls = useDragControls();

  console.log(selectedCurrency);
  const fetchRateByOffice = async (
    addressId: number,
    currencyName: string,
  ): Promise<CurrencyRate | null> => {
    const API_URL = `https://backbron.kamkombank.ru/v1/currency/exchange?address_id=${addressId}`;

    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      const targetRate = data.result[0]?.find(
        (rate: any) => rate.currency_name === currencyName,
      );

      if (!targetRate) {
        console.warn(`Нет курса для ${currencyName} в офисе ${addressId}`);
        return null;
      }

      return { buy: targetRate.buy, sell: targetRate.sell };
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    const API_URL = `https://backbron.kamkombank.ru/v1/order/address-list?currentHour=15&city=${city.id}`;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(API_URL);
        const data: TOffice[] = await res.json();

        const updatedOffices: TOfficeWithRates[] = await Promise.all(
          data.map(async office => {
            if (!selectedCurrency) return { ...office, rates: null };

            const rates = await fetchRateByOffice(
              office.id,
              selectedCurrency.name,
            );
            return { ...office, rates };
          }),
        );

        setOffices(updatedOffices);
      } catch (error) {
        console.error("Ошибка загрузки данных офисов:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [city.id, selectedCurrency]);

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
  const renderCurrencyBlock = (office: TOfficeWithRates) => {
    const currencyCode = selectedCurrency?.value as keyof typeof currencyIcons;

    const iconName = currencyIcons[currencyCode] || "USD";
    return (
      <div className={currency_wrapper}>
        <div className={currency_item}>
          <span>Покупка</span>
          <div>
            <div className={currency_icon}>
              <Icon name={iconName} />
            </div>
            <strong>{office.rates?.buy ?? "--"} ₽</strong>
          </div>
        </div>

        <div className={currency_item}>
          <span>Продажа</span>
          <div>
            <div className={currency_icon}>
              <Icon name={iconName} />
            </div>
            <strong>{office.rates?.sell ?? "--"} ₽</strong>
          </div>
        </div>
      </div>
    );
  };

  const renderOfficeModal = () => {
    if (!selectedOffice) return null;

    return (
      <div className={modalOverlay}>
        <motion.div
          className={modalContentForOne}
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
            if (info.point.y > 100) setIsOfficeModalOpen(false);
          }}
        >
          <button
            className={modalCloseButton}
            onClick={() => setIsOfficeModalOpen(false)}
          >
            ✕
          </button>

          <h3
            style={{
              paddingLeft: "14px",
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "16px",
            }}
          >
            Результаты поиска
          </h3>

          <div key={selectedOffice.id} className={office_block}>
            <h4>{selectedOffice.address_name}</h4>

            <div className={work_block}>
              <Icon name={"clock-icon"} />
              <p>
                Понедельник-воскресенье:{" "}
                {selectedOffice.info.today_schedule.opening_hour} -{" "}
                {selectedOffice.info.today_schedule.closing_hour}
                <br />
                Без перерыва
              </p>
            </div>

            {renderCurrencyBlock(selectedOffice)}

            <button
              className={book_button}
              onClick={() => {
                onSelectOffice(selectedOffice);
                setIsOfficeModalOpen(false);
                scrollUp();
              }}
            >
              Зарезервировать сумму
            </button>
          </div>
        </motion.div>
      </div>
    );
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
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {offices.map(office => (
              <Marker
                key={office.id}
                position={[parseFloat(office.lat), parseFloat(office.lon)]}
                icon={customMarkerIcon}
                eventHandlers={{
                  click: () => {
                    setSelectedOffice(office);
                    setIsOfficeModalOpen(true);
                  },
                }}
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
                    {office.info.today_schedule.opening_hour} -{" "}
                    {office.info.today_schedule.closing_hour}
                    <br />
                    Без перерыва
                  </p>
                </div>

                {renderCurrencyBlock(office)}

                <button
                  className={book_button_desktop}
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
                  if (info.point.y > 100) setIsModalOpen(false);
                }}
              >
                <button
                  className={modalCloseButton}
                  onClick={() => setIsModalOpen(false)}
                >
                  ✕
                </button>

                <h3
                  style={{
                    paddingLeft: "14px",
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
                          {office.info.today_schedule.opening_hour} -{" "}
                          {office.info.today_schedule.closing_hour}
                          <br />
                          Без перерыва
                        </p>
                      </div>

                      {renderCurrencyBlock(office)}

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

          {isOfficeModalOpen && renderOfficeModal()}
        </div>
      )}
    </Layout.Container>
  );
};

export default MapOffices;
