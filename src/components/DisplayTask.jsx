import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../store/action-creators/actions";

export const DisplayTask = (props) => {
    const dispatch = useDispatch();
    const { allTodoData } = useSelector(
        ({ todoData: { allTodoData } }) => ({ allTodoData })
    );


    const handleDelete = id => {
        dispatch(removeTask(id));
    }

    const displayTasks = () => {
        if (allTodoData && allTodoData.length) {
            return allTodoData.map((item) => {
                return (
                    <React.Fragment>
                        <span>{item.id}). {item.task}</span>

                        <div onClick={() => handleDelete(item.id)}>
                            <button>Delete</button>
                        </div>
                    </React.Fragment>
                );
            })
        }
    }

    return (
        <div>
            {displayTasks()}
        </div>
    );
}