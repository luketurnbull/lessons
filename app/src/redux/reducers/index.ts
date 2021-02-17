import { combineReducers } from "redux";
import { IApplicationState } from "type";
import lessons from "./lessons";
import filterSearch from "./filterSearch";

export default combineReducers<IApplicationState>({
  lessons,
  filterSearch,
});
