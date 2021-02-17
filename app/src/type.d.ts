export interface IApplicationState {
  lessons: ILessonsState;
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
}

export interface IAppProps {
  store: any;
}
