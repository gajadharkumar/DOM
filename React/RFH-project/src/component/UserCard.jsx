const UserCard = ({ user }) => {
  return (
    <div className=' p-4  w-55 border border-black flex flex-col gap-3 rounded'>

    <div className='h-60 w-60 '>
        <img
        className='h-full w-full object-cover'
         src={user.image} alt={user.name} />
    </div>
    <div className='flex flex-col gap-1'>
        <h1>
          {user.name}
        </h1>
        <p className='text-sm'>{user.email}</p>
        <p className='text-sm'>{user.contact}</p>
    </div>
    <div className='flex w-full justify-between gap-4'>
      <button  className='bg-blue-700 text-white p-3 rounded '>Update</button>
    <button  className='bg-yellow-700 text-white p-3 rounded '>Delete</button>
    </div>

    </div>
  )
}

export default UserCard