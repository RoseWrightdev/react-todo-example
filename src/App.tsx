import { useState, useEffect } from 'react'
import './App.css'

interface todo {
  id: number,
  todo: string,
  completed: boolean,
  userId: number
}

function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data.todos))
      .catch(error => console.error('Error fetching todos:', error))
  }, [])

  return (
    <>
      {
        todos.map((todo: todo) => {
          return(
            <div key={todo.id}>
              <h3>{todo.todo}</h3>
              <p>{todo.completed ? 'Completed' : 'Not Completed'}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default App
