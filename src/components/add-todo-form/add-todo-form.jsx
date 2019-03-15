import React, { Component } from 'react'
import { connect } from 'react-redux'

import './add-todo-form.css'
import { addTodo } from '../../store/actions/todo-actions'

const INIT_STATE = {
  label: ''
}

class AddTodoForm extends Component {
  state = { ...INIT_STATE }
  handleChangeInput = e => {
    this.setState({ label: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault()
    const { label } = this.state
    if (label) {
      this.props.onAddTodo(label)
      this.setState({ ...INIT_STATE })
    }
  }
  render() {
    const { label } = this.state
    return (
      <form className="add-todo-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={label}
          placeholder="Put here some todo"
          onChange={this.handleChangeInput}
        />
        <button type="submit">Add</button>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onAddTodo: label => dispatch(addTodo(label))
})

export default connect(
  null,
  mapDispatchToProps
)(AddTodoForm)
