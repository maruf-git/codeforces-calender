import { useState } from 'react'
import './App.css'
import CodeforcesContests from './assets/components/codeforces-contests/CodeforcesContests'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-screen-xl mx-auto">
      <CodeforcesContests></CodeforcesContests>
    </div>
  )
}

export default App
