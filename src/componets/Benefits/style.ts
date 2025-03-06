import { css } from "goober";
import { Palette } from "@/styles/constants";

export const container = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

export const topBlock = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f7f9fc;
  padding: 24px;
  border-radius: 16px;
  position: relative;
  width: calc(3 * 350px + 2 * 86px);
  max-width: 1076px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 100%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 390px) {
    width: 100%;
  }
`;

export const grid = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 20px;
  }
`;
export const card = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 16px;
  border-radius: 16px;
  background-color: #def0d9;
  border: 1px solid ${Palette.border};
  gap: 14px;
  position: relative;
  overflow: hidden;
  height: 290px;
  width: 257px;

  @media (max-width: 1200px) {
    width: 260px;
    height: 250px;
  }

  @media (max-width: 768px) {
    width: 183px;
    height: 155px;
    padding: 12px;
  }

`;

export const iconWrapper = css`
  display: flex;
  width: 100%;
`;
export const iconSmall1 = css`
  width: 130px;
  height: 150px;
  position: absolute;
  left: 110px;
  bottom: 84px;

  @media (max-width: 1200px) {
    width: 130px;
    height: 150px;
    left: 90px;
    bottom: 50px;
  }

  @media (max-width: 768px) {
    width: 90px;
    height: 80px;
    left: 80px;
    bottom: 50px;
  }

  @media (max-width: 390px) {
    width: 107px;
    height: 95px;
    left: 78px;
    bottom: 55px;
  }

  @media (max-width: 375px) {
    width: 110px;
    height: 100px;
    left: 78px;
    bottom: 40px;
  }
`;

export const iconSmall2 = css`
  width: 160px;
  height: 160px;
  position: absolute;
  bottom: 84px;
  left: 120px;

  @media (max-width: 1200px) {
    width: 150px;
    height: 150px;
    left: 120px;
    bottom: 60px;
  }

  @media (max-width: 768px) {
    width: 107px;
    height: 95px;
    left: 78px;
    bottom: 60px;
  }

  @media (max-width: 390px) {
    width: 107px;
    height: 95px;
    left: 78px;
    bottom: 55px;
  }

  @media (max-width: 375px) {
    width: 130px;
    height: 115px;
    left: 78px;
    bottom: 30px;
  }
`;

export const iconSmall3 = css`
  width: 200px;
  height: 180px;
  position: absolute;
  bottom: 74px;
  left: 80px;

  @media (max-width: 1200px) {
    width: 200px;
    height: 180px;
    left: 80px;
    bottom: 40px;
  }

  @media (max-width: 768px) {
    width: 107px;
    height: 95px;
    left: 78px;
    bottom: 50px;
  }

  @media (max-width: 390px) {
    width: 127px;
    height: 105px;
    left: 78px;
    bottom: 50px;
  }

  @media (max-width: 375px) {
    width: 130px;
    height: 115px;
    left: 78px;
    bottom: 30px;
  }
`;

export const iconLarge = css`
  width: 283px;
  height: 283px;
  z-index: 3;

  @media (max-width: 1200px) {
    width: 283px;
    height: 283px;
  }

  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
  }
`;

export const iconLine = css`
  position: absolute;
  width: 480px;
  height: 177px;
  right: -34px;
  bottom: 40px;
  z-index: 2;

  @media (max-width: 1200px) {
    width: 480px;
    height: 177px;
  }

  @media (max-width: 768px) {
    width: 160px;
    height: 160px;
    right: 0;
    bottom: 20px;
  }
`;

export const highlightText = css`
  font-size: 28px;
  font-weight: 600;
  line-height: 1.5;
  color: ${Palette.text};
  text-align: start;
  max-width: 528px;
  width: 100%;

  @media (max-width: 768px) {
    width: 240px;
    font-size: 16px;
  }
`;

export const badge = css`
  font-size: 22px;
  font-weight: bold;
  color: ${Palette.text};
  align-self: flex-start;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const badgeSecond = css`
  font-size: 18px;
  font-weight: 600;
  max-width: 220px;
  line-height: 1.5;
  width: 100%;
  text-align: start;
  color: ${Palette.text};

  @media (max-width: 768px) {
    width: 125px;
    font-size: 10px;
    text-align: start;
    margin-left: 20px;
    position: absolute;
    bottom: 10px;
    left: 0;
  }
  @media (max-width: 390px) {
    font-size: 10px;
    text-align: start;
    margin-left: 20px;
    position: absolute;
    bottom: 10px;
    left: 0;
  }
`;
