import React, { useState } from 'react'

const App = () => {

  const [count, setCount] = useState(0)
  const [user, setUser] = useState(0)
  return (
 

    <div>
     <h1>count is{count} </h1>
     <h1>name is{user} </h1>
     <button onClick={()=>{
      setCount(count+1)
     }}>increment</button>
     <button onClick={()=>{
      user++
      setUser(user)
     }}>chamgeName</button>




    </div>
  )
}

export default App