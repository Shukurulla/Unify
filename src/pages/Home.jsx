import { CiSearch } from "react-icons/ci"
import { hashtags, products } from "../data/db"
import Navbar from "../components/Navbar"
import { MdShoppingCart } from "react-icons/md"
import { Link } from "react-router-dom"
import { useContext, useState } from "react"
import Product from "../components/Product"
import { CartContext } from "../context/CartContext"

const Home = () => {
  const [clickedSortingItemIndex, setClickedSortingItemIndex] = useState(0)
  const [clickedHashtagItemIndex, setClickedHashtagItemIndex] = useState(null)
  const [categories, setCategories] = useState(['All'])
  const {cartItems} = useContext(CartContext)
  const [searchInputValue, setSearchInputValue] = useState('')

  products.map(item => {
    if (!categories.includes(item.category)) {
        setCategories([...categories, item.category])
    }
  })

  return (
    <div className='bg-gradient-to-r from-[#8CD23C] to-[#417A00]'>
      <Navbar />
      <Link to='cart'>
        <div className="z-10 border-2 border-white size-16 text-white flex justify-center items-center rounded-full bg-gradient-to-r from-[#8CD23C]/70 to-[#417A00]/70 backdrop-blur-md fixed top-32 right-5">
          <MdShoppingCart size={25} />
          <span className="border-2 border-white rounded-full size-6 text-xs flex items-center justify-center absolute bottom-0 right-0 bg-gradient-to-r from-[#8CD23C] to-[#417A00] backdrop-blur-md">{cartItems.length}</span>
        </div>
      </Link>
      <div>
        <ul className="flex gap-2 overflow-scroll p-4">
          {
            hashtags.map((hashtag, index) => (
              <li key={index} onClick={() => setClickedHashtagItemIndex(index)} className={`border-2 border-white p-2 px-4 rounded-full uppercase whitespace-nowrap text-sm ${clickedHashtagItemIndex === index ? 'bg-white font-bold' : 'text-white'}`}>#{hashtag}</li>
            ))
          }
        </ul>
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
                  {category !== 'All' && <p className="font-bold pb-2 pt-5">{category}</p>}
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