import React, { useEffect, useState } from "react";
import Layout from "@/ui/Layout";
import Title from "@/ui/Title";
import "swiper/css";
import { table, tableContainer, td, th } from "@/componets/CurrencyRates/style";
import Dropdown, { DropdownOption } from "@/ui/Dropdown";

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

  const onChangePlace = (val: DropdownOption) => {
    setPlace(val);
  };

  useEffect(() => {
    const API_URL =
      "https://backbron.kamkombank.ru/v1/currency/exchange?address_id=1";
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setDate(data.date);
        setRates(data.result[0] as CurrencyRate[]);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error}</p>;

  return (
    <Layout.MiniContainer>
      <Title.H3>
        Курсы валют/<span>{date}</span>
      </Title.H3>
      <Dropdown options={offices} onChange={onChangePlace} />

      <div className={tableContainer}>
        <table className={table}>
          <thead>
            <tr>
              <th className={th}>Валюта</th>
              <th className={th}>Покупка</th>
              <th className={th}>Продажа</th>
            </tr>
          </thead>
          <tbody>
            {rates.map((rate: CurrencyRate, index: number) => (
              <tr key={index}>
                <td className={td}>{rate.currency_name}</td>
                <td className={td}>{rate.buy}</td>
                <td className={td}>{rate.sell}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Layout.MiniContainer>
  );
};

export default CurrencyRates;
