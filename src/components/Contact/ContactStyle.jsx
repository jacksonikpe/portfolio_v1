import { css } from "@emotion/react";

export const container = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 500px;
`;

export const title = () => css`
  color: #fffffe;
  font-weight: 600;
  margin-bottom: 40px;
`;

export const info = () => css`
  width: 60%;
  text-align: center;
`;
