import React, { FC } from "react";
import { ILesson } from "type";
import { Lesson } from "./Lesson";
import { filterByValue } from "utils";

export interface ILessonSearchProps {
  lessons: ILesson[];
  searchText: string;
}

const Lessons: FC<ILessonSearchProps> = ({ lessons, searchText }) => {
  return (
    <ul className="lessons">
      {filterByValue(lessons, searchText).map((l: ILesson, i: number) => {
        return <Lesson index={i} {...l} key={i} />;
      })}
    </ul>
  );
};

export default Lessons;
