import React from 'react'
import { IoIosLeaf } from "react-icons/io";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';
function Card({id,name,price,img,type}) {
  let dispatch = useDispatch()
  return (
    <div className='w-[300px] h-[400px] bg-white p-3 flex flex-col gap-3 rounded-lg shadow-lg hover:border-2 border-green-300 transition-all' >
      <div className='w-[100%] h-[60%]'>
        <img src={img} alt={name} className='object-cover rounded-lg h-[100%] w-[100%]' />
      </div>
      <div className='text-2xl font-semibold'>
        <h3>{name}</h3>
      </div>
      <div className='flex justify-between items-center [w-100%]'>
        <h4 className='text-lg font-bold text-green-500'>{`Rs-${price}`}</h4>
        <div className='flex justify-center items-center text-green-500 text-md font-bold'>
        {type === "Veg" ? <IoIosLeaf /> : <GiChickenOven />} <span>{type}</span>
      </div>
      </div>
      <button className='w-[100%]  bg-green-300 rounded-lg p-3 text-gray-700 font-bold hover:bg-green-500 cursor-pointer transition-all' onClick={()=>{dispatch(AddItem({id:id, name:name ,image:img, price:price , qty:1}));toast.success("Food Added Successfully")}}>Add to Cart</button>
    </div>
  )
}

export default Card