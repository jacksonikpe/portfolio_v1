/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Container, Typography, Box, Paper, useTheme } from "@mui/material";
import {
  container,
  title,
  project,
  left,
  right,
  projectInfo,
  infoHeader,
  right2,
  left2,
  linkIcons,
} from "./ProjectsStyle";
import Image from "next/image";
import img from "../../../public/capture.png";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";

const Projects = () => {
  //check for screen size
  const theme = useTheme();
  const screenSize = theme.breakpoints.values.md;

  return (
    <Container maxWidth="lg" css={container()} id="projects">
      <Typography variant="h3" gutterBottom component="div" css={title()}>
        Some Things I have Built
      </Typography>
      <Box css={project(screenSize)}>
        <Box css={left(screenSize)}>
          <Image
            src={img}
            placeholder="blur"
            width={500}
            height={300}
            alt="image"
          />
        </Box>
        <Box css={right(screenSize)}>
          <Paper css={projectInfo()}>
            <Typography variant="h5" css={infoHeader()}>
              This is a Header
            </Typography>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              possimus qui amet consectetur adipisicing elit. Magni possimus qui
            </Typography>
          </Paper>
          <Box css={linkIcons}>
            <a
              href="https://www.google.com"
              rel="noreferrer noopener"
              target="_blank"
              alt="Github icon"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.google.com"
              rel="noreferrer noopener"
              target="_blank"
              alt="Github icon"
            >
              <HiOutlineExternalLink />
            </a>
          </Box>
        </Box>
      </Box>
      <Box css={project(screenSize)}>
        <Box css={left2(screenSize)}>
          <Paper css={projectInfo()}>
            <Typography variant="h5" css={infoHeader()}>
              This is a Header
            </Typography>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              possimus qui amet consectetur adipisicing elit. Magni possimus qui
            </Typography>
          </Paper>
        </Box>
        <Box css={right2(screenSize)}>
          <Image
            src={img}
            placeholder="blur"
            width={500}
            height={300}
            alt="image"
          />
        </Box>
      </Box>
      <Box css={project(screenSize)}>
        <Box css={left(screenSize)}>
          <Image
            src={img}
            placeholder="blur"
            width={500}
            height={300}
            alt="image"
          />
        </Box>
        <Box css={right(screenSize)}>
          <Paper css={projectInfo()}>
            <Typography variant="h5" css={infoHeader()}>
              This is a Header
            </Typography>
            <Typography>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
              possimus qui amet consectetur adipisicing elit. Magni possimus qui
            </Typography>
          </Paper>
          <Box css={linkIcons}>
            <a
              href="https://www.google.com"
              rel="noreferrer noopener"
              target="_blank"
              alt="Github icon"
            >
              <FiGithub />
            </a>
            <a
              href="https://www.google.com"
              rel="noreferrer noopener"
              target="_blank"
              alt="Github icon"
            >
              <HiOutlineExternalLink />
            </a>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Projects;
