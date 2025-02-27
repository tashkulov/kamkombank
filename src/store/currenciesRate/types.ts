export interface ExchangeRate {
  currency_name: string;
  sell: string;
  buy: string;
}

export interface CurrencyRate {
  requested_address: string;
  date: string;
  rates: ExchangeRate[];
}

export interface CurrencyRatesState {
  loading: boolean;
  exchangeRates: CurrencyRate[];
}
