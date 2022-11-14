import { Action } from "./actions"

export interface TodosState {
  todos: string[]
}

export const initialState = {
  todos: []
}

export const todoReducer = (state:TodosState = initialState, action: Action) => {
  switch(action.type) {
    case "ADD_TODO": {
      return {...state, todos: [...state.todos, action.payload]}
    }

    case "DELETE_TODO": {
      return {...state, todos: [...state.todos.slice(1)]}
    }
    
    default: 
      return state
  }
}