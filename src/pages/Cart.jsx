import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../components/cart/CartItem'
// import { products } from '../data/db'
import { IoIosArrowBack } from 'react-icons/io'
import { CiDiscount1 } from 'react-icons/ci'
import useSWR from 'swr'
import { CartContext } from '../context/CartContext'
import { formatCurrency } from '../utilities/numberFormat'

const Cart = () => {
    const {cartItems} = useContext(CartContext);
  return (
    <div className='h-screen flex flex-col'>
        <div className='sticky top-0 flex justify-center items-center bg-gradient-to-r from-[#8CD23C] to-[#417A00] rounded-br-2xl py-4 text-white text-xl font-bold'>
            <Link to='/' className='absolute left-4'>
                <IoIosArrowBack />
            </Link>
            <p>&#8470; 19</p>
        </div>
        <div className='grow'>
            <p className='text-xl py-4 px-2 font-bold'>Buyırtpańız</p>
            {cartItems?.length ? (
                cartItems.map(product => (
                    <CartItem key={product.id} {...product} />
                ))
            ) : (
                <span>Cart is empty</span>
            )
            }
        </div>
        <div className='sticky bottom-0 bg-[#EDF2F6] p-4 flex flex-col rounded-tl-2xl w-full'>
            <div className='flex items-center gap-2 rounded-l-full rounded-br-full bg-white p-4'>
                <CiDiscount1 className='text-xl' />
                <input type="text" className='grow outline-none' placeholder='Promokodtı usı maydanǵa jazıń' />
            </div>
            <ul>
                <li className='flex justify-between'>
                    <span>Summa:</span>
                    <span>{formatCurrency(cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0))}</span>
                </li>
                <li className='flex justify-between'>
                    <span>Promokod:</span>
                    <span>0</span>
                </li>
                <li className='flex justify-between'>
                    <span>Shegirme:</span>
                    <span>0%</span>
                </li>
                <li className='flex justify-between'>
                    <span>Jámi:</span>
                    <span>0</span>
                </li>
            </ul>
            <button className='bg-gradient-to-r from-[#8CD23C] to-[#417A00] rounded-full py-3 text-white font-bold text-xl'>Buyırıw</button>
        </div>
    </div>
  )
}

export default Cart