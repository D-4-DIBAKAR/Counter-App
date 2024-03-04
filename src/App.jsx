import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter(counter + 1);
  }
  const removeValue = () => {
    if(counter>0)
      {setCounter(counter - 1);}
    else
     { setCounter(counter)}
  }
  const resetValue = () => {
    setCounter(0)
  }
  return (
    <>
     
      <h1>Counter Value : {counter}</h1>
      <button onClick={addValue}>Add Value</button>
&nbsp;&nbsp;
      <button  onClick={removeValue}>Remove Value</button>
&nbsp;&nbsp;
      <button  onClick={resetValue}>Reset Value</button>
    </>
  );
}

export default App;
