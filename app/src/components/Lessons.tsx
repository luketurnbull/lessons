import React, { FC } from "react";
import { ILesson } from "type";
import Lesson from "./Lesson";
import { filterByValue } from "utils";
import { Container } from "@material-ui/core";

export interface ILessonSearchProps {
  lessons: ILesson[];
  searchText: string;
}

const Lessons: FC<ILessonSearchProps> = ({ lessons, searchText }) => {
  return (
    <Container maxWidth="sm">
      {filterByValue(lessons, searchText).map((l: ILesson, i: number) => {
        return <Lesson index={i} {...l} key={i} />;
      })}
    </Container>
  );
};

export default Lessons;
