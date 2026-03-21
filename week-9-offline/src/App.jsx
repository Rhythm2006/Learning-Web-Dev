import { useState } from 'react'
import './App.css'
import { Component } from './post'
function App() {
  const [posts,setPosts] = useState([]);
  const components = posts.map(post => <Component
            name={post.name}
            subtitle={post.subtitle}
            time = {post.time}
            image={post.image}
            description = {post.description}
  />)
  function addPost(){
    setPosts([...posts,{name:"Rhythm ",
            subtitle: "12M Follower",
            time: "3 min ago",
            image:"https://imgs.search.brave.com/MZZ-xslnh1YYkHlLnC_Gl2bjZbfcEQ47CfDJNf76E34/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjg3/MjEzNTM0L3Bob3Rv/L2RhcmstYW5kLWRl/ZXAtb2NlYW4td2l0/aC1ibHVlLXNreS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/LWhYUjYtZExJRnUx/MTRnZXVJUFljd2xh/UUJpMWwyYVUtUWda/WWZITWYzST0",
            description:"Wanna win Big?"}])

  }

  return (
    <div style={{background: "#dfe6e9", height: "100vh"}}>
      <button onClick={addPost}>Add Post</button>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div>
          <div>
            {components}
          </div>
      </div>
      
    </div>
    </div>
  )
}
const style = {width: 400, height:90, backgroundColor: "White", borderColor: "Gray", padding: 20, borderRadius: 40 }


export default App
