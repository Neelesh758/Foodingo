import React, { useContext, useState } from "react";
import Nav from "../Components/Nav";
import { Catagories } from "../Catagories";
import Card from "../Components/Card";
import food from "../Food";
import { dataContext } from "../context/UserContext";
import { ImCross } from "react-icons/im";
import Card2 from "../Components/Card2";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
function Home() {
  let{cat,setCat,input,setInput,showCart,setShowCart}= useContext(dataContext)
  function filter(category){
    if(category=== "All"){
      setCat(food);
    }else{
      let newList = food.filter((item)=>
        item.food_Category === category
      )
      setCat(newList);
    }
  }
  let items = useSelector(state=>state.cart)
  let subTotal = items.reduce((total,item)=>total+item.qty*item.price,0)
  let deliveryFee = 20;
  let taxes = subTotal*0.5/100;
  let grandTotal = Math.floor(subTotal+deliveryFee+taxes)
  return (
    <div className="bg-slate-200 w-full h-[100%]">
      <Nav />
      {!input?<div className="flex justify-center items-center gap-6 w-[100%] flex-wrap">
        {Catagories.map((item)=>{
          return(
            <div className="w-[140px] h-[150px] bg-white flex flex-col items-center justify-center rounded-md text-[18px] font-semibold text-gray-600 shadow-md hover:bg-green-200 cursor-pointer transition-all duration-800" onClick={()=> filter(item.name)} >
            {item.image}
            {item.name}
          </div>
          )
        })}
      </div>:null}

      <div className="flex flex-wrap w-full gap-5 px-5 justify-center items-center pt-8 pb-8">
        {cat.length>1?
        cat.map((item)=>{
          return(
            <Card key={item.id} name={item.food_Name} price={item.food_Price} type={item.food_Type} img={item.food_Img} id={item.id} />
          )
        }):<div className="text-2xl flex justify-center items-center w-full h-full text-green-400 font-semibold">No Dish Found</div>
      }
        
      </div>
      <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 ${showCart?"translate-x-0":"translate-x-full"} transition-all duration-500 `}>
        <header className="w-[100%] flex justify-between">
          <span className="text-green-400 font-semibold">Order Items</span><ImCross className="text-green-400 font-semibold cursor-pointer hover:text-green-800 transition-all" onClick={()=>{
            setShowCart(false)
          }} />
        </header>
        {items.length>0?
        <>
        <div className="w-full mt-8 flex flex-col gap-5">
          {items.map((item)=>{
          return(
            <Card2 name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
          )
        })}
        </div>
        <div className="w-full border-t-2 border-gray-400 mt-7 flex flex-col gap-4 p-8 border-b-2">
          <div className="flex justify-between items-center w-full ">
            <span className="text-xl text-gray-600 font-semibold ">SubTotal</span>
            <span className="text-xl text-green-400 font-semibold">Rs {subTotal}/-</span>
          </div>
          <div className="flex justify-between items-center w-full ">
            <span className="text-xl text-gray-600 font-semibold ">Delivery Charge</span>
            <span className="text-xl text-green-400 font-semibold">Rs {deliveryFee}/-</span>
          </div>
          <div className="flex justify-between items-center w-full ">
            <span className="text-xl text-gray-600 font-semibold ">Taxes</span>
            <span className="text-xl text-green-400 font-semibold">Rs {taxes}/-</span>
          </div>
        </div>
        <div className="flex justify-between items-center w-full p-5">
            <span className="text-2xl text-gray-600 font-semibold ">Grand Total</span>
            <span className="text-2xl text-green-400 font-semibold">Rs {grandTotal}/-</span>
        </div>
        <button className='w-[100%]  bg-green-300 rounded-lg p-3 text-gray-700 font-bold hover:bg-green-500 cursor-pointer transition-all' onClick={()=>{toast.success("Order Placed... ")}}>Place Order</button>
        </>:<div className="w-full flex justify-center font-semibold text-green-400 pt-5 text-xl" >Your Cart is Empty</div>}
        
      </div>
    </div>
  );
}

export default Home;
