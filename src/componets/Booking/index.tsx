import React, { useCallback, useEffect, useState } from "react";
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
import { currencies, places } from "@/mock";

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

  const [isNameError, setIsNameError] = useState<boolean>(false);
  const [isPhoneError, setIsPhoneError] = useState<boolean>(false);
  const [isAmountError, setIsAmountError] = useState<boolean>(false);
  const [isPlaceError, setIsPlaceError] = useState<boolean>(false);
  const [isAgreeError, setIsAgreeError] = useState<boolean>(false);

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
  };

  const onChangeCurrency = (val: any, meta: object) => {
    setCurrency(val);
  };

  const onChangeAmount = (val: string) => {
    setAmount(val);
  };

  const onChangePhone = (val: string) => {
    setPhone(val.replace(/[^\+\d]/g, ""));
  };
  const onChangeName = (val: string) => {
    setName(val);
  };
  const onSubmitHandler = () => {
    const obj = {
      name: name,
      phone: phone,
      amount: amount,
      place: place,
      isAgree: isAgree,
      currency: currency,
    };
    console.log("ready to fetch", obj);
    if (validate()) onSubmit();
    else {
      setIsNameError(true);
      setIsPhoneError(true);
      if (!amount || isNaN(Number(amount)) || Number(amount) === 0)
        setIsAmountError(true);
      !place && setIsPlaceError(true);
      !isAgree && setIsAgreeError(true);
    }
  };

  useEffect(() => {
    setIsValid(validate());
  }, [action, name, phone, place, amount, currency, isAgree]);

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
            isError={isNameError}
          />
        </div>

        <div className={formItem}>
          <Input
            type={"phone"}
            placeholder={"Телефон*"}
            required
            onChange={onChangePhone}
            isError={isPhoneError}
          />
        </div>

        <div className={formItem}>
          <CustomCurrencySelect
            options={currencies}
            onChange={onChangeCurrency}
            onChangeAmount={onChangeAmount}
            isError={isAmountError}
          />
        </div>

        <div className={formItem}>
          <Dropdown
            options={places}
            onChange={onChangePlace}
            isError={isPlaceError}
          />
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
          isError={isAgreeError}
          label={
            <>
              Я согласен с{" "}
              <a href="/Consent_Processing_Personal_Data.pdf" target="_blank">
                условиями передачи и обработки данных
              </a>{" "}
            </>
          }
          onChange={val => {
            setIsAgreeError(false);
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
