import {Todo} from "../model";
import SingleTodo from "./SingleTodo";
interface Props {
    todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList:React.FC<Props> = ({todos,setTodos}) => {
    return (
    <section className = "todos">
   {todos.map( todo => (
     <SingleTodo todo = {todo} key={todo.id}
      todos = {todos}
      setTodos= {setTodos}
     />
   ))}
    </section>
    )
}
export default TodoList;