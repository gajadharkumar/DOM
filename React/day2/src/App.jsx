import React, { useState } from 'react'

const App = () => {
  
  const [count, setCount] = useState(10)

  return (
    <div>
      <h1>count is {count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={()=>setCount(count - 1)}>decrement</button>
      <button onClick={()=>setCount(1)}>reset</button>

    </div>
  )
}

export default App