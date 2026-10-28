import React from 'react'

const App = () => {
  const [user, setUser] = useState(second)

  let handleClick=()=>{
    setUser("first")
    
  }
  return (
    <div>
    
<h1> hello</h1>
<h1>
  user is {user}
</h1>

     <button onClick={handleClick}></button>
    </div>
  )
}

export default App