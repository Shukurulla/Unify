import { useContext, useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { CartContext } from "../context/cart/CartContext";
import { BsCheck } from "react-icons/bs";
import { formatCurrency } from "../utilities/numberFormat";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../slice/addProduct.slice";
import CartItem from "./cart/CartItem";

const Product = ({ data }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { selectedProduts } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const addProducts = () => {
    if (!isChecked) {
      dispatch(
        addProduct([
          ...selectedProduts,
          {
            dish: { id: data._id, name: data.name, price: data.price },
            quantity: 1,
          },
        ])
      );
      console.log(selectedProduts.filter((c) => c.dish.id != data._id));
      setIsChecked(true);
    } else {
      dispatch(
        addProduct(selectedProduts.filter((c) => c.dish.id != data._id))
      );
      setIsChecked(false);
    }
  };

  return (
    <div className="grow relative p-4 bg-white rounded-[20px] flex flex-col items-center  shadow-[0_-4px_14px_0_#00000014]">
      <div className="size-28">
        <img
          className="mx-auto object-contain h-full"
          src={data.image}
          alt="Product image"
        />
      </div>
      <p className="font-semibold pt-2">{data.name}</p>
      <p className="bg-gradient-to-r from-[#8CD23C] to-[#417A00] bg-clip-text text-transparent font-semibold">
        {data.price}
      </p>
      <div className="absolute top-full -translate-y-1/2 rounded-full size-16 flex justify-center items-center wrapper">
        <div className="rounded-br-[20px] shadow-[4px_6px_0_0_#F6F4F2] size-5 absolute left-[-16px] top-[12px]"></div>
        <button
          onClick={() => addProducts()}
          className="z-[1] bg-gradient-to-r from-[#8CD23C] to-[#417A00] text-white rounded-full size-10 shadow-[0_0_12px_0_#77AC63]"
        >
          {isChecked ? (
            <BsCheck className="mx-auto text-2xl" />
          ) : (
            <GoPlus className="mx-auto text-2xl stroke-1" />
          )}
        </button>
        <div className="rounded-bl-[20px] shadow-[-4px_6px_0_0_#F6F4F2] size-5 absolute right-[-16px] top-[12px]"></div>
      </div>
    </div>
  );
};

export default Product;
