import { CiSearch } from "react-icons/ci"
import { hashtags, sortings } from "../data/db"
import Navbar from "../components/Navbar"
import { MdShoppingCart } from "react-icons/md"
import { Link } from "react-router-dom"
import ProductList from "../components/ProductList"
import { useState } from "react"

const Home = () => {
  const [clickedSortingItemIndex, setClickedSortingItemIndex] = useState(0)
  const [clickedHashtagItemIndex, setClickedHashtagItemIndex] = useState(null)
  return (
    <div className='bg-gradient-to-r from-[#8CD23C] to-[#417A00]'>
      <Navbar />
      <Link to='cart'>
        <div className="border-2 border-white size-16 text-white flex justify-center items-center rounded-full bg-gradient-to-r from-[#8CD23C]/20 to-[#417A00]/20 backdrop-blur-md fixed top-32 right-5">
          <MdShoppingCart size={25} />
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
          <p>"Birinshi qádemnen puldı tejeń: birinshi ret paydalanǵanıńızda, qálegen xizmetke 10% shegirme alıń! Biz benen birinshi ret paydalanıwıńız tek ǵana jaǵımlı bolıp qalmay, al paydalı da boladı!"</p>
        </div>
      </div>
      <div className="bg-[#F6F4F2] p-4">
        <label className="flex items-center gap-2 bg-white p-4 py-3 rounded-[50px_0_80px_50px]">
          <CiSearch />
          <input type="text" placeholder="Izlew" className="grow outline-none" />
        </label>
        <ul className="flex gap-4 overflow-scroll my-2 px-2">
          {
            sortings.map((item, index) => (
              <li onClick={() => setClickedSortingItemIndex(index)} key={index} className={`${clickedSortingItemIndex === index ? 'font-bold border-4 border-[#8CD23C] bg-gradient-to-r from-[#8CD23C] to-[#417A00] bg-clip-text text-transparent' : 'bg-gradient-to-r from-[#8CD23C] to-[#417A00] text-white'} my-2 px-6 py-2 flex items-center rounded-full shadow-[0_0_10px_#8CD23C]`}>
                {item}
              </li>
            ))
          }
        </ul>
        <div className="flex flex-wrap gap-4 gap-y-9 justify-between">
          <ProductList />
        </div>
      </div>
    </div>
  )
}

export default Home