import { css } from "@emotion/react";

export const container = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 2000px;
  width: 100vw;
`;

export const title = () => css`
  font-weight: 600;
  margin-bottom: 35px;
`;

export const subTitle = () => css`
  align-self: flex-start;
  color: #597ff0;
`;

export const bodyText = () => css`
  align-self: flex-start;
  margin-bottom: 30px;
`;

export const skillText = () => css`
  margin-left: 0.5rem;
`;

export const skillBlock = () => css`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 13px;
  height: 4rem;
`;
