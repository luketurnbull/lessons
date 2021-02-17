import React from "react";
import { createStore } from "redux";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { rootReducer } from "./redux/store";
import { initialState as initialLessonsState } from "./redux/reducers/lessons";
import App from "./App";

describe("GIVEN a Redux store created from the rootReducer", () => {
  let store: any;
  beforeEach(() => {
    store = createStore(rootReducer);
  });

  describe("WHEN this is passed to App", () => {
    let container: any;
    beforeEach(() => {
      ({ container } = render(<App store={store} />));
    });

    test.each(initialLessonsState.all)(
      "THEN the initial lesson is displayed",
      ({ name }) => {
        expect(container).toHaveTextContent(name);
      }
    );
  });
});
