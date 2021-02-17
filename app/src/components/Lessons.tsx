import React, { FC } from "react";
import { useSelector } from "react-redux";
import { ILesson, IApplicationState } from "type";
import Lesson from "./Lesson";

const Lessons: FC<{}> = () => {
  const allLessons: ILesson[] = useSelector(
    (state: IApplicationState) => state.lessons.all
  );

  return (
    <div>
      {allLessons.map((l: ILesson, i: number) => {
        return <Lesson index={i} {...l} />;
      })}
    </div>
  );
};

export default Lessons;
