import { filterByValue } from "./filter";

describe("filterByValue", () => {
  it("should return matching results", () => {
    const mockObj1 = {
      a: "hello",
      b: "world",
      name: "luke",
    };

    const mockObj2 = {
      a: "hello",
      b: "world",
      name: "turnbull",
    };

    const matchingObjects = filterByValue([mockObj1, mockObj2], "luke");
    expect(matchingObjects).toEqual([mockObj1]);
  });
});
