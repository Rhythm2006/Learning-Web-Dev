import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import './App.css'
// there are two ways to navigate one by LINK which is a component or usenavigate which is a hook
// You might wanna use LINK when the user specifically clicks on a button like in the following example and the use case of usenavigate is for some custom logic 

const routes = [{
  path: "neet/online-class-11-coaching",
  element: <Class11Program />
}, {
  path:"neet/online-class-12-coaching",
  element: <Class12Program />
}, {
  path:"neet/online-class-13-coaching",
  element: <Class13Program />
}]
function App() {
  

  return (
    <>
    <BrowserRouter>
  <Routes>
    
    <Route path="/" element={<Layout />}>
      <Route index element={<Homepage />} />
      {routes.map((routes,index)=>(
        <Route 
        key={index}
        path={routes.path}
        element={routes.element}/>
      ))}
    </Route>

    <Route path="*" element={<ErrorPage />} />

  </Routes>
</BrowserRouter>
    </>
  )
}

function ErrorPage(){
  return (
    <>
    Sorry Page Not Found
    </>
  )
}
function Homepage(){
  return (
    <div>
      Welcome to India's best Coaching classes!
    </div>
  )
}

function Class11Program(){
  const navigate = useNavigate();
  function redirectUser(){
    navigate("/");
  }
  return (
    <div>
  Class 11 Neet Coaching <br/> <button onClick={redirectUser}>Go Back to landing page</button>
  </div>
  )
  
}
function Class12Program(){
  return (
    <div>
  Class 12 Neet Coaching 
  </div>
  )
  
}
function Class13Program(){
  return (
    <div>
  Class 13 Neet Coaching 
  </div>
  )
  
}
function Layout(){
  return (
    <>
    <div style={{height: "100vh"}}>
  Welcome to India's best Coaching classes! <br/>
  <Link to="/">Allen</Link> | <Link to="/neet/online-class-11-coaching">Class 11 </Link> || <Link to="/neet/online-class-12-coaching">Class 12 </Link> || <Link to="/neet/online-class-13-coaching">Dropper Batch</Link>
  <Outlet/>
  </div>
  Footer
  </>
  )
  
}

export default App
