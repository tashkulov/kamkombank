interface OfficeInfo {
  is_open: boolean;
  currentHour: number;
  today_schedule: { opening_hour: number; closing_hour: number };
  next_shift: boolean;
}

interface Schedule {
  weekday: string;
  work_hours: { opening_hour: number; closing_hour: number };
}
export interface Office {
  id: number;
  address_name: string;
  city: string;
  info: OfficeInfo;
  schedules: Schedule[];
}

export interface OfficeState {
  loading: boolean;

  offices: Office[];
}
