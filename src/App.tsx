import React, { useEffect, useState } from "react";
import Layout from "@/ui/Layout";
import Header from "@/componets/Header";
import Footer from "@/componets/Footer";
import Steps from "@/componets/Steps";
import { appContent } from "@/style";
import Booking from "@/componets/Booking";
import Benefits from "@/componets/Benefits";
import Modal from "@/ui/Modal";
import Title from "@/ui/Title";
import Confirm from "@/componets/Confirm";
import Thx from "@/componets/Thx";
import { getCurrencies } from "@/store/currencies/actions";
import { useAppDispatch } from "@/store";
import { useSelector } from "react-redux";
import { getCurrenciesState } from "@/store/currencies/selector";
import { getOfficesState } from "@/store/offices/selector";
import { getOffices } from "@/store/offices/actions";
import { officesSlice } from "@/store/offices/reducer";
import { prepareOfficesList } from "@/utils/prepareOfficesList";
import { getCustomerState } from "@/store/customer/selector";
import { fetchCustomer } from "@/store/customer/actions";
import { Customer, CustomerState } from "@/store/customer/types";
import { customerSlice } from "@/store/customer/reducer";
import { apiFetch, callApiFn } from "@/services/request";
const App = () => {
  const dispatch = useAppDispatch();
  const currenciesState = useSelector(getCurrenciesState);
  const officesState = useSelector(getOfficesState);
  const customerState = useSelector(getCustomerState);

  const [isConfirm, setIsConfirm] = useState(false);
  const [smsError, setSmsError] = useState<string | undefined>(undefined);
  const [isThx, setIsThx] = useState(false);

  const onSubmitForm = (customer: Customer) => {
    void dispatch(customerSlice.actions.setCustomer(customer));
    void dispatch(fetchCustomer(customer));
  };

  const onSubmitSMSCode = async (sms: any) => {
    const url = `${process.env.VITE_APP_API_URL}/v1/order/validate-sms`;
    const formData = new FormData();

    for (const key in sms) {
      if (sms.hasOwnProperty(key)) {
        formData.append(key, sms[key]);
      }
    }

    try {
      const result = await callApiFn<{ success: boolean; message: string }>(
        () =>
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
        setIsThx(true);
      } else {
        setSmsError(result.message);
      }
    } catch (e) {
      console.log("error");
      console.log(e);
    }
  };

  const onRetry = () => {
    void dispatch(fetchCustomer(customerState.data));
  };

  useEffect(() => {
    void dispatch(getCurrencies());
    void dispatch(getOffices());
  }, []);

  useEffect(() => {
    if (customerState.success) setIsConfirm(true);
  }, [customerState]);
  return (
    <>
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
          onClose={() => {
            setIsThx(false);
            window.location.reload();
          }}
        />
      )}
      <Header />

      <Layout.Main className={appContent}>
        <Booking
          onSubmit={onSubmitForm}
          currencies={currenciesState.currencies}
          offices={prepareOfficesList(officesState.offices)}
        />
        <Steps />
        <Benefits />
        {/*<Footer />*/}
      </Layout.Main>
    </>
  );
};

export default App;
