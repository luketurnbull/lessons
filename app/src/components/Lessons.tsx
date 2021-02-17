import React, { FC } from "react";
import { ILesson } from "type";
import { filterByValue } from "utils";
import Lesson from "./Lesson";

export interface ILessonSearchProps {
  lessons: ILesson[];
  searchText: string;
}

const Lessons: FC<ILessonSearchProps> = ({ lessons, searchText }) => {
  const filteredBySearch: ILesson[] = filterByValue(lessons, searchText);

  if (filteredBySearch.length) {
    return (
      <>
        {filteredBySearch.map((l: ILesson, i: number) => {
          return <Lesson {...l} key={i} />;
        })}
      </>
    );
  }

  return <p>Oops! Please search something less vague.</p>;
};

export default Lessons;
