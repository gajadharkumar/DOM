import { useState } from 'react'
import Navber from './component/Navber'
import'./index.css'
import UserCard from './component/UserCard'
import Form from './component/Form'

const App = () => {

const [toggle ,setToggle] = useState(false)
 const [users, setUsers] = useState([])




  return (
    <div className='h-screen p-4 flex flex-col gap-4'>

      <Navber setToggle={setToggle} />


      {toggle ?(
          <div className='flex gap-4'>
              {users.map((elem, index)=>{
                return  <UserCard key={`${elem.email}-${index}`} user={elem} />;
              })}
      </div>
      ) : <div className='flex justify-center item-center'>
        <Form setUser={setUsers} setToggle={setToggle} />
      </div>
      }
    
     
    </div>
  )
}

export default App