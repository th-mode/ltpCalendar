import React, {useState} from "react";
import Edit from "./Edit";

function TaskAdd(props) {
    const [isEditing, setEditing] = useState(false);

    const viewTemplate = (
        <button
            onClick={() => setEditing(true)}
        >
            작업 추가
        </button>
    );
    const editTemplate = (
        <Edit
            value = ""
            submit = {props.addTask}
            cancel = {()=>setEditing(false)}
        />
    );
    return <li>{isEditing ? editTemplate:viewTemplate}</li>;
}

export default TaskAdd;