import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[{
        id:1,
        todo: "Sample Todo Message",
        isDone: false,
    }],
    addTodo :(todo) =>{},
    updateTodo :(id, todo) =>{},
    deleteTodo :(id) =>{},
    ToggleTodoStatus :(id) =>{},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () =>{
    return useContext(TodoContext);
}