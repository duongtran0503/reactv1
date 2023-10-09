import {useState} from "react";
import './App.css';
import InputFeild from './Components/InputFeild';
import {Todo} from "./model";
import TodoList from "./Components/TodoList";
const App: React.FC  = () => {
  const [todo,setTodo] = useState<string>("");
  const [todos,setTodos] = useState<Todo[]>([]);
  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault();
    if(todo) {
      setTodos([...todos,{id:Date.now(),todo,isDone:false}])
      setTodo("");
    }
  };

  return (
    <section className= "App">
      <h1 className="heading">Taskify</h1>
      <InputFeild todo = {todo} 
        setTodo = {setTodo}
        handleAdd = {handleAdd}
      />
      <TodoList todos = {todos}
       setTodos = {setTodos}
      />
    </section>
  )
}
export default App;
