import { SortBy } from "./constants";

export interface IAction<P> {
  type: string;
  payload: P;
}

export type ActionCreator = <T>(payload?: T) => IAction<T>;

export interface IApplicationState {
  lessons: ILessonsState;
  sorting: ISortingState;
  auth: IAuthState;
}

export interface ILessonsState {
  all: ILesson[];
}

export interface ILesson {
  id?: number;
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

export interface ISortingState {
  sortBy: SortBy;
}

export interface IAuthState {
  username?: string;
  password?: string;
  isAuthorised: boolean;
}

export interface ILoginRequest {
  username: string;
  password: string;
}
