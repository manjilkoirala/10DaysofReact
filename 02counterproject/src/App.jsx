import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [counter,setCounter]= useState(0)
//let counter=1
const addValue=()=>{
 setCounter(counter+1)
 setCounter(prevCounter=>prevCounter+1)
  
}
const removeValue=()=>{
  if(counter>0){
setCounter(counter-1)
  }
}

  return (
    <>
      <h1>React with Manjil👀</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}>Add Value</button><br />
      <button onClick={removeValue}>Delete Value</button>
      
    </>
  )
}

export default App
