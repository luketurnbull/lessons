import React, { FC, Dispatch } from "react";
import { useDispatch } from "react-redux";
import { updateSorting } from "redux/actions";
import { SortBy } from "../constants";

const LessonSorting: FC<{}> = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const sortBy = (v: SortBy) => {
    dispatch(updateSorting(v));
  };

  return (
    <div>
      <button onClick={() => sortBy(SortBy.PublishDate)}>Publish date</button>
      <button onClick={() => sortBy(SortBy.Duration)}>Duration</button>
    </div>
  );
};

export default LessonSorting;
