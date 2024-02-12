// import { createContext, useContext } from "react";

// export const TodoContext = createContext({
//     todos:[{
//         id:1,
//         todo: "Sample Todo Message",
//         isDone: false,
//     }],
//     addTodo :(todo) =>{},
//     updateTodo :(id, todo) =>{},
//     deleteTodo :(id) =>{},
//     ToggleTodoStatus :(id) =>{},
// });

// export const TodoProvider = TodoContext.Provider;

// export const useTodo = () =>{
//     return useContext(TodoContext);
// }

import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            task:"Hello World",
            completed: false,
        }
    ],
    addTask:(task)=>{},
    deleteTask:(id)=>{},
    updateTask:(id,task)=>{},
    toggleCompleted:(id)=>{},    
})

export const TodoProvider = TodoContext.Provider;

export const useTodo = ()=>{
    return useContext(TodoContext);
}