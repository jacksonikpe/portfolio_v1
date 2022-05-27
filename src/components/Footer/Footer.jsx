/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/react";
import { Container, Typography } from "@mui/material";
import { container, footerText } from "./FooterStyle";

const Footer = () => {
  return (
    <Container maxWidth="lg" css={container()}>
      <Typography variant="body1" css={footerText()}>
        Built with ❤️ by Jackson Collins-Ikpe
      </Typography>
    </Container>
  );
};

export default Footer;
