import React from "react";
import clx from "classnames";
import {
  CustomSelect,
  noOptions,
  optionClosed,
  optionLabel,
  optionStyles,
  optionTime
} from "@/ui/Dropdown/style";
import Select from "react-select";
import { Icon } from "@/ui/Icon";

export type Option = {
  value: number;
  label: string;
  time: string;
  isOpened: boolean;
};

type DropdownProps = {
  options: Option[];
  onChange?: (newValue: any, metaData: object) => void;
};

const CustomIndicator = () => {
  return <Icon name={"arrow-icon"} />;
};

const Dropdown: React.FC<DropdownProps> = ({ options, onChange }) => {
  const formatOptionLabel = (opt: Option) => (
    <div key={opt.value} className={optionStyles}>
      <span className={clx(optionLabel, !opt.isOpened && "closed")}>
        {opt?.label}
      </span>
      <span className={clx(optionTime, !opt.isOpened && optionClosed)}>
        {opt.isOpened ? `(открыто до ${opt.time})` : `(закрыто до ${opt.time})`}
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

  return (
    <Select
      options={options}
      isSearchable
      formatOptionLabel={formatOptionLabel}
      className={CustomSelect}
      classNamePrefix="custom-select"
      noOptionsMessage={customNoOptionsMessage}
      components={{
        IndicatorSeparator: null,
        DropdownIndicator: CustomIndicator,
      }}
      onChange={onChange}
    />
  );
};
export default Dropdown;
