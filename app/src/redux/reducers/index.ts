import { combineReducers } from "redux";
import { IApplicationState } from "type";
import lessons from "./lessons";
import sorting from "./sorting";

export default combineReducers<IApplicationState>({
  lessons,
  sorting,
});
