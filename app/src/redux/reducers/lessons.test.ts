import lessons, { initialState as INITIAL_STATE } from "./lessons";
import { addLessonToCart, removeLessonFromCart } from "redux/actions";

describe("lessons Reducer", () => {
  it("properly captures a dispatch to add lesson to the cart", () => {
    const payload = 0;
    const mockUpdatedState = { ...INITIAL_STATE };
    mockUpdatedState.all[payload].isInCart = true;
    expect(lessons(INITIAL_STATE, addLessonToCart(payload))).toEqual(
      mockUpdatedState
    );
  });

  it("properly captures a dispatch to remove lesson from the cart", () => {
    const payload = 0;
    const mockUpdatedState = { ...INITIAL_STATE };
    mockUpdatedState.all[payload].isInCart = false;
    expect(lessons(INITIAL_STATE, removeLessonFromCart(payload))).toEqual(
      mockUpdatedState
    );
  });
});
