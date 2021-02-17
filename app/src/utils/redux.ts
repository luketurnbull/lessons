import { ActionCreator, IAction } from "type";

export const createActionCreator = (action: string): ActionCreator => {
  return (arg: any): IAction<any> => {
    return {
      type: action,
      payload: arg,
    };
  };
};
