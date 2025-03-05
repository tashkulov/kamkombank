import React, { useEffect, useState } from "react";
import clx from "classnames";
import {
  container,
  CustomSelect,
  invalidText,
  noOptions,
  optionClosed,
  optionLabel,
  optionStyles,
  optionTime,
} from "@/ui/Dropdown/style";
import Select from "react-select";
import { Icon } from "@/ui/Icon";

export interface DropdownOption {
  value: number;
  id: number;
  label: string;
  timeInfo: string;
  isOpened: boolean;
}

type DropdownProps = {
  options: DropdownOption[];
  onChange?: (newValue: any, metaData: object) => void;
  isError?: boolean;
  value?: DropdownOption;
};

const CustomIndicator = () => {
  return <Icon name={"arrow-icon"} />;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  isError,
}) => {
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    if (isError && value) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [isError, value]);

  const formatOptionLabel = (opt: DropdownOption) => (
    <div key={opt.id} className={optionStyles}>
      <span className={clx(optionLabel, !opt.isOpened && "closed")}>
        {opt?.label}
      </span>
      <span className={clx(optionTime, !opt.isOpened && optionClosed)}>
        {opt.timeInfo}
      </span>
    </div>
  );

  const customNoOptionsMessage = () => {
    return (
      <div className={noOptions}>
        К сожалению, по вашим параметрам ничего не найдено, попробуйте изменить
        их
      </div>
    );
  };

  const handleChange = (newValue: any, actionMeta: any) => {
    setIsValid(true);
    onChange && onChange(newValue, actionMeta);
  };

  return (
    <div className={clx(container, !isValid && "invalid")}>
      <Select
        options={options}
        isSearchable
        formatOptionLabel={formatOptionLabel}
        className={clx(CustomSelect, !isValid && "invalid")}
        classNamePrefix="custom-select"
        noOptionsMessage={customNoOptionsMessage}
        components={{
          IndicatorSeparator: null,
          DropdownIndicator: CustomIndicator,
        }}
        value={value} // Используем значение из Booking
        onChange={handleChange} // Передаём обработчик изменений
      />

      {!isValid && <span className={invalidText}>Поле обязательно</span>}
    </div>
  );
};

export default Dropdown;
