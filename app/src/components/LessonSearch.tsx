import React, { FC } from "react";

export interface ILessonSearchProps {
  onChange(v: string): void;
}

const LessonSearch: FC<ILessonSearchProps> = ({ onChange }) => {
  return (
    <input
      type="text"
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};

export default LessonSearch;
