import { useState } from "react";
import { useEffect } from "react";
import TodoItem from "./components/todo-items/index";
import '../src/App.css'
import TodoDetails from "./components/todo-details";

function App() {

  const [TodoList, SetTodoList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [todoDetails, setTodoDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  async function GetTodoDetails(getTodoId){
    console.log(getTodoId);

    try{

      const apiResponse = await fetch(`https://dummyjson.com/todos/${getTodoId}`);
      const result = await apiResponse.json();

      if(result){
        console.log(result);
        setTodoDetails(result.todo);
        setOpenDialog(true);
        console.log(todoDetails.todo);
      }
      else{
        setTodoDetails(null);
        setOpenDialog(false);
      }

    }catch(error){
      console.log(error)
    }
  }

  async function fetchTodo() {
    try {
      const apiResponse = await fetch("https://dummyjson.com/todos");
      const result = await apiResponse.json();

      if (result.todos) {
        console.log("True");
        setLoading(false);
        SetTodoList(result.todos);
      } else {
        console.log("false");
        setLoading(true);
        SetTodoList([]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchTodo();
  },[])

  if(loading) return <h1>Fetching Users. Please wait...</h1>

  return (
    <>
      <div>
        <h1>Simple Todo App using Material UI</h1>
        <div className="todolistwrapper">
          {
            TodoList && TodoList.length >0 ?
            TodoList.map((todoItem) => <TodoItem GetTodoDetails={GetTodoDetails} todo={todoItem}/>) :
            <h4>No Todo Pending</h4>
          }
        </div>
        <TodoDetails 
        openDialog={openDialog}
        todoDetails={todoDetails}
        setOpenDialog={setOpenDialog}/>
      </div>
    </>
  );
}

export default App;
