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
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed} />
                {todo.title}
              </label>
              <button className="btn btn-danger">Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
