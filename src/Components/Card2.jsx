import React from 'react'
import { IoTrashBin } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { DecrementQTY, IncrementQty, RemoveItem } from '../redux/cartSlice';
import { toast } from 'react-toastify';
function Card2({name,price,image,id,qty}) {
  let dispatch = useDispatch()
  return (
    <div className='w-[100%] h-[120px] shadow-lg flex justify-between p-2'>
      <div className='w-[60%] h-full p-2 flex gap-5'>
        <div className='w-[80%] h-full overflow-hidden rounded-lg '>
          <img src={image} alt={name}  className='object-cover' />
        </div>
        <div className='w-[20%] h-full flex flex-col gap-5'>
          <div className='text-lg text-gray-600 font-semibold'>{name}</div>
          <div className='w-[110px] h-[50px] flex bg-yellow-400 rounded-lg overflow-hidden shadow-lg font-semibold border-2 border-green-400'>
            <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200'onClick={()=>{qty>1?dispatch(DecrementQTY(id)):qty}} >-</button>
            <span className='w-[40%] bg-slate-300 flex justify-center items-center text-green-400'>{qty}</span>
            <button className='w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200' onClick={()=>{dispatch(IncrementQty(id))}}>+</button>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-start items-end gap-5'>
        <span className='text-xl font-semibold text-green-400'>{price}</span>
        <IoTrashBin className='w-[30px] h-[30px] text-red-600 cursor-pointer' onClick={()=>{dispatch(RemoveItem(id));toast.error("Item removed from cart");
}} />
      </div>
    </div>
  )
}

export default Card2