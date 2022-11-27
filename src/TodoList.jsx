import { ja } from 'date-fns/locale';
import React from 'react'
import { useDispatch, useTodos } from './TodosContext';

function TodoList() {
    const todos = useTodos();
    return <ul>
        {todos.map(todo => <li key={todo.id}>
            <Todo todo={todo} />
        </li>)}
    </ul>
}

function Todo({ todo }) {
    const dispatch = useDispatch();

    function onChange(updatedTodo) {
        dispatch({ type: 'change', todo: updatedTodo });
    }

    function onDelete(updatedTodo) {
        dispatch({ type: 'delete', todo: updatedTodo });
    }

    return <>
        <div className="checkbox-wrapper">
            <label htmlFor={`${todo.id}-done`} className="container">
                <input type="checkbox" className="checkbox" name={`${todo.id}-done`} id={`${todo.id}-done`} checked={todo.done} onChange={(e) => {
                    onChange({ ...todo, done: e.target.checked });
                }} />
                <span className="checkmark"></span>
            </label>
            {todo.todoText}
            <span className='deleteTodo' onClick={(e) => {
                onDelete(todo);
            }}>x</span>
        </div>


    </>
}

export default TodoList
