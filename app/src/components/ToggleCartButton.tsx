import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

export interface IToggleCartButtonProps {
  isInCart?: boolean;
  remove(): void;
  add(): void;
}

const ToggleCartButton: React.FC<IToggleCartButtonProps> = ({
  isInCart,
  remove,
  add,
}) => {
  if (isInCart) {
    return (
      <IconButton aria-label="remove-lesson-from-cart" onClick={() => remove()}>
        <RemoveShoppingCartIcon />
      </IconButton>
    );
  }

  return (
    <IconButton aria-label="add-lesson-to-cart" onClick={() => add()}>
      <AddShoppingCartIcon />
    </IconButton>
  );
};

export default ToggleCartButton;
