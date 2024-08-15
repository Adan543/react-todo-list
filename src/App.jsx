import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoInput from './component/TodoInput'
import TodoList from './component/TodoList'

function App() {

  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')




  function AddTodos(newTodo) {
    let newTodoList = [...todos,newTodo]
    presistData(newTodoList)
    setTodos(newTodoList)
  }

  function deleteTodos(index) {
    let newTodoList  = todos.filter((todo,todoIndex)=>{
      return index != todoIndex 
    })
    setTodos(newTodoList)
    presistData(newTodoList)
  }

  function editTodos(index) {
    const valueToBeEdited = todos[index]
    setNewTodo(valueToBeEdited)
    deleteTodos(index)
  }

  useEffect(()=>{
    if (!localStorage) return
    let localTodos = localStorage.getItem('todos')
    if (!localTodos) return
    localTodos = JSON.parse(localTodos).todos
    console.log('localTodos :>> ', localTodos);
    setTodos(localTodos)
  },[])

  function presistData(newTodos) {
    localStorage.setItem('todos', JSON.stringify({todos:newTodos})) 
  }



  return (
    <>
     <main>
      <TodoInput AddTodos={AddTodos} newTodo={newTodo} setNewTodo={setNewTodo} />
      <TodoList todos={todos} deleteTodos={deleteTodos} editTodos={editTodos} />
     </main>
    </>
  )
}

export default App
