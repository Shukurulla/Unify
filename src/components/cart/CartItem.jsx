import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../slice/addProduct.slice";

const CartItem = ({ data, item }) => {
  const { selectedProduts } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const addHandler = () => {
    const updatedProducts = selectedProduts
      .map((product) => {
        if (product.dish.id === item.dish.id) {
          // Increase quantity, but not exceed 15
          const newQuantity = Math.min(product.quantity + 1, 15);
          return {
            ...product,
            quantity: newQuantity,
          };
        }
        return product;
      })
      .filter((product) => product.quantity > 0); // Remove product if quantity is less than 1

    dispatch(addProduct(updatedProducts));
  };

  const decrementHandler = () => {
    const updatedProducts = selectedProduts
      .map((product) => {
        if (product.dish.id === item.dish.id) {
          const newQuantity = product.quantity - 1;
          return {
            ...product,
            quantity: newQuantity,
          };
        }
        return product;
      })
      .filter((product) => product.quantity > 0);

    dispatch(addProduct(updatedProducts));
  };

  return (
    <div className="flex justify-between items-center p-3 shadow-[0_0_12px_0_#00000014] rounded-2xl mx-4">
      <div className="flex items-center gap-4">
        <div className="size-[86px]">
          <img className="object-cover" src={`${data.image}`} />
        </div>
        <div>
          <p className="text-xl font-semibold">{data.name}</p>
          <p className="text-gray-500 font-bold">{data.category.name}</p>
          <p className="bg-gradient-to-r from-[#8CD23C] to-[#417A00] bg-clip-text text-transparent font-bold"></p>
        </div>
      </div>
      <div className="bg-[#EDF2F6] rounded-full p-1 flex flex-col items-center gap-4 font-semibold text-xl">
        <button
          className="bg-white rounded-full size-6 flex items-center justify-center"
          onClick={() => addHandler()}
        >
          <span className="bg-gradient-to-r from-[#8CD23C] to-[#417A00] bg-clip-text text-transparent">
            +
          </span>
        </button>
        <p className="bg-gradient-to-r from-[#8CD23C] to-[#417A00] bg-clip-text text-transparent">
          {item.quantity}
        </p>
        <button
          className="bg-white rounded-full size-6 flex items-center justify-center"
          onClick={() => decrementHandler()}
        >
          <span className="bg-gradient-to-r from-[#8CD23C] to-[#417A00] bg-clip-text text-transparent">
            -
          </span>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
