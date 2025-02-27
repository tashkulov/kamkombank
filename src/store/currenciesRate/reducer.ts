import { createSlice } from "@reduxjs/toolkit";
import { getExchangeRate } from "@/store/currenciesRate/actions";
import { CurrencyRatesState } from "@/store/currenciesRate/types";

const initialState: CurrencyRatesState = {
  loading: false,
  exchangeRates: [],
};

export const currencyRatesSlice = createSlice({
  name: "currencies",
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getExchangeRate.pending, state => {
      state.loading = true;
    });
    builder.addCase(getExchangeRate.fulfilled, (state, action) => {
      if (action.payload) {
        state.exchangeRates = action.payload; // Теперь типы совпадают
      }
      state.loading = false;
    });
    builder.addCase(getExchangeRate.rejected, state => {
      console.error("Ошибка: не удалось получить курс валют");
      state.loading = false;
    });
  },
});

export default currencyRatesSlice.reducer;
