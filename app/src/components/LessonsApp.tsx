import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { ILesson, IApplicationState } from "type";
import { getSortedLessons } from "redux/selectors";
import LessonSorting from "./LessonSorting";
import LessonSearch from "./LessonSearch";
import Lessons from "./Lessons";

const LessonsApp: FC<{}> = () => {
  const sortedLessons: ILesson[] = useSelector((state: IApplicationState) =>
    getSortedLessons(state)
  );

  const [searchText, setSearchText] = useState("");

  return (
    <div>
      <LessonSorting />
      <LessonSearch onChange={(v: string) => setSearchText(v)} />
      <Lessons lessons={sortedLessons} searchText={searchText} />
    </div>
  );
};

export default LessonsApp;
