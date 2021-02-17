import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";

import { ILesson, IApplicationState } from "type";
import { getSortedLessons } from "redux/selectors";

import Header from "./Header";
import LessonSorting from "./LessonSorting";
import LessonSearch from "./LessonSearch";
import Lessons from "./Lessons";

const LessonsApp: FC<{}> = () => {
  const sortedLessons: ILesson[] = useSelector((state: IApplicationState) =>
    getSortedLessons(state)
  );

  const [searchText, setSearchText] = useState("");

  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <LessonSorting />
        <LessonSearch onChange={(v: string) => setSearchText(v)} />
        <Lessons lessons={sortedLessons} searchText={searchText} />
      </Container>
    </>
  );
};

export default LessonsApp;
