import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiFetch, callApiFn } from "@/services/request";
import { Currency } from "@/store/currencies/types";
import { Office } from "@/store/offices/types";

export const getOffices = createAsyncThunk("offices/getOffices", async () => {
  try {
    const now = new Date();
    const result = await callApiFn<Office[]>(() =>
      apiFetch({
        url: `${
          process.env.VITE_APP_API_URL
        }/v1/order/address-list?currentHour=${now.getHours()}`,
        options: {
          method: "GET",
        },
      }),
    );
    return result;
  } catch (e) {
    throw e;
  }
});
