export type TOffice = {
  id: number;
  address_name: string;
  info: TInfo;
  lat: string;
  lon: string;
};
export type TInfo = {
  is_open: boolean;
  currentHour: string;
  currentWeekDay: string;
  today_schedule: {
    opening_hour: string;
    closed_hour: string;
  };
};
