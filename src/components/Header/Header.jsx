/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import { container, font, bar } from "./HeaderStyle";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";

const Header = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar css={bar()}>
          <Container maxWidth="lg" css={container()}>
            <Typography variant="h6" component="a" href="/" css={font()}>
              Jackson Collins-Ikpe
            </Typography>
            <Tabs textColor="secondary">
              <Tab label="Home" href="/home" />
              <Tab label="About" href="/about" />
              <Tab label="Projects" href="/projects" />
              <Tab label="Blog" href="/blog" />
              <Tab label="Contact" href="/contact" />
            </Tabs>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
