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
  width: 100%;
  max-width: 1076px;
  margin: 0 auto;


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
    gap: 10px;
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
  gap: 14px;
  position: relative;
  overflow: hidden;
  height: 290px;
  width: 100%;

  @media (max-width: 1200px) {
    width: 260px;
    height: 250px;
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 170px;
    padding: 12px;
  }
  @media (max-width: 390px) {
    width: 160px;
    height: 140px;
    padding: 10px;
  }
  @media (max-width: 320px) {
    width: 140px;
    height: 130px;
    padding: 8px;
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
    width: 97px;
    height: 85px;
    left: 68px;
    bottom: 50px;
  }

  @media (max-width: 375px) {
    width: 90px;
    height: 70px;
    left: 67px;
    bottom: 50px;
  }
  @media (max-width: 320px) {
    width: 85px;
    height: 65px;
    left: 60px;
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
    height: 85px;
    left: 78px;
    bottom: 60px;
  }

  @media (max-width: 390px) {
    width: 97px;
    height: 85px;
    left: 78px;
    bottom: 50px;
  }

  @media (max-width: 375px) {
    width: 95px;
    height: 75px;
    left: 70px;
    bottom: 50px;
  }

  @media (max-width: 320px) {
    width: 85px;
    height: 65px;
    left: 60px;
    bottom: 40px;
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
    width: 97px;
    height: 75px;
    left: 73px;
    bottom: 50px;
  }

  @media (max-width: 375px) {
    width: 95px;
    height: 85px;
    left: 67px;
    bottom: 40px;
  }
  @media (max-width: 320px) {
    width: 85px;
    height: 65px;
    left: 60px;
    bottom: 40px;
  }
`;

export const iconSmall4 = css`
  width: 180px;
  height: 160px;
  position: absolute;
  bottom: 78px;
  left: 80px;

  @media (max-width: 1200px) {
    width: 180px;
    height: 160px;
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
    width: 97px;
    height: 75px;
    left: 73px;
    bottom: 50px;
  }

  @media (max-width: 375px) {
    width: 85px;
    height: 75px;
    left: 77px;
    bottom: 60px;
  }
  @media (max-width: 320px) {
    width: 85px;
    height: 65px;
    left: 60px;
    bottom: 50px;
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

  @media (max-width: 390px) {
    width: 140px;
    height: 140px;
    margin-top: 40px;
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
    width: 190px;
    height: 170px;
    right: 0;
    bottom: 0;
  }
  @media (max-width: 390px) {
    width: 160px;
    height: 140px;
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
  max-width: 490px;
  width: 100%;

  @media (max-width: 768px) {
    width: 270px;
    font-size: 16px;
  }
  @media (max-width: 390px) {
    width: 240px;
    font-size: 15px;
  }
  @media (max-width: 320px) {
    width: 240px;
    font-size: 14px;
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

  @media (max-width: 390px) {
    font-size: 17px;
    margin-bottom: 30px;
  }

  @media (max-width: 320px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`;

export const badgeSecond = css`
  font-size: 18px;
  font-weight: 600;
  max-width: 220px;
  align-self: flex-start;
  line-height: 1.5;
  width: 100%;
  text-align: start;
  color: ${Palette.text};

  @media (max-width: 768px) {
    width: 125px;
    font-size: 12px;
    text-align: start;
    margin-left: 12px;
    position: absolute;
    bottom: 10px;
    left: 0;
  }
  @media (max-width: 390px) {
    font-size: 12px;
    text-align: start;
    position: absolute;
    bottom: 10px;
    left: 0;
  }
  @media (max-width: 320px) {
    font-size: 10px;
    text-align: start;
    position: absolute;
    bottom: 10px;
    left: 0;
  }
`;
