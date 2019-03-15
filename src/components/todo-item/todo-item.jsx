import React from 'react'

import './todo-item.css'

const TodoItem = ({
  done,
  important,
  label,
  onDeleteTodo,
  onToggleDone,
  onToggleImportant
}) => {
  let todoLabelStyle = 'todo-label'
  let btnEditIcon = 'fas fa-check'
  if (done) {
    todoLabelStyle += ' done'
    btnEditIcon = 'fas fa-plus'
  }
  if (important) todoLabelStyle += ' important'
  return (
    <div className="todo-item">
      <div className={todoLabelStyle}>{label}</div>
      <div className="btn btn-important" onClick={onToggleImportant}>
        <i className="fas fa-exclamation" />
      </div>
      <div className="btn btn-edit" onClick={onToggleDone}>
        <i className={btnEditIcon} />
      </div>
      <div className="btn btn-delete" onClick={onDeleteTodo}>
        <i className="fas fa-trash" />
      </div>
    </div>
  )
}

export default TodoItem
