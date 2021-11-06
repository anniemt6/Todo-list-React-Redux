import { combineReducers } from 'redux';
import { todoReducer } from './addTodoReducer';


export const rootReducer = combineReducers({
    todoData: todoReducer
});