import * as C from '../../constants/actions'

export const addTodo = label => ({
  type: C.ADD_TODO,
  payload: { label }
})
export const deleteTodo = id => ({
  type: C.DELETE_TODO,
  payload: { id }
})
export const filterTodo = value => ({
  type: C.FILTER_TODO,
  payload: { value }
})
export const toggleField = (id, field) => ({
  type: C.TOGGLE_FIELD,
  payload: { field, id }
})
