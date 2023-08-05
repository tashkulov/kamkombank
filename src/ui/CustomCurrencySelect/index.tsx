import React, { useState } from "react";
import clx from "classnames";
import Select from "react-select";
import { Icon } from "@/ui/Icon";
import {
  container,
  CustomSelect,
  inputContainer,
  noOptions,
  optionClosed,
  optionLabel,
  optionStyles,
  optionTime,
} from "@/ui/CustomCurrencySelect/style";
import Input from "@/ui/Input";
import { combineEventHandlers } from "recharts/types/util/ChartUtils";

export type Currency = {
  value: string;
  symbol: string;
  name: string;
};

type DropdownProps = {
  options: Currency[];
  onChange?: (newValue: any, metaData: object) => void;
  onChangeAmount?: (value: string) => void;
};

const CustomIndicator = () => {
  return <Icon name={"arrow-icon"} />;
};
const CustomCurrencySelect: React.FC<DropdownProps> = ({
  options,
  onChange,
  onChangeAmount,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [amount, setAmount] = useState<string>();
  const [val, setVal] = useState<Currency | undefined>(
    options.find(opt => opt.value === "USD"),
  );
  const formatOptionLabel = (opt: Currency) => (
    <div key={opt.value} className={optionStyles}>
      <span className={clx(optionLabel)}>{opt?.value}</span>
      <span className={clx(optionTime)}>({opt.name})</span>
    </div>
  );

  const onChangeHandler = (newValue: any, metaData: object) => {
    setVal(newValue);
    onChange && onChange(newValue, metaData);
  };

  const onChangeInputHandler = (value: string) => {
    // const numericValue = parseFloat(value.replace(/\D/g, ""));
    // const newVal = new Intl.NumberFormat("en-US", {
    //   style: "currency",
    //   currency: val?.value,
    // }).format(numericValue);

    setAmount(value);

    onChangeAmount && onChangeAmount(value);
  };

  const customNoOptionsMessage = () => {
    return (
      <div className={noOptions}>
        К сожалению, по вашим параметрам ничего не найдено, попробуйте изменить
        их
      </div>
    );
  };

  return (
    <div className={clx(container, isFocused && "focused")}>
      <Input
        placeholder={"Сумма"}
        styles={clx(inputContainer, "input")}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
        onChange={onChangeInputHandler}
        type={"amount"}
        postfix={val?.symbol}
      />
      <Select
        options={options}
        formatOptionLabel={formatOptionLabel}
        className={CustomSelect}
        classNamePrefix="custom-select"
        noOptionsMessage={customNoOptionsMessage}
        isSearchable={false}
        components={{
          IndicatorSeparator: null,
          DropdownIndicator: CustomIndicator,
        }}
        value={val}
        onChange={onChangeHandler}
        onFocus={() => {
          setIsFocused(true);
        }}
        onBlur={() => {
          setIsFocused(false);
        }}
      />
    </div>
  );
};
export default CustomCurrencySelect;
