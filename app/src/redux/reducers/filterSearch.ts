import { AnyAction } from "redux";
import { IFilterSearchState } from "type";
import { UPDATE_SORTING } from "redux/actions";

export const initialState: IFilterSearchState = {
  filter: "",
};

const filterSearchReducer = (
  state: IFilterSearchState = initialState,
  action: AnyAction
): IFilterSearchState => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_SORTING:
      state.filter = payload;
      return state;
    default:
      return state;
  }
};

export default filterSearchReducer;
