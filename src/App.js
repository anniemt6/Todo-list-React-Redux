import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTask, removeTask } from "./store/action-creators/actions";
import { AddTask } from "./components/AddTask";
import { DisplayTask } from "./components/DisplayTask";

function App() {
    const dispatch = useDispatch();
    const [taskValue, setTaskValue] = useState('');

    const handleChange = ({ target: { value } }) => {
        setTaskValue(value);
    }

    const handleClick = () => {
        dispatch(addTask({
            task: taskValue
        }));
    }

    return (
        <>
            <AddTask change={handleChange} click={handleClick} taskValue={taskValue} />
            <DisplayTask />
        </>
    );
}

export default App;
