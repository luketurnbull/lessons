export interface IAction<P> {
  type: string;
  payload: P;
}

export type ActionCreator = <T>(payload?: T) => IAction<T>;

export interface IApplicationState {
  lessons: ILessonsState;
  filterSearch: IFilterSearchState;
}

export interface ILessonsState {
  all: ILesson[];
}

export interface ILesson {
  name: string;
  description: string;
  author: string;
  publishDate: string;
  duration: string;
  image: string;
  isInCart?: boolean;
}

export interface IAppProps {
  store: any;
}

export interface IFilterSearchState {
  filter: string;
}
