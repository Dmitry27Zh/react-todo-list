import { useState } from 'react'
import './App.css'

function App() {
  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] = useState([])
  function handleSubmit(e) {
    e.preventDefault()
    const newTodo = { id: crypto.randomUUID(), title: newItem, completed: false }
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
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" id="item" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
        </div>
        <button className="btn">Add</button>
      </form>
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
