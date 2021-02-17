import React from "react";
import { ILesson } from "type";

export interface ILessonProps extends ILesson {
  index: number;
}

const Lesson: React.FC<ILessonProps> = ({
  index,
  name,
  description,
  author,
  publishDate,
  duration,
  image,
}) => {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{author}</h4> <span>{publishDate}</span>
      <p>{description}</p>
    </div>
  );
};

export default Lesson;
