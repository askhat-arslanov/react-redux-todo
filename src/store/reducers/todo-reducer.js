import * as C from '../../constants/actions'

const initState = {
  todos: [
    { id: 231, label: 'Trip to Island', done: false, important: true },
    { id: 634, label: 'Half marathon', done: false, important: false },
    { id: 345, label: 'Deploy this app', done: true, important: true },
    {
      id: 765,
      label: 'Skipping rope for whole month',
      done: true,
      important: true
    },
    {
      id: 213,
      label: 'Convert this app to real world app',
      done: false,
      important: false
    },
    { id: 987, label: 'And buy some milk', done: false, important: false }
  ],
  filterValue: 'all-todos'
}

const toggleField = (state, id, field) => {
  const idx = state.todos.findIndex(todo => todo.id === id)
  const updatedItem = {
    ...state.todos.find(todo => todo.id === id)
  }
  updatedItem[field] = !updatedItem[field]
  return {
    ...state,
    todos: [
      ...state.todos.slice(0, idx),
      updatedItem,
      ...state.todos.slice(idx + 1)
    ]
  }
}

export default (state = initState, { type, payload }) => {
  switch (type) {
    case C.ADD_TODO:
      const newTodo = {
        id: state.todos.length + 1,
        label: payload.label,
        important: false,
        done: false
      }
      return {
        ...state,
        todos: [newTodo, ...state.todos]
      }
    case C.FILTER_TODO:
      return { ...state, filterValue: payload.value }
    case C.TOGGLE_FIELD:
      const { id, field } = payload
      return toggleField(state, id, field)
    case C.DELETE_TODO:
      return {
        ...state,
        todos: [...state.todos.filter(t => t.id !== payload.id)]
      }
    default:
      return state
  }
}
