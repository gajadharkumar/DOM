import React from 'react'

const Navber = ({setToggle}) => {
  return (
    <div className='p-4 flex item-center bg-black justify-between text-white'>
       
           <img
           className='rounded-full'
           width="35px"
            src="https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg" alt="" />
       
        <div className='flex gap-6 font-semibold text-white' >
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
        </div>

            <button
            onClick={()=>{setToggle((prev)=> !prev)}}
             className='p-2 bg-blue-700 rounded'>Create user</button>
            
        
    
    </div>
  )
}

export default Navber