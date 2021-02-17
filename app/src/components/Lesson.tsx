import React, { useState, Dispatch } from "react";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

import { ILesson, IApplicationState, ILoginRequest } from "type";
import { useSelector, useDispatch } from "react-redux";
import { getIsAuthorised } from "redux/selectors";
import { addLessonToCart, removeLessonFromCart, login } from "redux/actions";
import LoginModal from "./LoginModal";
import ToggleCartButton from "./ToggleCartButton";

export interface ILessonProps extends ILesson {}

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
  id,
  name,
  description,
  author,
  publishDate,
  duration,
  image,
  isInCart,
}) => {
  const dispatch: Dispatch<any> = useDispatch();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | undefined>(
    undefined
  );

  const isAuthorised: boolean = useSelector((state: IApplicationState) =>
    getIsAuthorised(state)
  );

  const addToCart = () => {
    if (id !== undefined) {
      dispatch(addLessonToCart(id));
    }
  };

  const removeFromCart = () => {
    if (isAuthorised) {
      if (id !== undefined) {
        dispatch(removeLessonFromCart(id));
      }
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const authCheck = (callback: () => void) => {
    if (isAuthorised) {
      callback();
    } else {
      setIsLoginModalOpen(true);
    }
  };

  const loginUser = (v: ILoginRequest) => {
    dispatch(login(v));
    setSuccessMessage("Successfully logged in");
    setTimeout(() => {
      setIsLoginModalOpen(false);
      if (isInCart) {
        dispatch(removeLessonFromCart(id));
      } else {
        dispatch(addLessonToCart(id));
      }
    }, 1200);
  };

  return (
    <>
      <LessonCard>
        <CardHeader
          avatar={<CardAvatar aria-label="author">{author[0]}</CardAvatar>}
          action={
            <ToggleCartButton
              isInCart={isInCart}
              remove={() => authCheck(removeFromCart)}
              add={() => authCheck(addToCart)}
            />
          }
          title={name}
          subheader={publishDate}
        />
        <CardImage image={image} title={name} />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
          <Typography variant="body2" component="p">
            Duration: {duration}
          </Typography>
        </CardContent>
      </LessonCard>
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        message={successMessage}
        login={(v: ILoginRequest) => loginUser(v)}
      />
    </>
  );
};

export default Lesson;
