import React, { useEffect, useState } from "react";
import clx from "classnames";
import {
  container,
  CustomSelect, invalidText,
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
  isError?: boolean;
};

const CustomIndicator = () => {
  return <Icon name={"arrow-icon"} />;
};

const Dropdown: React.FC<DropdownProps> = ({ options, onChange, isError }) => {
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    if (isError) setIsValid(false);
  }, [isError]);

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
        // onChange={onChange}
        onChange={(newValue: any, actionMeta: any) => {
          setIsValid(true);

          onChange && onChange(newValue, actionMeta);
        }}
      />

      {!isValid && <span className={invalidText}>Поле обязательно</span>}
    </div>
  );
};
export default Dropdown;
