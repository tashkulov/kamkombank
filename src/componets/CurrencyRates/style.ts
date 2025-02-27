import { css } from "goober";
import { Palette } from "@/styles/constants";

// Основные стили для таблицы
export const tableContainer = css`
  border-radius: 8px;
  background: rgba(3, 155, 229, 0.12);
  padding: 16px;
  margin-bottom: 24px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

// Стили для самой таблицы
export const table = css`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
  text-align: left;
  background-color: ${Palette.white};
`;

// Стили для заголовков таблицы
export const th = css`
  padding: 12px 16px;
  background-color: ${Palette.primary_green};
  color: ${Palette.white};
  font-weight: 600;
  font-size: 16px;
  border-bottom: 2px solid ${Palette.primary_green};
`;

// Стили для строк таблицы
export const td = css`
  padding: 12px 16px;
  border-bottom: 1px solid ${Palette.primary_green};
  font-size: 14px;
  color: ${Palette.text};

  &:nth-child(odd) {
    background-color: ${Palette.text};
  }

  &:hover {
    background-color: ${Palette.text};
  }
`;

// Стили для строк с адресами (если есть)
export const addressRow = css`
  background-color: ${Palette.white};
  font-weight: 500;
  color: ${Palette.text_second};
  font-size: 14px;
  padding: 12px 16px;
`;

// Стили для ячеек без адреса
export const noAddress = css`
  color: ${Palette.red};
  font-style: italic;
`;
