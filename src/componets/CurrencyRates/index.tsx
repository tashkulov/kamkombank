import React, { useEffect, useState } from "react";
import Layout from "@/ui/Layout";
import Title from "@/ui/Title";
import "swiper/css";
import {
  commisions,
  commissionAmount,
  main_container,
  table,
  tableContainer,
  td,
  th,
  emptyState,
} from "@/componets/CurrencyRates/style";
import Dropdown, { DropdownOption } from "@/ui/Dropdown";
import DropdownCurrency from "@/ui/DropdownCurrency";

type TProps = {
  offices: DropdownOption[];
  currentCity: { id: number; name: string };
};

type CurrencyRate = {
  currency_name: string;
  buy: number;
  sell: number;
};
const CurrencyRates: React.FC<TProps> = ({ offices, currentCity }) => {
  const [rates, setRates] = useState<CurrencyRate[]>([]);
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [place, setPlace] = useState<DropdownOption | null>(null);
  const [isError, setIsError] = useState(false);

  const currencyMap: Record<string, string> = {
    "Доллар США": "USD",
    Евро: "EUR",
    "Фунт стерлингов": "GBP",
    "Китайский юань": "CNY",
    "Швейцарский франк": "CHF",
  };

  const commissionMap: Record<string, number> = {
    Москва: 200,
    "Санкт-Петербург": 200,
    Казань: 100,
    "Набережные Челны": 100,
    "Нижний Новгород": 100,
  };

  const commission = commissionMap[currentCity.name] || 200;

  const fetchRates = (addressId: number) => {
    const API_URL = `https://backbron.kamkombank.ru/v1/currency/exchange?address_id=${addressId}`;
    setLoading(true);
    setError(null);
    setIsError(false);

    fetch(API_URL)
      .then(response => {
        if (!response.ok) {
          throw new Error("Не удалось загрузить данные");
        }
        return response.json();
      })
      .then(data => {
        setDate(data.date);
        setRates(data.result[0] || []);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsError(true);
        setLoading(false);
      });
  };

  const cleanedOffices = offices.map(office => ({
    ...office,
    label: office.label.replace("Офис выдачи валюты *", "").trim(),
  }));

  useEffect(() => {
    if (cleanedOffices.length > 0) {
      const firstOffice = cleanedOffices[0];
      setPlace(firstOffice);
      fetchRates(firstOffice.value);
    }
  }, [offices]); // следим за приходом offices с пропсов

  const onChangePlace = (val: DropdownOption) => {
    setPlace(val);
    fetchRates(val.value);
  };

  const formattedDate = date
    ? new Date(date.split(".").reverse().join("-")).toLocaleDateString(
        "ru-RU",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        },
      )
    : "Дата не определена";

  if (isError) return <p>Ошибка: {error}</p>;

  return (
    <Layout.MiniContainer>
      <div className={main_container}>
        <Title.H3>
          Курсы валют / <span>{formattedDate}</span>
        </Title.H3>

        <DropdownCurrency
          options={cleanedOffices}
          onChange={onChangePlace}
          value={place}
          isError={isError}
          classNamePrefix=""
        />

        <div className={tableContainer}>
          {loading ? (
            <p>Загрузка курсов валют...</p>
          ) : (
            <>
              {rates.length > 0 ? (
                <>
                  <table className={table}>
                    <thead>
                      <tr>
                        <th className={th}>Валюта</th>
                        <th className={th}>Покупка</th>
                        <th className={th}>Продажа</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rates.map((rate, index) => (
                        <tr key={index}>
                          <td className={td}>
                            {currencyMap[rate.currency_name] ||
                              rate.currency_name}
                          </td>
                          <td className={td}>{rate.buy}</td>
                          <td className={td}>{rate.sell}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <span className={commisions}>
                    Комиссия за обмен валюты{" "}
                    <span className={commissionAmount}>{commission} ₽</span>
                  </span>
                </>
              ) : (
                <div className={emptyState}>
                  <p>Курсы валют временно недоступны.</p>
                  <p>
                    Попробуйте выбрать другой офис или повторите попытку позже.
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      <span className={commisions}>
        Курсы различаются по офисам и меняются в течение дня
      </span>
    </Layout.MiniContainer>
  );
};

export default CurrencyRates;
