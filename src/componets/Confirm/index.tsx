import React, { useEffect, useState } from "react";
import Title from "@/ui/Title";
import "swiper/css";
import Modal from "@/ui/Modal";
import {
  notion,
  submit,
  submitWrapper,
  text,
  timer,
} from "@/componets/Confirm/style";
import Input from "@/ui/Input";
import clx from "classnames";

type TProps = {
  onSubmit: () => void;
  onClose: () => void;
};
const Confirm: React.FC<TProps> = ({ onSubmit, onClose }) => {

  const [isValid, setIsValid] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState<number>(3);

  const [inpValue, setInpValue] = useState<string>();
  const onChangeCodeHandle = (val: string) => {
    // TODO тут надо проверить, что это тот код
    if (val.length >= 6) setIsValid(true);
  };

  const onTimerEnd = () => {
    setInpValue("");
    setIsValid(false);
    setSecondsLeft(30);
    // TODO пповторный запрос кода
  };

  useEffect(() => {
    if (secondsLeft > 0) {
      const timer = setInterval(() => {
        setSecondsLeft(prevSeconds => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [secondsLeft]);

  return (
    <Modal isOpen={true} onClose={onClose}>
      <Title.H3>Подтвеждение телефона</Title.H3>
      <div className={notion}>
        Подтвердите номер телефона, чтобы получить консультацию и оформить
        продукт. Мы гарантируем безопасность и сохранность ваших данных.
      </div>

      <div className={text}>
        Мы отправили вам СМС с кодом на номер +7 (999) 999-55-44
      </div>

      <Input
        placeholder={"Код поддтверждения"}
        onChange={onChangeCodeHandle}
        newValue={inpValue}
      />

      <div className={submitWrapper}>
        <div onClick={onSubmit} className={clx(submit, !isValid && "disabled")}>
          Подтвердить
        </div>
        <div className={timer}>
          {secondsLeft > 0 ? (
            <span>Отправить код повторно через {secondsLeft} сек.</span>
          ) : (
            <span onClick={onTimerEnd}>Отправить код еще раз</span>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Confirm;
