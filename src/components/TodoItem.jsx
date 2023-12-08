import PropTypes from 'prop-types'

const TodoItem = ({ id, title, completed, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <label>
        <input type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
        {title}
      </label>
      <button className="btn btn-danger" type="button" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  completed: PropTypes.bool,
  toggleTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
}

export default TodoItem
