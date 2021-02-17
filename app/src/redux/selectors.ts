import _orderBy from "lodash.orderby";
import { ILesson, IApplicationState } from "type";

export const getSortedLessons = (storeState: IApplicationState) => {
  const allLessons: ILesson[] = storeState.lessons.all;
  const sortedBy: string = storeState.sorting.sortBy;

  return _orderBy(allLessons, sortedBy);
};
