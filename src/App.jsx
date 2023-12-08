import { useState } from 'react'
import './App.css'
import NewTodoForm from './components/NewTodoForm'

function App() {
  const [todos, setTodos] = useState([])
  function addTodo(title) {
    const newTodo = { id: crypto.randomUUID(), title, completed: false }
    setTodos((prevState) => [...prevState, newTodo])
  }
  function toggleTodo(id) {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        } else {
          return todo
        }
      })
    })
  }
  function deleteTodo(id) {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
  }

  return (
    <>
      {<NewTodoForm onSubmit={addTodo} />}
      <h1 className="header">Todo List</h1>
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
    </>
  )
}

export default App
