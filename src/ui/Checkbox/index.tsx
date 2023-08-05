import React, { AnchorHTMLAttributes, ReactNode, useState } from "react";
import { linkStyles } from "@/ui/Link/style";
import { checkbox, container } from "@/ui/Checkbox/style";
import { Icon } from "@/ui/Icon";
import clx from "classnames";

type CheckboxProps = {
  label: string;
  checked?: boolean;
  onChange?: (val: any) => void;
};

const Checkbox: React.FC<CheckboxProps> = ({
  label,
  onChange,
  checked,
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked ?? false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onChange && onChange(!isChecked);
  };

  return (
    <label className={container} onClick={handleCheckboxChange}>
      <div className={clx(checkbox, isChecked && "checked")}>
        <Icon name={"checkbox-icon"} className={"icon"} />
      </div>

      <span className={label}></span>
      {label}
    </label>
  );
};

export default Checkbox;
