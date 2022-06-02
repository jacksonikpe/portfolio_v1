/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Subtitles } from "@mui/icons-material";
import { Container, Typography, Box } from "@mui/material";
import { container, title, subTitle, bodyText } from "./AboutStyle";

const About = () => {
  return (
    <Container maxWidth="lg" css={container()}>
      <Typography variant="h3" gutterBottom component="div" css={title()}>
        About Me
      </Typography>
      <Typography variant="h4" gutterBottom component="div" css={subTitle()}>
        A bit about me
      </Typography>
      <Typography variant="body1" gutterBottom component="div" css={bodyText()}>
        Im a self-taught Front-end developer with a bachelors degree in Software
        Engineering. I have over two years of experience in writing reusabe and
        efficient code while taking into consideration the user experience. I am
        familiar with different front-end frameworks to build web applications.
      </Typography>
      <Typography variant="h4" gutterBottom component="div" css={subTitle()}>
        Technologies and Tools
      </Typography>
      <Typography variant="body1" gutterBottom component="div" css={bodyText()}>
        Using a combination of cutting-edge technologies and reliable
        open-source software I build user-focused, performant web-application.
      </Typography>
      <Box sx={{ flexGrow: 1 }}></Box>
    </Container>
  );
};

export default About;
