import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // sate ko change karega 
 let [counter , setCounter] = useState(15)

  //let counter  = 5  ;

  const addValue = () =>{
    console.log("value added" ,counter ) ;

   // counter  = counter + 1  ;
   if(counter<20){
    setCounter(counter + 1) 

   }

  }
  const removeValue =  ()  =>{
    if(counter > 0){
      setCounter(counter-1)

    }
    //Console.log("clicked " + )
  }

  

  return (
    <>
      <h1> Sachin aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick = {removeValue}>Remove Value {counter}</button>
      <p> footer : {counter}</p>
    </>
  )
}

export default App