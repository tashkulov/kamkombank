import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiFetch, callApiFn } from "@/services/request";
import { Customer, CustomerState } from "@/store/customer/types";

export const fetchCustomer = createAsyncThunk(
  "customer/fetchCustomer",
  async (customer: any) => {
    try {
      const formData = new FormData();

      for (const key in customer) {
        if (customer.hasOwnProperty(key)) {
          formData.append(key, customer[key]);
        }
      }
      const result = await callApiFn<CustomerState>(() =>
        apiFetch({
          url: `${process.env.VITE_APP_API_URL}/v1/order/order-currency`,
          options: {
            method: "POST",
            body: formData,
          },
        }),
      );
      return result;
    } catch (e) {
      throw e;
    }
  },
);
