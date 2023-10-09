import {useRef} from "react";
import "./InputFeild.css";
interface Props {
    todo:string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(e:React.FormEvent) =>void;
}
const InputFeild: React.FC<Props> = ({todo,setTodo,handleAdd} )=> {
    
    const inputRef = useRef<HTMLInputElement>(null);
    return (
     
            <form action="#" className="input" onSubmit={(e) =>{
                  handleAdd(e);
                inputRef.current?.blur();
            }
            }
             
            >
                <input type="text" className="input__box"
                 placeholder="input a task"
                 value={todo}
                 onChange={(e) =>setTodo(e.target.value)}
                 ref={inputRef}
                />
                <button className="input__submit"
                type="submit"
                >Submit</button>
            </form>
   
    )
}
export default InputFeild;