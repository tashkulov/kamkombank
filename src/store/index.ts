import { useDispatch } from "react-redux";
import { combineReducers, Store } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { CurrencyState } from "./currencies/types";
import { currenciesSlice } from "./currencies/reducer";
import { OfficeState } from "@/store/offices/types";
import { officesSlice } from "@/store/offices/reducer";
import { CustomerState } from "@/store/customer/types";
import { customerSlice } from "@/store/customer/reducer";
import { CitiesState } from "@/store/cities/types";
import { citiesSlice } from "@/store/cities/reducer";
import { currencyRatesSlice } from "@/store/currenciesRate/reducer";
import { CurrencyRatesState } from "@/store/currenciesRate/types";

export interface ApplicationStore {
  currencies: CurrencyState;
  offices: OfficeState;
  customer: CustomerState;
  cities: CitiesState;
  currencyRates: CurrencyRatesState;
}

export const store = configureStore({
  reducer: {
    currencies: currenciesSlice.reducer,
    offices: officesSlice.reducer,
    customer: customerSlice.reducer,
    cities: citiesSlice.reducer,
    currencyRates: currencyRatesSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export function createApplicationStore(): Store<ApplicationStore> {
  return store;
}

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
