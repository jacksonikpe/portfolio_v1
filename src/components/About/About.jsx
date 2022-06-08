/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Subtitles } from "@mui/icons-material";
import { Container, Typography, Grid, Paper } from "@mui/material";
import {
  container,
  title,
  subTitle,
  bodyText,
  skillText,
  skillBlock,
} from "./AboutStyle";
import Image from "next/image";

import { skills } from "../../utils";

const About = () => {
  return (
    <Container maxWidth="lg" css={container()} id="about">
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
      <Grid container spacing={2}>
        {skills.map((skill, index) => (
          <Grid item xs={6} md={3} lg={2.4} key={index}>
            <Paper elevation={3} css={skillBlock()}>
              <Image src={skill.img} width={48} height={48} alt={skill.alt} />
              <Typography variant="body1" component="div" css={skillText()}>
                {skill.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default About;
