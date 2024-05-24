import { CiSearch } from "react-icons/ci"
import { hashtags, sortings } from "../data/db"
import Navbar from "../components/Navbar"
import { MdShoppingCart } from "react-icons/md"
import { Link } from "react-router-dom"
import ProductList from "../components/ProductList"

const Home = () => {
  return (
    <div className='bg-gradient-to-r from-[#8CD23C] to-[#417A00]'>
      <Navbar />
      <Link to='cart'>
        <div className="border-2 border-white size-16 text-white flex justify-center items-center rounded-full bg-gradient-to-r from-[#8CD23C]/20 to-[#417A00]/20 backdrop-blur-md fixed top-10 right-5">
          <MdShoppingCart size={25} />
        </div>
      </Link>
      <div>
        <ul className="flex gap-2 overflow-scroll p-4">
          {
            hashtags.map((hashtag, index) => (
              <li key={index} className="text-white border-2 border-white p-2 px-4 rounded-full uppercase whitespace-nowrap">#{hashtag}</li>
            ))
          }
        </ul>
        <div className="p-4 text-white">
          <p className="uppercase text-4xl">10% shegirme birinshi ret ushın</p>
          <p>"Birinshi qádemnen puldı tejeń: birinshi ret paydalanǵanıńızda, qálegen xizmetke 10% shegirme alıń! Biz benen birinshi ret paydalanıwıńız tek ǵana jaǵımlı bolıp qalmay, al paydalı da boladı!"</p>
        </div>
      </div>
      <div className="bg-[#F6F4F2] p-2">
        <label className="flex items-center gap-2 bg-white p-4 rounded-l-full rounded-br-full">
          <CiSearch />
          <input type="text" placeholder="Izlew" className="grow" />
        </label>
        <ul className="flex gap-2 overflow-scroll my-4">
          {
            sortings.map((item, index) => (
              <li key={index} className="bg-gradient-to-r from-[#8CD23C] to-[#417A00] text-white px-6 py-2 rounded-full">
                {item}
              </li>
            ))
          }
        </ul>
        <div className="flex flex-wrap gap-4 gap-y-10">
          <ProductList />
        </div>
      </div>
    </div>
  )
}

export default Home