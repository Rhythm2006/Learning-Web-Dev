import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const todoscomp = [
    {title: "Go to gym",
      progress: true,
      id: 1
    },{
      title: "Go for a run",
      progress: false,
      id: 2
    }
  ]
  const todosComponent = todoscomp.map(todos=> <Todos key={todos.id} title={todos.title} progress={todos.progress}/>)
  return (
    // each child in a list should have a unique key prop, it will always log a warnign in the console,might cause some performance downgrade as well as might bring some inconsistencies in the program. 
    <div>
      {todosComponent}
    </div>
  )
}

function Todos({title,progress}){
  return <div>
    {title} - {progress?"Done":"Work in progress"}
  </div>
}

export default App
