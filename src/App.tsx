import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo } from './actions';
import { NewTodoInput } from './NewTodoInput';
import { TodosState } from './todoReducer';
import "./App.css"

function App() {
  const todos = useSelector<TodosState, TodosState["todos"]>((state) => state.todos)

  const dispatch = useDispatch();

  const onAddTodo = (todo: string) => {
    dispatch(addTodo(todo));
  }

  const onDeleteTodo = (id: string) => {
    dispatch(deleteTodo(id));
  }

  const onToggleTodo = (id: string) => {
    dispatch(toggleTodo(id));
  }

  return (
    <div className="App">
      <NewTodoInput addTodo={onAddTodo} />
      <hr></hr>
      <ul>
        {todos.map((todo) => {
          return (
            <div className='todo'>
              <li key={0} className='todo-item' >
                <label style={{ textDecoration: todo.complete ? 'line-through' : undefined }}>
                  <input type="checkbox" checked={todo.complete} onClick={() => onToggleTodo(todo.id)} /> {todo.text}
                </label>
              </li>
              <button onClick={() => onDeleteTodo(todo.id)}>Удалить</button>
            </div>
          )
        })}
      </ul>
    </div>
  );
}

export default App;