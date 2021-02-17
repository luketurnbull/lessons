import React from "react";
import { Provider } from "react-redux";
import LessonsApp from "./components/LessonsApp";
import { IAppProps } from "type";

function App(props: IAppProps) {
  return (
    <Provider store={props.store}>
      <LessonsApp />
    </Provider>
  );
}

export default App;
