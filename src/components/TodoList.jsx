import PropTypes from 'prop-types'

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ul className="list">
      {todos.length === 0 && 'No Todos'}
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
              {todo.title}
            </label>
            <button className="btn btn-danger" type="button" onClick={() => deleteTodo(todo.id)}>
              Delete
            </button>
          </li>
        )
      })}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array,
  toggleTodo: PropTypes.func,
  deleteTodo: PropTypes.func,
}

export default TodoList
