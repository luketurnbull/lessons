import { login } from "redux/actions";
import auth, { initialState as INITIAL_STATE } from "./auth";
import { ILoginRequest } from "type";

describe("sorting Reducer", () => {
  it("properly captures a dispatch to login", () => {
    const payload: ILoginRequest = {
      username: "Luke",
      password: "Turnb0ll",
    };
    const mockUpdatedState = { ...INITIAL_STATE };
    mockUpdatedState.username = payload.username;
    mockUpdatedState.password = payload.password;
    mockUpdatedState.isAuthorised = true;
    expect(auth(INITIAL_STATE, login(payload))).toEqual(mockUpdatedState);
  });
});
