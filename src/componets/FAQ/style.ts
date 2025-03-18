import { css } from "goober";
import { Palette } from "@/styles/constants"; // если у тебя палитра, юзаем цвета оттуда



export const container = css`
  display: flex;
  flex-direction: column;
`;

export const faqItem = css`
  padding: 16px 0;
  border-top: 1px solid ${Palette.primary_gray};

  &:first-child {
    border-top: none;
  }
`;

export const question = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  text-align: left;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  color: ${Palette.primary_gray};
  line-height: 24px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

export const answer = css`
  margin-top: 16px;
  font-size: 14px;
  color: ${Palette.primary_gray};
  line-height: 20px;
  white-space: pre-line;
`;

export const iconWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: all 0.3s;
  border: 1px solid ${Palette.primary_green};
`;

export const iconPlus = css`
  color: ${Palette.primary_green};
  font-size: 20px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const iconClose = css`
  color: ${Palette.primary_gray};
  font-size: 24px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
