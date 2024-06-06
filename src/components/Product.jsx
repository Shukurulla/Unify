import React, { useContext, useEffect, useState } from 'react'
import { GoPlus } from 'react-icons/go'
import { CartContext } from '../context/CartContext'
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
    <div className='grow relative bg-white w-[40%] rounded-3xl flex flex-col items-center pb-8 p-4'>
        <div className='size-28'>
            <img className='mx-auto object-contain h-full' src={props.image} alt="Product image" />
        </div>
        <p>{props.name}</p>
        <p className='bg-gradient-to-r from-[#8CD23C] to-[#417A00] bg-clip-text text-transparent'>{formatCurrency(props.price)}</p>
        <div className='absolute top-full -translate-y-1/2 border-8 border-[#F6F4F2] rounded-full curved'>
          <button onClick={() => handleOrder(props.id)} className='bg-gradient-to-r from-[#8CD23C] to-[#417A00] text-white rounded-full size-10'>
            {
              isChecked ? (
                <BsCheck className='mx-auto text-2xl' />              
              ) : (
                <GoPlus className='mx-auto text-2xl stroke-1' />              
              )
            }
          </button>
        </div>
    </div>
  )
}

export default Product