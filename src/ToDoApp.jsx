import React from 'react'
import AddToDo from './AddToDo';
import TodoList from './TodoList';
import { format } from 'date-fns'
import TodosProvider from './TodosContext';
import CompletedTodos from './CompletedTodos';


function ToDoApp() {

    return <>
        <TodosProvider>
            <h2 className="todo-title">To Do's:</h2>
            <AddToDo />
            <h3 className="date">{format(new Date(), 'MMM dd, yyyy')}</h3>
            <TodoList />
            <CompletedTodos />
        </TodosProvider>

    </>
}

export default ToDoApp