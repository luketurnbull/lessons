import _orderBy from "lodash.orderby";
import { ILesson, IApplicationState } from "type";

export const getSortBy = (storeState: IApplicationState) => {
  return storeState.sorting.sortBy;
};

export const getNoItemsInCart = (storeState: IApplicationState) => {
  return storeState.lessons.all.reduce((total: number, lesson: ILesson) => {
    if (lesson.isInCart) {
      total++;
    }

    return total;
  }, 0);
};

export const getSortedLessons = (storeState: IApplicationState) => {
  const allLessons: ILesson[] = storeState.lessons.all;
  const sortedBy = getSortBy(storeState);

  return _orderBy(allLessons, sortedBy);
};
