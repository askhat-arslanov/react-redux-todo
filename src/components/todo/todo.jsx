import React, { Fragment } from 'react'

import AddTodoForm from '../add-todo-form'
import FilterTodo from '../filter-todo'
import TodoList from '../todo-list'

const Todo = () => (
  <Fragment>
    <FilterTodo />
    <AddTodoForm />
    <TodoList />
  </Fragment>
)

export default Todo
