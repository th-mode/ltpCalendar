import React from "react";
import Section from "./Section";

const DATA = [
    { id: "todo-0", name: "할 일1", completed: true },
    { id: "todo-1", name: "할 일2", completed: false },
    { id: "todo-2", name: "할 일3", completed: false }
];

function Project() {
    return(
        <div className="project">
            <form>
                <label>프로젝트명</label>
                <button>delete</button>
            </form>
            <div className="section stack">
                <Section tasks={DATA}/>
                <Section tasks={DATA}/>
            </div>

        </div>
    );
}

export default Project;