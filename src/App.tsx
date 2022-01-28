import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { calculate } from './calculator';

function App() {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState(0)

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault()
    setOutput(calculate(input))
  }

  return (
    <div className="App">
      <input type='text' onChange={(e: React.FormEvent<HTMLInputElement>) => setInput(e.currentTarget.value)}></input>
      <input type='submit' onClick={handleSubmit}></input>
      <input type='text' value={output} readOnly></input>
    </div>
  );
}

export default App;
