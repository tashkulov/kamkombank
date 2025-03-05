import React, { useEffect, useState } from "react";
import Layout from "@/ui/Layout";
import Header from "@/componets/Header";
import Steps from "@/componets/Steps";
import { appContent } from "@/style";
import Booking from "@/componets/Booking";
import Benefits from "@/componets/Benefits";
import Confirm from "@/componets/Confirm";
import Thx from "@/componets/Thx";
import { getCurrencies } from "@/store/currencies/actions";
import { useAppDispatch } from "@/store";
import { useSelector } from "react-redux";
import { getCurrenciesState } from "@/store/currencies/selector";
import { getOfficesState } from "@/store/offices/selector";
import { getOffices } from "@/store/offices/actions";
import { prepareOfficesList } from "@/utils/prepareOfficesList";
import { getCustomerState } from "@/store/customer/selector";
import { fetchCustomer } from "@/store/customer/actions";
import { Customer } from "@/store/customer/types";
import { customerSlice } from "@/store/customer/reducer";
import { apiFetch, callApiFn } from "@/services/request";
import { getCitiesState } from "@/store/cities/selector";
import Cities from "@/componets/Cities";
import AuthGos from "@/componets/AuthGos";
import { citiesSlice } from "@/store/cities/reducer";
import { getCurrencyRatesState } from "@/store/currenciesRate/selector";
import { getExchangeRate } from "@/store/currenciesRate/actions";
import CurrencyRates from "@/componets/CurrencyRates";
import MapOffices from "@/componets/MapOffices";
import { concatedContainers } from "@/ui/Layout/style";
import { DropdownOption } from "@/ui/Dropdown";
import { TOffice } from "@/types";

const cityTranslationMap: Record<string, string> = {
  "saint petersburg": "Санкт-Петербург",
  moscow: "Москва",
  novosibirsk: "Новосибирск",
  yekaterinburg: "Екатеринбург",
  "nizhny novgorod": "Нижний Новгород",
};

const App = () => {
  const dispatch = useAppDispatch();
  const currenciesState = useSelector(getCurrenciesState);
  const officesState = useSelector(getOfficesState);
  const customerState = useSelector(getCustomerState);
  const citiesState = useSelector(getCitiesState);
  const [gosusligiAuth, setGosusligiAuth] = useState<string>("");
  const currencyRates = useSelector(getCurrencyRatesState);
  const [isConfirm, setIsConfirm] = useState(false);
  const [smsError, setSmsError] = useState<string | undefined>(undefined);
  const [isThx, setIsThx] = useState(false);
  const [isFail, setIsFail] = useState(false);
  const [isAuthGos, setIsAuthGos] = useState(false);
  const [isChooseCity, setIsChooseCity] = useState(false);
  const [isAutoCitySelected, setIsAutoCitySelected] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState<TOffice>();

  const onSubmitForm = (customer: Customer) => {
    void dispatch(customerSlice.actions.setCustomer(customer));
    void dispatch(fetchCustomer(customer));
  };

  const onSubmitSMSCode = async (sms: any) => {
    const url = `${process.env.VITE_APP_API_URL}/v1/order/validate-sms`;
    const formData = new FormData();

    sms.token = customerState.data?.token;

    for (const key in sms) {
      if (sms.hasOwnProperty(key)) {
        formData.append(key, sms[key]);
      }
    }

    try {
      const result = await callApiFn<{
        brainsoft: { data: number };
        success: boolean;
        message: string;
      }>(() =>
        apiFetch({
          url: url,
          options: {
            method: "POST",
            body: formData,
          },
        }),
      );
      if (result.success) {
        setIsConfirm(false);
        setIsAuthGos(true);
        setGosusligiAuth(
          `https://lk.kamkombank.ru/start/booking?lead_id=${result.brainsoft.data}`,
        );
      } else {
        setSmsError(result.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onRetry = () => {
    void dispatch(fetchCustomer(customerState.data));
  };

  useEffect(() => {
    if (!isChooseCity && citiesState.current) {
      void dispatch(getCurrencies());
      void dispatch(getOffices(citiesState.current));
    }
  }, [isChooseCity, citiesState.current]);

  useEffect(() => {
    if (customerState.success) setIsConfirm(true);
  }, [customerState]);

  useEffect(() => {
    const getLocation = async () => {
      if (isAutoCitySelected) return; // Флаг для предотвращения повторных вызовов

      try {
        const res = await fetch("https://ipinfo.io/json");
        const data = await res.json();
        let userCity = data.city.toLowerCase();

        if (cityTranslationMap[userCity]) {
          userCity = cityTranslationMap[userCity];
        }

        const cityExists = citiesState.cities.some(
          city => city.name.toLowerCase() === userCity.toLowerCase(),
        );

        if (cityExists) {
          const selectedCity = citiesState.cities.find(
            city => city.name.toLowerCase() === userCity.toLowerCase(),
          );
          dispatch(citiesSlice.actions.setCurrentCity(selectedCity!));
          setIsAutoCitySelected(true);
          setIsChooseCity(false);
        } else {
          setIsChooseCity(true);
        }
      } catch (error) {
        console.error("Error while getting geolocation", error);
      }
    };

    if (!isAutoCitySelected) {
      getLocation();
    }
  }, [citiesState.cities, dispatch, isAutoCitySelected]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const status = searchParams.get("status");

    if (status === "success") {
      setIsThx(true);
      setIsChooseCity(false);
    } else if (status === "fail") {
      setIsThx(true);
      setIsFail(true);
      setIsChooseCity(false);
    }

    searchParams.delete("status");
    const newUrl = `${window.location.protocol}//${window.location.host}${
      window.location.pathname
    }?${searchParams.toString()}`;
    window.history.replaceState({ path: newUrl }, "", newUrl);
  }, []);
  return (
    <>
      {isChooseCity && (
        <Cities
          onClose={() => {
            setIsChooseCity(false);
          }}
        />
      )}
      {isConfirm && (
        <Confirm
          onSubmit={onSubmitSMSCode}
          onRetry={onRetry}
          onClose={() => {
            setIsConfirm(false);
            setSmsError(undefined);
          }}
          phone={customerState.data?.phone ?? ""}
          loading={customerState.loading}
          error={smsError}
        />
      )}
      {isThx && (
        <Thx
          isFail={isFail}
          onClose={() => {
            setIsThx(false);
            setIsFail(false);
          }}
        />
      )}

      {isAuthGos && <AuthGos url={gosusligiAuth} />}
      <Header />

      <Layout.Main className={appContent}>
        <div className={concatedContainers}>
          <Booking
            onChangeCity={() => setIsChooseCity(true)}
            onSubmit={onSubmitForm}
            currencies={currenciesState.currencies}
            offices={prepareOfficesList(officesState.offices)}
            loading={officesState.loading || currenciesState.loading}
            selectedOffice={selectedOffice}
          />

          <CurrencyRates
            offices={prepareOfficesList(officesState.offices)}
            currentCity={citiesState.current}
          />
        </div>
        <MapOffices
          city={citiesState.current}
          onSelectOffice={setSelectedOffice}
        />
        {/*<Steps />*/}
        <Benefits />
        {/*<Footer />*/}
      </Layout.Main>
    </>
  );
};

export default App;
