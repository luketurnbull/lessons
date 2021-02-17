import React, { FC } from "react";
import TextField from "@material-ui/core/TextField";

export interface ILessonSearchProps {
  onChange(v: string): void;
}

const LessonSearch: FC<ILessonSearchProps> = ({ onChange }) => {
  return (
    <TextField
      type="text"
      onChange={(e) => {
        onChange(e.target.value);
      }}
      id="outlined-basic"
      label="Outlined"
      variant="outlined"
    />
  );
};

export default LessonSearch;
