import React, { useState } from "react";
import Task from "./Task";
import {nanoid} from "nanoid";
import TaskAdd from "./TaskAdd";

function Section(props) {
    const [tasks, setTasks] = useState(props.tasks);
    const taskList = tasks.map((task) => (
            <Task
                id={task.id}
                name={task.name}
                completed={task.completed}
                key={task.id}
                //toggleTaskCompleted={toggleTaskCompleted}
                deleteTask={deleteTask}
                editTask={editTask}
            />
        ));
    function addTask(name) {
        const newTask = { id: `todo-${nanoid()}`, name, completed: false };
        setTasks([...tasks,newTask]);
    }
    function deleteTask(id) {
        const remainingTasks = tasks.filter((task) => id !== task.id);
        setTasks(remainingTasks);
    }
    function editTask(newName, id) {
        const editedTaskList = tasks.map((task) => {
            // if this task has the same ID as the edited task
            if (id === task.id) {
                //
                return {...task, name: newName}
            }
            return task;
        });
        setTasks(editedTaskList);
    }

    return(
        <div className="section">
            <div className="section_header">
                <label className="section_title">
                    섹션명
                </label>
                <label className="section_task_count">
                    {taskList.length}
                </label>
                <button>delete</button>
            </div>

            <ul className="task stack">
                {taskList}
                <TaskAdd addTask = {addTask}/>
            </ul>
        </div>
    );
}

export default Section;