import {
  getSortedLessons,
  getSortBy,
  getNoItemsInCart,
  getLessonsWithAddedId,
  getIsAuthorised,
  getUsername,
  getItemsInCart,
} from "./selectors";
import { SortBy } from "../constants";

describe("getSortBy selector", () => {
  it("returns the current sort value", () => {
    const mockAppState: any = {
      sorting: {
        sortBy: SortBy.PublishDate,
      },
    };

    const sortBy = getSortBy(mockAppState);
    expect(sortBy).toEqual(SortBy.PublishDate);
  });
});

describe("getNoItemsInCart selector", () => {
  it("returns the current number of items in the cart value", () => {
    const mockAppState: any = {
      lessons: {
        all: [
          {
            isInCart: true,
          },
          {
            isInCart: true,
          },
          {
            isInCart: false,
          },
        ],
      },
    };

    const noItemsInCart = getNoItemsInCart(mockAppState);
    expect(noItemsInCart).toEqual(2);
  });
});

describe("itemsInCart selector", () => {
  it("returns the current lessons in the cart", () => {
    const mockAppState: any = {
      lessons: {
        all: [
          {
            isInCart: true,
          },
          {
            isInCart: true,
          },
          {
            isInCart: false,
          },
        ],
      },
    };

    const itemsInCart = getItemsInCart(mockAppState);
    expect(itemsInCart).toEqual([
      {
        isInCart: true,
      },
      {
        isInCart: true,
      },
    ]);
  });
});

describe("getLessonsWithAddedId selector", () => {
  it("returns the current sort value", () => {
    const mockAppState: any = {
      lessons: {
        all: [
          {
            name: "luke",
          },
          {
            name: "turnbull",
          },
          {
            name: "test",
          },
        ],
      },
    };

    const lessonsWithAddedId = getLessonsWithAddedId(mockAppState);
    expect(lessonsWithAddedId).toEqual([
      {
        id: 0,
        name: "luke",
      },
      {
        id: 1,
        name: "turnbull",
      },
      {
        id: 2,
        name: "test",
      },
    ]);
  });
});

describe("getSortedLessons selector", () => {
  it("returns a list of sorted lessons with ids", () => {
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
        id: 0,
        publishDate: "02/03/2021",
      },
      {
        id: 2,
        publishDate: "06/03/2021",
      },
      {
        id: 1,
        publishDate: "09/03/2021",
      },
    ]);
  });
});

describe("getIsAuthorised selector", () => {
  it("returns true if the user is autorised", () => {
    const mockAppState: any = {
      auth: {
        isAuthorised: true,
      },
    };

    const isAuthorised = getIsAuthorised(mockAppState);
    expect(isAuthorised).toEqual(true);
  });
});

describe("getUsername selector", () => {
  it("returns the users username if it exists", () => {
    const mockAppState: any = {
      auth: {
        username: "luke",
      },
    };

    const username = getUsername(mockAppState);
    expect(username).toEqual("luke");
  });
});
