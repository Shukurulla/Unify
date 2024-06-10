import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartItem from '../components/cart/CartItem'
// import { products } from '../data/db'
import { IoIosArrowBack } from 'react-icons/io'
import { CiDiscount1 } from 'react-icons/ci'
import useSWR from 'swr'
import { CartContext } from '../context/cart/CartContext'
import { formatCurrency } from '../utilities/numberFormat'

const Cart = () => {
    const {cartItems} = useContext(CartContext);

  return (
    <div className='h-screen flex flex-col'>
        <div className='sticky top-0 flex justify-center items-center bg-gradient-to-r from-[#8CD23C] to-[#417A00] rounded-br-[25px] py-4 text-white text-xl font-bold'>
            <Link to='/' className='absolute left-4'>
                <IoIosArrowBack />
            </Link>
            <p>&#8470; 19</p>
        </div>
        <div className='grow pb-4'>
            <p className='text-center text-xl py-4 px-2 font-bold'>Buyırtpańız:</p>
            {
                cartItems?.length ? (
                <div className='flex flex-col gap-5'>
                    {
                        cartItems.map(product => (
                            <CartItem key={product.id} {...product} />
                        ))
                    }
                </div>
                ) : (
                    <div className='flex justify-center'>
                        <span>Cart is empty.</span>
                    </div>
                )
            }
        </div>
        <div className='sticky bottom-0 bg-[#EDF2F6] p-4 flex flex-col gap-4 rounded-tl-3xl w-full'>
            <div className='flex items-center gap-2 rounded-[50px_0_100px_50px] bg-white p-4'>
                <CiDiscount1 className='text-xl' />
                <input type="text" className='grow outline-none' placeholder='Promokodtı usı maydanǵa jazıń' />
            </div>
            <ul className='font-bold'>
                <li className='flex justify-between'>
                    <span>Summa:</span>
                    <span className='bg-gradient-to-r from-[#8CD23C] to-[#417A00] bg-clip-text text-transparent'>{formatCurrency(cartItems?.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0))}</span>
                </li>
                <li className='flex justify-between'>
                    <span>Promokod:</span>
                    <span className='bg-gradient-to-r from-[#8CD23C] to-[#417A00] bg-clip-text text-transparent'>0</span>
                </li>
                <li className='flex justify-between'>
                    <span>Jámi:</span>
                    <span className='bg-gradient-to-r from-[#8CD23C] to-[#417A00] bg-clip-text text-transparent'>0</span>
                </li>
            </ul>
            <button className='bg-gradient-to-r from-[#8CD23C] to-[#417A00] rounded-full py-3 text-white font-bold text-xl'>Buyırıw</button>
        </div>
    </div>
  )
}

export default Cart