import React, { useState } from 'react'

function TodoInput(props) {
  const {AddTodos, newTodo, setNewTodo} = props
  return (

        <header>
        <input type="text" value={newTodo} onChange={(e)=>{
          setNewTodo(e.target.value)
        }} placeholder='Enter Todo.....' />

        <button onClick={() => {
          setNewTodo('')
          AddTodos(newTodo) 
        }} >Add</button>
      </header>
  )
}

export default TodoInput
