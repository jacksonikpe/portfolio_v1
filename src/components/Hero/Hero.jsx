/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Container, Typography, Box, Button } from "@mui/material";
import {
  container,
  heroText,
  svgAnimation,
  intro1,
  intro2,
  intro3,
  intro4,
  introwrap,
} from "./HeroStyle";
import BackgroundAnimation from "../BackgroundAnimation/BackgroundAnimation";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <Container maxWidth="lg" css={container()} id="home">
      <Box css={heroText()}>
        <Typography variant="body1" css={intro1()}>
          Hi 👋, my name is
        </Typography>
        <Typography variant="h2" css={intro2()}>
          Jackson Collins-Ikpe.
        </Typography>
        <Box css={intro3()}>
          <Typewriter
            options={{
              strings: [
                "Software Engineer",
                "Frontend-Developer",
                "Technical writer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </Box>
        <Box css={introwrap()}>
          <Typography variant="body1" css={intro4()}>
            I am a software engineer and I specialize in building exceptional
            digital experience through strategic software development. I have a
            strong passion for using technologies to give a positive impact on
            businesses and lives. My primary focus is on frontend technologies
            and documenting development process.
          </Typography>
        </Box>
        <Button size="large" variant="contained" color="secondary">
          See my Resume
        </Button>
      </Box>
      <Box css={svgAnimation()}>
        <BackgroundAnimation />
      </Box>
    </Container>
  );
};

export default Hero;
