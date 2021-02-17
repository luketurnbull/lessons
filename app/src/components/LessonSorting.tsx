import React, { FC, Dispatch } from "react";
import { useDispatch } from "react-redux";
import { updateSorting } from "redux/actions";

const LessonSorting: FC<{}> = () => {
  const dispatch: Dispatch<any> = useDispatch();

  const sortByPublishDate = () => {
    dispatch(updateSorting("publishDate"));
  };

  return <button onClick={() => sortByPublishDate()}>publish date</button>;
};

export default LessonSorting;
