import { css } from "@emotion/react";
export const container = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

export const title = () => css`
  color: #fffffe;
  font-weight: 600;
  margin-bottom: 40px;
`;

export const project = (screenSize) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 100px;
  @media (max-width: ${screenSize}px) {
    flex-direction: column;
  }
`;

export const left = (screenSize) => css`
  width: 50%;
  z-index: 0;
  @media (max-width: ${screenSize}px) {
    width: 100%;
  }
`;

export const right = (screenSize) => css`
  display: flex;
  width: 50%;
  margin-left: -200px;
  z-index: 1;
  @media (max-width: ${screenSize}px) {
    width: 80%;
    margin-left: 0;
    margin-top: -100px;
  }
`;

export const right2 = (screenSize) => css`
  width: 50%;
  z-index: 0;
  @media (max-width: ${screenSize}px) {
    width: 100%;
  }
`;

export const left2 = (screenSize) => css`
  width: 50%;
  margin-right: -200px;
  z-index: 1;
  @media (max-width: ${screenSize}px) {
    width: 80%;
    margin-right: 0;
    margin-bottom: -100px;
  }
`;

export const projectInfo = () => css`
  padding: 13px;
`;

export const infoHeader = () => css``;

export const linkIcons = () => css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 2rem;
`;
