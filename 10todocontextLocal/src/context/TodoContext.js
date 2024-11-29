import { useContext, createContext } from "react";

export const TodoContext =createContext({
    todos :[
        {
            id:1,
            todo:"Todo msg",
            completed:false,
        }
    ],
    addTodo: (todo)=>{},
    updatedTodo: (id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

//exporting a hook
export const useTodo =() =>{
    return useContext(TodoContext) //whenver we use useContext we need to give it some context
}

export const TodoProvider =TodoContext.Provider 