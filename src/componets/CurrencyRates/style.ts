import { css } from "goober";
import { Palette } from "@/styles/constants";

export const main_container = css`
  width: 100%;
  max-width: 370px;
  height: auto;
  background-color: ${Palette.primary_gray};
  border-radius: 8px;
  padding: 25px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const tableContainer = css`
  border-radius: 8px;
  background-color: ${Palette.primary_gray};
  padding: 16px;
  margin-bottom: 24px;
  overflow-x: auto;
`;

export const table = css`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
  text-align: left;
  table-layout: fixed; /* Устанавливаем фиксированную ширину столбцов */

  @media (max-width: 768px) {
    font-size: 12px; /* Меньший размер шрифта на мобильных */
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

// Общие стили для ячеек таблицы
export const th = css`
  padding: 12px 16px;
  font-weight: 600;
  font-size: 16px;
  border-bottom: 2px solid #eaeaea;
  background-color: ${Palette.primary_gray};
  color: ${Palette.text};

  @media (max-width: 768px) {
    padding: 8px 12px;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
  }
`;

export const td = css`
  padding: 12px 16px;
  gap: 10px;
  border-bottom: 1px solid #eaeaea;
  font-size: 14px;
  color: ${Palette.text_second};

  &:nth-child(odd) {
    background-color: ${Palette.primary_gray};
  }

  &:hover {
    background-color: #eaeaea;
  }

  @media (max-width: 768px) {
    padding: 8px 12px;
    font-size: 16px;
  }

  @media (max-width: 480px) {
    padding: 6px 10px;
    font-size: 16px;
  }
`;

export const commisions = css`
  display: inline-block;
  font-size: 14px;
  color: ${Palette.text_second};
  padding-top: 10px;
  text-align: center;
  width: 100%;
  margin-top: 16px;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const commissionAmount = css`
  color: ${Palette.text};
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const responsiveTable = css`
  width: 100%;
  border-collapse: collapse;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;
