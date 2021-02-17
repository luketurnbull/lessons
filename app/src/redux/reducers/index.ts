import { combineReducers } from "redux";
import { IApplicationState } from "type";
import lessons from "./lessons";

export default combineReducers<IApplicationState>({
  lessons,
});
