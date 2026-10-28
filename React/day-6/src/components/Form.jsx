import React, { useRef, useState } from 'react'

const Form = () => {


    const [product, setProduct] = useState(null)

  const inpRef = useRef({});
  


const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(inpRef.current.productName.value)
    // console.log(inpRef.current.price.value);
    //  console.log(inpRef.current.image.value);


     let obj={
        pName:inpRef.current.productName.value,
        price:inpRef.current.price.value,
        category:inpRef.current.category.value,
        image:inpRef.current.image.value
     }
     setProduct(obj)
}



  return (
     <div className='w-80 bg-white h-[50vh]'>
     <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 rounded bg-white p-6'>
      <input
      ref={(e)=>{inpRef.current.productName=e}}
      
      className='p-2 border border-gray-400'
       type="text" placeholder='product-name' />
      <input
      ref={(e)=>{inpRef.current.price=e}}
       className='p-2 border border-gray-400'
       type="text" placeholder='price' />
      <span>Select Category</span>
      <select
      ref={(e)=>{inpRef.current.category=e}}
         className='p-2 border border-gray-400' >
        <option value="man">man</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="books">Books</option>
      </select>
      <input
        ref={(e)=>{inpRef.current.image=e}}
        className='p-2 border border-gray-400'
       type="text" placeholder='image' />
      <button type="submit" className='bg-blue-700 rounded text-white uppercase'>create</button>
     </form>
     {product && <h1>Product name: {product.pName}</h1>}
    </div>
  )
}

export default Form