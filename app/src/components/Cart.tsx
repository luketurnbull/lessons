import React, { FC } from "react";
import { useSelector } from "react-redux";
import { Menu, MenuItem } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCart from "@material-ui/icons/ShoppingCart";
import styled from "styled-components";

import { IApplicationState, ILesson } from "type";
import {
  getNoItemsInCart,
  getIsAuthorised,
  getUsername,
  getItemsInCart,
} from "redux/selectors";

const WelcomeMessage = styled.span`
  font-size: 14px;
`;

const CartContainer = styled(Menu)`
  width: 400px;
`;

const CartTitle = styled.h3`
  padding-left: 15px;
`;

const Cart: FC<{}> = () => {
  const noItemsInCart: number = useSelector((state: IApplicationState) =>
    getNoItemsInCart(state)
  );
  const itemsInCart: ILesson[] = useSelector((state: IApplicationState) =>
    getItemsInCart(state)
  );
  const isAuthorised: boolean = useSelector((state: IApplicationState) =>
    getIsAuthorised(state)
  );
  const username: string = useSelector((state: IApplicationState) =>
    getUsername(state)
  );

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (isAuthorised) {
    return (
      <div>
        <WelcomeMessage>Welcome {username}</WelcomeMessage>{" "}
        <IconButton
          aria-label="users cart"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
          onClick={handleMenu}
        >
          <Badge badgeContent={noItemsInCart} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <CartContainer
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          open={open}
          onClose={handleClose}
        >
          <CartTitle>Cart</CartTitle>
          {itemsInCart.map((lesson: ILesson) => {
            return <MenuItem disabled={true}>{lesson.name}</MenuItem>;
          })}
        </CartContainer>
      </div>
    );
  }

  return <></>;
};

export default Cart;
