import * as task from "./actionTypes";

export function taskReducer(state = [], action) {
  switch (action.type) {
    case task.taskUpdated: {
      const newArray = [...state];
      const elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      );
      newArray[elementIndex] = {
        ...newArray[elementIndex],
        ...action.payload,
      };
      return newArray;
    }
    case task.taskDelete: {
      const newArray = [...state];
      const elementIndex = newArray.filter((el) => el.id !== action.payload.id);
      return elementIndex;
    }
    default:
      return state;
  }
}
