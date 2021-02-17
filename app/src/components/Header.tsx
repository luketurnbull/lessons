import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import styled from "styled-components";

import { IApplicationState } from "type";
import { getNoItemsInCart } from "redux/selectors";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header: FC<{}> = () => {
  const itemsInCart: number = useSelector((state: IApplicationState) =>
    getNoItemsInCart(state)
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="sm">
          <Wrapper>
            <Typography variant="h6">ISOBar - JS Lessons</Typography>
            <IconButton color="inherit">
              <Badge badgeContent={itemsInCart} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Wrapper>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
