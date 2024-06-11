import React, { useContext, useEffect, useState } from 'react'
import { GoPlus } from 'react-icons/go'
import { CartContext } from '../context/cart/CartContext'
import { BsCheck } from 'react-icons/bs'
import { formatCurrency } from '../utilities/numberFormat'

const Product = (props) => {
  const {cartItems, setCartItems} = useContext(CartContext)
  const [isChecked, setchecked] = useState(false)

  useEffect(() => {
    setchecked(cartItems ? cartItems.find(item => item.id === props.id) : false)
  }, [cartItems])

  const handleOrder = (id) => {
    setchecked(prev => !prev)
    if (isChecked) {
      setCartItems(cartItems?.filter(item => item.id !== id))
    } else {
      if (cartItems) {
        setCartItems([...cartItems, {...props, quantity: 1}])
      } else {
        setCartItems([{...props, quantity: 1}])
      }
    }
  }

  return (
    <div className='grow relative bg-white rounded-3xl flex flex-col items-center pb-8 p-4 shadow-[0_-7px_10px_0_#00000014]'>
        <div className='size-28'>
            <img className='mx-auto object-contain h-full' src={props.image} alt="Product image" />
        </div>
        <p className='font-semibold'>{props.name}</p>
        <p className='bg-gradient-to-r from-[#8CD23C] to-[#417A00] bg-clip-text text-transparent font-semibold'>{formatCurrency(props.price)}</p>
        <div className='absolute top-full -translate-y-1/2 rounded-full size-16 flex justify-center items-center wrapper'>
          <div className="rounded-br-[20px] shadow-[4px_6px_0_0_#F6F4F2] size-5 absolute left-[-16px] top-[12px]"></div>
          <button onClick={() => handleOrder(props.id)} className='z-[1] bg-gradient-to-r from-[#8CD23C] to-[#417A00] text-white rounded-full size-10 shadow-[0_0_12px_0_#77AC63]'>
            {
              isChecked ? (
                <BsCheck className='mx-auto text-2xl' />              
              ) : (
                <GoPlus className='mx-auto text-2xl stroke-1' />              
              )
            }
          </button>
          <div className="rounded-bl-[20px] shadow-[-4px_6px_0_0_#F6F4F2] size-5 absolute right-[-16px] top-[12px]"></div>
        </div>
    </div>
  )
}

export default Product