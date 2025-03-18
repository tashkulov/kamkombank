import { css } from "goober";
import { Palette } from "@/styles/constants";

export const mapWrapper = css`
  position: relative;

  .leaflet-control-attribution {
    display: none !important;
  }
`;

export const main_map = css`
  z-index: 0 !important;
`;

export const offices_block = css`
  display: grid;
  grid-gap: 15px;
  justify-content: center;
  position: absolute;
  top: -10px;
  right: -190px;
  transform: translateX(-50%);
  z-index: 10;
  margin-top: 10px;
  padding: 10px;
  max-width: 386px;
  max-height: 500px;
  width: 100%;
  height: auto;
  overflow-y: auto;

  @media (max-width: 1024px) {
    right: 0;
    transform: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
export const office_block = css`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  transition: box-shadow 0.3s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }

  h4,
  p {
    width: 100%;
    font-size: 16px;
    text-align: start;
    line-height: 1.4;
    padding-left: 10px;
    margin: 0;
  }

  h4 {
    font-weight: bold;
    color: #333;
  }

  p {
    font-size: 12px;
    color: #333;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
    border: 1px solid ${Palette.border};
  }
`;

// Блок рабочего времени
export const work_block = css`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  line-height: 1.4;
  width: 100%;
  padding-left: 10px;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 8px 0 8px 10px;
  }
`;

// Кнопка "Зарезервировать сумму"
export const book_button = css`
  width: 100%;
  height: 44px;
  background-color: #009846;
  color: white;
  font-size: 16px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 9px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #007e35;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;

// Обёртка для курсов валют (покупка/продажа)
export const currency_wrapper = css`
  display: flex;
  justify-content: start;
  width: 100%;
  gap: 20px;
  padding: 0 10px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 16px;
  }

  strong {
    font-size: 14px;
  }
`;

// Элемент курса валюты (одна колонка)
export const currency_item = css`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 4px;

  span {
    font-size: 12px;
    color: #4a5568;
  }

  div {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  strong {
    font-size: 16px;
    color: #1a202c;
  }
`;

// Иконка валюты
export const currency_icon = css`
  width: 17px;
  height: 17px;
  background-color: #718096; /* серый фон */
  color: #ffffff; /* белый доллар */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-size: 14px;
`;

// Кнопка "Показать все офисы" для мобилки
export const showAllOfficesButton = css`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    height: 44px;
    background-color: #009846;
    color: #fff;
    font-size: 16px;
    text-align: center;
    border: none;
    border-radius: 9px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #007e35;
    }

    &:focus {
      outline: none;
    }

    margin: 10px 0;
  }
`;

// Модальное окно (оверлей)
export const modalOverlay = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  @media (min-width: 769px) {
    display: none; // Только для мобилок
  }
`;

// Модальное окно (контент)
export const modalContent = css`
  background: #ffffff;
  width: 100%;
  height: 80%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 16px;
  overflow-y: auto;
  position: relative;
`;

export const modalCloseButton = css`
  position: absolute;
  top: 16px;
  right: 16px;
  z-index: 10; /* Чтобы было поверх всего */
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #000;
  }
`;

// Список офисов внутри модалки
export const modalOfficesList = css`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 40px;
`;
export const modalDragHandle = css`
  width: 40px;
  height: 5px;
  background-color: #cbd5e0; /* светло-серый (можно сделать #a0aec0) */
  border-radius: 9999px;
  margin: 0 auto 12px auto;
`;
