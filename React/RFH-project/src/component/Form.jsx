import { useForm } from "react-hook-form"

const Form = ({setUser,setToggle}) => {


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  })
   
  const formSubmit = (data) => {
    console.log(data)

    setUser((prev)=>[...prev,data]);
    reset();
    setToggle((prev)=>!prev);
  }

  return (
    <div className='flex flex-col gap-3'>
     <h1 className='flex justify-center item-center'> Create User</h1>
     <form
     onSubmit={handleSubmit(formSubmit)}
     
     className='w-60 flex flex-col bg-gray-300 gap-3 p-4 border-2 border-black'>
       <input
       {...register("name",{
        required:"name is required",
       })}
        className='p-2 rounded outline-0 border border-black' type="text" placeholder="Name" />
        {errors.name && <p className='text-red-500'>Name is required</p> }
       <input
       {...register("email",{
          required:"email is required",
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Enter a valid email",
          },
       })}
        className='p-2 rounded outline-0 border border-black' type="email" placeholder="Email" />
         {errors.email && <p className='text-red-500'>{errors.email.message}</p> }
       <input
    {...register("contact",{
          required:"Contact is required",
          minLength:{
            value:10,
            message :"mininum 10 digit are required"
          },
          maxLength: {
            value: 10,
            message: "Maximum 10 digits are allowed",
          },
    })}
        className='p-2 rounded outline-0 border border-black' type="tel" placeholder="Contact" />
         {errors.contact && <p className='text-red-500'>{errors.contact.message}</p> }
       <input
    {...register("image",{
          required:"image is required",
    })}
        className='p-2 rounded outline-0 border border-black' type="url"placeholder='image'/>
         {errors.image && <p className='text-red-500'>image is required</p> }
       <button className='p-2 bg-blue-800 text-white rounded' type="submit">Add User</button>
     </form>
    </div>
  )
}

export default Form