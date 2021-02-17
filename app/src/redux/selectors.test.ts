import { getSortedLessons } from "./selectors";
import { SortBy } from "../constants";

describe("getSortedLessons selector", () => {
  it("getSortedLessons", () => {
    const mockAppState: any = {
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
        sortBy: SortBy.PublishDate,
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
