import React, { createContext, useState } from 'react'
import food from '../Food';
export const dataContext = createContext()
function UserContext({children}) {
  let [showCart,setShowCart] = useState(false)
  let [cat,setCat] = useState(food);
  let [input,setInput] = useState("")
  let data = {
input,
setInput,
cat,
setCat,
showCart,
setShowCart
  }
  return (
    <div>
      <dataContext.Provider value={data}>
        {children}
      </dataContext.Provider>
    </div>
  )
}

export default UserContext