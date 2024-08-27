import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import AddToDo from './components/AddToDo'


export default function App() {

  const [todos, setTodos] = useState([
    { id: Math.random, text: 'Learn JS', isCompleted: false },
    { id: Math.random(), text: 'Learn CSS', isCompleted: false },
    { id: Math.random(), text: 'Learn React', isCompleted: false },
  ])


  return (
    <div className='App'>
      <h1>Todo List</h1>

      <AddToDo onAdd={(text) => {
        setTodos([
          ...todos,
          { id: Math.random(), text: text, isCompleted: false }
        ]);
      }}

      />

      <TodoList  
        todos={todos}
        onDelete={(todo) => {
          setTodos(todos.filter((x) => x.id !== todo.id))
        }}

        onChange={(newTodo) => {
          setTodos(todos.map((todo) => {
            if (todo.id === newTodo.id) {
              return newTodo
            }
            return todo
          }))
        }}
      />

    </div>
  )
}
