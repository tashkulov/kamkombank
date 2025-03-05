import { css } from "goober"; // Использование goober для стилей

export const mapWrapper = css`
  position: relative; /* Относительное позиционирование для вложенных элементов */
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
  max-height: 386px;
  width: 100%;
  height: auto; /* Вместо 100% */
  overflow-y: auto;
`;

export const office_block = css`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  transition: box-shadow 0.3s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }

  p {
    font-size: 16px;
    font-weight: bold;
    color: #333;
    text-align: center;
    margin: 0;
    line-height: 1.4;
  }
`;

export const book_button = css`
  width: 100%;
  max-width: 228px;
  height: 44px;
  background-color: #009846;
  color: white;
  font-size: 16px;
  font-weight: bold;
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
