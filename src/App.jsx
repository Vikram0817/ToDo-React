import { useState } from 'react'
import Title from './components/Title'
import Tasks from './components/Tasks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='h-screen'>
      <Title></Title>
      <Tasks></Tasks>
    </div>
  )
}

export default App
