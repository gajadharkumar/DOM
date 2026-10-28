import React, { useState } from 'react'

const Web = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  })
   const handleSubmit = (e)=>{
         setFormData({...formData ,[e.target.name]:e.target.value})}
  return (
    <div>
        <input
        name='name'
         onChange={handleSubmit}
        type="text" placeholder='Name' />
        <input 
        name='email' onChange={handleSubmit} type="text" placeholder='Email' />
        <input
        name='password'
         onChange={handleSubmit} type="text" placeholder='Password' />
        <button>submit</button>
        <h1>{formData.name}</h1>
    </div>
  )
}

export default Web