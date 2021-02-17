import React, { FC, Dispatch, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ILesson, IApplicationState } from "type";
import { getSortedLessons } from "redux/selectors";
import Lesson from "./Lesson";
import { updateSorting } from "redux/actions";
import { filterByValue } from "utils";
import LessonSearch from "./LessonSearch";

const Lessons: FC<{}> = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch: Dispatch<any> = useDispatch();

  const sortedLessons: ILesson[] = useSelector((state: IApplicationState) =>
    getSortedLessons(state)
  );

  const sortByPublishDate = () => {
    dispatch(updateSorting("publishDate"));
  };

  return (
    <div>
      <button onClick={() => sortByPublishDate()}>publish date</button>
      <LessonSearch onChange={(v: string) => setSearchText(v)} />
      <div>
        {filterByValue(sortedLessons, searchText).map(
          (l: ILesson, i: number) => {
            return <Lesson index={i} {...l} key={i} />;
          }
        )}
      </div>
    </div>
  );
};

export default Lessons;
