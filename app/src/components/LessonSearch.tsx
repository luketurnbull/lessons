import React, { FC } from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";

export interface ILessonSearchProps {
  onChange(v: string): void;
}

const SearchBar = styled(TextField)`
  width: 100%;
  justify-content: center;
  margin-bottom: 10px;
`;

const LessonSearch: FC<ILessonSearchProps> = ({ onChange }) => {
  return (
    <SearchBar
      aria-label="Search lessons input"
      type="text"
      onChange={(e) => {
        onChange(e.target.value);
      }}
      id="lessons-search"
      label="Search lessons"
      variant="outlined"
    />
  );
};

export default LessonSearch;
