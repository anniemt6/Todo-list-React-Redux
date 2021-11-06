import React from 'react';

export const AddTask = ({ taskValue, change, click }) => {
    return (
        <>
            <input type="text" onChange={change} value={taskValue}/>
            <button onClick={click}>Add</button>
        </>
    );
}