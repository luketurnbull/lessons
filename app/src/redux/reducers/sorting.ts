import { AnyAction } from "redux";
import { ISortingState } from "type";
import { UPDATE_SORTING } from "redux/actions";

export const initialState: ISortingState = {
  sortBy: "",
};

const sortingReducer = (
  state: ISortingState = initialState,
  action: AnyAction
): ISortingState => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_SORTING:
      state.sortBy = payload;
      return state;
    default:
      return state;
  }
};

export default sortingReducer;
