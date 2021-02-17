import React, { FC } from "react";
import LessonSearch from "./LessonSearch";
import Lessons from "./Lessons";

const LessonsApp: FC<{}> = () => {
  return (
    <div>
      <LessonSearch />
      <Lessons />
    </div>
  );
};

export default LessonsApp;
