import { useState } from 'react'
import './App.css'

function App() {
  const [newItem, setNewItem] = useState('')
  const [_, setTodos] = useState([])
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
        <li>
          <label>
            <input type="checkbox" />
            Item1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
            <input type="checkbox" />
            Item2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  )
}

export default App
