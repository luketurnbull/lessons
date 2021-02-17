import React, { FC, Dispatch } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { updateSorting } from "redux/actions";
import { getSortBy } from "redux/selectors";
import { IApplicationState } from "type";
import { SortBy } from "../constants";

const LessonSorting: FC<{}> = () => {
  const dispatch: Dispatch<any> = useDispatch();
  const value: SortBy = useSelector((state: IApplicationState) =>
    getSortBy(state)
  );

  const sortBy = (
    _event: React.MouseEvent<HTMLElement>,
    newSortingValue: SortBy
  ) => {
    dispatch(updateSorting(newSortingValue));
  };

  return (
    <ToggleButtonGroup
      value={value}
      exclusive
      onChange={sortBy}
      aria-label="sort by"
    >
      <ToggleButton value={SortBy.None} aria-label="none">
        None
      </ToggleButton>
      <ToggleButton value={SortBy.PublishDate} aria-label="publish date">
        Publish date
      </ToggleButton>
      <ToggleButton value={SortBy.Duration} aria-label="duration">
        Duration
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default LessonSorting;
