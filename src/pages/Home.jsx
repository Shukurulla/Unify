import { CiSearch } from "react-icons/ci";
import Navbar from "../components/Navbar";
import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Product from "../components/Product";
import { FaBellConcierge, FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/cart/CartItem";
import Loading from "../components/loading";
import RestaurantService from "../service/restauran.service.js";
import DishService from "../service/dish.service.js";
import CategoryService from "../service/category.service.js";

const Home = () => {
  const { categories } = useSelector((state) => state.category);
  const { dishes } = useSelector((state) => state.dish);
  const { isLoading } = useSelector((state) => state.restaurant);
  const { selectedProduts } = useSelector((state) => state.product);
  const [searchInputValue, setSearchInputValue] = useState("");
  const [floatingButtonIsOpen, setFloatingButton] = useState(false);
  const waitersRef = useRef();
  const cartRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    DishService.getDish(dispatch);
    CategoryService.getCategory(dispatch);
    RestaurantService.getRestaurant(dispatch, localStorage.getItem("userId"));
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="bg-gradient-to-r from-[#8CD23C] to-[#417A00]">
      <Navbar />
      <div className="z-10 fixed bottom-10 left-1/2 -translate-x-1/2">
        <button
          onClick={() => setFloatingButton((prev) => !prev)}
          className={`relative shadow-[0_0_12px_0_#77AC63] size-14 text-white flex justify-center items-center rounded-full bg-gradient-to-r from-[#8CD23C] to-[#417A00] backdrop-blur-md ease-in-out duration-300 ${
            floatingButtonIsOpen && "scale-150 shadow-xl"
          }`}
        >
          {/* <GoPlus className={`mx-auto text-2xl stroke-1 duration-300 ease ${floatingButtonIsOpen && 'rotate-45'}`} /> */}
          <FaCartShopping
            className={`absolute bottom-[45%] ${
              floatingButtonIsOpen ? "right-0 opacity-0" : "right-1/2"
            } transition-all`}
          />
          <div className="w-[2px] h-8 bg-white rounded-full rotate-45 absolute"></div>
          <div
            className={`w-[2px] h-8 bg-white rounded-full ${
              floatingButtonIsOpen ? "-rotate-45" : "rotate-45"
            } transition-all absolute`}
          ></div>
          <FaBellConcierge
            className={`absolute top-[45%] ${
              floatingButtonIsOpen ? "left-0 opacity-0" : "left-1/2"
            } transition-all`}
          />
        </button>
        <Link
          ref={waitersRef}
          to="waiters"
          className={`absolute bottom-40 left-1/2 -translate-x-1/2 transition ease duration-300 delay-150 opacity-0 ${
            floatingButtonIsOpen ? "scale-100 opacity-100" : "scale-50"
          }`}
        >
          <div className="shadow-xl border-2 border-white size-16 text-white flex justify-center items-center rounded-full bg-gradient-to-r from-[#8CD23C] to-[#417A00] backdrop-blur-md">
            <FaBellConcierge size={30} />
          </div>
        </Link>
        <Link
          ref={cartRef}
          to="cart"
          className={`absolute bottom-20 left-1/2 -translate-x-1/2 transition ease duration-300 delay-75 opacity-0 ${
            floatingButtonIsOpen ? "scale-100 opacity-100" : "scale-50"
          }`}
        >
          <div className="shadow-xl border-2 border-white size-16 text-white flex justify-center items-center rounded-full bg-gradient-to-r from-[#8CD23C] to-[#417A00] backdrop-blur-md">
            <MdShoppingCart size={25} />
            <span className="border-2 border-white rounded-full size-6 text-xs flex items-center justify-center absolute bottom-0 right-0 bg-gradient-to-r from-[#8CD23C] to-[#417A00] backdrop-blur-md">
              {selectedProduts.length}
            </span>
          </div>
        </Link>
      </div>

      <div className="bg-[#F6F4F2] p-4 rounded-tl-3xl pb-9">
        <label className="flex items-center gap-2 bg-white p-4 py-3 rounded-[50px_0_80px_50px]">
          <CiSearch />
          <input
            type="text"
            placeholder="Izlew"
            className="grow outline-none"
            value={searchInputValue}
            onChange={(e) => setSearchInputValue(e.target.value.toLowerCase())}
          />
        </label>
        {searchInputValue == ""
          ? categories.map((item) => (
              <div key={item._id} className="mt-[20px]">
                <h2 className="category">{item.name}</h2>
                <div className="row">
                  {dishes
                    .filter((c) =>
                      searchInputValue == ""
                        ? c.category.name == item.name
                        : c.name
                            .toLowerCase()
                            .slice(0, searchInputValue.length) ==
                          searchInputValue.toLowerCase()
                    )
                    .map((item) => (
                      <div className="col-lg-3 mt-4  col-md-4 col-sm-6 col-12">
                        <Product data={item} />
                      </div>
                    ))}
                </div>
              </div>
            ))
          : dishes
              .filter((c) =>
                searchInputValue == ""
                  ? c.category.name == item.name
                  : c.name.toLowerCase().slice(0, searchInputValue.length) ==
                    searchInputValue
              )
              .map((item) => (
                <div className="col-lg-3 mt-4  col-md-4 col-sm-6 col-12">
                  <Product data={item} />
                </div>
              ))}
      </div>
    </div>
  );
};

export default Home;
