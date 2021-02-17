import React, { FC } from "react";
import LessonSearch from "./LessonSearch";
import Lessons from "./Lessons";

const LessonsApp: FC<{}> = () => {
  return (
    <div>
      <Lessons />
    </div>
  );
};

export default LessonsApp;
