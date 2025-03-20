import { css } from "goober";
import { Palette } from "@/styles/constants";

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  width: 100%;
  font-size: 16px;
  font-weight: 600; /* жирный */
  color: ${Palette.primary_gray};
  line-height: 24px;
  transition: color 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const questionActive = css`
  color: ${Palette.text}; /* активный вопрос выделяем */
`;

export const answer = css`
  margin-top: 16px;
  font-size: 14px;
  color: ${Palette.primary_gray};
  line-height: 20px;
  white-space: pre-line;
`;
export const questionText = css`
  font-size: 17px;
  font-weight: bold;
`;

export const iconWrapperOpen = css`
  border: 1px solid ${Palette.primary_gray};
  background-color: #f5f5f5;
`;

export const iconWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  border: 1px solid ${Palette.primary_green};
  background-color: transparent;

  &.open {
    background-color: ${Palette.primary_gray};
    border-color: ${Palette.primary_gray};
  }
`;

export const iconPlus = css`
  font-size: 20px;
  color: ${Palette.primary_green};
  transition: transform 0.5s ease, color 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  .open & {
    transform: rotate(45deg);
    color: ${Palette.text_second};
  }
`;
