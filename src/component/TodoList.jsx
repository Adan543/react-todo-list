import React from 'react'

function TodoList() {
  let todos = [
    'go to gym', 'adan papa hye ', 'baby making time'
  ]
  return (
    <ul className='main'>
      {todos.map( (todo,index) => {
        return (
          <li className='todoItem' key={index}>{todo}
          <i class="fa-solid fa-pen-to-square"></i>
          </li>
        )
      })}
    </ul> 
  )
}

export default TodoList
