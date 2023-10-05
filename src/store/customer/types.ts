export enum customerTypes {
  buyer = 1,
  seller = 2,
}
export interface Customer {
  id?: string;
  name: string;
  phone: string;
  customer_type: customerTypes;
  currency_id: number;
  amount: string;
  address_id: number;
  user_aggrement: number;
}

export interface CustomerState {
  loading: boolean;
  success: boolean;
  data: Customer | undefined;
}
