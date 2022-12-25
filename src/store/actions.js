import * as actionTypes from "./actionTypes";

export function taskComplete(id) {
  return {
    type: actionTypes.taskUpdated,
    payload: { id: id, complited: true },
  };
}

export function titleChange(id) {
  return {
    type: actionTypes.taskUpdated,
    payload: { id: id, title: `New title for ${id}` },
  };
}

export function deleteChange(id) {
  return {
    type: actionTypes.taskDelete,
    payload: { id: id },
  };
}
