import React, { useEffect } from "react"
import { useState } from 'react'

function TodoList() {
  const [value, setValue] = useState("")
  const [todos, setTodos] = useState<string[]>([])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos){
      setTodos(todos)
    }
  }, [])

  const onAddTodo = () => {
    const newArr = [...todos, value]
    localStorage.setItem("todos", JSON.stringify(newArr))
    setTodos(newArr)
    setValue("")
  } 

  const onDelete = (index) => {
    const newArr = todos.filter((el, i) => i !== index)
    localStorage.setItem("todos", JSON.stringify(newArr))
    setTodos(newArr) // Fixed the syntax error here
  }

  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
      <button disabled={value.length === 0} onClick={onAddTodo}>Send</button>

      <ul>  
        {todos.map((todo, i) => (
          <li key={todo}>
            {todo}
            <button onClick={() => onDelete(i)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList