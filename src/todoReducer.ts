import { Action } from "./actions"
import { v4 as uuidv4 } from 'uuid';

export interface Todo{
  id: string,
  text: string,
  complete: boolean
}

export interface TodosState {
  todos: Todo[]
}

export const initialState:TodosState = {
  todos: []
}

export const todoReducer = (state:TodosState = initialState, action: Action) => {
  switch(action.type) {
    case "ADD_TODO": {
      return {...state, todos: [...state.todos, {
        id: uuidv4(),
        text: action.payload,
        complete: false
      }]}
      }

    case "DELETE_TODO": {
      return {...state, todos: [...state.todos.filter(el => el.id !== action.payload)]}
    }

    case "TOGGLE_TODO": {
      return {...state, todos: [...state.todos.map((item) => {
        return {
          id: item.id,
          text: item.text, 
          complete: item.id === action.payload ? !item.complete: item.complete
        }
      })]}
    }
    
    default: 
      return state
  }
}