import { IApplicationState } from "type";
import { getSortedLessons } from "./selectors";

describe("getSortedLessons selector", () => {
  it("getSortedLessons", () => {
    const mockAppState: IApplicationState = {
      lessons: {
        all: [
          {
            publishDate: "02/03/2021",
          },
          {
            publishDate: "09/03/2021",
          },
          {
            publishDate: "06/03/2021",
          },
        ],
      },
      sorting: {
        sortBy: "publishDate",
      },
    };

    const sortedLessons = getSortedLessons(mockAppState);

    expect(sortedLessons).toEqual([
      {
        publishDate: "02/03/2021",
      },
      {
        publishDate: "06/03/2021",
      },
      {
        publishDate: "09/03/2021",
      },
    ]);
  });
});
