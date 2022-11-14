import React, {useState, ChangeEvent} from "react";

interface NewTodoInputProps {
  addTodo(todo: string): void;
}

export const NewTodoInput: React.FC<NewTodoInputProps> = ({addTodo}) => {
  const [todo, setTodo] = useState("");

  const updateTodo = (event:ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  }

  const onAddTodoClick = () => {
    addTodo(todo);
    setTodo("")
  }

  return (
    <div>
      <input type='text' onChange={updateTodo} value={todo} name='todo' placeholder='What to do'/>
      <button onClick={onAddTodoClick}>Add Todo</button>
    </div>
  )
}