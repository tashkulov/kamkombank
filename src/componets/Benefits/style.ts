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
  max-width: 100%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export const grid = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 26px;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  @media (max-width: 768px) {
    gap: 20px;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding-bottom: 10px;
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
  gap: 24px;
  position: relative;
  overflow: hidden;
  height: 300px;
  width: 320px;

  @media (max-width: 1200px) {
    width: 260px;
    height: 250px;
  }

  @media (max-width: 768px) {
    width: 118px;
    height: 185px;
    padding: 12px;
  }
`;

export const iconWrapper = css`
  display: flex;
  width: 100%;
`;

export const iconSmall1 = css`
  width: 150px;
  height: 170px;
  position: absolute;
  left: 150px;
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
    left: 40px;
    bottom: 50px;
  }
`;

export const iconSmall2 = css`
  width: 180px;
  height: 180px;
  position: absolute;
  bottom: 84px;
  left: 150px;

  @media (max-width: 1200px) {
    width: 150px;
    height: 150px;
    left: 120px;
    bottom: 60px;
  }

  @media (max-width: 768px) {
    width: 76px;
    height: 76px;
    left: 60px;
    bottom: 60px;
  }
`;

export const iconSmall3 = css`
  width: 240px;
  height: 210px;
  position: absolute;
  bottom: 74px;
  left: 120px;

  @media (max-width: 1200px) {
    width: 200px;
    height: 180px;
    left: 80px;
    bottom: 40px;
  }

  @media (max-width: 768px) {
    width: 111px;
    height: 97px;
    left: 30px;
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
  color: ${Palette.text};
  text-align: left;
  margin-right: 35px;

  @media (max-width: 768px) {
    font-size: 10px;
    text-align: start;
    margin-left: 20px;
  }
`;
