import {useState,useEffect} from 'react'
function App() {
  const [count,setCount] = useState(0);
  function increase(){
    setCount(c=>c+1);
  }

  return <div>
    <Counter count={count}></Counter>
    <button onClick={increase}>Increase The Count</button>
  </div>
}

function Counter(props){
  useEffect(()=>{
    console.log("Mount");

    return function(){
      console.log("Inside the return function");
    }
  },[props.count])
  return <div>
    Counter {props.count}
  </div>
}
export default App
