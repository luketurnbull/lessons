import { AnyAction } from "redux";
import { ISortingState } from "type";
import { SortBy } from "../../constants";
import { UPDATE_SORTING } from "redux/actions";

export const initialState: ISortingState = {
  sortBy: SortBy.None,
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
