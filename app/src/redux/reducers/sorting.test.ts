import { updateSorting } from "redux/actions";
import { SortBy } from "../../constants";
import sorting, { initialState as INITIAL_STATE } from "./sorting";

describe("sorting Reducer", () => {
  it("properly captures a dispatch to sort by publishDate", () => {
    const payload = SortBy.PublishDate;
    const mockUpdatedState = { ...INITIAL_STATE };
    mockUpdatedState.sortBy = payload;
    expect(sorting(INITIAL_STATE, updateSorting(payload))).toEqual(
      mockUpdatedState
    );
  });
});
