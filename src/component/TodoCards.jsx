import React from 'react'

function TodoCards(props) {
  const {children, deleteTodos, editTodos, index} = props
  return (
    <li className='todoItem' >
      {children}
      <div className='actionsContainer'>
          <button onClick={()=>
            editTodos(index)
          }>
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
          
          <button onClick={()=>
            deleteTodos(index)
          }>
            <i className="fa-solid fa-trash"></i>
          </button>
      </div>
    </li>
  )
}

export default TodoCards
