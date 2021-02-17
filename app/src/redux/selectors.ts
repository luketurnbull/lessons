import _orderBy from "lodash.orderby";
import { ILesson, IApplicationState } from "type";

export const getSortBy = (storeState: IApplicationState) => {
  return storeState.sorting.sortBy;
};

export const getItemsInCart = (storeState: IApplicationState) => {
  return storeState.lessons.all.filter((lesson: ILesson) => lesson.isInCart);
};

export const getNoItemsInCart = (storeState: IApplicationState) => {
  return storeState.lessons.all.reduce((total: number, lesson: ILesson) => {
    if (lesson.isInCart) {
      total++;
    }

    return total;
  }, 0);
};

/**
 * Get all lessons from the store and add an ID to make them
 * easier to update when filtered
 * @param  {IApplicationState} storeState
 */
export const getLessonsWithAddedId = (storeState: IApplicationState) => {
  return storeState.lessons.all.map((lesson: ILesson, index: number) => {
    const lessonWithId: ILesson = {
      ...lesson,
      id: index,
    };
    return lessonWithId;
  }, 0);
};

export const getSortedLessons = (storeState: IApplicationState) => {
  const allLessonsWithIds: ILesson[] = getLessonsWithAddedId(storeState);
  const sortedBy = getSortBy(storeState);

  return _orderBy(allLessonsWithIds, sortedBy);
};

export const getIsAuthorised = (storeState: IApplicationState) => {
  return storeState.auth.isAuthorised;
};

export const getUsername = (storeState: IApplicationState) => {
  return storeState.auth.username ? storeState.auth.username : "";
};
