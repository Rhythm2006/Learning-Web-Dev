import {useState,useEffect} from 'react'
function App() {
  const [currentTab,setcurrentTab] = useState(1);
  const [tabData,settabData] = useState({});
  const [loading,setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos/'+currentTab)
      .then(async (response)=>{
        const resjson = await response.json();
        settabData(resjson);
        setLoading(false);
      })
      .then(json => console.log(json))
  },[currentTab]);

  return <div><div>
    <button style={{color: currentTab == 1? "red":"black"}} onClick={()=>{
      setcurrentTab(1);
    }}>Todo #1</button>
    <button style={{color: currentTab == 2? "red":"black"}} onClick={()=>{
      setcurrentTab(2);
    }}>Todo #2</button>
    <button style={{color: currentTab == 3? "red":"black"}} onClick={()=>{
      setcurrentTab(3);
    }}>Todo #3</button>
    <button style={{color: currentTab == 4? "red":"black"}} onClick={()=>{
      setcurrentTab(4);
    }}>Todo #4</button>
  </div>
  <br></br>
  <hr></hr>
  <div>
    {loading?"Loading....":tabData.title}
  </div>
  </div>
}


export default App
