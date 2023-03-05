import React, { useState } from "react";
function Edit(props){
    const [value, setValue] = useState(props.value);
    function handleSubmit(e) {
        e.preventDefault();
        props.submit(value,props.id);
        // TODO
        //addtask 시에는 props.id가 존재하지 않는다. props.submit의 argument도 하나만 존재한다. 그럼에도 왜 작동하는지는 불명.
        setValue("");
        props.cancel();
    }

    function handleChange(e) {
        setValue(e.target.value);
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={value}
                onChange={handleChange}
            />
            <button
                type="button"
                onClick={() => props.cancel()}
            >
                cancel
            </button>
            <button type="submit">submit</button>
        </form>
    );
}

export default Edit;