import { useState } from 'react'
import Hero__container from './components/Hero__container'
import Video_present from './components/Video_present'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Hero__container />
      <Video_present />

    </div>
  )
}

export default App
