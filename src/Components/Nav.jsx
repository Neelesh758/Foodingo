import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from '../context/UserContext';
import food from '../Food';
import { useSelector } from 'react-redux';

function Nav() {
  let {input,setInput,cat,setCat} = useContext(dataContext)
  let {showCart,setShowCart} = useContext(dataContext)
  useEffect(()=>{
    let newListofFood = food.filter((item)=> item.food_Name.includes(input)||item.food_Name.toLowerCase().includes(input))
    setCat(newListofFood)
  },[input])
  let items = useSelector(state=>state.cart)
  console.log(items)
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8' >
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
        <MdFastfood className='text-green-500 w-[30px] h-[30px]' />
      </div>
        <form action="" className='w-[58%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]' onSubmit={(e)=>{e.preventDefault()}}>
          <IoSearchSharp className='text-green-500 w-[20px] h-[20px]'/>
          <input type="text" placeholder='Search Items ...'  className='w-[100%] outline-none text-[16px] md:text-[20px]' onChange={(e)=> setInput(e.target.value)} value={input}/>
        </form>
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center shadow-xl rounded-md relative cursor-pointer' onClick={()=>{
        setShowCart(true)
      }}>
        <span className='absolute top-0 right-2 text-green-500 font-bold text-[18px]'>{items.length}</span>
        <LuShoppingBag  className='text-green-500 w-[30px] h-[30px]'/>
      </div>
    </div>
  )
}

export default Nav