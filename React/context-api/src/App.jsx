import React from 'react'
import UseContextProvider from './context/UseContextProvider'
import Login from './component/Login'
import Profile from './component/profile'

const App = () => {
  return (
   <UseContextProvider>
     <h1>hello</h1>
     <Login/>
     <Profile />
   </UseContextProvider>
  )
}

export default App