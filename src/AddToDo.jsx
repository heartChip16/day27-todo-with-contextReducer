import React from 'react'
import { useState } from 'react';
import { useDispatch } from './TodosContext';


function AddToDo() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    function onAddTodo(text) {
        if (!(text === null || text === "")) {
            dispatch({ type: 'add', text: text });
        }
        else {
            var al = alert('Please add some text to your To Do!');
        }

    }

    return <>
        <input type="text" name="newTodo" id="newTodo" value={text} onChange={(e) => setText(e.target.value)} />
        <button className="add" onClick={() => {
            onAddTodo(text);
            setText("");
        }}>Add</button>
    </>
}

export default AddToDo
