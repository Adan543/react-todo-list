import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TodoInput from './component/TodoInput'
import TodoList from './component/TodoList'

function App() {

  return (
    <>
     <main>
      <TodoInput/>
      <TodoList/>
     </main>
    </>
  )
}

export default App
