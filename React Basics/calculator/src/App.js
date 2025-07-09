import Result from './Components/Result';
import Button from './Components/Button';
import './App.css';
import { useState } from 'react';

function App() {
  const [result,setResult] =  new useState(0);
  const [inputNumber, setNumber] = new useState("");

  function handleChange(e){
    setNumber(e.target.value);
  }

  return (
    <div className="app">
      <h1>Simplest Working Calculator</h1>
      <Result value={result}/>
      <input type='number' value={inputNumber} onChange={handleChange}></input>
      <div className='btn'>
        <Button name="Add" inputNumber={inputNumber} result={result} stateChanger={setResult}/>
        <Button name="Subtract" inputNumber={inputNumber} result={result} stateChanger={setResult}/>
        <Button name="Multiply" inputNumber={inputNumber} result={result} stateChanger={setResult}/>
        <Button name="Divide" inputNumber={inputNumber} result={result} stateChanger={setResult}/>
        <button className="btn2" onClick={()=>setNumber("")}>Reset Input</button>
        <button className="btn2" onClick={()=>setResult(0)}>Reset Result</button>
      </div>
    </div>
  );
}

export default App;