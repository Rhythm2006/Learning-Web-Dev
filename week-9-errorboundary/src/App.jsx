import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// Error boundaries are react components that catch javascript errors in their child components tree and display a fallback Ui.
// Its still something very much missing from function based components, fior this we still use class based components. 
function App() {
  

  return (
    <>
      <ErrorBoundary>
      <Card1/>
    </ErrorBoundary>
    <ErrorBoundary>
      <Card2/>
    </ErrorBoundary>
      
    </>
    
  )
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false};

  }

  static getDerivedStateFromError(error) {
    return {hasError:true};
  }

  componentDidCatch(error,info){
    console.error("Error Caught:",error,info);
  }

  render(){
    if(this.state.hasError){
      return <h1>Something went wrong</h1>
    }
    return this.props.children;
  }
}

function Card1(){
 throw new Error("error while rendering")
 return (
  <div style={{backgroundColor:"red",borderRadius:"20"}}>hi there</div>
 )
}
function Card2(){
  return <div style={{backgroundColor:"blue",borderRadius:"20"}}>Hey there</div>
}

export default App
