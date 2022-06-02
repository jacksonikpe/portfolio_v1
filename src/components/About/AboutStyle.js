import { css } from "@emotion/react";

export const container = () => css`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 600px;
`;

export const title = () => css`
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const subTitle = () => css`
  align-self: flex-start;
  color: #597ff0;
`;

export const bodyText = () => css`
  align-self: flex-start;
`;
