import { createActionCreator } from "utils";
import { ActionCreator } from "type";

export const ADD_LESSON_TO_CART = "ADD_LESSON_TO_CART";
export const addLessonToCart: ActionCreator = createActionCreator(
  ADD_LESSON_TO_CART
);

export const REMOVE_LESSON_FROM_CART = "REMOVE_LESSON_FROM_CART";
export const removeLessonFromCart: ActionCreator = createActionCreator(
  REMOVE_LESSON_FROM_CART
);
