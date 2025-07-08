import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../components/cart/CartItem";
// import { products } from '../data/db'
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import axios from "../service/api";
import { addProduct } from "../slice/addProduct.slice";
import MsgBox from "../components/msg";
import { io } from "socket.io-client";
import socket from "../utilities/socket.config.js";
import { toast } from "react-hot-toast";

const Cart = () => {
  const { selectedProduts } = useSelector((state) => state.product);
  const productPrice = selectedProduts.reduce((total, product) => {
    const productTotal = product.dish.price * product.quantity;
    return total + productTotal;
  }, 0);
  const { dishes } = useSelector((state) => state.dish);
  const [code, setCode] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const { table } = useSelector((state) => state.table);
  const [status, setStatus] = useState("");
  const [msg, setMgs] = useState("");

  let totalPrice =
    code && code.worked == false && code.discount
      ? productPrice - code.discount
      : productPrice; // Initialize as null instead of 0

  const compareCode = (code) => {
    fetch(`http://localhost:1234/api/promocode/code/${code}`)
      .then((res) => res.json())
      .then((data) => {
        setCode(data[0] || null); // Ensure it's an object or null
      })
      .catch(() => setCode(null)); // Set code to null on error
  };

  const f = new Intl.NumberFormat("es-sp");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderHandler = async () => {
    setIsLoading(true);

    const orderSchema = {
      restaurantId: localStorage.getItem("userId"),
      tableNumber: {
        id: table._id ? table._id : localStorage.getItem("tableId"),
        number: table.tableNumber,
      },
      items: selectedProduts,
      totalPrice,
      status: "Pending",
      promoCode: code && code._id ? code._id : "", // Ensure code._id is accessed safely
    };

    // try {
    //   const { data } = await axios.post("orders/create-order", orderSchema, {
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //   });

    //   if (data) {
    //     console.log(data);

    //     // Yangi buyurtma haqida Socket.io orqali xabar yuborish
    //     socket.emit("newOrder", data); // Yangi buyurtma ma'lumotlarini yuborish

    //     dispatch(addProduct([]));
    //     setMgs("Buyurtmangiz qabul qilindi");
    //     setStatus("success");
    //   }
    // } catch (error) {
    //   setMgs("Buyurtmangiz qabul qilinmadi");
    //   setStatus("failure");
    //   console.error("Error creating order:", error);
    // }
    socket.emit("send_order", orderSchema);
    console.log(orderSchema);

    socket.once("order_response", (order) => {
      if (order) {
        dispatch(addProduct([]));
        log;
        setIsLoading(false);
        navigate("/");
        toast.success("Buyurtmangiz yetkazildi");
      }
    });
  };

  useEffect(() => {
    return () => {
      socket.off("order_response"); // Cleanup listener on unmount
    };
  }, []);

  return (
    <div className="h-screen flex flex-col">
      {msg ? <MsgBox message={msg} status={status} /> : ""}
      <div className="sticky top-0 flex justify-center items-center bg-gradient-to-r from-[#8CD23C] to-[#417A00] rounded-br-[25px] py-3 text-white text-xl font-bold">
        <Link to="/" className="absolute left-4">
          <IoIosArrowBack />
        </Link>
        <p>&#8470; {table.tableNumber}</p>
      </div>
      <div className="grow pb-4">
        <p className="text-center text-xl py-4 px-2 font-bold">Buyırtpańız:</p>
        {selectedProduts.map((item) => (
          <div>
            {dishes
              .filter((c) => c._id == item.dish.id)
              .map((cart) => {
                return <CartItem data={cart} item={item} />;
              })}
          </div>
        ))}
      </div>
      <div className="sticky bottom-0 bg-[#EDF2F6] p-3 flex flex-col gap-4 rounded-tl-3xl w-full">
        <div className="flex items-center gap-2 rounded-[50px_0_100px_50px] bg-white p-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.51 3.66502C10.6976 3.45551 10.9272 3.28792 11.184 3.17319C11.4407 3.05845 11.7188 2.99915 12 2.99915C12.2812 2.99915 12.5592 3.05845 12.816 3.17319C13.0727 3.28792 13.3024 3.45551 13.49 3.66502L14.19 4.44702C14.39 4.67051 14.6378 4.84615 14.9149 4.96091C15.1921 5.07568 15.4915 5.12664 15.791 5.11002L16.841 5.05202C17.1218 5.03653 17.4028 5.08047 17.6655 5.18094C17.9282 5.28141 18.1668 5.43617 18.3656 5.63511C18.5644 5.83404 18.7191 6.07268 18.8194 6.33544C18.9198 6.59821 18.9636 6.87918 18.948 7.16002L18.89 8.20902C18.8735 8.50835 18.9245 8.80755 19.0393 9.0845C19.1541 9.36145 19.3296 9.60906 19.553 9.80902L20.335 10.509C20.5446 10.6966 20.7124 10.9263 20.8272 11.1832C20.942 11.44 21.0014 11.7182 21.0014 11.9995C21.0014 12.2809 20.942 12.559 20.8272 12.8159C20.7124 13.0727 20.5446 13.3024 20.335 13.49L19.553 14.19C19.3295 14.3901 19.1538 14.6378 19.0391 14.915C18.9243 15.1921 18.8733 15.4915 18.89 15.791L18.948 16.841C18.9634 17.1219 18.9195 17.4028 18.819 17.6655C18.7186 17.9282 18.5638 18.1668 18.3649 18.3657C18.1659 18.5645 17.9273 18.7191 17.6645 18.8195C17.4018 18.9198 17.1208 18.9636 16.84 18.948L15.791 18.89C15.4916 18.8735 15.1924 18.9246 14.9155 19.0393C14.6385 19.1541 14.3909 19.3297 14.191 19.553L13.491 20.335C13.3034 20.5447 13.0737 20.7124 12.8168 20.8273C12.56 20.9421 12.2818 21.0014 12.0005 21.0014C11.7191 21.0014 11.4409 20.9421 11.1841 20.8273C10.9273 20.7124 10.6976 20.5447 10.51 20.335L9.80997 19.553C9.6099 19.3295 9.36213 19.1539 9.085 19.0391C8.80786 18.9244 8.50846 18.8734 8.20896 18.89L7.15897 18.948C6.87812 18.9635 6.59717 18.9196 6.33445 18.8191C6.07174 18.7186 5.83317 18.5639 5.63433 18.3649C5.43549 18.166 5.28085 17.9274 5.1805 17.6646C5.08015 17.4018 5.03635 17.1209 5.05196 16.84L5.10997 15.791C5.12643 15.4917 5.0754 15.1925 4.96064 14.9155C4.84588 14.6386 4.67033 14.391 4.44696 14.191L3.66496 13.491C3.4553 13.3034 3.28756 13.0737 3.17273 12.8169C3.05789 12.56 2.99854 12.2819 2.99854 12.0005C2.99854 11.7192 3.05789 11.441 3.17273 11.1842C3.28756 10.9273 3.4553 10.6976 3.66496 10.51L4.44696 9.81002C4.67046 9.60996 4.84609 9.36218 4.96086 9.08505C5.07563 8.80791 5.12659 8.50851 5.10997 8.20902L5.05196 7.15902C5.03663 6.87825 5.08067 6.59741 5.18121 6.33482C5.28175 6.07222 5.43653 5.83378 5.63545 5.63505C5.83437 5.43632 6.07296 5.28177 6.33564 5.18148C6.59833 5.08119 6.87922 5.03741 7.15996 5.05302L8.20896 5.11102C8.5083 5.12748 8.8075 5.07645 9.08445 4.96169C9.3614 4.84693 9.60901 4.67138 9.80896 4.44802L10.51 3.66502Z"
              stroke="#707B81"
              strokeWidth="1.5"
            />
            <path
              d="M9.5 9.5H9.51V9.51H9.5V9.5ZM14.5 14.5H14.51V14.51H14.5V14.5Z"
              stroke="#707B81"
              strokeWidth="2.25"
              strokeLinejoin="round"
            />
            <path
              d="M15 9L9 15"
              stroke="#707B81"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <input
            type="text"
            className="grow outline-none"
            onChange={(e) => compareCode(e.target.value)}
            placeholder="Promokodtı usı maydanǵa jazıń"
          />
        </div>
        <ul className="font-bold">
          <li className="flex justify-between">
            <span>Summa:</span>
            <span className="bg-gradient-to-r from-[#8CD23C] to-[#417A00] bg-clip-text text-transparent">
              {f.format(productPrice)}
            </span>
          </li>
          <li className="flex justify-between">
            <span className="text-[#707B81]">Promokod:</span>
            <span className="bg-gradient-to-r from-[#8CD23C] to-[#417A00] bg-clip-text text-transparent opacity-70">
              {code?.worked == true
                ? "Bu Kod ishlatilgan"
                : f.format(code?.discount ? code?.discount : 0)}
            </span>
          </li>
          <li className="flex justify-between">
            <span>Jámi: </span>
            <span className="bg-gradient-to-r from-[#8CD23C] to-[#417A00] bg-clip-text text-transparent">
              <span className="bg-gradient-to-r from-[#8CD23C] to-[#417A00] bg-clip-text text-transparent">
                {f.format(totalPrice)}
              </span>
            </span>
          </li>
        </ul>
        <button
          onClick={() => orderHandler()}
          style={{
            pointerEvents: `${selectedProduts.length > 0 ? "all" : "none"}`,
          }}
          disabled={isLoading}
          className="bg-gradient-to-r from-[#8CD23C] to-[#417A00] rounded-full py-2 text-white font-semibold text-xl"
        >
          {!isLoading ? "Buyırıw" : "Jiberilmekte"}
        </button>
      </div>
    </div>
  );
};

export default Cart;
