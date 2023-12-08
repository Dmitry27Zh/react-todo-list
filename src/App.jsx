import { useEffect, useState } from 'react'
import './App.css'
import NewTodoForm from './components/NewTodoForm'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState(() => {
    const localTodos = localStorage.getItem('ITEMS')

    return localTodos ? JSON.parse(localTodos) : []
  })
  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])
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
      <NewTodoForm onSubmit={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  )
}

export default App
