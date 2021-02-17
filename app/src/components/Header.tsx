import React, { FC } from "react";
import { Container } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Cart from "./Cart";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header: FC<{}> = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="sm">
          <Wrapper>
            <Typography variant="h6">ISOBar - JS Lessons</Typography>
            <Cart />
          </Wrapper>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
