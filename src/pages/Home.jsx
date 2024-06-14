import { CiSearch } from "react-icons/ci"
import { products } from "../data/db"
import Navbar from "../components/Navbar"
import { MdShoppingCart } from "react-icons/md"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import Product from "../components/Product"
import { CartContext } from "../context/cart/CartContext"
import { IoIosNotifications } from "react-icons/io"
import { GoPlus } from "react-icons/go"

const Home = () => {
  const [clickedSortingItemIndex, setClickedSortingItemIndex] = useState(0)
  const [categories, setCategories] = useState(['Hámmesi'])
  const {cartItems} = useContext(CartContext)
  const [searchInputValue, setSearchInputValue] = useState('')
  const [floatingButtonIsOpen, setFloatingButton] = useState(false)

  products.map(item => {
    if (!categories.includes(item.category)) {
        setCategories([...categories, item.category])
    }
  })


  const handleAnimation = (e) => {
    e.target.className = 'border'
  }


  return (
    <div className='bg-gradient-to-r from-[#8CD23C] to-[#417A00]'>
      <Navbar />
      <div className="z-10 fixed bottom-10 left-1/2 -translate-x-1/2">
        <button onClick={() => setFloatingButton(prev => !prev)} className={`border-2 border-white size-10 text-white flex justify-center items-center rounded-full bg-gradient-to-r from-[#8CD23C] to-[#417A00] opacity-70 backdrop-blur-md ease-in-out duration-300 ${floatingButtonIsOpen && 'opacity-100 scale-150 shadow-xl'}`}>
          <GoPlus className={`mx-auto text-2xl stroke-1 duration-300 ease ${floatingButtonIsOpen && 'rotate-45'}`} />
        </button>
        <Link to='waiters' className={`absolute bottom-40 left-1/2 -translate-x-1/2 transition scale-50 ease duration-300 delay-150 opacity-0 ${floatingButtonIsOpen ? 'visible scale-100 opacity-100' : 'invisible'}`}>
          <div className='shadow-xl border-2 border-white size-16 text-white flex justify-center items-center rounded-full bg-gradient-to-r from-[#8CD23C] to-[#417A00] backdrop-blur-md'>
            <IoIosNotifications size={30} />
          </div>
        </Link>
        <Link to='cart' className={`absolute bottom-20 left-1/2 -translate-x-1/2 transition scale-50 ease duration-300 delay-75 opacity-0 ${floatingButtonIsOpen ? 'visible scale-100 opacity-100' : 'invisible'}`}>
          <div className='shadow-xl border-2 border-white size-16 text-white flex justify-center items-center rounded-full bg-gradient-to-r from-[#8CD23C] to-[#417A00] backdrop-blur-md'>
            <MdShoppingCart size={25} />
            <span className="border-2 border-white rounded-full size-6 text-xs flex items-center justify-center absolute bottom-0 right-0 bg-gradient-to-r from-[#8CD23C] to-[#417A00] backdrop-blur-md">{cartItems.length}</span>
          </div>
        </Link>
      </div>
      <div>
        <div className="p-4 text-white">
          <p className="uppercase text-4xl">10% shegirme birinshi ret ushın</p>
          <p className="font-extralight">"Birinshi qádemnen puldı tejeń: birinshi ret paydalanǵanıńızda, qálegen xizmetke 10% shegirme alıń! Biz benen birinshi ret paydalanıwıńız tek ǵana jaǵımlı bolıp qalmay, al paydalı da boladı!"</p>
        </div>
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