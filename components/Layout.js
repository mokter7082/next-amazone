import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import Head from "next/head";
import React from "react";
import useStayles from "../utilitis/styles";

const Layout = ({ children }) => {
  const classes = useStayles();
  return (
    <div>
      <Head>
        <title>amazona website</title>
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography>Amazona</Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <Typography className={classes.footer}>This is Footer page</Typography>
    </div>
  );
};

export default Layout;
