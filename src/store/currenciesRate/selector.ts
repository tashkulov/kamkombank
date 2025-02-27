import { createSelector } from "reselect";
import { ApplicationStore } from "@/store";

export const getCurrencyRatesState = createSelector(
  (state: ApplicationStore) => state.currencyRates,
  item => item,
);
