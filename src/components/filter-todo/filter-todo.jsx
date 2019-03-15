import React, { Component } from 'react'
import { connect } from 'react-redux'

import { filterTodo } from '../../store/actions/todo-actions'
import './filter-todo.css'

class FilterTodo extends Component {
  buttons = [
    { id: 'all-todos', label: 'All' },
    { id: 'active-todos', label: 'Active' },
    { id: 'done-todos', label: 'Done' },
    { id: 'important-todos', label: 'Important' }
  ]
  handleFilterTodo = e => {
    const { id } = e.target
    this.props.onFilterTodo(id)
  }
  render() {
    return (
      <div className="filter-todo">
        {this.buttons.map(btn => {
          const btnClasses = btn.id === this.props.activeButton ? ' active' : ''
          return (
            <button
              id={btn.id}
              key={btn.id}
              className={'btn' + btnClasses}
              onClick={this.handleFilterTodo}
            >
              {btn.label}
            </button>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  activeButton: state.todo.filterValue
})
const mapDispatchToProps = dispatch => ({
  onFilterTodo: value => dispatch(filterTodo(value))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterTodo)
