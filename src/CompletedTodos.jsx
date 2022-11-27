import React from 'react'
import { useTodos } from './TodosContext'

export default function CompletedTodos() {
    const todos = useTodos();
    const completedTodos = todos?.length ? todos.filter(todo => todo.done) : null;
    return (
        <section>
            <h2 className="todo-title">Completed To Do's: </h2>
            <ul>
                {completedTodos?.length ? completedTodos.map((todo) => (
                    <li key={todo.id}>✓  {todo.todoText}</li>
                )) : (
                    <li>  No To Do's completed yet.</li>
                )}
            </ul>
        </section>
    )
}
