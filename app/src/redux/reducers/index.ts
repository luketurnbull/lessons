import { combineReducers } from "redux";
import { IApplicationState } from "type";
import lessons from "./lessons";
import sorting from "./sorting";
import auth from "./auth";

export default combineReducers<IApplicationState>({
  lessons,
  sorting,
  auth,
});
