import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as ACTIONS from '../../store/actions/todo-actions'
import TodoItem from '../todo-item'
import './todo-list.css'

class TodoList extends Component {
  render() {
    const { todos, onDeleteTodo, onToggleField } = this.props
    const content =
      !todos || !todos.length ? (
        <div className="empty-list">
          <div className="empty-list-label">Wow, such empty</div>
        </div>
      ) : (
        todos.map(todo => {
          const { id, ...todoProps } = todo
          return (
            <TodoItem
              key={id}
              {...todoProps}
              onDeleteTodo={() => onDeleteTodo(id)}
              onToggleDone={() => onToggleField(id, 'done')}
              onToggleImportant={() => onToggleField(id, 'important')}
            />
          )
        })
      )

    return <div className="todo-list">{content}</div>
  }
}

const filterTodos = (todos, value) => {
  return {
    'all-todos': todos,
    'active-todos': todos.filter(t => !t.done),
    'done-todos': todos.filter(t => t.done),
    'important-todos': todos.filter(t => t.important)
  }[value]
}

const mapStateToProps = state => {
  const { filterValue, todos } = state.todo
  return { todos: filterTodos(todos, filterValue) }
}
const mapDispatchToProps = dispatch => ({
  onDeleteTodo: id => dispatch(ACTIONS.deleteTodo(id)),
  onToggleField: (id, field) => dispatch(ACTIONS.toggleField(id, field))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
