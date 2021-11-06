import { ActionTypes } from "../action-creators/actionTypes";


const initialState = {
    allTodoData: [
        { id: 1, task: 'buy porsche' }
    ]
}


const updateTasks = (tasksBeforeRemove, filterValue) => {
    const tasksAfterRemove =
        tasksBeforeRemove.filter(item => item.id !== filterValue);

    return tasksAfterRemove.map((item, index) => {
        return { id: index + 1, task: item.task };
    });
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_TASK:
            let currentId = state.allTodoData[state.allTodoData.length-1].id;

            return {
                ...state,
                allTodoData: [
                    ...state.allTodoData,
                    { id: ++currentId, ...action.payload }
                ]
            };
        case ActionTypes.REMOVE_TASK:
            return {
                ...state,
                allTodoData: updateTasks(state.allTodoData, action.payload)
            };
        default:
            return state;
    }
}

