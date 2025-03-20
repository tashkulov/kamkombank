import React from "react";
import clx from "classnames";
import Select from "react-select";
import { Icon } from "@/ui/Icon";
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
import { arrowIcon } from "@/ui/DropdownCurrency/style";

export interface DropdownOption {
  value: number;
  id: number;
  label: string; // адрес
  timeInfo: string; // например, (открыто до 22:00)
  isOpened: boolean; // true/false, открыт ли офис
}

type DropdownProps = {
  options: DropdownOption[];
  onChange?: (newValue: any, metaData: object) => void;
  isError?: boolean;
  value: DropdownOption | null;
  classNamePrefix?: string;
};

const CustomIndicator = () => {
  return <Icon name={"arrow-icon"}  className={arrowIcon} />;
};

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  isError,
  classNamePrefix = "custom-select",
}) => {
  const [isValid, setIsValid] = React.useState<boolean>(true);

  React.useEffect(() => {
    if (isError && value) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [isError, value]);

  // Оформление опций (адрес и время)
  const formatOptionLabel = (opt: DropdownOption, { context }: any) => (
    <div key={opt.id} className={optionStyles}>
      <span className={clx(optionLabel, !opt.isOpened && "closed")}>
        {opt?.label}
      </span>
      <span className={clx(optionTime, !opt.isOpened && optionClosed)}>
        {opt.timeInfo}
      </span>
    </div>
  );

  const customNoOptionsMessage = () => (
    <div className={noOptions}>
      К сожалению, по вашим параметрам ничего не найдено
    </div>
  );

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      borderColor: state.isFocused ? "#4CAF50" : "#E0E0E0",
      boxShadow: "none",
      "&:hover": {
        borderColor: "#4CAF50",
      },
      minHeight: "48px",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#D1F5D3"
        : state.isFocused
        ? "#F5F5F5"
        : "transparent",
      color: !state.data.isOpened ? "#999999" : "#333333", // серый, если закрыт
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "12px 16px",
      cursor: "pointer",
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: "#333333", // цвет выбранного в контроле
    }),
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
        styles={customStyles}
        className={clx(CustomSelect, !isValid && "invalid")}
        classNamePrefix={classNamePrefix}
        noOptionsMessage={customNoOptionsMessage}
        components={{
          IndicatorSeparator: null,
          DropdownIndicator: CustomIndicator,
        }}
        value={value}
        onChange={handleChange}
        placeholder="Выберите адрес"
      />

      {!isValid && <span className={invalidText}>Поле обязательно</span>}
    </div>
  );
};

export default Dropdown;
