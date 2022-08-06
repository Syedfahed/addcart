import React, { useState } from 'react'
import Data from '../Items.json'
export default function Products() {
 const [list, setlist] = useState(Data)
 
   const removecart=(e)=>{
    let val = e.target.getAttribute('removeitems')
    setlist(list.filter(e=>e.Name !== val))
    console.log("Cart is remove")
   }
   const additems = (e)=>{
    let val = e.target.getAttribute('additems')
    setlist(list.filter(e=>e.Name === val))
    console.log("Cart is Add")
    }
   
  return (
    <>
    <h1 className='center'>HOUSEHOLD ESSENTIALS</h1>
    <div className='flex-box'>
    { list.map((e)=>{
        return (
            <div key={e.id} className='box'>
        <div className='items'>
            <span>Name: {e.Name} </span>
            <span>Price: {e.Price} </span>
        </div>
        <div className='add-remove-btn'>
       <button additems={e.Name} onClick={additems} className='btn'>Add to the cart</button>
       <button removeitems={e.Name} onClick={removecart} className='btn'>Remove from cart</button>
       </div>
        
    </div>
    )
   
    })
    
} 
</div>
    </>
  )
}
