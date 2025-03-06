import { css } from "goober";

export const mapWrapper = css`
  position: relative;
  .leaflet-control-attribution {
    display: none !important;
  }
`;
export const main_map = css`
  z-index: 0 !important;
`;
export const offices_block = css`
  display: grid;
  grid-gap: 15px;
  justify-content: center;
  position: absolute;
  top: -10px;
  right: -190px;
  transform: translateX(-50%);
  z-index: 10;
  margin-top: 10px;
  padding: 10px;
  max-width: 386px;
  max-height: 500px;
  width: 100%;
  height: auto;
  overflow-y: auto;

  @media (max-width: 1024px) {
    right: 0;
    transform: none;
  }

  @media (max-width: 768px) {
    position: static;
    max-height: 400px;
    max-width: 100%;
    width: 90%;
    flex-direction: column;
    align-items: center;
    margin-left: 20px;
    margin-top: 20px;
    overflow-y: auto;
  }

  @media (max-width: 390px) {
    max-width: 100%;
    padding: 10px;
    margin-top: 10px;
    max-height: 400px;
  }
`;

export const office_block = css`
  width: 100%;
  height: 100%;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: space-between;
  align-items: flex-start;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  transition: box-shadow 0.3s ease-in-out, transform 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }

  h4,
  p {
    width: 100%;
    font-size: 16px;
    text-align: start;
    line-height: 1.4;
    padding-left: 10px;
    margin: 0;
  }

  h4 {
    font-weight: bold;
    color: #333;
  }

  p {
    font-size: 12px;
    color: #333;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 320px;
    padding: 12px;
  }
`;

export const work_block = css`
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  line-height: 1.4;
  width: 100%;
  padding-left: 10px;

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 8px 0 8px 10px;
  }
`;
export const book_button = css`
  width: 100%;
  height: 44px;
  background-color: #009846;
  color: white;
  font-size: 16px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 9px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #007e35;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;
