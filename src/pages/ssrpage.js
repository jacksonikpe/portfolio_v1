import { Typography, Button } from "@mui/material";
import React from "react";

const SSRpage = () => {
  return (
    <>
      <Typography variant="h4">Welcome to the server!</Typography>
    </>
  );
};

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default SSRpage;
