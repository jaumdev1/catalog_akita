import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TreeComponent  from './components/TreeComponent/TreeComponent'
import './App.css'
import Message from './components/Message/Message'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Message/>
      <TreeComponent />
    </div>
  )
}

export default App
