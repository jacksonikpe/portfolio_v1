/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import {
  Container,
  Typography,
  Box,
  Paper,
  useTheme,
  Grid,
} from "@mui/material";
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
  projectLogo,
} from "./ProjectsStyle";
import Image from "next/image";
import projectImg1 from "../../../public/project1.png";
import projectImg2 from "../../../public/project2.png";
import projectImg3 from "../../../public/project3.png";
import projectImg4 from "../../../public/project4.png";
import { FiGithub } from "react-icons/fi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { project1, project2, project3, project4 } from "../../utils";

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
            src={projectImg1}
            placeholder="blur"
            width={500}
            height={300}
            alt="image"
          />
        </Box>
        <Box css={right(screenSize)}>
          <Paper css={projectInfo()}>
            <Typography variant="h5" css={infoHeader()}>
              My Portfolio Website
            </Typography>
            <Typography>
              This is where some of my projects and details about my self and my
              skills are displayed. Using Reacts best practices, I have been
              able to understand how multiple frameworks work together.
            </Typography>
            <Box css={projectLogo()}>
              {project1.map((project, index) => (
                <Box ml={2} key={index}>
                  <Image
                    src={project.img}
                    width={20}
                    height={20}
                    alt={project.name}
                  />
                </Box>
              ))}
            </Box>
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
              href="https://www.jacksonikpe.com"
              rel="noreferrer noopener"
              target="_blank"
              alt="Open icon"
            >
              <HiOutlineExternalLink />
            </a>
          </Box>
        </Box>
      </Box>
      <Box css={project(screenSize)}>
        <Box css={left2(screenSize)}>
          <Box css={linkIcons}>
            <a
              href="https://github.com/jacksonikpe/real-estate-app"
              rel="noreferrer noopener"
              target="_blank"
              alt="Github icon"
            >
              <FiGithub />
            </a>
            <a
              href="https://realestateapp78.netlify.app/"
              rel="noreferrer noopener"
              target="_blank"
              alt="Open icon"
            >
              <HiOutlineExternalLink />
            </a>
          </Box>
          <Paper css={projectInfo()}>
            <Typography variant="h5" css={infoHeader()}>
              Real Estate Web Application
            </Typography>
            <Typography>
              A web application that uses static generation and server-side
              rendering. Fetches data from Rapid Api website and has
              functionalities to filter data tailored to the users preference.
            </Typography>
            <Box css={projectLogo()}>
              {project2.map((project, index) => (
                <Box ml={2} key={index}>
                  <Image
                    src={project.img}
                    width={20}
                    height={20}
                    alt={project.name}
                  />
                </Box>
              ))}
            </Box>
          </Paper>
        </Box>
        <Box css={right2(screenSize)}>
          <Image
            src={projectImg2}
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
            src={projectImg3}
            placeholder="blur"
            width={500}
            height={300}
            alt="image"
          />
        </Box>
        <Box css={right(screenSize)}>
          <Paper css={projectInfo()}>
            <Typography variant="h5" css={infoHeader()}>
              Food Recipe Web App
            </Typography>
            <Typography>
              A fast and responsive web application that uses a content
              management system (Contentful) to populate data to the website.
              Using Graphql both in the client and server-side.
            </Typography>
            <Box css={projectLogo()}>
              {project3.map((project, index) => (
                <Box ml={2} key={index}>
                  <Image
                    src={project.img}
                    width={20}
                    height={20}
                    alt={project.name}
                  />
                </Box>
              ))}
            </Box>
          </Paper>
          <Box css={linkIcons}>
            <a
              href="https://github.com/jacksonikpe/food-recipe"
              rel="noreferrer noopener"
              target="_blank"
              alt="Github icon"
            >
              <FiGithub />
            </a>
            <a
              href="https://delight-recipes.netlify.app/"
              rel="noreferrer noopener"
              target="_blank"
              alt="Open icon"
            >
              <HiOutlineExternalLink />
            </a>
          </Box>
        </Box>
      </Box>
      <Box css={project(screenSize)}>
        <Box css={left2(screenSize)}>
          <Box css={linkIcons}>
            <a
              href="https://github.com/jacksonikpe/crypto_app"
              rel="noreferrer noopener"
              target="_blank"
              alt="Github icon"
            >
              <FiGithub />
            </a>
            <a
              href="https://crypto-newsapp.netlify.app/"
              rel="noreferrer noopener"
              target="_blank"
              alt="Open icon"
            >
              <HiOutlineExternalLink />
            </a>
          </Box>
          <Paper css={projectInfo()}>
            <Typography variant="h5" css={infoHeader()}>
              Crypto News Web Application
            </Typography>
            <Typography>
              Using Apis to get the latest updates and news on the top 100
              cryptocurrencies through graphs and credible sources.
            </Typography>
            <Box css={projectLogo()}>
              {project4.map((project, index) => (
                <Box ml={2} key={index}>
                  <Image
                    src={project.img}
                    width={20}
                    height={20}
                    alt={project.name}
                  />
                </Box>
              ))}
            </Box>
          </Paper>
        </Box>
        <Box css={right2(screenSize)}>
          <Image
            src={projectImg4}
            placeholder="blur"
            width={500}
            height={300}
            alt="image"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Projects;
