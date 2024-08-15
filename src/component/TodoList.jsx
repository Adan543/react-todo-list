import React from 'react'
import TodoCard from './TodoCards'

function TodoList(props) {

  const {todos} = props

  return (
    <ul className='main'>
      {todos.map( (todo,index) => {
        return (
          <TodoCard {...props} index={index} key={index}>
              <p>{todo}</p>
          </TodoCard>
        )
      })}
    </ul> 
  )
}

export default TodoList
