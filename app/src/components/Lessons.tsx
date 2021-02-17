import React, { FC } from "react";
import { ILesson } from "type";
import Lesson from "./Lesson";
import { filterByValue } from "utils";

export interface ILessonSearchProps {
  lessons: ILesson[];
  searchText: string;
}

const Lessons: FC<ILessonSearchProps> = ({ lessons, searchText }) => {
  return (
    <div>
      {filterByValue(lessons, searchText).map((l: ILesson, i: number) => {
        return <Lesson index={i} {...l} key={i} />;
      })}
    </div>
  );
};

export default Lessons;
