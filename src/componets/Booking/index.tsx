import React, { useState } from "react";
import Layout from "@/ui/Layout";
import Title from "@/ui/Title";
import {
  container,
  formItem,
  info,
  safe,
  submit,
  toggle,
} from "@/componets/Booking/style";
import Input from "@/ui/Input";
import Toggle from "@/ui/Toggle";
import Dropdown, { Option } from "@/ui/Dropdown";
import CustomCurrencySelect, { Currency } from "@/ui/CustomCurrencySelect";
import { Icon } from "@/ui/Icon";
import Checkbox from "@/ui/Checkbox";
import clx from "classnames";

const places: Option[] = [
  {
    value: 1,
    label: "Г. Москва, Тверская улица, 6 ст2",
    time: "23:00",
    isOpened: true,
  },
  {
    value: 2,
    label: "Г. Москва, Тверская улица, 6 ст2",
    time: "23:00",
    isOpened: true,
  },
  {
    value: 3,
    label: "Г. Москва, Тверская улица, 6 ст2",
    time: "23:00",
    isOpened: true,
  },
  {
    value: 4,
    label: "Г. Москва, Тверская улица, 6 ст2",
    time: "23:00",
    isOpened: true,
  },
  {
    value: 5,
    label: "Г. Москва, df улица, 6 ст2",
    time: "23:00",
    isOpened: true,
  },
  {
    value: 6,
    label: "Г. Москва, Тверская улица, 6 ст2",
    time: "23:00",
    isOpened: true,
  },
  {
    value: 7,
    label: "Г. Москва, Тверская улица, 6 ст2",
    time: "23:00",
    isOpened: true,
  },
  {
    value: 8,
    label: "Г. Москва, 345 улица, 6 ст2",
    time: "23:00",
    isOpened: true,
  },
  {
    value: 9,
    label: "Г. Москва, Люсиновская улица, 29 ст1",
    time: "22:00",
    isOpened: false,
  },
  { value: 10, label: "Banana", time: "23:00", isOpened: true },
];

const currencies: Currency[] = [
  { value: "USD", symbol: "$", name: "Доллар США" },
  { value: "EUR", symbol: "€", name: "Евро" },
  { value: "CNY", symbol: "¥", name: "Китайский юань" },
  { value: "KZT", symbol: "₸", name: "Казахстанский теньге" },
];

type TProps = {
  onSubmit: () => void;
};
const Booking: React.FC<TProps> = ({ onSubmit }) => {
  const [action, setAction] = useState<string>("Купить");
  const [name, setName] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [amount, setAmount] = useState<string>();
  const [currency, setCurrency] = useState<Currency>(currencies[0]);
  const [place, setPlace] = useState<Option>();
  const [isAgree, setIsAgree] = useState<boolean>(true);

  const [isValid, setIsValid] = useState<boolean>(false);

  const validate = () => {
    let isValid = true;
    if (!isAgree) isValid = false;
    if (!name || name.length < 2 || name.length > 10) isValid = false;
    if (!phone || phone.length !== 12) isValid = false;
    if (!amount || isNaN(Number(amount)) || Number(amount) === 0)
      isValid = false;
    if (!place) isValid = false;
    if (!currency?.value) isValid = false;

    return isValid;
  };

  const onChangePlace = (val: any, meta: object) => {
    setPlace(val);
    setIsValid(validate());
  };

  const onChangeCurrency = (val: any, meta: object) => {
    setCurrency(val);
    setIsValid(validate());
  };

  const onChangeAmount = (val: string) => {
    setAmount(val);
    setIsValid(validate());
  };

  const onChangePhone = (val: string) => {
    setPhone(val.replace(/[^\+\d]/g, ""));
    setIsValid(validate());
  };
  const onChangeName = (val: string) => {
    setName(val);
    setIsValid(validate());
  };
  const onSubmitHandler = () => {
    const obj = {
      action: action,
      name: name,
      phone: phone?.length,
      amount: amount,
      currency: currency,
      place: place,
      agree: isAgree,
    };

    if (validate()) onSubmit();

    console.log(obj);
    console.log(validate());
  };
  return (
    <Layout.Container>
      <Title.H2>Бронирование валюты</Title.H2>

      <Toggle
        styles={toggle}
        onChange={val => {
          setAction(val ? "Купить" : "Продать");
        }}
      />

      <div className={container}>
        <div className={formItem}>
          <Input
            placeholder={"Имя*"}
            minLength={2}
            maxLength={10}
            required
            onChange={onChangeName}
          />
        </div>

        <div className={formItem}>
          <Input
            type={"phone"}
            placeholder={"Телефон*"}
            required
            onChange={onChangePhone}
          />
        </div>

        <div className={formItem}>
          <CustomCurrencySelect
            options={currencies}
            onChange={onChangeCurrency}
            onChangeAmount={onChangeAmount}
          />
        </div>

        <div className={formItem}>
          <Dropdown options={places} onChange={onChangePlace} />
        </div>
      </div>

      <div
        onClick={onSubmitHandler}
        className={clx(submit, !isValid && "disabled")}
      >
        Оставить заявку
      </div>

      <div className={info}>
        <Checkbox
          label={"Я согласен с условиями передачи и обработки данных"}
          onChange={val => {
            setIsAgree(val);
          }}
          checked={isAgree}
        />
        <div className={safe}>
          <Icon name={"safe-icon"} />
          <span>Гарантируем безопасность данных</span>
        </div>
      </div>
    </Layout.Container>
  );
};

export default Booking;
