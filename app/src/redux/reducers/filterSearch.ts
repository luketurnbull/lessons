import { AnyAction } from "redux";
import { IFilterSearchState } from "type";

export const initialState: IFilterSearchState = {
  searchText: "",
  filter: "",
};

const filterSearchReducer = (
  state: IFilterSearchState = initialState,
  action: AnyAction
): IFilterSearchState => {
  switch (action.type) {
    default:
      return state;
  }
};

export default filterSearchReducer;
