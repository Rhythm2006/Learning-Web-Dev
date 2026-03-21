// Earlier react code was written using class based components,slowly functional components were introduced and today they are the ones youll se everywhere

import { useState } from 'react'
import { Component } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
// <> </> these are called fragments just after root div theres another div that gets cretaed so instead of now wrapping everything in a div we will use fragments
function App(){
  return (
    <>  
     <ClassCounter/>
    </>
  )
}

class ClassCounter extends Component {
  state = {count:0};
  increment = () =>{
    this.setState({count:this.state.count + 1});
  }
  render() {
  return (
    <div>
      <h2>Count: {this.state.count}</h2>
      <button onClick={this.increment}>Increase</button>
    </div>
  )
}
};

export default App

