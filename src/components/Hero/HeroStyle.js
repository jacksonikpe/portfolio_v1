import { css } from "@emotion/react";

export const container = () => css`
  padding-top: 70px;
  min-height: 605px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export const heroText = () => css`
  grid-column: 1/-1;
  grid-row: 1/2;
  margin-top: 50px;
`;

export const svgAnimation = () => css`
  width: 500px;
  justify-self: end;
  grid-column: 2/-1;
  grid-row: 1/2;
`;

export const intro1 = () => css`
  color: #fffffe;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const intro2 = () => css`
  font-weight: 700;
  margin-bottom: 5px;
`;

export const intro3 = () => css`
  font-size: 2.5rem;
`;

export const intro4 = () => css`
  margin-top: 20px;
  margin-bottom: 30px;
`;

export const introwrap = () => css`
  max-width: 650px;
`;
