import React from 'react'
import { createContext } from 'react';
import { useContext } from 'react';
import { useReducer } from 'react';
import todoReducer from './TodosReducer';


const TodosContext = createContext(null);
const TodosDispatchContext = createContext(null);



const initialTodos = [
    { id: 1, todoText: "Learn Javascript", done: true },
    { id: 2, todoText: "Build Spotify Clone using Javascript", done: true },
    { id: 3, todoText: "Learn React", done: false },
];


export default function TodosProvider({ children }) {
    const [todos, dispatch] = useReducer(todoReducer, initialTodos);

    return <>
        <TodosContext.Provider value={todos}>
            <TodosDispatchContext.Provider value={dispatch}>
                {children}
            </TodosDispatchContext.Provider>
        </TodosContext.Provider>
    </>
}

export const useTodos = () => useContext(TodosContext);
export const useDispatch = () => useContext(TodosDispatchContext);