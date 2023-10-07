import { Office } from "@/store/offices/types";
import { DropdownOption } from "@/ui/Dropdown";

const getTomorrow = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const daysOfWeek = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

  const dayOfWeekIndex = tomorrow.getDay();

  return daysOfWeek[dayOfWeekIndex];
};
export const prepareOfficesList = (offices: Office[]): DropdownOption[] => {
  return offices.map(o => {
    let info;
    if (o.info.is_open)
      info = `(открыто до ${o.info.today_schedule.closing_hour})`;
    else {
      info = `(закрыто до ${o.info.today_schedule.opening_hour})`;

      //   if (o.info.next_shift.weekday !== getTomorrow())
      //     info = `(закрыто до ${o.info.today_schedule.opening_hour})`;
      //   else
      //     info = `(закрыто до ${o.info.next_shift.weekday} ${o.info.today_schedule.opening_hour} )`;
    }
    return {
      id: o.id,
      value: o.id,
      timeInfo: info,
      label: `${o.address_name}`,
      isOpened: o.info.is_open,
    };
  });
};
