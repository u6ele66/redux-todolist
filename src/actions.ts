type addAction = {
  type: "ADD_TODO", payload: string;
}

type deleteAction = {
  type: "DELETE_TODO"
}

export const addTodo = (todo:string): addAction => ({
  type: "ADD_TODO", payload: todo 
})

export const deleteTodo = (): deleteAction => ({
  type: "DELETE_TODO"
})

export type Action = addAction | deleteAction;