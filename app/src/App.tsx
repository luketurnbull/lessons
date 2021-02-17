import React from "react";
import { Provider } from "react-redux";
import Lessons from "./components/Lessons";
import { IAppProps } from "./type";

function App(props: IAppProps) {
  return (
    <Provider store={props.store}>
      <Lessons />
    </Provider>
  );
}

export default App;
