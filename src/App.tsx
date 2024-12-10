import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const doubleNumber = (num:number) => {
  console.log(`doubling ${num}`)
  return num*2};

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const doubleCount = doubleNumber(count);
  const doubleCount2 = doubleNumber(count2);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {doubleCount}
        <button onClick={() => setCount2((count2) => count2 + 1)}>
          count is {count2}
        </button>
        {doubleCount2}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
