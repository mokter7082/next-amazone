import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import Head from "next/head";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>amazona website</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>Amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
