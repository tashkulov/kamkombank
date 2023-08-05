import { css } from "goober";
import { Palette } from "@/styles/constants";

export const container = css`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const step = css`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  width: calc(100% / 3);

  &:not(:last-child):before {
    content: "";
    position: absolute;
    left: 85px;
    top: calc(85px / 2);

    width: calc(100% - 85px);
    height: 1px;

    border-bottom: 1px dashed ${Palette.border};
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    width: 100%;

    &:not(:last-child) {
      padding-bottom: 42px;
    }

    &:not(:last-child):before {
      content: "";
      position: absolute;
      left: calc(85px / 2);
      top: 85px;

      width: 1px;
      height: calc(100% - 85px);

      border-bottom: none;
      border-right: 1px dashed ${Palette.border};
    }
  }
`;

export const stepNumber = css`
  position: relative;

  user-select: none;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 85px;
  height: 85px;

  font-size: 32px;
  font-weight: 700;
  line-height: 40px;

  color: ${Palette.white};

  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;

    width: 65px;
    height: 65px;

    transform: translate(-50%, -50%);

    background-color: ${Palette.primary_green};
    border-radius: 50%;

    z-index: -1;
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;

    width: 85px;
    height: 85px;

    transform: translate(-50%, -50%);

    background-color: ${Palette.primary_green_light};
    border-radius: 50%;

    z-index: -2;
  }

`;

export const stepText = css`
  display: inline-block;

  width: 280px;
  max-width: 100%;

  margin-top: 8px;

  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.16px;

  color: ${Palette.text_second};

  @media (max-width: 768px) {
    margin-top: 0;
    margin-left: 18px;
  }
`;
