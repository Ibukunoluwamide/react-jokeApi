import { useState } from 'react'
import './App.css'
import JokesApi from './components/JokesApi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <JokesApi/>
    </>
  )
}

export default App
