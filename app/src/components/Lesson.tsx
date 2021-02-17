import React, { Dispatch } from "react";
import { ILesson } from "type";
import { useDispatch } from "react-redux";
import { addLessonToCart } from "redux/actions";

export interface ILessonProps extends ILesson {
  index: number;
}

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

  return (
    <div>
      <h3>{name}</h3>
      <h4>{author}</h4> <span>{publishDate}</span>
      <p>{description}</p>
      <button onClick={() => addToCart()}>Add to cart</button>
      {isInCart ? "Is in cart" : "Not in cart"}
    </div>
  );
};

export default Lesson;
