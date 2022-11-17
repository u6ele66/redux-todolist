type addAction = {
  type: "ADD_TODO", payload: string;
}

type deleteAction = {
  type: "DELETE_TODO", payload: string
}

type toggleAction = {
  type: "TOGGLE_TODO", payload: string
}

export const addTodo = (todo:string): addAction => ({
  type: "ADD_TODO", payload: todo 
})

export const deleteTodo = (id: string): deleteAction => ({
  type: "DELETE_TODO", payload: id
})

export const toggleTodo = (id: string): toggleAction => ({
  type: "TOGGLE_TODO", payload: id
})

export type Action = addAction | deleteAction | toggleAction;