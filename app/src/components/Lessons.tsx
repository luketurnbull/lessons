import React, { FC } from "react";
import { useSelector } from "react-redux";
import { ILesson, IApplicationState } from "../type";

const Lessons: FC<{}> = () => {
  const allLessons: ILesson[] = useSelector(
    (state: IApplicationState) => state.lessons.all
  );

  return (
    <div>
      {allLessons.map((l: ILesson, i: number) => {
        return <p key={i}>{l.name}</p>;
      })}
    </div>
  );
};

export default Lessons;
