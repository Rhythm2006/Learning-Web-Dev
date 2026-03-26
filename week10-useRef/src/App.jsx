import { useState, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// In react useRef is a hook that is way to create a refernce to a value or DOM that persists across a render but doesnt trigger a rerender.
//The value of ref doesnt reset after each rerender
//Changing the value of ref doesnt trigger a rerender
//Some usecases 1: Focusing an input box(accessing dom elements )
// document.getElementById = manual DOM control
// useRef = React-friendly, safe, component-scoped control

function App() {
  const inputRef = useRef();
  function focusInput(){
    inputRef.current.focus()
  }
  return (
    <>
     <input ref={inputRef} type='text' placeholder='Kindly type something'/>
     <button onClick={focusInput}>Focus The Input</button>
    </>
  )
}

export default App
