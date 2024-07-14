import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import React,{useState} from "react";
import "./App.css"
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";


function App() {

  const[todoItems,setTodoItems]=useState([]);

  const handleNewItem=(itemName,itemDueDate)=>{
    console.log(`New Item Added:${itemName} Date:${itemDueDate}`)
    const newTodoItems=[...todoItems,{name:itemName,dueDate:itemDueDate}];
    setTodoItems(newTodoItems )
  }

  const handleDeleteItem=(todoItemName)=>{
      console.log(`Item deleted:${todoItemName}`)
      const newTodoItems=todoItems.filter((todoItem)=>todoItem.name!==todoItemName
      ); 
      setTodoItems(newTodoItems)
  }
  return (
    <>
      <center className="todo-container">
        <AppName></AppName>
        <AddTodo onNewItem={handleNewItem}></AddTodo>
        {todoItems.length===0 && <WelcomeMessage></WelcomeMessage>}
        <TodoItems todoItems={todoItems}onDeleteClick={handleDeleteItem}></TodoItems>
        
      </center>
    </>
  );
}

export default App;
