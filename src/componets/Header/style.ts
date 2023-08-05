import { css } from "goober";
import { Palette } from "@/styles/constants";
import { padStart } from "lodash-es";

export const header = css`
  padding-top: 32px;
  position: relative;
  background-color: ${Palette.background};
  @media (max-width: 740px) {
    padding-top: 100px;
  }
`;

export const headerWrapper = css`
  padding-bottom: 92px;

  @media (max-width: 740px) {
    padding: 0;
  }

  @media (max-width: 450px) {
    width: 100%;
    margin: 0;
  }
`;
export const headerWrapperMb = css`
  @media (max-width: 740px) {
    position: relative;
    border: 1px solid ${Palette.border};
    background-color: ${Palette.white};
    border-radius: 16px;

    padding: 32px;

    transform: translateY(124px);
  }

  @media (max-width: 450px) {
    padding: 32px;

    width: 100%;
    margin: 0;
  }
`;

export const logo = css`
  display: inline-block;

  margin-bottom: 20px;

  svg {
    width: 128px;
    height: 19px;
  }
`;

export const wallet = css`
  position: absolute;
  bottom: -14px;
  right: 9px;
  width: 374px;
  height: 374px;

  @media (max-width: 960px) {
    width: 320px;
    height: 320px;
    right: -20px;
  }

  @media (max-width: 740px) {
    bottom: auto;
    top: -100px;
    right: 0;
  }
`;

export const infoItems = css`
  display: flex;

  margin-bottom: 24px;
`;
export const infoItem = css`
  display: flex;

  margin-right: 24px;
`;
export const infoItem_icon = css`
  width: 28px;
  height: 28px;

  margin-right: 8px;
`;
export const infoItem_title = css`
  display: block;

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;

  letter-spacing: -0.16px;
`;

export const infoItem_text = css`
  display: block;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  letter-spacing: -0.12px;

  color: ${Palette.text_second};
`;
export const warning = css`
  display: inline-block;
  padding: 8px 16px;

  border-radius: 16px;

  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;

  letter-spacing: -0.12px;

  color: ${Palette.primary_orange};
  background-color: ${Palette.white};
`;
