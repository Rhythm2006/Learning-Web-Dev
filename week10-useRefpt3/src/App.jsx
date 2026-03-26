import { useState,useEffect,useRef } from 'react'


function App() {
  const [messages,setMessages] = useState(["Hello,how are you?"])
  const chatBox = useRef()
  function addMessages(){
    setMessages((prevmessages)=> [...prevmessages,"New Message!"])
  }
  useEffect(()=>{
    chatBox.current.scrollTop = chatBox.current.scrollHeight
  },[messages])

  return (
    <>
    <div ref={chatBox} style={{height: "200px", overflowY: "scroll", border: "1px solid black"}}>
      {messages.map((msg,index)=>(
        <div key={index}>{msg}</div>
      ))}
      <button onClick={addMessages}>Add Message</button>
    </div>
    </>
      
  )
}

export default App
