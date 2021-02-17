import { AnyAction } from "redux";
import { IAuthState } from "type";
import { LOGIN } from "redux/actions";

export const initialState: IAuthState = {
  isAuthorised: false,
};

const authReducer = (
  state: IAuthState = initialState,
  action: AnyAction
): IAuthState => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN:
      state = {
        ...payload,
        isAuthorised: true,
      };
      return state;
    default:
      return state;
  }
};

export default authReducer;
