import React, { useState } from "react";
import Edit from "./Edit";


function Task(props) {
    const [isEditing, setEditing] = useState(false);

    const viewTemplate = (
        <div className="task">
            <input
                id={props.id}
                type="checkbox"
                defaultChecked={props.completed}
            />
            <button
                onClick={() => setEditing(true)}
            >
                {props.name}
            </button>
            <button
                onClick={() =>props.deleteTask(props.id)}
            >delete
            </button>
        </div>
    );
    const editTemplate = (
        <Edit
            value = {props.name}
            id = {props.id}
            submit = {props.editTask}
            cancel = {()=>setEditing(false)}
        />
    );

    return <li>{isEditing ? editTemplate:viewTemplate}</li>;

}

export default Task;