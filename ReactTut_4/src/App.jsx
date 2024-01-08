import { useState } from 'react'
import './App.css'

function App() {
  
  let [count, setCount] = useState(5)

  function plusValue(){
    if(count<20 && count>=0){
      count = count + 1;
      setCount(count);
    }
    else
      alert("Cannot Add Anymore")
  }

  function minusValue(){
    if(count<=20 && count >=1){
      count = count - 1;
      setCount(count);
    }
    else
      alert("Cannot Subtract Anymore")
  }

  return (
    <>
      <h1>Hello Sage!!!</h1>
      <h2>Counter Value: {count}</h2>
      <button onClick={plusValue}>Add Value</button>
      <br />
      <button onClick={minusValue}>Decrease Value</button>
    </>
  )
}

export default App
