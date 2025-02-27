import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiFetch, callApiFn } from "@/services/request";
import { ExchangeRate, CurrencyRate } from "@/store/currenciesRate/types";
import { Currency } from "@/store/currencies/types";

// Асинхронный экшен для получения курса валют
export const getExchangeRate = createAsyncThunk<CurrencyRate[], void>(
  "currencies/getExchangeRate",
  async (_, { rejectWithValue }) => {
    try {
      // Выполняем API-запрос
      const result = await callApiFn<{
        requested_address: string;
        date: string;
        result: ExchangeRate[][];
      }>(() =>
        apiFetch({
          url: `${process.env.VITE_APP_API_URL}/v1/currency/exchange?address_id=1`,
          options: {
            method: "GET",
          },
        }),
      );

      const { requested_address, date, result: exchangeData } = result;

      const exchangeRates: CurrencyRate[] = exchangeData.map(rateGroup => ({
        requested_address, // Адрес из верхнего объекта
        date, // Дата из верхнего объекта
        rates: rateGroup, // Сами курсы валют (массив из exchangeData)
      }));

      return exchangeRates; // Возвращаем отформатированные данные
    } catch (e) {
      console.error("Ошибка при получении данных:", e);
      return rejectWithValue("Ошибка при получении данных");
    }
  },
);
