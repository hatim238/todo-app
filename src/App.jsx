import { useState } from "react";
import TodoLists from "./components/TodoLists";
import AddTodo from "./components/AddTodo";

const initialTodoLists=["Study","Exersice","Grocery Shopping"];

function App(){

    const [todoLists, setTodoLists]=useState(initialTodoLists);
    return(
        <>
        <h1>Hello World</h1>
        <AddTodo todoLists={todoLists}setTodoLists={setTodoLists}/>
        <TodoLists todoLists={todoLists} setTodoLists={setTodoLists}/>
        </>


    )
}

export default App;