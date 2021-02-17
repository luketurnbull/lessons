import sorting, { initialState as INITIAL_STATE } from "./sorting";
import { updateSorting } from "redux/actions";

describe("sorting Reducer", () => {
  it("properly captures a dispatch to sort by publishDate", () => {
    const payload = "publishDate";
    const mockUpdatedState = { ...INITIAL_STATE };
    mockUpdatedState.sortBy = payload;
    expect(sorting(INITIAL_STATE, updateSorting(payload))).toEqual(
      mockUpdatedState
    );
  });
});
