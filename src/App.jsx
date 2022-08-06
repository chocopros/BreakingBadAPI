import { useState } from 'react'
import Hero__container from './components/Hero__container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Hero__container />

    </div>
  )
}

export default App
