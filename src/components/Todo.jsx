import React, { useState } from "react";

const Todo = (tasks) =>{
    const {title, start, end, personnel} = tasks;
    const [personnelNum, setPersonnel] = useState(personnel);

    const incrementPersonnel = () => {
        setPersonnel(personnelNum + 1);
    };

    return(
        <div>
            <h1>Tasks</h1>
            <input type="text" name="" id="" />
            <ol>
                <li>task title: {title}</li>
                <li>task start: {start}</li>
                <li>task end: {end}</li>
                <li>New number of personnel: {personnelNum}</li>
            </ol>

            <button onClick={incrementPersonnel}>Increment Personnel</button>
        </div>
    )
}


export default Todo;