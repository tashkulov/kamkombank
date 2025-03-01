import { css } from "goober";
import { Palette } from "@/styles/constants";

export const mainLayoutStyles = css`
  position: relative;
  width: 100%;
`;
export const containerStyles = css`
  position: relative;

  max-width: 1076px;
  width: 90%;
  padding: 32px;
  margin: 132px auto 0;

  border-radius: 16px;
  border: 1px solid ${Palette.border};
  background: ${Palette.white};

  box-shadow: ${Palette.boxShadow_block};

  &:not(:last-child) {
    margin-bottom: 32px;
  }

  @media (max-width: 450px) {
    width: 100%;
    padding: 16px;
    margin-top: 16px;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const bookingContainerStyles = css`
  position: relative;

  max-width: 671px;
  width: 90%;
  padding: 32px;
  border-radius: 16px;
  border: 1px solid ${Palette.border};
  background: ${Palette.white};
  box-shadow: ${Palette.boxShadow_block};
  &:not(:last-child) {
    margin-bottom: 32px;
  }
  @media (max-width: 450px) {
    width: 100%;
    padding: 16px;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const miniContainerStyles = css`
  width: 100%;
  max-width: 370px;
  height: auto;
  background-color: ${Palette.white};
  border-radius: 8px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 15px;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const wrapperStyles = css`
  position: relative;
  justify-content: space-between;
  max-width: 1076px;
  width: 90%;

  margin: 0 auto;
`;
export const concatedContainers = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 137px;
  width: 100%;
  gap: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: -100px;
    gap: 10px;
  }
`;

