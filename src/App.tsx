import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addTodo, deleteTodo } from './actions';
import { NewTodoInput } from './NewTodoInput';
import { TodosState } from './todoReducer';
import "./App.css"

function App() {
  const todos = useSelector<TodosState, TodosState["todos"]>((state) => state.todos)

  const dispatch = useDispatch();

  const onAddTodo = (todo: string) => {
    dispatch(addTodo(todo));
  }

  const onDeleteTodo = () => {
    dispatch(deleteTodo());
  }

  return (
    <div className="App">
      <NewTodoInput addTodo={onAddTodo} />
      <hr></hr>
      <ul>
        {todos.map((todo) => {
          return (
            <div className='todo'>
              <input type="checkbox" />
              <li key={0} className='todo-item'>{todo}</li>
              <button onClick={onDeleteTodo}>Удалить</button>
            </div>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
