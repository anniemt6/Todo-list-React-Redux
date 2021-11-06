import { ActionTypes } from "./actionTypes";


export const addTask = task => ({
    type: ActionTypes.ADD_TASK,
    payload: task
});

export const removeTask = id => ({
    type: ActionTypes.REMOVE_TASK,
    payload: id
});

