import { css } from "goober";
import { Palette } from "@/styles/constants";

export const container = css`
  display: flex;
  width: 100%;
  overflow-x: scroll;

  padding-bottom: 10px;

`;

export const slide = css`
  width: 320px;
  min-width: 320px;
  padding: 24px;
  border-radius: 16px;
  background-color: #fff;
  border: 1px solid ${Palette.border};
  margin-right: 24px;

  &:last-child {
    margin-right: 0;
  }

  svg {
    width: 48px;
    height: 48px;
    display: block;
    margin-bottom: 16px;
  }
  span {
    color: ${Palette.text_second};
    font-size: 18px;
    font-weight: 500;
    line-height: 28px; /* 155.556% */
    letter-spacing: -0.18px;
  }
`;
