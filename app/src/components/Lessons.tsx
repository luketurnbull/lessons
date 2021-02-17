import React, { FC } from "react";
import { useSelector } from "react-redux";
import { ILesson, IApplicationState } from "type";
import Lesson from "./Lesson";

const Lessons: FC<{}> = () => {
  const allLessons: ILesson[] = useSelector(
    (state: IApplicationState) => state.lessons.all
  );

  const sortedBy: string = useSelector(
    (state: IApplicationState) => state.filterSearch.filter
  );

  return (
    <div>
      <p>{sortedBy}</p>
      {allLessons.map((l: ILesson, i: number) => {
        return <Lesson index={i} {...l} key={i} />;
      })}
    </div>
  );
};

export default Lessons;
