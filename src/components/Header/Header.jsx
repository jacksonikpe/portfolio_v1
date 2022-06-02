/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useState } from "react";
import { container, logo, bar } from "./HeaderStyle";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
  useScrollTrigger,
} from "@mui/material";
import DrawerComp from "../Drawer/DrawerComp";

// navbar elevaton when scrolling
const ElevationScroll = (props) => {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

// navbar names
const pages = [
  {
    name: "Home",
    link: "/",
  },

  {
    name: "About",
    link: "/about",
  },

  {
    name: "Projects",
    link: "/projects",
  },

  {
    name: "Blog",
    link: "/blog",
  },

  {
    name: "Contact",
    link: "/contact",
  },
];
const Header = () => {
  // const [value, setValue] = useState();

  const theme = useTheme();

  // checking if screen size is md (boolean)
  const isMarch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed">
          <Toolbar css={bar()}>
            <Container maxWidth="lg" css={container()}>
              {/* Logo */}
              <Typography variant="h6" component="a" href="/" css={logo()}>
                Jackson Collins-Ikpe
              </Typography>
              {/* Menu */}
              {isMarch ? (
                <DrawerComp pages={pages} />
              ) : (
                <Tabs
                  textColor="secondary"
                  // value={value}
                  // onChange={(e, value) => setValue(value)}
                  indicatorColor="secondary"
                >
                  {pages.map((page, index) => (
                    <Tab label={page.name} href={page.link} key={index} />
                  ))}
                </Tabs>
              )}
            </Container>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </>
  );
};

export default Header;
