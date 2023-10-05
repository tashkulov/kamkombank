import { Office } from "@/store/offices/types";
import { DropdownOption } from "@/ui/Dropdown";

export const prepareOfficesList = (offices: Office[]): DropdownOption[] => {
  return offices.map(o => {
    return {
      id: o.id,
      value: o.id,
      time: o.info.is_open
        ? `${o.info.today_schedule.closing_hour}`
        : `${o.info.today_schedule.opening_hour}`,
      label: `${o.address_name}`,
      isOpened: o.info.is_open,
    };
  });
};
