import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [timer, setTimer] = useState(1)
  let timerRef = useRef()

  function startInt(){
   timerRef.current = setInterval(()=>{
      setTimer(c => c+1)
    },1000)
  }

  function stopInt(){
    clearInterval(timerRef.current)
  }



  return (
    <>
    {timer}
    <button onClick={startInt}>Start</button>
    <button onClick={stopInt}>Stop</button>
     
    </>
  )
}

export default App



