import { css } from "goober";
import { Palette } from "@/styles/constants";

export const container = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const loader = css`
  height: 400px;
`;

export const formItem = css`
  width: calc(50% - 12px);
  margin-bottom: 16px;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

export const toggle = css`
  margin-bottom: 16px;
`;

export const submit = css`
  height: 56px;
  border-radius: 8px;
  padding: 0 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${Palette.primary_green};
  transition: ${Palette.transition};
  cursor: pointer;
  color: ${Palette.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.16px;

  &:hover {
    background-color: ${Palette.primary_green_hover};
  }

  &.disabled {
    background-color: ${Palette.text_second};
  }
`;

export const info = css`
  margin-top: 25px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const safe = css`
  display: flex;
  align-items: center;
  margin-top: 25px;

  margin-right: 15px; /* Добавим отступ справа, если нужно */

  span {
    color: ${Palette.text_second};
    margin-left: 5px;
  }

  @media (max-width: 960px) {
    width: 100%;
  }
`;
export const city = css`
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  font-style: normal;

  letter-spacing: -0.32px;

  margin: 0 0 24px 0;
  color: ${Palette.primary_green};
  cursor: pointer;
  transition: color ${Palette.transition};

  &:hover {
    color: ${Palette.primary_green_hover};
    transition: color ${Palette.transition};
  }
`;
