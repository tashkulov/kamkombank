import React from "react";
import "swiper/css";
import Modal from "@/ui/Modal";
import { container, submit, text } from "@/componets/Thx/style";
import { Icon } from "@/ui/Icon";

type TProps = {
  onClose: () => void;
};
const Thx: React.FC<TProps> = ({ onClose }) => {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <div className={container}>
        <Icon name={"success-icon"} width={44} height={44} />
        <p className={text}>
          спасибо за заявку. специалист свяжется с вами в рабочее время с 09.00
          до 21.00
        </p>
        <div onClick={onClose} className={submit}>
          Закрыть
        </div>
      </div>
    </Modal>
  );
};

export default Thx;
