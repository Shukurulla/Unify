import { CiSearch } from "react-icons/ci"
import { products } from "../data/db"
import Navbar from "../components/Navbar"
import { MdShoppingCart } from "react-icons/md"
import { Link } from "react-router-dom"
import { useContext, useEffect, useRef, useState } from "react"
import Product from "../components/Product"
import { CartContext } from "../context/cart/CartContext"
import { IoIosNotifications } from "react-icons/io"
import { GoPlus } from "react-icons/go"
import HeroImg from '../assets/hero-image.png'
import DiscountImg from '../assets/discount.png'

const Home = () => {
  const [clickedSortingItemIndex, setClickedSortingItemIndex] = useState(0)
  const [categories, setCategories] = useState(['Hámmesi'])
  const {cartItems} = useContext(CartContext)
  const [searchInputValue, setSearchInputValue] = useState('')
  const [floatingButtonIsOpen, setFloatingButton] = useState(false)
  const waitersRef = useRef()
  const cartRef = useRef()

  products.map(item => {
    if (!categories.includes(item.category)) {
        setCategories([...categories, item.category])
    }
  })

  useEffect(() => {
    if (floatingButtonIsOpen) {
      cartRef.current.classList.remove('invisible')
      waitersRef.current.classList.remove('invisible')
    } else {
      setTimeout(() => {
        cartRef.current.classList.add('invisible')
        waitersRef.current.classList.add('invisible')
      }, 300);
    }
  }, [floatingButtonIsOpen])


  return (
    <div className='bg-gradient-to-r from-[#8CD23C] to-[#417A00]'>
      <Navbar />
      <div className="z-10 fixed bottom-10 left-1/2 -translate-x-1/2">
        <button onClick={() => setFloatingButton(prev => !prev)} className={`border-2 border-white size-10 text-white flex justify-center items-center rounded-full bg-gradient-to-r from-[#8CD23C] to-[#417A00] backdrop-blur-md ease-in-out duration-300 ${floatingButtonIsOpen && 'scale-150 shadow-xl'}`}>
          <GoPlus className={`mx-auto text-2xl stroke-1 duration-300 ease ${floatingButtonIsOpen && 'rotate-45'}`} />
        </button>
        <Link ref={waitersRef} to='waiters' className={`absolute bottom-40 left-1/2 -translate-x-1/2 transition ease duration-300 delay-150 opacity-0 ${floatingButtonIsOpen ? 'scale-100 opacity-100' : 'scale-50'}`} >
          <div className='shadow-xl border-2 border-white size-16 text-white flex justify-center items-center rounded-full bg-gradient-to-r from-[#8CD23C] to-[#417A00] backdrop-blur-md'>
            <IoIosNotifications size={30} />
          </div>
        </Link>
        <Link ref={cartRef} to='cart' className={`absolute bottom-20 left-1/2 -translate-x-1/2 transition ease duration-300 delay-75 opacity-0 ${floatingButtonIsOpen ? 'scale-100 opacity-100' : 'scale-50'}`} >
          <div className='shadow-xl border-2 border-white size-16 text-white flex justify-center items-center rounded-full bg-gradient-to-r from-[#8CD23C] to-[#417A00] backdrop-blur-md'>
            <MdShoppingCart size={25} />
            <span className="border-2 border-white rounded-full size-6 text-xs flex items-center justify-center absolute bottom-0 right-0 bg-gradient-to-r from-[#8CD23C] to-[#417A00] backdrop-blur-md">{cartItems.length}</span>
          </div>
        </Link>
      </div>
      <div>
        <div className="p-4 text-white">
          <p className="uppercase text-2xl font-medium">Sizge jetkerip berilgen mazalı minutlar</p>
          <p className="text-sm">Bizlerdiń aspazımızdan sizdiń stolıńızǵa - muhabbat hám ǵamxorlıq penen</p>
        </div>
        <div className="relative">
          <div className="absolute w-32">
            <img src={DiscountImg} alt="Discount image" />
          </div>
          <img src={HeroImg} alt="Hero image" />
        </div>
        <svg className="w-full mb-4" width="6" height="24" viewBox="0 0 6 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 24L5.88675 19L0.113248 19L3 24ZM2.5 -2.18557e-08L2.5 19.5L3.5 19.5L3.5 2.18557e-08L2.5 -2.18557e-08Z" fill="white"/>
        </svg>
      </div>
      <div className="bg-[#F6F4F2] p-4">
        <label className="flex items-center gap-2 bg-white p-4 py-3 rounded-[50px_0_80px_50px]">
          <CiSearch />
          <input type="text" placeholder="Izlew" className="grow outline-none" value={searchInputValue} onChange={(e) => setSearchInputValue(e.target.value)} />
        </label>
        <ul className="flex gap-4 overflow-scroll my-2 px-2">
          {
            categories.map((category, index) => (
              <li onClick={() => setClickedSortingItemIndex(index)} key={category} className={`${searchInputValue !== '' ? 'bg-stone-400 opacity-50' : clickedSortingItemIndex === index ? 'font-bold border-4 border-[#8CD23C] bg-gradient-to-r from-[#8CD23C] to-[#417A00] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#8CD23C] to-[#417A00] text-white'} my-2 px-6 py-2 flex items-center rounded-full shadow-[0_0_10px_#8CD23C]`}>{category}</li>
            ))
          }
        </ul>
        <div>
          {
            searchInputValue !== '' ? (
              <div className="flex flex-wrap gap-4 gap-y-9 justify-between">
                {
                  products.filter(item => searchInputValue !== '' ? item.name.toLowerCase().includes(searchInputValue.toLowerCase()) : item).map(item => (
                    <Product key={item.name} {...item} />
                  ))
                }
              </div>
            ) : clickedSortingItemIndex ? (
              categories.filter(item => item === categories[clickedSortingItemIndex]).map(category => (
                <div key={category}>
                  <p className="font-bold pb-2 pt-5">{category}</p>
                  <div className="flex flex-wrap gap-4 gap-y-9 justify-between">
                    {
                      products.filter(product => product.category === category).map(item => (
                        <Product key={item.name} {...item} />
                      ))
                    }
                  </div>
                </div>
              ))
            ) : (
              categories.map(category => (
                <div key={category}>
                  {category !== 'Hámmesi' && <p className="font-bold pb-2 pt-5">{category}</p>}
                  <div className="flex flex-wrap gap-4 gap-y-9 justify-between">
                    {
                      products.filter(product => product.category === category).map(item => (
                        <Product key={item.name} {...item} />
                      ))
                    }
                  </div>
                </div>
              ))
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Home