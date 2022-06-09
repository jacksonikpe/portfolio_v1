/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { Box, Container, Typography, Button } from "@mui/material";
import { container, title, info } from "./ContactStyle";

const Contact = () => {
  return (
    <Container maxWidth="lg" css={container()} id="contact">
      <Typography variant="h3" gutterBottom component="div" css={title()}>
        Get In Touch
      </Typography>
      <Box css={info}>
        <Typography variant="body1" mb={6}>
          I am currently looking for new remote oppotunities, my inbox is always
          open. If you have a questions or just want to say hi, I will reply
          within 24hrs.
        </Typography>
        <Button size="large" variant="outlined" color="secondary">
          <a href="mailto:jacksoncikpe@gmail.com">Say Hello</a>
        </Button>
      </Box>
    </Container>
  );
};

export default Contact;
