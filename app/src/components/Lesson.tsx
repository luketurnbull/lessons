import React, { Dispatch } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";

import { addLessonToCart, removeLessonFromCart } from "redux/actions";
import { ILesson } from "type";

export interface ILessonProps extends ILesson {
  index: number;
}

const LessonCard = styled(Card)`
  margin-bottom: 20px;
`;

const CardImage = styled(CardMedia)`
  height: 100px;
`;

const CardAvatar = styled(Avatar)`
  background-color: red;
`;

const Lesson: React.FC<ILessonProps> = ({
  index,
  name,
  description,
  author,
  publishDate,
  duration,
  image,
  isInCart,
}) => {
  const dispatch: Dispatch<any> = useDispatch();

  const addToCart = () => {
    dispatch(addLessonToCart(index));
  };

  const removeFromCart = () => {
    dispatch(removeLessonFromCart(index));
  };

  const renderActionButton = () => {
    return isInCart ? (
      <IconButton
        aria-label="remove-lesson-from-cart"
        onClick={() => removeFromCart()}
      >
        <RemoveShoppingCartIcon />
      </IconButton>
    ) : (
      <IconButton aria-label="add-lesson-to-cart" onClick={() => addToCart()}>
        <AddShoppingCartIcon />
      </IconButton>
    );
  };

  return (
    <LessonCard>
      <CardHeader
        avatar={<CardAvatar aria-label="recipe">{author[0]}</CardAvatar>}
        action={renderActionButton()}
        title={name}
        subheader={publishDate}
      />
      <CardImage image={image} title="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
    </LessonCard>
  );
};

export default Lesson;
